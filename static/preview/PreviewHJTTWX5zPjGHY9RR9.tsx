/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewHJTTWX5zPjGHY9RR9(){
  return (<Tooltip
  id="preview__HJTTWX5zPjGHY9RR9"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Type-Check</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(</span><em>process</em><span>)&#x20;to&#x20;check&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><span>Variable</span></Link><span>&#x20;assigned&#x20;expected&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>s&#x20;(usually&#x20;done&#x20;statically&#x20;during&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Compile-Time"><span>Compile&#x20;Time</span></Link><span>)</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 8 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><code>//&#x20;@ts-</code><code>nocheck</code><span>&nbsp;↔&nbsp;</span><span>tell&#x20;</span><span ><span>TSC</span></span><span>&#x20;to&#x20;not&#x20;</span><span ><span>Type-Check</span></span><span>&#x20;this&#x20;file&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>unknown</code></span><span>&#x20;can&#x20;be&#x20;used&#x20;with&#x20;</span><span ><span>Runtime</span></span><span>&#x20;</span><span ><span>Type-Check</span></span><span>&#x20;logic</span><CodeBlock language="tsx">{`let input: unknown\ninput = "bob"\nif (typeof input === "string") input.toUpperCase()`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>&#x22;noEmit&#x22;:&#x20;true</code></span><span>&#x20;used&#x20;to&#x20;run&#x20;</span><span ><span>TSC</span></span><span>&#x20;for&#x20;</span><span ><span>Type-Check</span></span><span>ing&#x20;only&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>&#x22;strict&#x22;:&#x20;true</code><span>&nbsp;↔&nbsp;</span><span>to&#x20;enable&#x20;all&#x20;strict&#x20;</span><span ><span>Type-Check</span></span><span>&#x20;options&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Static&#x20;Type&#x20;System</span><span>&nbsp;↔&nbsp;</span><span>system&#x20;to&#x20;</span><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Type-Check"><span>Type-Check</span></Link><span>&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;of&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><span>Variable</span></Link><span>&#x20;(known&#x20;&#x26;&#x20;expected)&#x20;at&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Compile-Time"><span>Compile&#x20;Time</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Type-Check#references"><button className="react-tooltip__ref-link">
          View 3 more
        </button></Link>
    </small></Tooltip>)
}