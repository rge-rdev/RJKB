/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewfB7WvBzWnT3jxYMPR(){
  return (<Tooltip
  id="preview__fB7WvBzWnT3jxYMPR"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>.call()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/Object/Function"><code>Function</code></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/OOP/Prototypal-Inheritance/Static-Method/Instance-Method"><span>Instance&#x20;Method</span></Link><span>&#x20;to&#x20;invoke&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;with&#x20;explicit&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/this-keyword"><em><code>this</code></em><span>&#x20;keyword</span></Link><span>&#x20;[and&#x20;optional&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument"><span>Argument</span></Link><span>]&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><span ><span>Method</span></span><b><em>&#x20;vs&#x20;</em></b><span ><code>.call()</code></span><span>&#x20;</span><CodeBlock language="tsx">{`obj.someMethod(1, 2)\n// same as...\nobj.someMethod(obj, 1, 2)\n// same as...\nconst func = obj.someMethod\nfunc.call(obj, 1, 2)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><b><em>!snippet&#x20;</em></b><Link to="/wiki/JS/JS-Language/Object/Function/Function-Instance-Methods/call"><code>.call()</code></Link><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}