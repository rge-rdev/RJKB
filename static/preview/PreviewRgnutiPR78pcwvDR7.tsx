/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewRgnutiPR78pcwvDR7(){
  return (<Tooltip
  id="preview__RgnutiPR78pcwvDR7"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Module&#x20;Specifier</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/Primitive/string"><code>string</code></Link><span>&#x20;to&#x20;identify&#x20;&#x26;&#x20;point&#x20;to&#x20;</span><Link to="/wiki/JS/Library/Module"><span>Module</span></Link><span>&#x20;location</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Top-Level&#x20;Await&#x20;for&#x20;Module</span></span><span>&#x20;for&#x20;fallback&#x20;</span><span ><span>CDN</span></span><span>&#x20;</span><span ><span>URL</span></span><span>&#x20;</span><span ><span>Module&#x20;Specifier</span></span><span>&#x20;</span><CodeBlock language="tsx">{`let lodash;\ntry {\n  lodash = await import("https://primary.cdn.com/lodash")\n} catch {\n  lodash = await import("https://fallback.cdn.com/lodash")\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Browser&#x20;Module&#x20;Path</span><span>&nbsp;↔&nbsp;</span><span>to&#x20;</span><Link to="/wiki/JS/Library/Module/import"><code>import</code></Link><span>&#x20;</span><Link to="/wiki/JS/Library/Module"><span>Module</span></Link><span>&#x20;via&#x20;</span><Link to="/wiki/JS/Library/Module/Module-Specifier"><span>Module&#x20;Specifier</span></Link><span>&#x20;to&#x20;point&#x20;to&#x20;</span><Link to="/wiki/Computer-Science/Data-Structure/Database/Cloud-Storage/CDN"><span>CDN</span></Link><span>&#x20;</span><Link to="/wiki/Computer-Science/Computer-Network/Network-Scope/Internet/WWW/Web-Site/Domain-Name/URL"><code>URL</code></Link><span>&#x20;link&#x20;-&#x20;to&#x20;allow&#x20;immediate&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/JIT/JIT-Compilation-flow/Execution"><span>Execution</span></Link><span>&#x20;in&#x20;</span><Link to="/wiki/Computer-Science/Computer-Language/Computer/Software/Domain/Web-Dev/Browser"><span>Browser</span></Link><span>&#x20;w/o&#x20;</span><Link to="/wiki/JS/Library/Module/Bundler"><span>Bundler</span></Link><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}