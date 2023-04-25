import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewoC2AEvsjMPn3AMBFt(){
  return (<Tooltip
  id="preview__oC2AEvsjMPn3AMBFt"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Type&#x20;Guard</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Runtime&#x20;Type&#x20;Check</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Runtime&#x20;Check</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Runtime"><span>Runtime</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Type-Check"><span>Type-Check</span></Link><span>&#x20;to&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard/Narrow"><span>Narrow</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;of&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><span>Variable</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/typeof"><code>typeof</code></Link><span>&#x20;&#x26;&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/instanceof"><code>instanceof</code></Link><span>&#x20;are&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator"><span>JS&#x20;Operator</span></Link><span>&#x20;that&#x20;act&#x20;as&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard"><span>Type&#x20;Guard</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard"><span>Type&#x20;Guard</span></Link><span>&#x20;used&#x20;when&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;too&#x20;general,&#x20;requires&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard/Narrow"><span>Narrow</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/JS/TS/TS-Syntax/Type/Compound-Type/Union-Type"><span>Union&#x20;Type</span></Link><span>&#x20;can&#x20;be&#x20;too&#x20;general&#x20;&#x26;&#x20;require&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard"><span>Type&#x20;Guard</span></Link><span>&#x20;for&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard/Narrow"><span>Narrow</span></Link></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Comparison-Operator/Equality-Operator"><span>Equality&#x20;Operator</span></Link><span>&#x20;can&#x20;be&#x20;used&#x20;as&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard"><span>Type&#x20;Guard</span></Link><span>&#x20;to&#x20;check&#x20;for&#x20;specific&#x20;value&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Array.isArray()&#x20;as&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard"><span>Type&#x20;Guard</span></Link><span></span><CodeBlock language="tsx">{`function f(value: Function|number[]) {\n  if(typeof value === "function") value // Function\n  if(Array.isArray(value) value // number[]\n}`}</CodeBlock></cite></li></ol>
    <Link to="/wiki/JS/TS/TS-Syntax/Type-Guard#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}