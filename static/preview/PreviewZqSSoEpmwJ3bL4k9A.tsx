/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewZqSSoEpmwJ3bL4k9A(){
  return (<Tooltip
  id="preview__ZqSSoEpmwJ3bL4k9A"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Narrow</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Narrowing&#x20;</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>to&#x20;reduce&#x20;static&#x20;type&#x20;T&#x20;to&#x20;a&#x20;(</span><em>narrowed&#x20;down</em><span>)&#x20;subset&#x20;of&#x20;T</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 7 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!eg&#x20;</span><span ><span>Narrow</span></span><span>&#x20;of&#x20;</span><code>type&#x20;null|string</code><span>&#x20;to&#x20;</span><code>type&#x20;string</code><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Narrow</span></span><span>&#x20;via&#x20;</span><span ><code>if</code></span><span>&#x20;check&#x20;(with&#x20;</span><span ><code>typeof</code></span><span>&#x20;logic)&#x20;at&#x20;</span><span ><span>Runtime</span></span><span>&#x20;</span><CodeBlock language="tsx">{`function calcScore(value: number|string): number {\n  if(typeof value === "number") return value\n  if(typeof value === "string") return value.length\n  throw new Error("Not number or string")\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Narrow</span></span><span>&#x20;via&#x20;</span><span ><code>switch</code></span><span>&#x20;</span><CodeBlock language="tsx">{`function calcScore(value: number|string): number {\n  switch (typeof value) {\n    case "number":\n      return value\n    case "string":\n      return value.length\n    default:\n      throw new Error("Not number or string")\n  }\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Type&#x20;Guard</span></span><span>&#x20;used&#x20;when&#x20;</span><span ><span>Type</span></span><span>&#x20;too&#x20;general,&#x20;requires&#x20;</span><span ><span>Narrow</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Type&#x20;Guard</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Runtime"><span>Runtime</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Type-Check"><span>Type-Check</span></Link><span>&#x20;to&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard/Narrow"><span>Narrow</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;of&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><span>Variable</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/JS/TS/TS-Syntax/Type-Guard/Narrow#references"><button className="react-tooltip__ref-link">
          View 2 more
        </button></Link>
    </small></Tooltip>)
}