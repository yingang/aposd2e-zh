# 总结

## 设计原则小结

> Here are the most important software design principles discussed in this book:

这些是本书中讨论的最重要的软件设计原则：

> 1. Complexity is incremental: you have to sweat the small stuff (see p. 11).
> 2. Working code isn’t enough (see p. 14).
> 3. Make continual small investments to improve system design (see p. 15).
> 4. Modules should be deep (see p. 23)
> 5. Interfaces should be designed to make the most common usage as simple as possible (see p. 27).
> 6. It’s more important for a module to have a simple interface than a simple implementation (see pp. 61, 74).
> 7. General-purpose modules are deeper (see p. 39).
> 8. Separate general-purpose and special-purpose code (see pp. 45, 68).
> 9. Different layers should have different abstractions (see p. 51).
> 10. Pull complexity downward (see p. 61).
> 11. Define errors out of existence (see p. 81).
> 12. Design it twice (see p. 91).
> 13. Comments should describe things that are not obvious from the code (see p. 101).
> 14. Software should be designed for ease of reading, not ease of writing (see p. 151).
> 15. The increments of software development should be abstractions, not features (see p. 156).
> 16. Separate what matters from what doesn’t matter and emphasize the things that matter (see p. 171).

1. 复杂性是增量产生的：您必须努力处理小事情（请参阅 [第 2.4 节](ch02.md)）。
2. 能工作的代码是不够的（请参阅 [第 3.2 节](ch03.md)）。
3. 持续进行小额投资以改善系统设计（请参阅 [第 3.3 节](ch03.md)）。
4. 模块应该是深的（请参阅 [第 4.4 节](ch04.md)）
5. 接口的设计应尽可能简化其最常见的用法（请参阅 [第 4.7 节](ch04.md)）。
6. 让模块的接口简单比让其实现简单更为重要（请参阅 [第 8 章](ch08.md) 和 [第 9.7 节](ch09.md)）。
7. 通用模块是更深的（请参阅 [第 6 章](ch06.md)）。
8. 分开通用代码和专用代码（请参阅 [第 6.6 节](ch06.md) 和 [第 9.4 节](ch09.md)）。
9. 不同的层级应具有不同的抽象（请参阅 [第 7 章](ch07.md)）。
10. 下沉复杂性（请参阅 [第 8 章](ch08.md)）。
11. 通过定义来规避错误（请参阅 [第 10.3 节](ch10.md)）。
12. 设计两次（请参阅 [第 11 章](ch11.md)）。
13. 注释应该描述代码中不明显的内容（请参阅 [第 13 章](ch13.md)）。
14. 软件应被设计成易于阅读而不是易于编写（请参阅 [第 18.2 节](ch18.md)）。
15. 软件开发的增量应该是抽象而不是功能（请参阅 [第 19.2 节](ch19.md)）。
16. 区分重要的和不重要的事情，并强调重要的事情（请参阅 [第 21 章](ch21.md)）。

## 危险信号小结

> Here are a few of of the most important red flags discussed in this book. The presence of any of these symptoms in a system suggests that there is a problem with the system’s design:

这些是本书中讨论的一些最重要的危险信号。系统中任何这些症状的存在都表明系统的设计存在问题：

> - Shallow Module: the interface for a class or method isn’t much simpler than its implementation (see pp. 25, 110).
> - Information Leakage: a design decision is reflected in multiple modules (see p. 31).
> - Temporal Decomposition: the code structure is based on the order in which operations are executed, not on information hiding (see p. 32).
> - Overexposure: An API forces callers to be aware of rarely used features in order to use commonly used features (see p. 36).
> - Pass-Through Method: a method does almost nothing except pass its arguments to another method with a similar signature (see p. 52).
> - Repetition: a nontrivial piece of code is repeated over and over (see p. 68).
> - Special-General Mixture: special-purpose code is not cleanly separated from general purpose code (see p. 71).
> - Conjoined Methods: two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other (see p. 75).
> - Comment Repeats Code: all of the information in a comment is immediately obvious from the code next to the comment (see p. 104).
> - Implementation Documentation Contaminates Interface: an interface comment describes implementation details not needed by users of the thing being documented (see p. 114).
> - Vague Name: the name of a variable or method is so imprecise that it doesn’t convey much useful information (see p. 123).
> - Hard to Pick Name: it is difficult to come up with a precise and intuitive name for an entity (see p. 125).
> - Hard to Describe: in order to be complete, the documentation for a variable or method must be long. (see p. 133).
> - Nonobvious Code: the behavior or meaning of a piece of code cannot be understood easily. (see p. 150).

