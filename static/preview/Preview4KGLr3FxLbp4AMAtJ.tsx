/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview4KGLr3FxLbp4AMAtJ(){
  return (<Tooltip
  id="preview__4KGLr3FxLbp4AMAtJ"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Generic&#x20;Type&#x20;Variable</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>special&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><span>Variable</span></Link><span>&#x20;that&#x20;</span>works&#x20;on&#x20;<Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link>s<span>&#x20;instead&#x20;of&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/How-memory-allocated-to-Primitive-Reference-values/Primitive-Value/Stored-in-EC-in-Call-Stack/Value"><span>Value</span></Link>s<span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;interface&#x20;for&#x20;Generic&#x20;Value&#x20;Container&#x20;where&#x3C;Value&#x3E;&#x20;is&#x20;</span><span ><span>Generic&#x20;Type&#x20;Variable</span></span><span>&#x20;</span><CodeBlock language="tsx">{`interface ValueContainer<Value> {\n  value: Value;\n}\ntype StringContainer = ValueContainer<string>;`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}