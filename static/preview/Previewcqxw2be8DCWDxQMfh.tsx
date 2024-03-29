/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewcqxw2be8DCWDxQMfh(){
  return (<Tooltip
  id="preview__cqxw2be8DCWDxQMfh"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Setter</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="function"><span>function</span></Link><span>&#x20;to&#x20;set&#x20;a&#x20;value,&#x20;prepend&#x20;class&#x20;</span><Link to="method"><span>Method</span></Link><span>&#x20;with&#x20;</span><b><code>set</code></b><span>&#x20;</span><Link to="js-keyword"><span>JS&#x20;Keyword</span></Link><span>.&#x20;Called&#x20;as&#x20;property&#x20;literal&#x20;reassignment</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Accessor&#x20;Property</span><span>&nbsp;↔&nbsp;</span><Link to="value"><span>Value</span></Link><span>&#x20;</span><Link to="property-modifier"><code>Modifier</code></Link><span>&#x20;to&#x20;set&#x20;access&#x20;via&#x20;</span><Link to="getter"><span>Getter</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="setter"><span>Setter</span></Link><span>&#x20;</span><Link to="method"><span>Method</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><span>Object&#x20;Literal</span></span><b><em>&#x20;with&#x20;</em></b><span ><span>Setter</span></span><b><em>&#x20;&#x26;&#x20;</em></b><span ><span>Getter</span></span><CodeBlock language="tsx">{`const myObject = {\n  myProperty: true,\n  myMethod() {\n    return "hello";\n  },\n  get myGetter() {\n    return this.myProperty;\n  },\n  set mySetter(value) {\n    return this.myProperty = value;\n  }\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Accessor</span><span>&nbsp;↔&nbsp;</span><Link to="setter"><span>Setter</span></Link><span>/&#x20;</span><Link to="getter"><span>Getter</span></Link><span>&#x20;</span><Link to="method"><span>Method</span></Link><span>&#x20;to&#x20;write/read&#x20;</span><Link to="accessor-property"><span>Accessor&#x20;Property</span></Link><span>&#x20;in&#x20;</span><Link to="object"><span>Object</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>set</code><span>&nbsp;↔&nbsp;</span><span>prefix&#x20;</span><span ><span>JS&#x20;Keyword</span></span><span>&#x20;</span><span ><code>Modifier</code></span><span>&#x20;to&#x20;create&#x20;</span><span ><span>Setter</span></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}