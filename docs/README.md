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
- [第 8 章 下沉复杂性](ch08.md)
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

原书第二版相对于第一版的内容变更不多，此翻译版本整体是在[第一版翻译](https://github.com/yingang/aposd-zh)的基础上增量更新而来，相关的历史请参见[第一版的翻译说明](https://github.com/yingang/aposd-zh/tree/main/docs#%E7%BF%BB%E8%AF%91%E8%AF%B4%E6%98%8E)。

第二版的主要变更如下（[原作者网站的说明](https://web.stanford.edu/~ouster/cgi-bin/book.php)）：
- 第 6 章（“通用的模块是更深的”）的内容有相对较多的更新（作者自述在第一版出版后，对选择通用设计的重要性有了更清晰的认识），同时也吸收了第一版中第 9.7 节和第 10.9 节的内容。
- 第 9 章和第 12 章增加了一些内容，主要对比了 Robert Martin 所著《代码整洁之道》中的设计哲学（作者自述在诸如方法长度和注释的角色等方面与对方的观点有显著的分歧）。
- 第 21 章（“决定什么是重要的”）是新增的章节，主要介绍好的软件设计如何将重要的事情和不重要的事情区分开，并更多关注在重要的事情上。

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
|pass-through|透传|用于“透传方法”、“透传变量”、“透传参数”等场景|
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
