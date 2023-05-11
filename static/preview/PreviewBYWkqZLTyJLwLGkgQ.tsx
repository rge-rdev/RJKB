/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewBYWkqZLTyJLwLGkgQ(){
  return (<Tooltip
  id="preview__BYWkqZLTyJLwLGkgQ"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>assert.throws()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/Nodejs/Node-Stack/assert"><code>assert</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Prototypal-Inheritance/Static-Method"><span>Static&#x20;Method</span></Link><span>&#x20;to&#x20;complain&#x20;if&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/First-Class-Functions/Higher-Order-Function/Callback-Function"><span>Callback&#x20;Function</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type/Base-Type/Function-Type/Function-Overload/Function-Signature/Parameter"><span>Parameter</span></Link><span>&#x20;</span><b>does&#x20;not&#x20;throw</b><span>&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Exception"><span>Exception</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><code>//&#x20;@ts-</code><code>expect-error</code></span><span>&#x20;with&#x20;</span><span ><code>assert.throws()</code></span><span>&#x20;</span><CodeBlock language="tsx">{`assert.throws(\n  // @ts-expect-error: Object is possibly "null". (2531)\n  () => null.someProperty,\n  TypeError);`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}