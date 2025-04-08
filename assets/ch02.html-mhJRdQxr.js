import{_ as t,c as i,a as o,o as a}from"./app-W63b2ksF.js";const s={};function n(l,e){return a(),i("div",null,e[0]||(e[0]=[o('<h1 id="chapter-2-the-nature-of-complexity" tabindex="-1"><a class="header-anchor" href="#chapter-2-the-nature-of-complexity"><span>Chapter 2 The Nature of Complexity</span></a></h1><p>This book is about how to design software systems to minimize their complexity. The first step is to understand the enemy. Exactly what is “complexity”? How can you tell if a system is unnecessarily complex? What causes systems to become complex? This chapter will address those questions at a high level; subsequent chapters will show you how to recognize complexity at a lower level, in terms of specific structural features.</p><p>The ability to recognize complexity is a crucial design skill. It allows you to identify problems before you invest a lot of effort in them, and it allows you to make good choices among alternatives. It is easier to tell whether a design is simple than it is to create a simple design, but once you can recognize that a system is too complicated, you can use that ability to guide your design philosophy towards simplicity. If a design appears complicated, try a different approach and see if that is simpler. Over time, you will notice that certain techniques tend to result in simpler designs, while others correlate with complexity. This will allow you to produce simpler designs more quickly.</p><p>This chapter also lays out some basic assumptions that provide a foundation for the rest of the book. Later chapters take the material of this chapter as given and use it to justify a variety of refinements and conclusions.</p><h2 id="_2-1-complexity-defined" tabindex="-1"><a class="header-anchor" href="#_2-1-complexity-defined"><span>2.1 Complexity defined</span></a></h2><h2 id="_2-2-symptoms-of-complexity" tabindex="-1"><a class="header-anchor" href="#_2-2-symptoms-of-complexity"><span>2.2 Symptoms of complexity</span></a></h2><h2 id="_2-3-causes-of-complexity" tabindex="-1"><a class="header-anchor" href="#_2-3-causes-of-complexity"><span>2.3 Causes of complexity</span></a></h2><h2 id="_2-4-complexity-is-incremental" tabindex="-1"><a class="header-anchor" href="#_2-4-complexity-is-incremental"><span>2.4 Complexity is incremental</span></a></h2><h2 id="_2-5-conclusion" tabindex="-1"><a class="header-anchor" href="#_2-5-conclusion"><span>2.5 Conclusion</span></a></h2><p>Complexity comes from an accumulation of dependencies and obscurities. As complexity increases, it leads to change amplification, a high cognitive load, and unknown unknowns. As a result, it takes more code modifications to implement each new feature. In addition, developers spend more time acquiring enough information to make the change safely and, in the worst case, they can’t even find all the information they need. The bottom line is that complexity makes it difficult and risky to modify an existing code base.</p>',10)]))}const r=t(s,[["render",n]]),m=JSON.parse('{"path":"/en/ch02.html","title":"Chapter 2 The Nature of Complexity","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"2.1 Complexity defined","slug":"_2-1-complexity-defined","link":"#_2-1-complexity-defined","children":[]},{"level":2,"title":"2.2 Symptoms of complexity","slug":"_2-2-symptoms-of-complexity","link":"#_2-2-symptoms-of-complexity","children":[]},{"level":2,"title":"2.3 Causes of complexity","slug":"_2-3-causes-of-complexity","link":"#_2-3-causes-of-complexity","children":[]},{"level":2,"title":"2.4 Complexity is incremental","slug":"_2-4-complexity-is-incremental","link":"#_2-4-complexity-is-incremental","children":[]},{"level":2,"title":"2.5 Conclusion","slug":"_2-5-conclusion","link":"#_2-5-conclusion","children":[]}],"git":{"updatedTime":1744084640000,"contributors":[{"name":"yingang","username":"yingang","email":"1246410+yingang@users.noreply.github.com","commits":1,"url":"https://github.com/yingang"}],"changelog":[{"hash":"808ca72c9a72c5376872dd363b87914283fac24c","time":1744084640000,"email":"1246410+yingang@users.noreply.github.com","author":"Gang Yin","message":"update ci script"}]},"filePathRelative":"en/ch02.md"}');export{r as comp,m as data};
