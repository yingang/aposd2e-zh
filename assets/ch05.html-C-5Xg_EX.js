import{_ as e,o as a,c as n,e as i}from"./app-C4oUZJI1.js";const t={},o=i('<h1 id="chapter-5-information-hiding-and-leakage" tabindex="-1"><a class="header-anchor" href="#chapter-5-information-hiding-and-leakage"><span>Chapter 5 Information Hiding (and Leakage)</span></a></h1><p>Chapter 4 argued that modules should be deep. This chapter, and the next few that follow, discuss techniques for creating deep modules.</p><h2 id="_5-1-information-hiding" tabindex="-1"><a class="header-anchor" href="#_5-1-information-hiding"><span>5.1 Information hiding</span></a></h2><h2 id="_5-2-information-leakage" tabindex="-1"><a class="header-anchor" href="#_5-2-information-leakage"><span>5.2 Information leakage</span></a></h2><h2 id="_5-3-temporal-decomposition" tabindex="-1"><a class="header-anchor" href="#_5-3-temporal-decomposition"><span>5.3 Temporal decomposition</span></a></h2><h2 id="_5-4-example-http-server" tabindex="-1"><a class="header-anchor" href="#_5-4-example-http-server"><span>5.4 Example: HTTP server</span></a></h2><h2 id="_5-5-example-too-many-classes" tabindex="-1"><a class="header-anchor" href="#_5-5-example-too-many-classes"><span>5.5 Example: too many classes</span></a></h2><h2 id="_5-6-example-http-parameter-handling" tabindex="-1"><a class="header-anchor" href="#_5-6-example-http-parameter-handling"><span>5.6 Example: HTTP parameter handling</span></a></h2><h2 id="_5-7-example-defaults-in-http-responses" tabindex="-1"><a class="header-anchor" href="#_5-7-example-defaults-in-http-responses"><span>5.7 Example: defaults in HTTP responses</span></a></h2><h2 id="_5-8-information-hiding-within-a-class" tabindex="-1"><a class="header-anchor" href="#_5-8-information-hiding-within-a-class"><span>5.8 Information hiding within a class</span></a></h2><h2 id="_5-9-taking-it-too-far" tabindex="-1"><a class="header-anchor" href="#_5-9-taking-it-too-far"><span>5.9 Taking it too far</span></a></h2><h2 id="_5-10-conclusion" tabindex="-1"><a class="header-anchor" href="#_5-10-conclusion"><span>5.10 Conclusion</span></a></h2><p>Information hiding and deep modules are closely related. If a module hides a lot of information, that tends to increase the amount of functionality provided by the module while also reducing its interface. This makes the module deeper. Conversely, if a module doesn’t hide much information, then either it doesn’t have much functionality, or it has a complex interface; either way, the module is shallow.</p><p>When decomposing a system into modules, try not to be influenced by the order in which operations will occur at runtime; that will lead you down the path of temporal decomposition, which will result in information leakage and shallow modules. Instead, think about the different pieces of knowledge that are needed to carry out the tasks of your application, and design each module to encapsulate one or a few of those pieces of knowledge. This will produce a clean and simple design with deep modules.</p><p>1David Parnas, “On the Criteria to be Used in Decomposing Systems into Modules,” Communications of the ACM, December 1972.</p>',15),l=[o];function s(r,h){return a(),n("div",null,l)}const p=e(t,[["render",s],["__file","ch05.html.vue"]]),c=JSON.parse('{"path":"/en/ch05.html","title":"Chapter 5 Information Hiding (and Leakage)","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"5.1 Information hiding","slug":"_5-1-information-hiding","link":"#_5-1-information-hiding","children":[]},{"level":2,"title":"5.2 Information leakage","slug":"_5-2-information-leakage","link":"#_5-2-information-leakage","children":[]},{"level":2,"title":"5.3 Temporal decomposition","slug":"_5-3-temporal-decomposition","link":"#_5-3-temporal-decomposition","children":[]},{"level":2,"title":"5.4 Example: HTTP server","slug":"_5-4-example-http-server","link":"#_5-4-example-http-server","children":[]},{"level":2,"title":"5.5 Example: too many classes","slug":"_5-5-example-too-many-classes","link":"#_5-5-example-too-many-classes","children":[]},{"level":2,"title":"5.6 Example: HTTP parameter handling","slug":"_5-6-example-http-parameter-handling","link":"#_5-6-example-http-parameter-handling","children":[]},{"level":2,"title":"5.7 Example: defaults in HTTP responses","slug":"_5-7-example-defaults-in-http-responses","link":"#_5-7-example-defaults-in-http-responses","children":[]},{"level":2,"title":"5.8 Information hiding within a class","slug":"_5-8-information-hiding-within-a-class","link":"#_5-8-information-hiding-within-a-class","children":[]},{"level":2,"title":"5.9 Taking it too far","slug":"_5-9-taking-it-too-far","link":"#_5-9-taking-it-too-far","children":[]},{"level":2,"title":"5.10 Conclusion","slug":"_5-10-conclusion","link":"#_5-10-conclusion","children":[]}],"git":{"updatedTime":1715075359000},"filePathRelative":"en/ch05.md"}');export{p as comp,c as data};