#!/usr/bin/env python3
"""將 docs/*.md（簡體）轉為 docs/zh-tw/*.md（台灣正體）。

兩段式流程：

  1. OpenCC `s2twp` 做字形轉換與基礎詞彙轉換。
     必須用官方 opencc 綁定並釘住版本（見 requirements.txt）：不同版本的字典
     會產生不同輸出，未釘版本則無法重現、diff 也無法審查。

  2. 套用 bin/tw-terms.tsv 規則表，補完 OpenCC 沒做到的台灣化、修掉它的誤轉與
     過度轉換。規則表**順序敏感**：例外規則必須排在通則之前，例如先把
     「測試通過」保護起來，才能安全地套用「通過 → 透過」。

已人工重譯的章節列在 bin/manual-chapters.txt，本腳本會跳過，不會覆蓋。

用法：
  python3 bin/zh-tw.py           # 生成 docs/zh-tw/*.md
  python3 bin/zh-tw.py --check   # 不寫檔，只檢查現有產物是否與生成結果一致（CI 用）
  python3 bin/zh-tw.py --stats   # 生成並回報每條規則的命中數（維護規則表時用）
"""

import os
import re
import sys

import opencc

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..'))
SRC_DIR = os.path.join(ROOT, 'docs')
DST_DIR = os.path.join(SRC_DIR, 'zh-tw')
RULES_FILE = os.path.join(HERE, 'tw-terms.tsv')
MANUAL_FILE = os.path.join(HERE, 'manual-chapters.txt')


def load_rules(path=RULES_FILE):
    """讀取規則表，回傳 [(kind, pattern, replacement, lineno)]，保持檔案順序。"""
    rules = []
    with open(path, encoding='utf-8') as f:
        for lineno, raw in enumerate(f, 1):
            line = raw.rstrip('\n')
            if not line.strip() or line.lstrip().startswith('#'):
                continue
            parts = line.split('\t')
            if len(parts) != 3:
                raise ValueError(
                    '%s:%d 欄位數應為 3（kind<TAB>pattern<TAB>replacement），實得 %d'
                    % (path, lineno, len(parts)))
            kind, pattern, replacement = parts
            if kind not in ('lit', 're'):
                raise ValueError('%s:%d kind 只能是 lit 或 re，實得 %r'
                                 % (path, lineno, kind))
            if kind == 're':
                try:
                    pattern = re.compile(pattern)
                except re.error as exc:
                    raise ValueError('%s:%d 正則語法錯誤：%s' % (path, lineno, exc))
            rules.append((kind, pattern, replacement, lineno))
    return rules


def load_manual(path=MANUAL_FILE):
    """讀取人工維護章節清單；這些檔案不由本腳本生成。"""
    if not os.path.exists(path):
        return set()
    names = set()
    with open(path, encoding='utf-8') as f:
        for raw in f:
            name = raw.split('#')[0].strip()
            if name:
                names.add(name)
    return names


def apply_rules(text, rules, counter=None):
    """依序套用規則表。counter 不為 None 時累計每條規則的命中數。"""
    for kind, pattern, replacement, lineno in rules:
        if kind == 'lit':
            hits = text.count(pattern)
            if hits:
                text = text.replace(pattern, replacement)
        else:
            text, hits = pattern.subn(replacement, text)
        if counter is not None:
            counter[lineno] = counter.get(lineno, 0) + hits
    return text


def convert_text(text, converter, rules, counter=None):
    """轉換單一檔案內容。逐行 rstrip 以保持與舊版產物一致的行尾行為。"""
    lines = [converter.convert(line.rstrip()) for line in text.split('\n')]
    out = '\n'.join(lines).replace('./figures', '../figures')
    return apply_rules(out, rules, counter)


def main(argv):
    check = '--check' in argv
    stats = '--stats' in argv
    unknown = [a for a in argv[1:] if a not in ('--check', '--stats')]
    if unknown:
        sys.exit('未知參數：%s\n%s' % (' '.join(unknown), __doc__))

    rules = load_rules()
    manual = load_manual()
    converter = opencc.OpenCC('s2twp.json')
    counter = {} if stats else None

    if not check:
        os.makedirs(DST_DIR, exist_ok=True)

    sources = sorted(f for f in os.listdir(SRC_DIR) if f.endswith('.md'))
    skipped, written, stale = [], [], []

    for name in sources:
        dst_path = os.path.join(DST_DIR, name)
        if name in manual:
            skipped.append(name)
            continue
        with open(os.path.join(SRC_DIR, name), encoding='utf-8') as f:
            result = convert_text(f.read(), converter, rules, counter)
        if check:
            current = None
            if os.path.exists(dst_path):
                with open(dst_path, encoding='utf-8') as f:
                    current = f.read()
            if current != result:
                stale.append(name)
        else:
            with open(dst_path, 'w', encoding='utf-8') as f:
                f.write(result)
            written.append(name)

    if stats:
        print('=== 規則命中數（bin/tw-terms.tsv 行號） ===')
        with open(RULES_FILE, encoding='utf-8') as f:
            rule_lines = f.read().split('\n')
        for _, _, _, lineno in rules:
            hits = counter.get(lineno, 0)
            flag = '  ' if hits else '!!'
            print('%s L%-4d %5d  %s' % (flag, lineno, hits, rule_lines[lineno - 1]))
        dead = [ln for _, _, _, ln in rules if not counter.get(ln)]
        if dead:
            print('\n命中 0 的規則共 %d 條（上方標 !!）：可能已失效或為預留。' % len(dead))

    if skipped:
        print('跳過 %d 個人工維護章節：%s' % (len(skipped), ', '.join(skipped)))

    if check:
        if stale:
            print('docs/zh-tw/ 與 docs/ 不同步，以下檔案需重新生成：')
            for name in stale:
                print('  - %s' % name)
            print('\n請執行：python3 bin/zh-tw.py')
            return 1
        print('docs/zh-tw/ 已與 docs/ 同步（檢查 %d 個檔案）' % (len(sources) - len(skipped)))
        return 0

    print('已生成 %d 個檔案至 docs/zh-tw/' % len(written))
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv))