- **浅模块**：类或方法的接口并不比其实现简单得多（请参阅 [第 4.5 节](ch04.md) 和 [第 13.5 节](ch13.md)）。
- **信息泄露**：设计决策反映在多个模块中（请参阅 [第 5.2 节](ch05.md)）。
- **时间分解**：代码结构基于执行操作的顺序，而不是基于信息隐藏的原则（请参阅 [第 5.3 节](ch05.md)）。
- **过度暴露**：API 强迫调用者在使用常用功能的时候还需要去了解那些很少使用的功能（请参阅 [第 5.7 节](ch05.md)）。
- **直通方法**：一种几乎不执行任何操作的方法，只是将其参数传递给具有相似签名的另一个方法（请参阅 [第 7.1 节](ch07.md)）。
- **重复**：一遍又一遍的重复代码（请参阅 [第 9.4 节](ch09.md)）。
- **通用专用混合体**：专用代码与通用代码没有干净地分开（请参阅 [第 9.5 节](ch09.md)）。
- **连体方法**：两个方法之间的依赖很多，以至于很难在不理解一个方法的实现的情况下理解另一个方法的实现（请参阅 [第 9.8 节](ch09.md)）。
- **注释重复了代码**：注释中的所有信息在旁边的代码里显而易见（请参阅 [第 13.2 节](ch13.md)）。
- **实现文档污染了接口**：接口注释描述了其用户不需要了解的实现细节（请参阅 [第 13.5 节](ch13.md)）。
- **模糊的名称**：变量或方法的名称过于不精确，以至于它不能传递太多有用的信息（请参阅 [第 14.3 节](ch14.md)）。
- **难以选取名称**：很难为实体提供一个精确而直观的名称（请参阅 [第 14.3 节](ch14.md)）。
- **难以描述**：为了得到完整的描述，变量或方法的文档必须很长（请参阅 [第 15.3 节](ch15.md)）。
- **非显而易见的代码**：一段代码的行为或含义不容易被理解（请参阅 [第 18.2 节](ch18.md)）。

## 关于作者

> John Ousterhout is the Bosack Lerner Professor of Computer Science at Stanford University. His current research focuses on new software stack layers to allow datacenter applications to take advantage of communication and storage technologies with microsecond-scale latencies. Ousterhout's prior positions include 14 years in industry, where he founded two companies (Scriptics and Electric Cloud), preceded by 14 years as Professor of Computer Science at U.C. Berkeley. He is the creator of the Tcl scripting language and is also well known for his work in distributed operating systems and storage systems. Ousterhout received a BS degree in Physics from Yale University and a PhD in Computer Science from Carnegie Mellon University. He is a member of the National Academy of Engineering and has received numerous awards, including the ACM Software System Award, the ACM Grace Murray Hopper Award, the National Science Foundation Presidential Young Investigator Award, and the U.C. Berkeley Distinguished Teaching Award.

John Ousterhout 是斯坦福大学的 Bosack Lerner 计算机科学教授。他当前的研究重点是新的软件堆栈层，以允许数据中心应用程序利用具有微秒级延迟的通信和存储技术。Ousterhout 之前的 14 年经历在工业界，并创办了 Scriptics 和 Electric Cloud 这两家公司，再之前的 14 年则是加州大学伯克利分校的计算机科学教授。他是 Tcl 脚本语言的创建者，并且以在分布式操作系统和存储系统中的工作而闻名。Ousterhout 在耶鲁大学获得了物理学学士学位，并在卡内基梅隆大学获得了计算机科学博士学位。他是美国国家工程院院士，并获得了无数奖项，包括 ACM 软件系统奖，ACM Grace Murray Hopper 奖，美国国家科学基金会总统年轻研究者奖和 UC Berkeley 杰出教学奖。
