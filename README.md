[![Build and Deploy](https://github.com/yingang/aposd2e-zh/actions/workflows/CI.yml/badge.svg)](https://github.com/yingang/aposd2e-zh/actions/workflows/CI.yml)
# 《软件设计的哲学》第二版 中文翻译

在线阅读：https://yingang.github.io/aposd2e-zh/

## 简介

<div style="inline">
  <img src="./docs/cover.jpeg" width="210px" height="280px" />
</div>

斯坦福教授、Tcl 语言发明者 John Ousterhout 的著作《A Philosophy of Software Design》，自出版以来，好评如潮。按照 IT 图书出版的惯例，如果冠名为“实践”，书中内容关注的是某项技术的细节和技巧；冠名为“艺术”，内容可能是记录一件优秀作品的设计过程和经验；而冠名为“哲学”，则是一些通用的原则和方法论，这些原则方法论串起来，能够形成一个体系。正如“知行合一”、“世界是由原子构成的”、“我思故我在”，这些耳熟能详的句子能够一定程度上代表背后的人物和思想。用一句话概括《A Philosophy of Software Design》，软件设计的核心在于降低复杂性。

## 目录

- [前言](docs/preface.md)
- [第 1 章 介绍](docs/ch01.md)
- [第 2 章 复杂性的本质](docs/ch02.md)
- [第 3 章 能工作的代码是不够的](docs/ch03.md)
- [第 4 章 模块应该是深的](docs/ch04.md)
- [第 5 章 信息隐藏和信息泄露](docs/ch05.md)
- [第 6 章 通用的模块是更深的](docs/ch06.md)
- [第 7 章 不同的层级，不同的抽象](docs/ch07.md)
- [第 8 章 下沉复杂性](docs/ch08.md)
- [第 9 章 在一起更好还是分开更好？](docs/ch09.md)
- [第 10 章 通过定义来规避错误](docs/ch10.md)
- [第 11 章 设计两次](docs/ch11.md)
- [第 12 章 不写注释的四个借口](docs/ch12.md)
- [第 13 章 注释应该描述代码中不明显的内容](docs/ch13.md)
- [第 14 章 选取名称](docs/ch14.md)
- [第 15 章 先写注释](docs/ch15.md)
- [第 16 章 修改现有的代码](docs/ch16.md)
- [第 17 章 一致性](docs/ch17.md)
- [第 18 章 代码应该是显而易见的](docs/ch18.md)
- [第 19 章 软件发展趋势](docs/ch19.md)
- [第 20 章 性能设计](docs/ch20.md)
- [第 21 章 决定什么是重要的](docs/ch21.md)
- [第 22 章 结论](docs/ch22.md)
- [总结](docs/summary.md)


## 本地开发 & 阅读

本项目基于 VuePress 进行开发，以提供比 Github Markdown 更佳的阅读体验

依赖于 [`node.js`][nodejs]、[`yarn`][yarn]、[`vuepress`][vuepress] 等环境

[nodejs]: https://nodejs.cn/
[yarn]: https://yarnpkg.com/
[vuepress]: https://v2.vuepress.vuejs.org/zh/

```sh
git clone https://github.com/yingang/aposd2e-zh.git
cd aposd-zh/
yarn install    # 安装 VuePress@next
yarn dev        # 编译并打开网页预览
```

## License

[MIT](./LICENSE)
