/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewNHF7iDNFhiEhb4p5A(){
  return (<Tooltip
  id="preview__NHF7iDNFhiEhb4p5A"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>shallow&#x20;copy</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>one&#x20;level&#x20;deep&#x20;in&#x20;a&#x20;cloned&#x20;</span><Link to="array"><span>Array</span></Link><span>/</span><Link to="object"><span>Object</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>Object.assign()</code><span>&nbsp;↔&nbsp;</span><Link to="object-static-method"><span>Object&#x20;Static&#x20;Method</span></Link><span>&#x20;to&#x20;merge&#x20;2&#x20;objects&#x20;into&#x20;</span><Link to="shallow-copy"><span>shallow&#x20;copy</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>.slice()</code><span>&nbsp;↔&nbsp;</span><Link to="array_array"><code>Array</code></Link><span>&#x20;</span><Link to="instance-method"><span>Instance&#x20;Method</span></Link><span>&#x20;to&#x20;return&#x20;new</span><Link to="shallow-copy"><span>shallow&#x20;copy</span></Link><span>&#x20;</span><b>portion</b><span>&#x20;of&#x20;</span><Link to="array"><span>Array</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>use&#x20;</span><span ><code>.concat()</code></span><span>&#x20;to&#x20;return&#x20;</span><span ><span>shallow&#x20;copy</span></span><span>&nbsp;↔&nbsp;</span><code>const&#x20;arrCopy&#x20;=&#x20;arr.concat()</code><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;new&#x20;</em></b><span ><span>shallow&#x20;copy</span></span><b><em>&#x20;using&#x20;</em></b><span ><span>Object&#x20;Literal</span></span><b><em>&#x20;&#x26;&#x20;</em></b><span ><span>Spread&#x20;Operator</span></span><CodeBlock language="tsx">{`const shallowCopy = {...myObject}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}