/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewHHhTggsEqG5PWQR9r(){
  return (<Tooltip
  id="preview__HHhTggsEqG5PWQR9r"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Factory&#x20;Function</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;to&#x20;return&#x20;</span><Link to="/wiki/JS/JS-Language/Object"><span>Object</span></Link><span>&#x20;(w/o&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/VEST/this-keyword"><em><code>this</code></em><span>&#x20;keyword</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Operator/new"><code>new</code></Link><span>)</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>contrast&#x20;</span><span ><span>Factory&#x20;Function</span></span><span>&#x20;applies&#x20;</span><span ><span>Instantiation</span></span><span>&#x20;w/o&#x20;using&#x20;</span><span ><code>new</code></span><span></span><CodeBlock language="tsx">{`function Person(name, age){\n  return {\n    name: name,\n    age: age\n  }\n}`}</CodeBlock><span>&#x20;call&#x20;constructor&#x20;w/o&#x20;new&#x20;keyword</span><CodeBlock language="tsx">{`const bob = Person(name, 18)`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}