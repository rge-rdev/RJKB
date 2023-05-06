/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview3escXxPda58naXahx(){
  return (<Tooltip
  id="preview__3escXxPda58naXahx"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Reference&#x20;Reassignment</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Object&#x20;Reassignment</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><b>New&#x20;</b><Link to="/wiki/JS/JS-Definition/JS-Engine/Value/Primitive-Value/Stored-in-EC-in-Call-Stack/Unique-Identifier-created-to-reference-Primitive-Variable/Identifier"><span>Identifier</span></Link><span>&#x20;created&#x20;&#x1F449;&#x20;</span><b><em>same&#x20;value</em></b><span>&#x20;to&#x20;ref&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Heap"><span>Heap</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Value/Primitive-Value/Stored-in-EC-in-Call-Stack/Unique-Identifier-created-to-reference-Primitive-Variable/Memory-Address"><span>Memory&#x20;Address</span></Link><span>&#x20;(where&#x20;actual&#x20;</span><Link to="/wiki/JS/JS-Language/Object"><span>Object</span></Link><span>&#x20;store&#x20;in&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Heap"><span>Heap</span></Link><span>)</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 1 time</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>leak&#x20;example&#x20;due&#x20;to&#x20;object&#x20;</span><span ><span>Reference&#x20;Reassignment</span></span><span></span><CodeBlock language="tsx">{`var leaked = { name: "bob" }\nleaked = 123`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}