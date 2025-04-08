import{_ as e,a as o}from"./00010-Dd1s-Du3.js";import{_ as a,c as i,a as d,b as t,e as l,d as s,w as r,r as u,o as g}from"./app-W63b2ksF.js";const m={};function h(f,n){const p=u("RouteLink");return g(),i("div",null,[n[9]||(n[9]=d('<h1 id="第-2-章-複雜性的本質" tabindex="-1"><a class="header-anchor" href="#第-2-章-複雜性的本質"><span>第 2 章 複雜性的本質</span></a></h1><p>這本書是關於如何設計軟體系統以最小化其複雜性。第一步是瞭解敵人。究竟什麼是“複雜性”？你如何判斷系統是否過於複雜？是什麼導致系統變得複雜？本章將在較高的層級上解決這些問題。後續章節將向你展示如何從較低的層級上根據特定的結構特徵來識別複雜性。</p><p>識別複雜性的能力是至關重要的設計技能。它使你可以先找出問題，然後再付出大量努力，並可以在不同的選擇中做出正確的選擇。判斷一個設計是否簡單比建立一個簡單的設計要容易得多，但是一旦你能認識到一個系統過於複雜，就可以使用該能力指導你的設計哲學走向簡單。如果設計看起來很複雜，請嘗試其他方法，看看是否更簡單。隨著時間的流逝，你會注意到某些技術往往會導致設計更簡單，而其他技術則與複雜性相關。這將使你更快地產出更簡單的設計。</p><p>本章還列出了一些基本假設，這些基本假設為本書的其餘部分奠定了基礎。後面的章節將採用本章的內容，並用其論證各種改進和結論。</p><h2 id="_2-1-複雜性的定義" tabindex="-1"><a class="header-anchor" href="#_2-1-複雜性的定義"><span>2.1 複雜性的定義</span></a></h2><p>出於本書的目的，我以實用的方式定義“複雜性”。<strong>複雜性是指那些與軟體系統相關的而且讓系統難以理解和修改的任何事物。</strong> 複雜性可以採取多種形式。例如，可能很難理解一段程式碼是如何工作的，可能需要花費很多精力才能實現較小的改進，或者可能不清楚必須修改系統的哪些部分才能進行改進，也可能是在不引入額外問題的情況下很難修復一個程式碼缺陷。如果一個軟體系統難以理解和修改，那它就是複雜的。如果很容易理解和修改，那它就是簡單的。</p><p>你還可以從成本和收益的角度來評估複雜性。在複雜的系統中，即使實施很小的改進都需要大量的工作。而在一個簡單的系統中，可以用更少的精力實現更大的改進。</p><p>複雜性是開發人員在嘗試實現特定目標時在特定時間點所經歷的。它不一定與系統的整體大小或功能有關。人們通常使用“複雜”一詞來描述具有複雜功能的大型系統，但是如果這樣的系統易於使用，那麼就本書而言，它並不複雜。當然，實際上幾乎所有大型複雜的軟體系統都很難使用，因此它們也符合我對複雜性的定義，但這不一定是事實。小型的功能不複雜的系統也可能非常複雜。</p><p>複雜性取決於最常見的活動。如果系統中有一些非常複雜的部分，但是幾乎不需要觸控這些部分，那麼它們對系統的整體複雜性不會有太大影響。為了用粗略的數學方法來表徵：</p><p><img src="'+e+'" alt=""></p><p>系統的總體複雜性（C）由每個部分的複雜性（cp）乘以開發人員在該部分上花費的時間（tp）加權。將複雜性隔離在一個永遠不會被看到的地方几乎和完全消除複雜性一樣好。</p><p>讀者比作者更容易理解複雜性。如果你編寫了一段程式碼，對你來說似乎很簡單，但是其他人認為它很複雜，那麼它就是複雜的。當你遇到這種情況時，有必要對其他開發人員進行調查，以找出為什麼這段程式碼對他們而言似乎很複雜；從你的觀點與他們的觀點之間的脫節中可能可以學到一些有趣的教訓。作為開發人員，你的工作不僅是建立你自己可以輕鬆使用的程式碼，而且還要建立其他人也可以輕鬆使用的程式碼。</p><h2 id="_2-2-複雜性的症狀" tabindex="-1"><a class="header-anchor" href="#_2-2-複雜性的症狀"><span>2.2 複雜性的症狀</span></a></h2><p>複雜性透過以下段落中描述的三種一般方式表現出來。這些表現形式中的每一種都使執行開發任務變得更加困難。</p><p><strong>變更放大</strong>：複雜性的第一個徵兆是，看似簡單的變更需要在許多不同地方進行程式碼修改。例如，考慮一個包含幾個頁面的網站，每個頁面都顯示一個帶有背景色的橫幅。在許多早期的網站中，顏色是在每個頁面上明確指定的，如圖 2.1（a）所示。為了更改此類網站的背景，開發人員可能必須手動修改每個現有頁面；對於擁有數千個頁面的大型網站而言，這幾乎是不可能的。幸運的是，現代網站使用的方法類似於圖 2.1（b），其中橫幅顏色一次在中心位置指定，並且所有各個頁面均引用該共享值。使用這種方法，可以透過一次修改來更改整個網站的標題顏色。</p><p><strong>認知負荷</strong>：複雜性的第二個症狀是認知負荷，這是指開發人員需要多少知識才能完成一項任務。較高的認知負荷意味著開發人員必須花更多的時間來學習所需的資訊，並且由於錯過了重要的東西而導致錯誤的風險也更大。例如，假設 C 語言中的一個函式分配了記憶體，返回了指向該記憶體的指標，並假定呼叫者將釋放該記憶體。這增加了使用該功能的開發人員的認知負荷。如果開發人員無法釋放記憶體，則會發生記憶體洩漏。如果可以對系統進行重組，以使呼叫者不必擔心釋放記憶體（分配記憶體的同一模組也負責釋放記憶體），它將減少認知負荷。（認知負荷出現在很多方面，例如有很多方法的API、全域性變數、不一致和模組間的依賴）</p><p>系統設計人員有時會假設可以透過程式碼行來衡量複雜性。他們認為，如果一個實現比另一個實現短，那麼它必須更簡單；如果只需要幾行程式碼就可以進行更改，那麼更改必須很容易。但是，這種觀點忽略了與認知負荷相關的成本。我已經看到了只需要幾行程式碼就能編寫應用程式的框架，但是要弄清楚這些行是什麼極其困難。<strong>有時，需要更多程式碼行的方法實際上更簡單，因為它減少了認知負荷。</strong></p><p><img src="'+o+'" alt=""></p><p>圖 2.1：網站中的每個頁面都顯示一個彩色橫幅。在（a）中，橫幅的背景色在每個頁面中都明確指定。在（b）中，共享變數儲存背景色，並且每個頁面都引用該變數。在（c）中，某些頁面會顯示其他用於強調的顏色，即橫幅背景顏色的暗色；如果背景顏色改變，則強調顏色也必須改變。</p><p><strong>未知的未知</strong>：複雜性的第三個症狀是，必須修改哪些程式碼才能完成任務，或者開發人員必須獲得哪些資訊才能成功地執行任務，這些都是不明顯的。圖 2.1(c)說明了這個問題。網站使用一箇中心變數來確定橫幅的背景顏色，所以它看起來很容易改變。但是，一些網頁使用較暗的背景色來強調，並且在各個頁面中明確指定了較暗的顏色。如果背景顏色改變，那麼強調的顏色必須改變以匹配。不幸的是，開發人員不太可能意識到這一點，所以他們可能會更改中心變數 <code>bannerBg</code> 而不更新強調顏色。即使開發人員意識到這個問題，也不清楚哪些頁面使用了強調色，因此開發人員可能必須搜尋網站中的每個頁面。</p><p>在複雜性的三種表現形式中，未知的未知是最糟糕的。未知的未知意味著你需要知道一些事情，但是你沒有辦法找到它是什麼，甚至不知道是否存在問題。直到你的修改導致了程式碼缺陷之前，你都不會發現它。變更放大是令人惱火的，但是隻要清楚哪些程式碼需要修改，一旦更改完成，系統就會工作。同樣，高的認知負荷會增加變更的成本，但如果明確要閱讀哪些資訊，變更仍然可能是正確的。對於未知的未知，不清楚該做什麼，或者提出的解決方案是否有效。唯一確定的方法是讀取系統中的每一行程式碼，這對於任何大小的系統都是不可能的。這甚至可能還不夠，因為更改還可能依賴於一個從未記錄的細微設計決策。</p>',21)),t("p",null,[n[1]||(n[1]=l("良好設計的最重要目標之一就是使系統容易理解，這與高認知負荷和未知的未知相反。在這樣的系統中，開發人員可以快速瞭解現有程式碼的工作方式以及進行更改所需的內容，並可以在不費力思考的情況下快速猜測要做什麼，同時又可以確信該猜測是正確的。")),s(p,{to:"/zh-tw/ch18.html"},{default:r(()=>n[0]||(n[0]=[l("第 18 章")])),_:1}),n[2]||(n[2]=l("討論了使程式碼更容易理解的技術。"))]),n[10]||(n[10]=t("h2",{id:"_2-3-複雜性的原因",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-3-複雜性的原因"},[t("span",null,"2.3 複雜性的原因")])],-1)),n[11]||(n[11]=t("p",null,"既然你已經瞭解了複雜性在較高層級的症狀以及為什麼複雜性會使軟體開發變得困難，那麼下一步就是了解導致複雜性的原因，以便我們能設計系統來避免這些問題。複雜性是由兩件事引起的：依賴性和模糊性。本節從較高層級討論這些因素。隨後的章節將討論它們與較低層級的設計決策之間的關係。",-1)),n[12]||(n[12]=t("p",null,"就本書而言，當無法孤立地理解和修改給定的一段程式碼時，便存在依賴關係。該程式碼以某種方式與其他程式碼相關，如果更改了給定程式碼，則必須考慮和/或修改其他程式碼。在圖 2.1（a）的網站示例中，背景色在所有頁面之間建立了依賴關係。所有頁面都必須具有相同的背景，因此，如果更改一頁的背景，則必須更改所有背景。依賴關係的另一個示例發生在網路協議中。通常，協議的傳送方和接收方有單獨的程式碼，但是它們必須分別符合協議。更改傳送方的程式碼幾乎總是需要在接收方進行相應的更改，反之亦然。方法的簽名建立了方法實現方和方法呼叫方之間的依賴關係：如果向方法添加了一個新引數，則必須修改呼叫該方法的程式碼以指定該引數。",-1)),n[13]||(n[13]=t("p",null,"依賴關係是軟體的基本組成部分，不能完全消除。實際上，我們在軟體設計過程中有意引入了依賴性。每次編寫新類時，都會圍繞該類的 API 建立依賴關係。但是，軟體設計的目標之一是減少依賴關係的數量，並使依賴關係保持儘可能簡單和明顯。",-1)),n[14]||(n[14]=t("p",null,[l("考慮網站示例。在每個頁面分別指定背景的舊網站中，所有網頁都是相互依賴的。新的網站透過在中心位置指定背景色並提供一個 API，供各個頁面在呈現它們時檢索該顏色，從而解決了該問題。新的網站消除了頁面之間的依賴關係，但是它圍繞 API 建立了一個新的依賴關係以檢索背景色。幸運的是，新的依賴性更加明顯：很顯然，每個單獨的網頁都取決於 "),t("code",null,"bannerBg"),l(" 顏色，並且開發人員可以透過搜尋其名稱輕鬆找到使用該變數的所有位置。此外，編譯器還有助於管理 API 依賴性：如果共享變數的名稱發生變化，任何仍使用舊名稱的程式碼都將發生編譯錯誤。新的網站用一種更簡單、更明顯的方式代替了一種不明顯且難以管理的依賴性。")],-1)),n[15]||(n[15]=t("p",null,"複雜性的第二個原因是模糊性。當重要的資訊不明顯時，就會產生模糊性。一個簡單的例子是一個變數名，它是如此的通用，以至於它沒有攜帶太多有用的資訊(例如，時間)。或者，一個變數的文件可能沒有指定它的單位，所以找到它的惟一方法是掃描程式碼，查詢使用該變數的位置。模糊性常常與依賴項相關聯，在這種情況下，依賴項的存在並不明顯。例如，如果向系統添加了一個新的錯誤狀態，可能需要向一個包含每個狀態的字串訊息的表新增一個條目，但是對於檢視狀態宣告的程式設計師來說，訊息表的存在可能並不明顯。不一致性也是造成模糊性的一個主要原因：如果同一個變數名用於兩個不同的目的，那麼開發人員就無法清楚地知道某個特定變數的目的是什麼。",-1)),t("p",null,[n[4]||(n[4]=l("在許多情況下，模糊性來源於文件的不足。")),s(p,{to:"/zh-tw/ch13.html"},{default:r(()=>n[3]||(n[3]=[l("第 13 章")])),_:1}),n[5]||(n[5]=l("討論了這個主題。但是，模糊性也是設計問題。如果系統設計簡潔明瞭，則所需的文件將更少。對大量文件的需求通常是表明設計不正確的危險訊號。減少模糊性的最佳方法是簡化系統設計。"))]),n[16]||(n[16]=t("p",null,"依賴性和模糊性共同構成了第 2.2 節中描述的三種複雜性表現。依賴性導致變更放大和高認知負荷。模糊性會產生未知的未知，還會增加認知負荷。如果我們找到最小化依賴性和模糊性的設計技術，那麼我們就可以降低軟體的複雜性。",-1)),n[17]||(n[17]=t("h2",{id:"_2-4-複雜性是增量產生的",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-4-複雜性是增量產生的"},[t("span",null,"2.4 複雜性是增量產生的")])],-1)),n[18]||(n[18]=t("p",null,"複雜性不是由單個災難性錯誤引起的；它堆積自許多小塊。單個依賴項或模糊項本身不太可能顯著影響軟體系統的可維護性。之所以會出現複雜性，是因為隨著時間的流逝，成千上萬的小依賴項和模糊項逐漸形成。最終，這些小問題太多了，以至於對系統的每次更改都會受到其中幾個問題的影響。",-1)),t("p",null,[n[7]||(n[7]=l("複雜性的增量本質使其難以控制。可以很容易地說服自己，當前更改所帶來的一點點複雜性沒什麼大不了的。但是，如果每個開發人員對每種更改都採用這種方法，那麼複雜性就會迅速累積。一旦積累了複雜性，就很難消除它，因為修復單個依賴項或模糊項本身不會產生很大的變化。為了減緩複雜性的增長，你必須採用")),s(p,{to:"/zh-tw/ch03.html"},{default:r(()=>n[6]||(n[6]=[l("第 3 章")])),_:1}),n[8]||(n[8]=l("中討論的“零容忍”理念。"))]),n[19]||(n[19]=t("h2",{id:"_2-5-結論",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-5-結論"},[t("span",null,"2.5 結論")])],-1)),n[20]||(n[20]=t("p",null,"複雜性來自於依賴性和模糊性的積累。隨著複雜性的增加，它會導致變更放大、高認知負荷和未知的未知。結果，需要更多的程式碼修改才能實現每個新功能。此外，開發人員花費更多時間獲取足夠的資訊以安全地進行更改，在最壞的情況下，他們甚至找不到所需的所有資訊。最重要的是，複雜性使得修改現有程式碼庫變得困難且危險。",-1))])}const k=a(m,[["render",h]]),v=JSON.parse('{"path":"/zh-tw/ch02.html","title":"第 2 章 複雜性的本質","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"2.1 複雜性的定義","slug":"_2-1-複雜性的定義","link":"#_2-1-複雜性的定義","children":[]},{"level":2,"title":"2.2 複雜性的症狀","slug":"_2-2-複雜性的症狀","link":"#_2-2-複雜性的症狀","children":[]},{"level":2,"title":"2.3 複雜性的原因","slug":"_2-3-複雜性的原因","link":"#_2-3-複雜性的原因","children":[]},{"level":2,"title":"2.4 複雜性是增量產生的","slug":"_2-4-複雜性是增量產生的","link":"#_2-4-複雜性是增量產生的","children":[]},{"level":2,"title":"2.5 結論","slug":"_2-5-結論","link":"#_2-5-結論","children":[]}],"git":{"updatedTime":1744084640000,"contributors":[{"name":"yingang","username":"yingang","email":"1246410+yingang@users.noreply.github.com","commits":1,"url":"https://github.com/yingang"}],"changelog":[{"hash":"808ca72c9a72c5376872dd363b87914283fac24c","time":1744084640000,"email":"1246410+yingang@users.noreply.github.com","author":"Gang Yin","message":"update ci script"}]},"filePathRelative":"zh-tw/ch02.md"}');export{k as comp,v as data};
