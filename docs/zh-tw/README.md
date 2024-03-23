## 簡介

<img src="./cover.jpeg" style="width: 28%" />

這本書是關於軟體設計的：如何將複雜的軟體系統分解成模組（如類和方法），以便這些模組可以相對獨立地實現。首先，這本書介紹了軟體設計的基本問題，也就是對複雜性的管理。然後，它討論了關於如何處理軟體設計過程的一些哲學問題，並提出了一系列可以在軟體設計過程中應用的設計原則。本書還介紹了一些可用來識別設計問題的危險訊號。您可以透過應用本書中的想法來減少大型軟體系統的複雜性，以便您可以更快和更低成本地編寫軟體。

## 目錄

- [前言](preface.md)
- [第 1 章 介紹](ch01.md)
- [第 2 章 複雜性的本質](ch02.md)
- [第 3 章 能工作的程式碼是不夠的](ch03.md)
- [第 4 章 模組應該是深的](ch04.md)
- [第 5 章 資訊隱藏和資訊洩露](ch05.md)
- [第 6 章 通用的模組是更深的](ch06.md)
- [第 7 章 不同的層級，不同的抽象](ch07.md)
- [第 8 章 下沉複雜性](ch08.md)
- [第 9 章 在一起更好還是分開更好？](ch09.md)
- [第 10 章 透過定義來規避錯誤](ch10.md)
- [第 11 章 設計兩次](ch11.md)
- [第 12 章 不寫註釋的四個藉口](ch12.md)
- [第 13 章 註釋應該描述程式碼中不明顯的內容](ch13.md)
- [第 14 章 選取名稱](ch14.md)
- [第 15 章 先寫註釋](ch15.md)
- [第 16 章 修改現有的程式碼](ch16.md)
- [第 17 章 一致性](ch17.md)
- [第 18 章 程式碼應該是顯而易見的](ch18.md)
- [第 19 章 軟體發展趨勢](ch19.md)
- [第 20 章 效能設計](ch20.md)
- [第 21 章 決定什麼是重要的](ch21.md)
- [第 22 章 結論](ch22.md)
- [總結](summary.md)

## 翻譯說明

原書第二版相對於第一版的內容變更不多，此翻譯版本整體是在[第一版翻譯](https://github.com/yingang/aposd-zh)的基礎上增量更新而來，相關的歷史可參見[第一版的翻譯說明](https://github.com/yingang/aposd-zh/tree/main/docs#%E7%BF%BB%E8%AF%91%E8%AF%B4%E6%98%8E)，在我參與校訂之前， 主要的翻譯貢獻者包括 [gdut-yy](https://github.com/gdut-yy)、[liquid207](https://github.com/liquid207)、[wanghuanwei](https://github.com/wanghuanwei)、[luojiego](https://github.com/luojiego) 和 [BlackGlory](https://github.com/BlackGlory)。

第二版的主要變更如下（翻譯自[原作者網站的說明](https://web.stanford.edu/~ouster/cgi-bin/book.php)）：
- 第 6 章（“通用的模組是更深的”）的內容有相對較多的更新（作者自述在第一版出版後，對選擇通用設計的重要性有了更清晰的認識），同時也吸收了第一版中第 9.7 節和第 10.9 節的內容。
- 第 9 章和第 12 章增加了一些內容，主要對比了 Robert Martin 所著《程式碼整潔之道》中的設計哲學（作者自述在諸如方法長度和註釋的角色等方面與對方的觀點有顯著的分歧）。
- 第 21 章（“決定什麼是重要的”）是新增的章節，主要介紹好的軟體設計如何將重要的事情和不重要的事情區分開，並更多關注在重要的事情上。

如果您在閱讀過程中，發現有翻譯不當的地方，或者有其他建議，歡迎提交相應的 PR 或 Issue。

## 術語翻譯

翻譯是個比較困難的事情，除了個人水平有限，也有很多見仁見智的地方，所以這裡先列出一些術語的翻譯選擇和背後的考慮因素，以供參考，並至少在本書籍的翻譯過程中保持相對統一，也歡迎提 Issue 探討。

|英文|中文|說明|
|-|-|-|
|bug|缺陷 / 程式碼缺陷|沒有用“錯誤”是希望避免與 error 等術語的翻譯混淆|
|change|變更|針對程式碼的時候，更多使用“變更”而不是“改變”，但根據實際的上下文而定|
|change amplification|變更放大|同前|
|classitis|多類症||
|cognitive load|認知負荷||
|complexity|複雜性|沒有用“複雜度”|
|conjoined methods|連體方法||
|deep module / class|深模組 / 深類|沒有用“深層”是希望避免與 layer 和 level 等術語的翻譯混淆|
|define error out of existence|透過定義來規避錯誤||
|dependency / dependencies|依賴性 / 依賴項||
|dispatcher|分發器|沒有用“排程器”是希望避免與 scheduler 等術語的翻譯混淆|
|exception masking|異常遮蔽||
|exception aggregation|異常聚合||
|formal / informal|形式化的 / 非形式化的||
|GUI|圖形介面 / 圖形使用者介面||
|hierarchical|層次化的||
|information leakage|資訊洩露|沒有用“洩漏”|
|layer / level|層 / 層級||
|mindset|思維方式 / 思維||
|obscurity|模糊性/模糊項||
|pass-through|透傳|用於“透傳方法”、“透傳變數”、“透傳引數”等場景|
|public method / variables|公有方法 / 公有變數|沒有用“公開”是希望與 expose 和 exposure 等術語的翻譯混淆|
|red flag|危險訊號||
|selection|區域選擇 / 選擇的區域 / 所選區域|影象介面文字編譯器中的示例，直接翻譯成“選擇”會不太清晰|
|shallow module / class|淺模組 / 淺類|沒有用“淺層”，和 deep 的翻譯選擇是同樣的原因|
|strategic programming / approach|戰略式程式設計 / 戰略式方法||
|tactical programming / approach|戰術式程式設計 / 戰術式方法 ||
|taking it too far|做過頭了||
|unknown unknowns|未知的未知||
|waterfall method / model|瀑布式方法 / 瀑布式模型||
|web browser / server|Web 瀏覽器 / Web 伺服器|沒有用“網路”或“網頁”是希望避免與 network 和 web page 等術語的翻譯混淆，就保留英文了|