import{_ as p,a as t}from"./00021-YXHf-Sw2.js";import{_ as c,c as o,a as l,b as s,e as a,d as i,w as d,r as u,o as r}from"./app-W63b2ksF.js";const k={};function m(h,n){const e=u("RouteLink");return r(),o("div",null,[n[3]||(n[3]=l(`<h1 id="第-10-章-透過定義來規避錯誤" tabindex="-1"><a class="header-anchor" href="#第-10-章-透過定義來規避錯誤"><span>第 10 章 透過定義來規避錯誤</span></a></h1><p>異常處理是軟體系統中最糟糕的複雜性來源之一。處理特殊情況的程式碼在本質上比處理正常情況的程式碼更難編寫，並且開發人員經常在定義異常時不考慮異常的處理方式。本章討論了異常為何會不成比例地增加複雜性，然後展示瞭如何簡化異常處理。本章主要的教訓是應該減少必須處理異常的地方的數量。在一些情況下，可以修改操作的語義，以便正常行為可以處理所有情況，從而無需報告任何異常情況（這也就是本章的主題）。</p><h2 id="_10-1-為什麼異常會增加複雜性" tabindex="-1"><a class="header-anchor" href="#_10-1-為什麼異常會增加複雜性"><span>10.1 為什麼異常會增加複雜性</span></a></h2><p>我使用“異常”一詞來指代任何會改變程式中正常控制流程的不常見條件。許多程式語言都包含某種形式化的異常機制，該機制允許異常由較低層級的程式碼丟擲並由更高層級的程式碼捕獲。但是，即使不使用形式化的異常報告機制，異常也可能發生，例如當某個方法返回一個特殊值指示其未完成其正常行為時。所有這些形式的異常都會增加複雜性。</p><p>一段特定的程式碼可能會以幾種不同的方式遇到異常：</p><ul><li>呼叫方可能會提供錯誤的引數或配置資訊。</li><li>呼叫的方法可能無法完成請求的操作。例如，I/O 操作可能失敗，或者所需的資源可能不可用。</li><li>在分散式系統中，網路資料包可能會丟失或延遲，伺服器可能無法及時響應，或者節點間可能會以意想不到的方式進行通訊。</li><li>該程式碼可能會檢測到缺陷（bug）、內部不一致或未準備處理的情況。</li></ul><p>大型系統必須應對許多特殊情況，特別是在它們是分散式的或需要容錯的情況下。異常處理可以佔系統中所有程式碼的很大一部分。</p><p>異常處理程式碼天生就比正常情況下的程式碼更難寫。異常中斷了正常的程式碼流，它通常意味著有些事情沒有像預期的那樣工作以及操作無法按計劃完成。當異常發生時，程式設計師可以用兩種方法處理它，每種方法都很複雜。第一種方法是儘管有錯誤但仍然向前推進並完成正在進行的工作。例如，如果一個網路資料包丟失，它可以被重發；如果資料損壞了，也許可以從冗餘副本中恢復資料。第二種方法是中止正在進行的操作，向上報告異常。但是，中止可能很複雜，因為異常可能發生在系統狀態不一致的地方（某個資料結構可能已經部分初始化）；異常處理程式碼必須恢復一致性，例如透過撤銷發生異常之前所做的任何更改。</p><p>此外，異常處理程式碼還可能導致更多的異常。考慮重新發送丟失的網路資料包的情況。也許該資料包實際上並沒有丟失，但是隻是被延遲了。在這種情況下，重新發送資料包將導致重複的資料包到達對節點；這引入了節點必須處理的新的例外條件。或者，考慮從冗餘副本恢復丟失的資料的情況：如果冗餘副本也丟失了怎麼辦？在恢復期間發生的次要異常通常比主要異常更加微妙和複雜。如果透過中止正在進行的操作來處理異常，則必須將此異常作為另一個異常報告給呼叫方。為了防止無休止的異常級聯，開發人員最終必須找到一種在不引入更多異常的情況下處理異常的方法。</p><p>語言對異常的支援往往是冗長而笨拙的，這使得異常處理程式碼難以閱讀。例如，考慮以下程式碼，該程式碼使用 Java 對物件序列化和反序列化的支援從檔案中讀取 <code>tweet</code> 的集合：</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java"><pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token class-name">FileInputStream</span> fileStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">BufferedInputStream</span> bufferedStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>fileStream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">ObjectInputStream</span> objectStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectInputStream</span><span class="token punctuation">(</span>bufferedStream<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tweetsPerFile<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        tweets<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Tweet</span><span class="token punctuation">)</span> objectStream<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">EOFException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Not a problem: not all tweet files have full</span></span>
<span class="line">    <span class="token comment">// set of tweets.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassCastException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在沒有考慮實際處理異常的程式碼的情況下，只是基本的 <code>try-catch</code> 樣板程式碼就比正常情況下的操作程式碼所佔的程式碼行更多。很難將異常處理程式碼與普通情況程式碼相關聯：例如，每個異常的生成位置都不明顯。另一種方法是將程式碼分解為許多不同的 <code>try</code> 塊。在極端情況下，每行可能產生異常的程式碼都需要單獨的 <code>try</code> 塊。這樣可以清楚地說明異常發生的位置，但是 <code>try</code> 塊本身會破壞程式碼流，並使程式碼難以閱讀。此外，某些異常處理程式碼可能最終會在多個 <code>try</code> 塊中重複。</p><p>確保異常處理程式碼是否會真正起作用是困難的。某些異常（例如 I/O 錯誤）在測試環境中不易生成，因此很難測試處理它們的程式碼。異常在執行的系統中很少發生，因此異常處理程式碼很少執行。程式碼缺陷可能會長時間未被發現，並且當最終需要異常處理程式碼時，它很有可能無法正常工作（我最喜歡的一句話是：“從未執行過的程式碼預設是無法工作的”） 。最近的一項研究發現，分散式資料密集型系統中超過 90% 的災難性故障是由不正確的錯誤處理引起的 [1]。當異常處理程式碼失敗時，很難除錯該問題，因為它很少發生。</p><h2 id="_10-2-異常過多" tabindex="-1"><a class="header-anchor" href="#_10-2-異常過多"><span>10.2 異常過多</span></a></h2><p>程式設計師透過定義不必要的異常加劇了與異常處理有關的問題。大多數程式設計師被教導檢測和報告錯誤很重要。他們通常將其解釋為“檢測到的錯誤越多越好”。這導致了一種過度防禦的風格，任何看起來有點可疑的東西都會被異常拒絕，從而導致不必要的異常激增，增加了系統的複雜性。</p><p>在設計 Tcl 指令碼語言時，我自己就犯了這個錯誤。Tcl 包含一個 <code>unset</code> 命令，可用於刪除變數。我定義的 <code>unset</code> 會在變數不存在時丟擲錯誤。當時我認為，如果有人試圖刪除一個不存在的變數，那麼它一定是一個程式碼缺陷，所以 Tcl 應該報告它。然而，<code>unset</code> 最常見的用途之一是清理以前操作建立的臨時狀態。通常很難準確預測建立了什麼狀態，尤其是在操作中途被中止的場景裡。因此，最簡單的方法是刪除所有可能已經建立的變數。<code>unset</code> 的定義使得這種情況很尷尬：開發人員最終會用 <code>catch</code> 語句捕獲並忽略 <code>unset</code> 丟擲的錯誤。回顧過去，<code>unset</code> 命令的設計是我在 Tcl 設計中犯下的最大錯誤之一。</p><p>使用異常來避免處理困難的情況是很誘人的：與其想出一種整潔的方法來處理它，不如丟擲一個異常並將問題轉移給呼叫者。有人可能會爭辯說，這種方法可以賦予呼叫者權力，因為它允許每個呼叫者以不同的方式處理異常。然而，如果你不知道做什麼去處理特殊情況，呼叫者也很有可能不知道該做什麼。在這種情況下生成異常只會將問題傳遞給其他人，並增加系統的複雜性。</p><p>類丟擲的異常是其介面的一部分：<strong>具有大量異常的類具有複雜的介面，並且比具有較少異常的類淺</strong>。異常是介面中特別複雜的元素。它可以在被捕獲之前透過多個堆疊層級向上傳播，因此它不僅影響方法的呼叫者，而且還可能影響更高級別的呼叫者（及其介面）。</p><p>丟擲異常很容易，處理它們很困難。因此，異常的複雜性來自異常處理程式碼。減少由異常處理引起的複雜性破壞的最佳方法是 <strong>減少必須處理異常的位置的數量</strong>。本章的其餘部分將討論減少異常處理程式數量的四種技術。</p><h2 id="_10-3-透過定義來規避錯誤" tabindex="-1"><a class="header-anchor" href="#_10-3-透過定義來規避錯誤"><span>10.3 透過定義來規避錯誤</span></a></h2><p>消除異常處理複雜性的最好方法是設計好你的 API，使其沒有異常要處理：這就是 <strong>透過定義來規避錯誤</strong>。這看似褻瀆神靈，但在實踐中非常有效。考慮上面討論的 Tcl <code>unset</code> 命令。與其讓 <code>unset</code> 在被要求刪除未知變數丟擲錯誤，不如讓它簡單地不做任何事情而直接返回。我應該稍微修改一下 <code>unset</code> 的定義：與其用來刪除一個變數，不如用來確保一個變數不再存在。根據第一個定義，如果變數不存在，則 <code>unset</code> 不能執行其工作，因此生成異常是說得通的。使用第二個定義，對不存在的變數名呼叫 <code>unset</code> 是很自然的。在這種情況下，它的工作已經完成，因此可以簡單地返回。不再有錯誤需要上報。</p><h2 id="_10-4-示例-windows-中的檔案刪除" tabindex="-1"><a class="header-anchor" href="#_10-4-示例-windows-中的檔案刪除"><span>10.4 示例：Windows 中的檔案刪除</span></a></h2><p>檔案刪除提供瞭如何透過定義來規避錯誤的另一個示例。Windows 作業系統不允許刪除已在程序中開啟的檔案。對於開發人員和使用者來說，這是一個長期存在的槽點。為了刪除一個正在使用的檔案，使用者必須在系統中搜索以找到已開啟這個檔案的程序，並終止該程序。有時使用者會直接放棄這麼做並重新啟動系統，只是為了刪除檔案。</p><p>Unix 作業系統更優雅地定義了檔案刪除。在 Unix 中，如果在刪除檔案時打開了檔案，則 Unix 不會立即刪除該檔案。而是將檔案標記為刪除，然後刪除操作就成功返回了。該檔名已從其目錄中刪除，因此其他程序無法再開啟該舊檔案，並且可以建立具有相同名稱的新檔案，但現有檔案資料將保留。已經開啟該檔案的程序可以繼續讀取和正常寫入檔案。一旦所有訪問程序都關閉了檔案，便最終釋放其資料。</p><p>Unix 刪除檔案的方式規避了兩種不同的錯誤。首先，如果檔案當前正在使用中，則刪除操作不再返回錯誤而是成功返回，該檔案最終也將被刪除。其次，刪除正在使用的檔案不會使正在使用該檔案的程序丟擲異常。解決此問題的一種可能方法是立即刪除檔案並將所有已開啟的檔案控制代碼標記為停用，其他程序對已刪除檔案的任何讀取或寫入嘗試均將失敗。但是，此方法將產生新的需要那些程序處理的錯誤。相反，Unix 允許他們繼續正常訪問檔案，延遲檔案刪除透過定義規避了這個錯誤。</p><p>Unix 允許程序繼續讀取和寫入已刪除的檔案可能看起來很奇怪，但是我從未遇到過因此引起嚴重問題的情況。對於開發人員和使用者，Unix 刪除檔案的設計比 Windows 的設計要容易相處得多。</p><h2 id="_10-5-示例-java-中的-substring-方法" tabindex="-1"><a class="header-anchor" href="#_10-5-示例-java-中的-substring-方法"><span>10.5 示例：Java 中的 substring 方法</span></a></h2><p>作為最後一個示例，請考慮 Java 的 <code>String</code> 類及其 <code>substring</code> 方法。給定一個字串中的兩個索引，<code>substring</code> 方法返回從第一個索引給定的字元開始並以第二個索引之前的字元結束的子字串。但是，如果兩個索引中的任何一個超出字串的範圍，<code>substring</code> 方法將丟擲 <code>IndexOutOfBoundsException</code>。此異常是不必要的，並且會使此方法的使用複雜化。我經常發現自己處於一個或兩個索引可能不在字串範圍內的情況，並且我想提取字串中與指定範圍重疊的所有字元。不幸的是，這要求我檢查每個索引並將它們向上舍入為零或向下舍入到字串的末尾，導致本來單行的方法呼叫變成了 5 到 10 行程式碼。</p><p>如果 Java 子字串方法自動執行此調整，則將更易於使用，因此它實現了以下 API：“返回索引大於或等於 <code>beginIndex</code> 且小於 <code>endIndex</code> 的字串的字元（如果有）。” 這是一個簡單自然的 API，它規避了 <code>IndexOutOfBoundsException</code> 異常。現在，即使一個或兩個索引均為負，或者 <code>beginIndex</code> 大於 <code>endIndex</code>，該方法的行為也已明確定義。這種方法簡化了方法的 API，同時增加了其功能，因此使方法更深。許多其他語言都採用了這種無錯誤的方式。例如，Python 對於超出範圍的列表切片返回空結果。</p><p>當我主張透過定義來規避錯誤時，人們有時會反駁說丟擲錯誤會捕捉到程式碼缺陷。如果錯誤都被定義規避了，那會不會導致有更多缺陷的軟體出現？也許這就是 Java 開發人員決定 <code>substring</code> 方法應該丟擲異常的原因。儘量丟擲錯誤的方式可能會捕獲一些程式碼缺陷，但也會增加複雜性，從而導致其他程式碼缺陷。在儘量丟擲錯誤的方式中，開發人員必須編寫額外的程式碼來避免或忽略錯誤，這增加了出現程式碼缺陷的可能性。或者，他們可能會忘記編寫額外的程式碼，在這種情況下，執行時可能會丟擲意外的錯誤。相比之下，透過定義來規避錯誤將簡化 API，並減少必須編寫的程式碼量。</p><p><strong>總體而言，減少程式碼缺陷的最好方法是簡化軟體。</strong></p><h2 id="_10-6-遮蔽異常" tabindex="-1"><a class="header-anchor" href="#_10-6-遮蔽異常"><span>10.6 遮蔽異常</span></a></h2><p>減少必須處理異常的地方數量的第二種技術是異常遮蔽。使用這種方法，可以在系統的較低級別上檢測和處理異常情況，因此，更高級別的軟體無需知道該情況。異常遮蔽在分散式系統中尤其常見。例如，在諸如 TCP 的網路傳輸協議中，由於各種原因（例如損壞和擁塞），可能會丟棄資料包。TCP 在其實現中透過重新發送丟失的資料包來遮蔽資料包的丟失，因此所有資料最終都將送達，並且客戶端不會察覺到丟失的資料包。</p><p>NFS 網路檔案系統中出現了一個更具爭議性的遮蔽異常的示例。如果 NFS 檔案伺服器由於任何原因崩潰或無法響應，客戶端將一遍又一遍地向伺服器發出請求，直到問題最終得到解決。客戶端上的底層檔案系統程式碼不會向呼叫應用程式報告任何異常。正在執行的這個操作（及應用程式）只是掛起，直到操作可以成功完成。如果掛起持續的時間超過一小段時間，則 NFS 客戶端將在使用者控制檯上輸出 “NFS 伺服器 xyzzy 無法響應仍在嘗試訪問” 之類的訊息。</p><p>NFS 使用者經常抱怨他們的應用程式在等待 NFS 伺服器恢復正常執行時會被掛起。許多人建議 NFS 應該終止操作並丟擲異常而不是掛起。但是，報告異常會使情況更糟而不是更好。應用程式在無法訪問其檔案的情況下也沒什麼好做的。一種可能性是應用程式重試檔案操作，但這仍然會使應用程式掛起，並且在 NFS 層級中的一個位置執行重試會比在每個應用程式中的每個檔案系統呼叫處執行重試更容易（編譯器應不必為此擔心！）。另一種選擇是讓應用程式中止並將錯誤返回給呼叫者。呼叫者不太可能知道該怎麼做，因此他們也將中止，導致使用者工作環境崩潰。使用者在檔案伺服器關閉時仍然無法完成任何工作，並且一旦檔案伺服器恢復工作，他們將不得不重新啟動所有應用程式。</p><p>因此，最好的替代方法是讓 NFS 遮蔽錯誤並掛起應用程式。透過這種方法，應用程式不需要任何程式碼來處理伺服器問題，並且一旦伺服器恢復執行，它們就可以無縫恢復。如果使用者厭倦了等待，他們總是可以手動中止應用程式。</p><p>異常遮蔽並非在所有情況下都有效，但是在它起作用的情況下它是一個強大的工具。它導致了更深的類，因為它減少了類的介面（使用者需要注意的異常更少）並以遮蔽異常的程式碼形式添加了功能。異常遮蔽是下沉複雜性的一個例子。</p><h2 id="_10-7-異常聚合" tabindex="-1"><a class="header-anchor" href="#_10-7-異常聚合"><span>10.7 異常聚合</span></a></h2><p>減少與異常相關的複雜性的第三種技術是異常聚合。異常聚合的思想是用一個程式碼段處理多個異常。與其為多個單獨的異常編寫不同的處理程式，不如用一個處理程式在一個地方將它們全部處理。</p><p>考慮如何處理 Web 伺服器中的引數缺失的情況。Web 伺服器實現 URL 的集合。伺服器收到傳入的 URL 時，會分派到特定的服務方法來處理該 URL 並生成響應。該 URL 包含用於生成響應的各種引數。每個服務方法都將呼叫一個較底層的方法（將其稱為 <code>getParameter</code>）以從 URL 中提取所需的引數。如果 URL 不包含所需的引數，則 <code>getParameter</code> 會丟擲異常。</p><p>當參加軟體設計課程的學生實現這樣的伺服器時，他們中的許多人將對 <code>getParameter</code> 的每個不同調用包裝在單獨的異常處理程式中以捕獲 <code>NoSuchParameter</code> 異常，如圖 10.1 所示。這導致大量的處理程式，所有這些處理程式基本上都執行相同的操作（生成錯誤響應）。</p><p><img src="`+p+'" alt=""></p><p>圖 10.1：頂部的程式碼將請求分派給 Web 伺服器中的幾種方法之一，每種方法都處理一個特定的 URL。每個方法（底部）都使用傳入 HTTP 請求中的引數。在此圖中，每個對 <code>getParameter</code> 的呼叫都有一個單獨的異常處理程式。這導致了重複的程式碼。</p><p>更好的方法是聚合異常。讓它們傳播到 Web 伺服器的頂層排程方法，而不是在單個服務方法中捕獲異常，如圖 10.2 所示。此方法中的單個處理程式可以捕獲所有異常，併為缺失的引數生成適當的錯誤響應。</p><p><img src="'+t+'" alt=""></p><p>圖 10.2：此程式碼在功能上等效於圖 10.1，但是異常處理已聚合：分派器中的單個異常處理程式從所有特定於 URL 的方法中捕獲所有 NoSuchParameter 異常。</p><p>聚合異常的方式可以在 Web 示例中更進一步。處理網頁時，除了缺少引數外，還有許多其他錯誤。例如，引數可能沒有正確的型別（服務方法期望的引數是整數，但值為 “xyz”），或者使用者可能無權執行所請求的操作。在每種情況下，錯誤都應導致錯誤響應，僅在響應中包含的具體錯誤訊息有所不同（“URL 中不存在引數 &#39;quantity&#39;”，或者，“&#39;quantity&#39; 引數的值 &#39;xyz&#39; 不正確；必須為正整數”）。因此，所有導致錯誤響應的條件都可以使用單個頂層的異常處理程式進行處理。錯誤訊息可以在引發異常時生成，並作為變數包含在異常記錄中。例如，<code>getParameter</code> 將生成 “URL 中不存在引數 &#39;quantity&#39;” 訊息。頂層處理程式從異常中提取訊息，並將其合併到錯誤響應中。</p><p>從封裝和資訊隱藏的角度來看，上一段中描述的異常聚合具有良好的屬性。頂層的異常處理程式封裝了有關如何生成錯誤響應的知識，但對特定錯誤一無所知。它僅使用異常中提供的錯誤訊息。<code>getParameter</code> 方法封裝了有關如何從 URL 提取引數的知識，並且還知道如何以人類可讀的形式描述提取的錯誤。這兩個資訊密切相關，因此將它們放在同一位置是說得通的。但是，<code>getParameter</code> 對 HTTP 錯誤響應的語法一無所知。隨著向 Web 伺服器中添加了新功能，可能會建立類似 <code>getParameter</code> 有自己的異常的新方法。如果新方法丟擲異常的方式和 <code>getParameter</code> 一樣（繼承自同一基類並且包含錯誤資訊），現存系統不用做任何更改就可以整合新的方法：頂層的異常處理程式會自動為新方法生成相應的錯誤響應。</p><p>此示例說明了一種用於異常處理的通用設計模式。如果系統要處理一系列的請求，則定義一個異常以中止當前請求、清除系統狀態並繼續下一個請求是有用的。異常被捕獲在系統請求處理迴圈頂部附近的單個位置。該異常可以在處理請求過程中的任何時候被丟擲以將請求終止。可以在不同的條件下定義該異常的不同子類。這種型別的異常應該與對整個系統有致命影響的異常區分開來。</p><p>如果異常在被處理之前在堆疊中傳播到了多個層級，則異常聚合最有效，這允許在同一個地方處理來自更多方法的更多異常。這與異常遮蔽相反：異常遮蔽通常在異常被底層程式碼處理的情況下效果最好。對於異常遮蔽，底層方法通常是被許多其他方法使用的庫方法，因此，允許傳播異常會增加需要處理該異常的位置數量。異常遮蔽和異常聚合的相似之處在於，這兩種方式都將異常處理程式置於可以捕獲最多異常的位置，從而消除了許多本來需要建立的異常處理程式。</p><p>異常聚合的另一個例子是 RAMCloud 儲存系統的崩潰恢復。RAMCloud 系統由一組儲存伺服器組成，這些儲存伺服器保留每個物件的多個副本，因此係統可以從各種故障中恢復。例如，如果一臺伺服器崩潰並丟失其所有資料，RAMCloud 會使用儲存在其他伺服器上的副本來重建丟失的資料。錯誤也可能在較小的範圍內發生。例如，伺服器可能發現單個物件已損壞。</p><p>對於每種不同型別的錯誤，RAMCloud 沒有單獨的恢復機制。相反，RAMCloud 將許多較小的錯誤“升級”為較大的錯誤。原則上，RAMCloud 可以透過從備份副本中恢復一個損壞的物件來處理這個損壞的物件。然而，它並不這樣做。相反，如果它發現一個損壞的物件，它會使包含該物件的伺服器崩潰。RAMCloud 使用這種方法是因為崩潰恢復非常複雜，而且這種方法最小化了必須建立的不同恢復機制的數量。為崩潰的伺服器建立恢復機制是不可避免的，因此 RAMCloud 對其他型別的恢復也使用相同的機制。這減少了必須編寫的程式碼量，而且這還意味著伺服器崩潰恢復將更頻繁地被呼叫。因此，恢復機制中的程式碼缺陷更有可能被發現和修復。</p><p>將損壞的物件升級為伺服器崩潰的一個缺點是它大大增加了恢復成本。這在 RAMCloud 中不是問題，因為物件損壞非常罕見。但是，錯誤升級對於經常發生的錯誤可能沒有意義。舉一個例子，在伺服器的任何網路資料包丟失時使伺服器崩潰是不切實際的。</p><p>考慮異常聚合的一種方式是，它用可以處理多種情況的單個通用機制替換了幾種針對特定情況而量身定製的專用機制。這再次說明了通用機制的好處。</p><h2 id="_10-8-讓程式崩潰" tabindex="-1"><a class="header-anchor" href="#_10-8-讓程式崩潰"><span>10.8 讓程式崩潰？</span></a></h2><p>減少與異常處理相關的複雜性的第四種技術是使應用程式崩潰。在大多數應用程式中，有些錯誤是不值得去處理的。通常，這些錯誤很難或不可能處理，而且很少發生。針對這些錯誤的最簡單的操作是列印診斷資訊，然後中止應用程式。</p><p>一個示例是在儲存分配期間發生的“記憶體不足”錯誤。考慮一下 C 語言中的 <code>malloc</code> 函式，如果它無法分配所需的記憶體塊，則該函式將返回 <code>NULL</code>。這是一個不合適的行為，因為它假定 <code>malloc</code> 的每個呼叫者都將檢查返回值並在記憶體不足的情況下采取適當的措施。應用程式包含許多對 <code>malloc</code> 的呼叫，因此在每次呼叫後都檢查結果將增加相當大的複雜性。如果程式設計師忘記了檢查（這很有可能），那麼當記憶體用完時應用程式將解引用空指標並導致崩潰，從而掩蓋了實際問題。</p><p>此外，當應用程式發現記憶體已用完時，它也沒什麼好做的了。原則上，應用程式可以尋找不需要的記憶體以釋放它，但是，如果應用程式有不需要的記憶體，它可能已經釋放了它，這將首先防止記憶體不足的錯誤。當今的系統具有如此大的記憶體，以至於記憶體幾乎永遠不會耗盡。如果是這樣，通常表明應用程式中存在程式碼缺陷。因此，嘗試處理記憶體不足錯誤幾乎沒有道理。這會帶來太多的複雜性，而帶來的收益卻太少。</p><p>更好的方式是定義一個新的 <code>ckalloc</code> 方法，該方法呼叫 <code>malloc</code>、檢查結果、並在記憶體耗盡時中止應用程式和輸出錯誤訊息。應用程式從不直接呼叫 <code>malloc</code>，它總是呼叫 <code>ckalloc</code>。</p><p>在較新的語言（例如 C++ 和 Java）中，如果記憶體耗盡，則 <code>new</code> 運算子將引發異常。捕獲此異常沒有什麼意義，因為異常處理程式很有可能還會嘗試分配記憶體，這也會失敗。動態分配的記憶體是任何現代應用程式中的基本元素，如果記憶體耗盡，則繼續應用程式是沒有意義的。最好在檢測到錯誤後立即崩潰。</p><p>還有許多其他錯誤的示例，當這些錯誤出現時使應用程式崩潰是說得通的。對於大多數程式，如果在讀取或寫入開啟的檔案時發生 I/O 錯誤（例如磁碟硬錯誤），或者無法開啟網路套接字，則應用程式沒有什麼辦法從在錯誤中恢復，因此中止程式並輸出清晰的錯誤資訊是明智之舉。這些錯誤很少發生，因此它們不太可能影響應用程式的整體可用性。如果應用程式遇到內部錯誤（如資料結構不一致），中止程式並輸出清晰的錯誤資訊也是合適的。這樣的情況可能表明程式中存在程式碼缺陷。</p><p>當特定錯誤出現時是否可以接受應用程式崩潰取決於具體的應用程式。對於複製儲存系統，因 I/O 錯誤而中止是不適合的，相反，系統必須使用複製的資料來恢復丟失的任何資訊。恢復機制將給程式增加相當大的複雜性，但是恢復丟失的資料是該系統為使用者提供的價值的重要組成部分。</p><h2 id="_10-9-做過頭了" tabindex="-1"><a class="header-anchor" href="#_10-9-做過頭了"><span>10.9 做過頭了</span></a></h2><p>透過定義來規避錯誤或將其遮蔽在模組內部，僅在模組外部不需要該異常資訊時才有意義。對於本章中的示例，例如 Tcl 的 <code>unset</code> 命令和 Java 的 <code>substring</code> 方法，都是如此。在極少數情況下，呼叫者關心異常檢測到的特殊情況，還有其他方法可以獲取此資訊。</p><p>但是，有時候會做得過頭。在用於網路通訊的模組中，一個學生團隊遮蔽了所有網路異常：如果發生網路錯誤，則模組將其捕獲、丟棄並繼續進行，就好像問題沒發生一樣。這意味著使用該模組的應用程式無法確定訊息是否丟失或節點伺服器是否發生故障，而沒有這些資訊，就不可能構建健壯的應用程式。在這種情況下，模組必須暴露異常，即使它們增加了模組介面的複雜性。</p>',65)),s("p",null,[n[1]||(n[1]=a("異常與軟體設計中的許多其他領域一樣，你必須確定哪些是重要的，以及哪些是不重要的。不重要的事物應該被隱藏起來，它們越多越好。但是，當某件事很重要時，必須將其暴露出來（")),i(e,{to:"/zh-tw/ch21.html"},{default:d(()=>n[0]||(n[0]=[a("第 21 章")])),_:1}),n[2]||(n[2]=a("將更詳細地討論這個主題）。"))]),n[4]||(n[4]=s("h2",{id:"_10-10-結論",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_10-10-結論"},[s("span",null,"10.10 結論")])],-1)),n[5]||(n[5]=s("p",null,"任何形式的特殊情況都使程式碼更難以理解，並增加了發生程式碼缺陷的可能性。本章重點討論異常，異常是特殊情況程式碼的最重要來源之一，並討論了如何減少必須處理異常的地方的數量。做到這一點的最佳方法是重新定義語義以消除錯誤條件。對於無法透過定義規避的異常，你應該尋找機會將它們在底層遮蔽，以使其影響有限，或者將多個特殊情況的處理程式聚合到一個更通用的處理程式中。總之，這些技術會對整個系統的複雜性產生重大影響。",-1)),n[6]||(n[6]=s("p",null,"[1] 丁元 等人，“簡單的測試可以防止最關鍵的故障：對分散式資料密集型系統中的生產故障的分析”，2014 USENIX 作業系統設計和實施大會。",-1))])}const g=c(k,[["render",m]]),_=JSON.parse('{"path":"/zh-tw/ch10.html","title":"第 10 章 透過定義來規避錯誤","lang":"zh-TW","frontmatter":{},"headers":[{"level":2,"title":"10.1 為什麼異常會增加複雜性","slug":"_10-1-為什麼異常會增加複雜性","link":"#_10-1-為什麼異常會增加複雜性","children":[]},{"level":2,"title":"10.2 異常過多","slug":"_10-2-異常過多","link":"#_10-2-異常過多","children":[]},{"level":2,"title":"10.3 透過定義來規避錯誤","slug":"_10-3-透過定義來規避錯誤","link":"#_10-3-透過定義來規避錯誤","children":[]},{"level":2,"title":"10.4 示例：Windows 中的檔案刪除","slug":"_10-4-示例-windows-中的檔案刪除","link":"#_10-4-示例-windows-中的檔案刪除","children":[]},{"level":2,"title":"10.5 示例：Java 中的 substring 方法","slug":"_10-5-示例-java-中的-substring-方法","link":"#_10-5-示例-java-中的-substring-方法","children":[]},{"level":2,"title":"10.6 遮蔽異常","slug":"_10-6-遮蔽異常","link":"#_10-6-遮蔽異常","children":[]},{"level":2,"title":"10.7 異常聚合","slug":"_10-7-異常聚合","link":"#_10-7-異常聚合","children":[]},{"level":2,"title":"10.8 讓程式崩潰？","slug":"_10-8-讓程式崩潰","link":"#_10-8-讓程式崩潰","children":[]},{"level":2,"title":"10.9 做過頭了","slug":"_10-9-做過頭了","link":"#_10-9-做過頭了","children":[]},{"level":2,"title":"10.10 結論","slug":"_10-10-結論","link":"#_10-10-結論","children":[]}],"git":{"updatedTime":1744084640000,"contributors":[{"name":"yingang","username":"yingang","email":"1246410+yingang@users.noreply.github.com","commits":1,"url":"https://github.com/yingang"}],"changelog":[{"hash":"808ca72c9a72c5376872dd363b87914283fac24c","time":1744084640000,"email":"1246410+yingang@users.noreply.github.com","author":"Gang Yin","message":"update ci script"}]},"filePathRelative":"zh-tw/ch10.md"}');export{g as comp,_ as data};
