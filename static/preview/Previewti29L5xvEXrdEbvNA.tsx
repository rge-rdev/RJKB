/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewti29L5xvEXrdEbvNA(){
  return (<Tooltip
  id="preview__ti29L5xvEXrdEbvNA"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Numeric&#x20;Enum</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/enum"><code>enum</code></Link><span>&#x20;with&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/number"><code>number</code></Link><span>&#x20;as&#x20;member&#x20;value&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Disadvantages&#x20;of&#x20;using&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/enum/Numeric-Enum"><span>Numeric&#x20;Enum</span></Link></cite></li><li><cite className="react-tooltip__ref-list"><span>!gotcha&#x20;Log&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/enum/Enum-Member"><span>Enum&#x20;Member</span></Link><span>&#x20;of&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/enum/Numeric-Enum"><span>Numeric&#x20;Enum</span></Link><span>&#x20;only&#x20;displays&#x20;number&#x20;value</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!gotcha&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/enum/Numeric-Enum"><span>Numeric&#x20;Enum</span></Link><span>&#x20;loosely&#x20;typed&#x20;allows&#x20;number&#x20;types!</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;loose&#x20;type&#x20;checking&#x20;in&#x20;</span><span ><span>Numeric&#x20;Enum</span></span><span></span><CodeBlock language="tsx">{`enum NoYes {No, Yes}\nfunction f(NoYes: NoYes) {}\nf(33) // no TSC error!`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>opt&#x20;for&#x20;</span><span ><span>String&#x20;Enum</span></span><span>&#x20;instead&#x20;of&#x20;</span><span ><span>Numeric&#x20;Enum</span></span><span>;&#x20;useful&#x20;log&#x20;&#x26;&#x20;type-check</span></cite></li></ol>
    
    </small></Tooltip>)
}