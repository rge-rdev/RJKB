/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewz7Lwjazyz7qBcvNAr(){
  return (<Tooltip
  id="preview__z7Lwjazyz7qBcvNAr"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>&#x3C;source&#x3E;</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><b>Media&#x20;Source</b><span>&#x20;</span><Link to="inline-element"><span>Inline&#x20;Element</span></Link><span>&#x20;to&#x20;</span>specify&#x20;media&#x20;resource<span>&#x20;for&#x20;</span><Link to="audio"><code>&#x3C;audio&#x3E;</code></Link><span>,&#x20;</span><Link to="picture"><code>&#x3C;picture&#x3E;</code></Link><span>&#x20;or&#x20;</span><Link to="video"><code>&#x3C;video&#x3E;</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>Media&#x20;Query</span></span><span>&#x20;for&#x20;</span><span ><code>&#x3C;source&#x3E;</code></span><span></span><CodeBlock language="tsx">{`<picture>\n  <source srcset="logo-md.png" media="(min-width: 800px)" />\n  <source srcset="logo-sm.png" media="(min-width: 600px)" />\n  <img src="logo-mob.png" alt="MDN Web Docs" />\n</picture>`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}