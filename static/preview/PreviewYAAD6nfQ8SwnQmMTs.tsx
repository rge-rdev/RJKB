/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewYAAD6nfQ8SwnQmMTs(){
  return (<Tooltip
  id="preview__YAAD6nfQ8SwnQmMTs"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>null</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Definition/JS-Engine/How-memory-allocated-to-Primitive-Reference-values/Primitive-Value"><span>Primitive&#x20;Value</span></Link><span>&#x20;rep&#x20;</span><b>absence</b><span>&#x20;of&#x20;any&#x20;value;&#x20;explicitly&#x20;empty</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 16 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>All&#x20;</span><span ><span>Primitive</span></span><span>&#x20;except&#x20;for&#x20;</span><span ><code>null</code></span>&#x20;&#x26;&#x20;<span ><code>undefined</code></span><span>&#x20;have&#x20;access&#x20;to&#x20;</span><span ><span>Method</span></span><span>&#x20;via&#x20;a&#x20;</span><span ><span>Autoboxing</span></span><span>&#x20;a&#x20;</span><span ><span>Wrapper</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Primitive&#x20;Value</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined"><code>undefined</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/null"><code>null</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/number"><code>number</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/bigint"><code>bigint</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/boolean"><code>boolean</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/string"><code>string</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/symbol"><code>symbol</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>UNNBBSS</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined"><code>undefined</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/null"><code>null</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/number"><code>number</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/bigint"><code>bigint</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/boolean"><code>boolean</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/string"><code>string</code></Link><span>,&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/symbol"><code>symbol</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Union&#x20;Type</span></span><span>s&#x20;needed&#x20;for&#x20;initializing&#x20;</span><span ><span>Variable</span></span><span>&#x20;as&#x20;</span><span ><code>undefined</code></span><span>&#x20;or&#x20;</span><span ><code>null</code></span><span></span><CodeBlock language="tsx">{`// @ts-expect-error: Type 'null' is not assignable to type 'number'. (2322)\nlet myNumber: number = null;\nmyNumber = 123;`}</CodeBlock><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>??</code><span>&nbsp;↔&nbsp;</span><span>Nullish&#x20;Coalescing&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator"><code>Operator</code></Link><span>&#x20;to&#x20;assign&#x20;left&#x20;calling&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Operand"><span>Operand</span></Link><span>&#x20;if&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Comparison-Operator/Equality-Operator/"><code>!==</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/null"><code>null</code></Link><span>/</span><Link to="/wiki/JS/JS-Language/Primitive/undefined"><code>undefined</code></Link><span>,&#x20;else&#x20;assign&#x20;fallback&#x20;value&#x20;(right&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/Operand"><span>Operand</span></Link><span>)</span></cite></li></ol>
    <Link to="/wiki/JS/JS-Language/Primitive/null#references"><button className="react-tooltip__ref-link">
          View 11 more
        </button></Link>
    </small></Tooltip>)
}