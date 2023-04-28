/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview6NXCJJjn9kdEtgeSo(){
  return (<Tooltip
  id="preview__6NXCJJjn9kdEtgeSo"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>??</code></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Nullish&#x20;Coalescing&#x20;Operator</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>Nullish&#x20;Coalescing&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator"><code>Operator</code></Link><span>&#x20;to&#x20;assign&#x20;left&#x20;calling&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Operand"><span>Operand</span></Link><span>&#x20;if&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Comparison-Operator/Equality-Operator/"><code>!==</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/null"><code>null</code></Link><span>/</span><Link to="/wiki/JS/JS-Language/Primitive/undefined"><code>undefined</code></Link><span>,&#x20;else&#x20;assign&#x20;fallback&#x20;value&#x20;(right&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Operand"><span>Operand</span></Link><span>)</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Optional&#x20;Chaining</span></span><span>&#x20;with&#x20;</span><span ><code>??</code></span><span></span><CodeBlock language="tsx">{`const street = persons.map(\n  p => p.address?.street?.name ?? "can't find name"\n);`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}