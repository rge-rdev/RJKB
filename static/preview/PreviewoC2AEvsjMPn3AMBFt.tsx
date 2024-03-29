/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
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
        <blockquote className="react-tooltip__dd"><span><Link to="runtime"><span>Runtime</span></Link><span>&#x20;</span><Link to="type-check"><span>Type-Check</span></Link><span>&#x20;to&#x20;</span><Link to="narrow"><span>Narrow</span></Link><span>&#x20;</span><Link to="type"><span>Type</span></Link><span>&#x20;of&#x20;</span><Link to="variable"><span>Variable</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 6 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><code>typeof</code></span><span>&#x20;&#x26;&#x20;</span><span ><code>instanceof</code></span><span>&#x20;are&#x20;</span><span ><span>JS&#x20;Operator</span></span><span>&#x20;that&#x20;act&#x20;as&#x20;</span><span ><span>Type&#x20;Guard</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Type&#x20;Guard</span></span><span>&#x20;used&#x20;when&#x20;</span><span ><span>Type</span></span><span>&#x20;too&#x20;general,&#x20;requires&#x20;</span><span ><span>Narrow</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Union&#x20;Type</span></span><span>&#x20;can&#x20;be&#x20;too&#x20;general&#x20;&#x26;&#x20;require&#x20;</span><span ><span>Type&#x20;Guard</span></span><span>&#x20;for&#x20;</span><span ><span>Narrow</span></span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Equality&#x20;Operator</span></span><span>&#x20;can&#x20;be&#x20;used&#x20;as&#x20;</span><span ><span>Type&#x20;Guard</span></span><span>&#x20;to&#x20;check&#x20;for&#x20;specific&#x20;value&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Array.isArray()&#x20;as&#x20;</span><span ><span>Type&#x20;Guard</span></span><span></span><CodeBlock language="tsx">{`function f(value: Function|number[]) {\n  if(typeof value === "function") value // Function\n  if(Array.isArray(value) value // number[]\n}`}</CodeBlock></cite></li></ol>
    <Link to="type-guard#references"><button className="react-tooltip__ref-link">
          View 1 more
        </button></Link>
    </small></Tooltip>)
}