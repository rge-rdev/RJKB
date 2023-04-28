/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewagaGKMWRMxM8qn8RF(){
  return (<Tooltip
  id="preview__agaGKMWRMxM8qn8RF"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>unknown</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/Top-Type"><span>Top&#x20;Type</span></Link><span>&#x20;to&#x20;rep&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/any"><code>any</code></Link><span>&#x20;value&#x20;but&#x20;also&#x20;make&#x20;it&#x20;illegal&#x20;to&#x20;use&#x20;(w/o&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type-Guard/Narrow"><span>Narrow</span></Link><span>)&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><code>any</code></span><span>&#x20;&#x26;&#x20;</span><span ><code>unknown</code></span><span>&#x20;are&#x20;</span><span ><span>Top&#x20;Type</span></span><span>s&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>unknown</code></span><span>&#x20;can&#x20;be&#x20;used&#x20;with&#x20;</span><span ><span>Runtime</span></span><span>&#x20;</span><span ><span>Type-Check</span></span><span>&#x20;logic</span><CodeBlock language="tsx">{`let input: unknown\ninput = "bob"\nif (typeof input === "string") input.toUpperCase()`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}