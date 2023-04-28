import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewztpcmJD9GxNDnsaRr(){
  return (<Tooltip
  id="preview__ztpcmJD9GxNDnsaRr"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Getter</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;to&#x20;get&#x20;a&#x20;value,&#x20;called&#x20;as&#x20;property&#x20;literal;&#x20;prepend&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Slot/Method"><span>Method</span></Link><span>&#x20;with&#x20;</span><b><code>get</code></b><span>&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Keyword"><span>JS&#x20;Keyword</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Accessor&#x20;Property</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/How-memory-allocated-to-Primitive-Reference-values/Primitive-Value/Stored-in-EC-in-Call-Stack/Value"><span>Value</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/Typed-Object/Property-Modifier"><code>Modifier</code></Link><span>&#x20;to&#x20;set&#x20;access&#x20;via&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Property-Attribute/Accessor-Property/Getter"><span>Getter</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Property-Attribute/Accessor-Property/Setter"><span>Setter</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Slot/Method"><span>Method</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><span>Object&#x20;Literal</span></span><b><em>&#x20;with&#x20;</em></b><span ><span>Setter</span></span><b><em>&#x20;&#x26;&#x20;</em></b><span ><span>Getter</span></span><CodeBlock language="tsx">{`const myObject = {\n  myProperty: true,\n  myMethod() {\n    return "hello";\n  },\n  get myGetter() {\n    return this.myProperty;\n  },\n  set mySetter(value) {\n    return this.myProperty = value;\n  }\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Accessor</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Property-Attribute/Accessor-Property/Setter"><span>Setter</span></Link><span>/&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Property-Attribute/Accessor-Property/Getter"><span>Getter</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Slot/Method"><span>Method</span></Link><span>&#x20;to&#x20;write/read&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/Literal/Object-Literal/Property-Attribute/Accessor-Property"><span>Accessor&#x20;Property</span></Link><span>&#x20;in&#x20;</span><Link to="/wiki/JS/JS-Language/Object"><span>Object</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>get</code><span>&nbsp;↔&nbsp;</span><span ><span>JS&#x20;Keyword</span></span><span>&#x20;modifier&#x20;to&#x20;create&#x20;</span><span ><span>Getter</span></span><span>&#x20;by&#x20;prefix&#x20;</span><span ><span>Method</span></span><span>&#x20;definition</span></cite></li></ol>
    
    </small></Tooltip>)
}