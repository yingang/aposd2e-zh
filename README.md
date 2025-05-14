[![Build and Deploy](https://github.com/yingang/aposd2e-zh/actions/workflows/CI.yml/badge.svg)](https://github.com/yingang/aposd2e-zh/actions/workflows/CI.yml)
# 《软件设计的哲学，第二版》 中文翻译

在线阅读：[简体中文](https://yingang.github.io/aposd2e-zh/) | [繁体中文](https://yingang.github.io/aposd2e-zh/zh-tw/)

## 简介

<div style="inline">
  <img src="./docs/figures/cover.jpeg" width="210px" height="280px" />
</div>

这是一本关于软件设计的书：如何将复杂的软件系统分解成模块（如类和方法），以便这些模块可以相对独立地实现。本书首先介绍了软件设计的基本问题，也就是对复杂性的管理。然后讨论了一些在完成软件设计的过程中涉及到的哲学问题，并提出了一系列可以在软件设计过程中应用的设计原则。本书还介绍了一些可用来识别设计问题的危险信号。你可以通过应用本书中的想法来减少大型软件系统的复杂性，以便能更快和更低成本地编写软件。

作者 John Ousterhout 是斯坦福大学的 Bosack Lerner 计算机科学教授。他当前的研究重点是新的软件堆栈层，以允许数据中心应用程序利用具有微秒级延迟的通信和存储技术。Ousterhout 之前的 14 年经历在工业界，并创办了 Scriptics 和 Electric Cloud 这两家公司，再之前的 14 年则是加州大学伯克利分校的计算机科学教授。他是 Tcl 脚本语言的创建者，并且以在分布式操作系统和存储系统中的工作而闻名。Ousterhout 在耶鲁大学获得了物理学学士学位，并在卡内基梅隆大学获得了计算机科学博士学位。他是美国国家工程院院士，并获得了诸多的奖项，包括美国计算机协会（ACM）的软件系统奖、ACM Grace Murray Hopper 奖、美国国家科学基金会（NSF）的总统青年研究奖和加州大学伯克利分校（UC Berkeley）的杰出教学奖。

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
- [第 13 章 注释应该描述代码中难以理解的内容](docs/ch13.md)
- [第 14 章 选取名称](docs/ch14.md)
- [第 15 章 先写注释](docs/ch15.md)
- [第 16 章 修改现有的代码](docs/ch16.md)
- [第 17 章 一致性](docs/ch17.md)
- [第 18 章 代码应该是易理解的](docs/ch18.md)
- [第 19 章 软件发展趋势](docs/ch19.md)
- [第 20 章 性能设计](docs/ch20.md)
- [第 21 章 决定什么是重要的](docs/ch21.md)
- [第 22 章 结论](docs/ch22.md)
- [总结](docs/summary.md)

## 翻译说明

详细请参阅[翻译说明](https://github.com/yingang/aposd2e-zh/tree/main/docs#%E7%BF%BB%E8%AF%91%E8%AF%B4%E6%98%8E)。

## 本地开发 & 阅读

本项目基于 VuePress 进行开发，以提供比 Github Markdown 更佳的阅读体验

依赖于 [`node.js`][nodejs]、[`yarn`][yarn]、[`vuepress`][vuepress] 等环境

[nodejs]: https://nodejs.cn/
[yarn]: https://yarnpkg.com/
[vuepress]: https://v2.vuepress.vuejs.org/zh/

```sh
git clone https://github.com/yingang/aposd2e-zh.git
cd aposd2e-zh/
yarn install    # 安装 VuePress@next
yarn dev        # 编译并打开网页预览
```

## License

[CC-BY 4.0](./LICENSE)
