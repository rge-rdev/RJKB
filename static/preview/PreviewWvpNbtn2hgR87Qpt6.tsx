import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewWvpNbtn2hgR87Qpt6(){
  return (<Tooltip
  id="preview__WvpNbtn2hgR87Qpt6"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Intersection&#x20;Type</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Type&#x20;Intersection</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Intersection</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/TS/TS-Syntax/Type/Compound-Type"><span>Compound&#x20;Type</span></Link><span>&#x20;to&#x20;merge&#x20;via&#x20;</span><b><code>&#x20;&#x26;&#x20;</code></b><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Type-Expression/Type-Operator"><span>Type&#x20;Operator</span></Link><span>&#x20;to&#x20;express&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;as&#x20;being&#x20;ALL&#x20;of&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/set"><span>set</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>Intersection&#x20;Type</span></span><span>&#x20;related&#x20;to&#x20;</span><span ><code>interface</code></span><span>&#x20;</span><span ><span>Inheritance</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Intersection&#x20;Type</span></span><span>&#x20;equivalent&#x20;to&#x20;</span><span ><code>interface</code></span><span>&#x20;extends&#x20;_</span><span ><code>interface</code></span><span>2,&#x20;_</span><span ><code>interface</code></span><span>3</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Intersection&#x20;Type</span></span><span>&#x20;of&#x20;2&#x20;</span><span ><span>Union&#x20;Type</span></span><span></span><CodeBlock language="tsx">{`type DateTime = Date | string\ntype Label = string | number\ntype Combined = DateTime & Label`}</CodeBlock><span>&#x20;typeof&#x20;Combined</span><span>&nbsp;↔&nbsp;</span><span>string</span></cite></li></ol>
    
    </small></Tooltip>)
}