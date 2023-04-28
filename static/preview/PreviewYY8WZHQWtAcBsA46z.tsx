/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewYY8WZHQWtAcBsA46z(){
  return (<Tooltip
  id="preview__YY8WZHQWtAcBsA46z"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>IIFE</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>IIFE</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Immediately&#x20;Invoked&#x20;Function&#x20;Expression</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/Computer-Science/Design-Pattern"><span>Design&#x20;Pattern</span></Link><span>&#x20;to&#x20;run&#x20;self-executing&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Function/function/Anon-Function"><span>Anon&#x20;Function</span></Link><span>&#x20;once&#x20;&#x26;&#x20;disappear</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><Link to="/wiki/JS/JS-Language/Object/Function/IIFE"><span>IIFE</span></Link><span>&#x20;is&#x20;used&#x20;to&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Principles-of-OOP/Encapsulation"><code>Encapsulate</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><code>Variables </code></Link><span>&#x20;to&#x20;inner&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/VEST/Scope-Chain/Scope/Block-Scope"><span>Block&#x20;Scope</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>IIFE</span></span><span>&#x20;also&#x20;used&#x20;to&#x20;</span><b>prevent&#x20;polluting</b><span>&#x20;the&#x20;</span><span ><span>Global&#x20;Scope</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>enum</code></span><span>&#x20;transpiles&#x20;to&#x20;</span><span ><span>IIFE</span></span><span>&#x20;scope&#x20;with&#x20;named&#x20;constant</span><CodeBlock language="tsx">{`var Role;\n(function (Role) {\n  Role[Role["ADMIN"] = 0] = "ADMIN";\n  Role[Role["READ_ONLY"] = 0] = "READ_ONLY";\n  Role[Role["USER"] = 0] = "USER";\n})(Role || (Role = {}));`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>before&#x20;</span><span ><span>ES6</span></span><span>,&#x20;</span><span ><span>Module</span></span><span>&#x20;not&#x20;added&#x20;-&#x20;only&#x20;</span><span ><span>Script</span></span><span>s&#x20;existed,&#x20;typically&#x20;via&#x20;</span><span ><span>IIFE</span></span><span>&#x20;wrapper</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>MDX</span></span><span>&#x20;support&#x20;</span><span ><span>IIFE</span></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}