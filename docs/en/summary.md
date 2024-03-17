# Summary

## Summary of Design Principles

Here are the most important software design principles discussed in this book:

1. Complexity is incremental: you have to sweat the small stuff (see p. 11).
2. Working code isn’t enough (see p. 14).
3. Make continual small investments to improve system design (see p. 15).
4. Modules should be deep (see p. 23)
5. Interfaces should be designed to make the most common usage as simple as possible (see p. 27).
6. It’s more important for a module to have a simple interface than a simple implementation (see pp. 61, 74).
7. General-purpose modules are deeper (see p. 39).
8. Separate general-purpose and special-purpose code (see pp. 45, 68).
9. Different layers should have different abstractions (see p. 51).
10. Pull complexity downward (see p. 61).
11. Define errors out of existence (see p. 81).
12. Design it twice (see p. 91).
13. Comments should describe things that are not obvious from the code (see p. 101).
14. Software should be designed for ease of reading, not ease of writing (see p. 151).
15. The increments of software development should be abstractions, not features (see p. 156).
16. Separate what matters from what doesn’t matter and emphasize the things that matter (see p. 171).

## Summary of Red Flags

Here are a few of of the most important red flags discussed in this book. The presence of any of these symptoms in a system suggests that there is a problem with the system’s design:

- Shallow Module: the interface for a class or method isn’t much simpler than its implementation (see pp. 25, 110).
- Information Leakage: a design decision is reflected in multiple modules (see p. 31).
- Temporal Decomposition: the code structure is based on the order in which operations are executed, not on information hiding (see p. 32).
- Overexposure: An API forces callers to be aware of rarely used features in order to use commonly used features (see p. 36).
- Pass-Through Method: a method does almost nothing except pass its arguments to another method with a similar signature (see p. 52).
- Repetition: a nontrivial piece of code is repeated over and over (see p. 68).
- Special-General Mixture: special-purpose code is not cleanly separated from general purpose code (see p. 71).
- Conjoined Methods: two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other (see p. 75).
- Comment Repeats Code: all of the information in a comment is immediately obvious from the code next to the comment (see p. 104).
- Implementation Documentation Contaminates Interface: an interface comment describes implementation details not needed by users of the thing being documented (see p. 114).
- Vague Name: the name of a variable or method is so imprecise that it doesn’t convey much useful information (see p. 123).
- Hard to Pick Name: it is difficult to come up with a precise and intuitive name for an entity (see p. 125).
- Hard to Describe: in order to be complete, the documentation for a variable or method must be long. (see p. 133).
- Nonobvious Code: the behavior or meaning of a piece of code cannot be understood easily. (see p. 150).

## About the Author

John Ousterhout is the Bosack Lerner Professor of Computer Science at Stanford University. His current research focuses on new software stack layers to allow datacenter applications to take advantage of communication and storage technologies with microsecond-scale latencies. Ousterhout's prior positions include 14 years in industry, where he founded two companies (Scriptics and Electric Cloud), preceded by 14 years as Professor of Computer Science at U.C. Berkeley. He is the creator of the Tcl scripting language and is also well known for his work in distributed operating systems and storage systems. Ousterhout received a BS degree in Physics from Yale University and a PhD in Computer Science from Carnegie Mellon University. He is a member of the National Academy of Engineering and has received numerous awards, including the ACM Software System Award, the ACM Grace Murray Hopper Award, the National Science Foundation Presidential Young Investigator Award, and the U.C. Berkeley Distinguished Teaching Award.
