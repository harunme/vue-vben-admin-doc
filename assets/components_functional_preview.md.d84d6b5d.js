import{o as n,c as a,a as s}from"./app.ad8cb3f7.js";const t='{"title":"Preview","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"createImgPreview","slug":"createimgpreview"},{"level":3,"title":"参数/Options","slug":"参数-options"},{"level":3,"title":"返回值/PreviewActions","slug":"返回值-previewactions"}],"relativePath":"components/functional/preview.md","lastUpdated":1635155849897}',p={},o=s('<h1 id="preview"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h1><p>将图片预览组件组件函数化。通过函数方便创建组件</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>有预览图<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>flex justify-center mt-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img in imgList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mr-2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClick(img)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>无预览图<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePreview<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>预览图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> createImgPreview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Preview/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> imgList<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;https://picsum.photos/id/66/346/216&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;https://picsum.photos/id/67/346/216&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;https://picsum.photos/id/68/346/216&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">img<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">createImgPreview</span><span class="token punctuation">(</span><span class="token punctuation">{</span> imageList<span class="token operator">:</span> <span class="token punctuation">[</span>img<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token keyword">function</span> <span class="token function">handlePreview</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">createImgPreview</span><span class="token punctuation">(</span><span class="token punctuation">{</span> imageList<span class="token operator">:</span> imgList <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> imgList<span class="token punctuation">,</span> handleClick<span class="token punctuation">,</span> handlePreview <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="createimgpreview"><a class="header-anchor" href="#createimgpreview" aria-hidden="true">#</a> createImgPreview</h2><h3 id="参数-options"><a class="header-anchor" href="#参数-options" aria-hidden="true">#</a> 参数/Options</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>imgList</td><td><code>string[]</code></td><td>-</td><td>-</td><td>图片列表</td></tr><tr><td>index</td><td><code>number</code></td><td>0</td><td>-</td><td>初始预览时的图片索引</td></tr><tr><td>scaleStep</td><td><code>number</code></td><td>-</td><td>-</td><td>缩放步进值（每次缩放的幅度）。默认为自动（当前缩放值的10%）</td></tr><tr><td>defaultWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>默认宽度（单位px）。当提供此值时，所有图片初始时都会被缩放至此宽度</td></tr><tr><td>maskClosable</td><td><code>boolean</code></td><td>false</td><td><code>true/false</code></td><td>点击遮罩时是否自动关闭预览</td></tr><tr><td>rememberState</td><td><code>boolean</code></td><td>false</td><td><code>true/false</code></td><td>是否记住每张图片各自的缩放状态</td></tr><tr><td>onImgLoad</td><td><code>({ index: number, url: string, dom: HTMLImageElement }) =&gt; void</code></td><td>-</td><td>-</td><td>图片加载成功时的回调函数</td></tr><tr><td>onImgError</td><td><code>({ index: number, url: string, dom: HTMLImageElement }) =&gt; void</code></td><td>-</td><td>-</td><td>图片加载失败时的回调函数</td></tr></tbody></table><h3 id="返回值-previewactions"><a class="header-anchor" href="#返回值-previewactions" aria-hidden="true">#</a> 返回值/PreviewActions</h3><p>可用于控制当前预览状态</p><div class="language-typescript"><pre><code><span class="token keyword">interface</span> <span class="token class-name">PreviewActions</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 重置状态</span>\n  <span class="token function-variable function">resume</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token comment">// 关闭预览</span>\n  <span class="token function-variable function">close</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token comment">// 显示前一张</span>\n  <span class="token function-variable function">prev</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token comment">// 显示后一张</span>\n  <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token comment">// 设置缩放比例(针对当前图片)</span>\n  <span class="token function-variable function">setScale</span><span class="token operator">:</span> <span class="token punctuation">(</span>scale<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n  <span class="token comment">// 设置旋转角度(针对当前图片)</span>\n  <span class="token function-variable function">setRotate</span><span class="token operator">:</span> <span class="token punctuation">(</span>rotate<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',10);p.render=function(s,t,p,e,c,u){return n(),a("div",null,[o])};export default p;export{t as __pageData};