/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview7DpYgXv6P5n3rchSb(){
  return (<Tooltip
  id="preview__7DpYgXv6P5n3rchSb"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Union&#x20;Type</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Type&#x20;Union</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Union&#x20;</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/TS/TS-Syntax/Type/Compound-Type"><span>Compound&#x20;Type</span></Link><span>&#x20;join&#x20;by&#x20;</span><b><code>&#x20;|&#x20;</code></b><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Type-Expression/Type-Operator"><span>Type&#x20;Operator</span></Link><span>&#x20;to&#x20;define&#x20;each&#x20;member&#x20;of&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/set"><span>set</span></Link><span>&#x20;can&#x20;EITHER&#x20;be</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 11 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><Link to="/wiki/JS/TS/TS-Syntax/Type/Compound-Type/Union-Type"><span>Union&#x20;Type</span></Link></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Union&#x20;Type</span></span><span>s&#x20;needed&#x20;for&#x20;initializing&#x20;</span><span ><span>Variable</span></span><span>&#x20;as&#x20;</span><span ><code>undefined</code></span><span>&#x20;or&#x20;</span><span ><code>null</code></span><span></span><CodeBlock language="tsx">{`// @ts-expect-error: Type 'null' is not assignable to type 'number'. (2322)\nlet myNumber: number = null;\nmyNumber = 123;`}</CodeBlock><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Union&#x20;Type</span></span><span>&#x20;|&#x20;</span><span ><code>null</code></span><span>&#x20;to&#x20;mark&#x20;explicit&#x20;omission&#x20;for&#x20;</span><span ><span>Callback&#x20;Function</span></span><span></span><CodeBlock language="tsx">{`function optionalCallback( callback: null | (num: number) => string) { /**/ }`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Union&#x20;Type</span></span><span>&#x20;|&#x20;</span><span ><code>undefined</code></span><span>&#x20;to&#x20;mark&#x20;explicit&#x20;omission&#x20;for&#x20;</span><span ><span>Parameter</span></span><span>&#x20;</span><CodeBlock language="tsx">{`function f(x: undefined | number) { return x }`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Intersection&#x20;Type</span></span><span>&#x20;of&#x20;2&#x20;</span><span ><span>Union&#x20;Type</span></span><span></span><CodeBlock language="tsx">{`type DateTime = Date | string\ntype Label = string | number\ntype Combined = DateTime & Label`}</CodeBlock><span>&#x20;typeof&#x20;Combined</span><span>&nbsp;↔&nbsp;</span><span>string</span></cite></li></ol>
    <Link to="/wiki/JS/TS/TS-Syntax/Type/Compound-Type/Union-Type#references"><button className="react-tooltip__ref-link">
          View 6 more
        </button></Link>
    </small></Tooltip>)
}