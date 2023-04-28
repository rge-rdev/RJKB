/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewv36tsrhEA7Di4JtZ6(){
  return (<Tooltip
  id="preview__v36tsrhEA7Di4JtZ6"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Optional&#x20;Chaining</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax"><span>JS&#x20;Syntax</span></Link><span>&#x20;to&#x20;conditionally&#x20;call&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Chain"><span>Chain</span></Link><span>&#x20;or&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Chain/Dot-Notation"><span>Dot&#x20;Notation</span></Link><span>&#x20;if&#x20;function/property&#x20;exists,&#x20;else&#x20;return&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined"><code>undefined</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Optional&#x20;Chaining</span></span><span></span><CodeBlock language="tsx">{`obj?.prop\nobj?.[__expr__]\nfunc?.(__arg__, __arg2__)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Optional&#x20;Chaining</span></span><span>&#x20;with&#x20;</span><span ><code>??</code></span><span></span><CodeBlock language="tsx">{`const street = persons.map(\n  p => p.address?.street?.name ?? "can't find name"\n);`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Optional&#x20;Chaining</span></span><span>&#x20;equivalent&#x20;to&#x20;</span><span ><code>?</code></span><code>&#x20;_expr&#x20;:&#x20;undefined&#x20;</code><span>&#x20;</span><CodeBlock language="tsx">{`o?.prop // same as...\n(o !== undefined && o !== null) ? o.prop : undefined`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}