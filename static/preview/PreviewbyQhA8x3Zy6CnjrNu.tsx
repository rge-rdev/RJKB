/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewbyQhA8x3Zy6CnjrNu(){
  return (<Tooltip
  id="preview__byQhA8x3Zy6CnjrNu"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>switch</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span></span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>break</code><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Keyword"><span>JS&#x20;Keyword</span></Link><span>&#x20;to&#x20;end&#x20;current&#x20;loop/</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Statement/Control-Flow/Conditional-Statement/switch"><code>switch</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Narrow</span></span><span>&#x20;via&#x20;</span><span ><code>switch</code></span><span>&#x20;</span><CodeBlock language="tsx">{`function calcScore(value: number|string): number {\n  switch (typeof value) {\n    case "number":\n      return value\n    case "string":\n      return value.length\n    default:\n      throw new Error("Not number or string")\n  }\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>can&#x20;use&#x20;if-</span><span ><span>Guard&#x20;Clause</span></span><span>&#x20;instead&#x20;of&#x20;</span><span ><code>switch</code></span><span>&#x20;to&#x20;handle&#x20;different&#x20;actions&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}