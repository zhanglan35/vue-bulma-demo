<hr>
<h2>sidebarDepth: 0</h2>
<h1>Icon</h1>
<h2>图标库</h2>
<p>文档中的图标均来自 <a href="https://github.com/FortAwesome/Font-Awesome">Font Awesome</a>，
在入口文件的 <code>style</code> 块中引入其 <code>cdn</code> 就可以开始使用：</p>
<pre class="hljs"><code class="css">@<span class="hljs-keyword">import</span> url(<span class="hljs-string">'https://use.fontawesome.com/releases/v5.3.1/css/all.css'</span>);
</code></pre>
<h3>基本用法</h3>
<p>参照 <a href="https://bulma.io/documentation/elements/icon/">Bulma Icon</a> 文档中的写法</p>
<VueCodeDemo code="%3Cspan%20class%3D%22icon%20has-text-info%22%3E%0A%20%20%3Ci%20class%3D%22fas%20fa-info-circle%22%3E%3C/i%3E%0A%3C/span%3E%0A%3Cspan%20class%3D%22icon%20has-text-success%22%3E%0A%20%20%3Ci%20class%3D%22fas%20fa-check-square%22%3E%3C/i%3E%0A%3C/span%3E%0A%3Cspan%20class%3D%22icon%20has-text-warning%22%3E%0A%20%20%3Ci%20class%3D%22fas%20fa-exclamation-triangle%22%3E%3C/i%3E%0A%3C/span%3E%0A%3Cspan%20class%3D%22icon%20has-text-danger%22%3E%0A%20%20%3Ci%20class%3D%22fas%20fa-ban%22%3E%3C/i%3E%0A%3C/span%3E%0A" is-fixed><pre class="hljs"><code class="html"><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icon has-text-info"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fas fa-info-circle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icon has-text-success"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fas fa-check-square"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icon has-text-warning"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fas fa-exclamation-triangle"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"icon has-text-danger"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fas fa-ban"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
</code></pre>
</VueCodeDemo>