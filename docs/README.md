## 简介

<img src="./cover.jpeg" style="width: 28%" />

https://www.amazon.com/dp/173210221X

> This book addresses the topic of software design: how to decompose complex software systems into modules (such as classes and methods) that can be implemented relatively independently. The book first introduces the fundamental problem in software design, which is managing complexity. It then discusses philosophical issues about how to approach the software design process and it presents a collection of design principles to apply during software design. The book also introduces a set of red flags that identify design problems. You can apply the ideas in this book to minimize the complexity of large software systems, so that you can write software more quickly and cheaply.

这本书是关于软件设计的：如何将复杂的软件系统分解成模块（如类和方法），以便这些模块可以相对独立地实现。首先，这本书介绍了软件设计的基本问题，也就是对复杂性的管理。然后，它讨论了关于如何处理软件设计过程的一些哲学问题，并提出了一系列可以在软件设计过程中应用的设计原则。本书还介绍了一些可用来识别设计问题的危险信号。您可以通过应用本书中的想法来减少大型软件系统的复杂性，以便您可以更快和更低成本地编写软件。

## 目录

- [前言](preface.md)
- [第 1 章 介绍](ch01.md)
- [第 2 章 复杂性的本质](ch02.md)
- [第 3 章 能工作的代码是不够的](ch03.md)
- [第 4 章 模块应该是深的](ch04.md)
- [第 5 章 信息隐藏和信息泄露](ch05.md)
- [第 6 章 通用的模块是更深的](ch06.md)
- [第 7 章 不同的层级，不同的抽象](ch07.md)
- [第 8 章 降低复杂性](ch08.md)
- [第 9 章 在一起更好还是分开更好？](ch09.md)
- [第 10 章 通过定义来规避错误](ch10.md)
- [第 11 章 设计两次](ch11.md)
- [第 12 章 不写注释的四个借口](ch12.md)
- [第 13 章 注释应该描述代码中不明显的内容](ch13.md)
- [第 14 章 选取名称](ch14.md)
- [第 15 章 先写注释](ch15.md)
- [第 16 章 修改现有的代码](ch16.md)
- [第 17 章 一致性](ch17.md)
- [第 18 章 代码应该是显而易见的](ch18.md)
- [第 19 章 软件发展趋势](ch19.md)
- [第 20 章 性能设计](ch20.md)
- [第 21 章 决定什么是重要的](ch21.md)
- [第 22 章 结论](ch22.md)
- [总结](summary.md)

## 翻译说明

无意中看到这本书的相关介绍，也很快找到了 GitHub 上的民间翻译版，因为看到一些翻译不太恰当的地方，所以想着顺手提交修正下，然后找到其中 Star 数量比较多的主要是 [Cactus-proj](https://github.com/Cactus-proj/A-Philosophy-of-Software-Design-zh) 和 [Go7hic](https://github.com/Go7hic/A-Philosophy-of-Software-Design) 的，但两者的内容几乎完全一样，包括翻译有错误的地方也错得一样。从实质内容的提交历史来看，应该 Cactus-proj 是更早的提交者，这一点从各自的 Fock/Star 数量也能侧面印证。

这两个项目均有收到并处理一些内容修正的 PR，但即使是 Cactus-proj，最新的几个 PR 也处于长期未处理的状态，应该都已经暂停维护了，然后基于 Cactus-proj，包含内容修复最多的是 [luojiego](https://github.com/luojiego/A-Philosophy-of-Software-Design-zh) 的 Fock，于是就基于这个创建了自己的 [Fork](https://github.com/yingang/aposd-zh)。除了一边阅读一边校对，也摸索着更新了相关的部署脚本，部署到我自己的 [GitHub Pages](https://yingang.github.io/aposd-zh/) 上，可直接在线阅读。

从提交历史来看，[gdut-yy](https://github.com/gdut-yy) 应该是主要的翻译贡献者，[liquid207](https://github.com/liquid207)、[wanghuanwei](https://github.com/wanghuanwei)、[luojiego](https://github.com/luojiego) 和 [BlackGlory](https://github.com/BlackGlory) 也都贡献了比较多的翻译修正，[inkydragon](https://github.com/inkydragon) 则主要负责了 LaTeX 和 PDF 相关的工作以及格式规范、持续集成等方面的工作，不确定历史是否挖掘充分，所有提到未提到的贡献者，一并感谢！

如果您在阅读过程中，发现有翻译不当的地方，或者有其他建议，欢迎提交相应的 PR 或 Issue。

## 术语翻译

翻译是个比较困难的事情，除了个人水平有限，也有很多见仁见智的地方，所以这里先列出一些术语的翻译选择和背后的考虑因素，以供参考，并至少在本书籍的翻译过程中保持相对统一，也欢迎提 Issue 探讨。

|英文|中文|说明|
|-|-|-|
|bug|缺陷 / 代码缺陷|没有用“错误”是希望避免与 error 等术语的翻译混淆|
|change|变更|针对代码的时候，更多使用“变更”而不是“改变”，但根据实际的上下文而定|
|change amplification|变更放大|同前|
|classitis|多类症||
|cognitive load|认知负荷||
|complexity|复杂性|没有用“复杂度”|
|conjoined methods|连体方法||
|deep module / class|深模块 / 深类|没有用“深层”是希望避免与 layer 和 level 等术语的翻译混淆|
|define error out of existence|通过定义来规避错误||
|dependency / dependencies|依赖性 / 依赖项||
|dispatcher|分发器|没有用“调度器”是希望避免与 scheduler 等术语的翻译混淆|
|exception masking|异常屏蔽||
|exception aggregation|异常聚合||
|formal / informal|形式化的 / 非形式化的||
|GUI|图形界面 / 图形用户界面||
|hierarchical|层次化的||
|information leakage|信息泄露|没有用“泄漏”|
|layer / level|层 / 层级||
|mindset|思维方式 / 思维||
|obscurity|模糊性/模糊项||
|public method / variables|公有方法 / 公有变量|没有用“公开”是希望与 expose 和 exposure 等术语的翻译混淆|
|red flag|危险信号||
|selection|区域选择 / 选择的区域 / 所选区域|图像界面文本编译器中的示例，直接翻译成“选择”会不太清晰|
|shallow module / class|浅模块 / 浅类|没有用“浅层”，和 deep 的翻译选择是同样的原因|
|strategic programming / approach|战略式编程 / 战略式方法||
|tactical programming / approach|战术式编程 / 战术式方法 || 
|taking it too far|做过头了||
|unknown unknowns|未知的未知||
|waterfall method / model|瀑布式方法 / 瀑布式模型||
|web browser / server|Web 浏览器 / Web 服务器|没有用“网络”或“网页”是希望避免与 network 和 web page 等术语的翻译混淆，就保留英文了|
