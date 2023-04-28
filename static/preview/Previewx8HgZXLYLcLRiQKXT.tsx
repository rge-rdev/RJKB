import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewx8HgZXLYLcLRiQKXT(){
  return (<Tooltip
  id="preview__x8HgZXLYLcLRiQKXT"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>typeof</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator"><span>JS&#x20;Operator</span></Link><span>&#x20;return&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/string"><code>string</code></Link><span>&#x20;of&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Operand"><span>Operand</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><code>typeof</code></span><span>&#x20;&#x26;&#x20;</span><span ><code>instanceof</code></span><span>&#x20;are&#x20;</span><span ><span>JS&#x20;Operator</span></span><span>&#x20;that&#x20;act&#x20;as&#x20;</span><span ><span>Type&#x20;Guard</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Narrow</span></span><span>&#x20;via&#x20;</span><span ><code>if</code></span><span>&#x20;check&#x20;(with&#x20;</span><span ><code>typeof</code></span><span>&#x20;logic)&#x20;at&#x20;</span><span ><span>Runtime</span></span><span>&#x20;</span><CodeBlock language="tsx">{`function calcScore(value: number|string): number {\n  if(typeof value === "number") return value\n  if(typeof value === "string") return value.length\n  throw new Error("Not number or string")\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>typeof</code></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}