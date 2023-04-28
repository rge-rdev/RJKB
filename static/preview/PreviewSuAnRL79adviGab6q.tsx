/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewSuAnRL79adviGab6q(){
  return (<Tooltip
  id="preview__SuAnRL79adviGab6q"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>if</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/Statement/Control-Flow"><span>Control&#x20;Flow</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/JS-Keyword"><span>JS&#x20;Keyword</span></Link><span>&#x20;to&#x20;optionally&#x20;execute&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Statement/Control-Flow/Block"><span>Block</span></Link><span>&#x20;on&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Statement/Control-Flow/Conditional-Statement/Boolean-Context"><span>Boolean&#x20;Context</span></Link><span>&#x20;of&#x20;expression</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>negate&#x20;</span><span ><code>&#x22;strictNullChecks&#x22;:&#x20;true</code></span><span>&#x20;via&#x20;</span><span ><span>Truthy</span></span><span>&#x20;</span><span ><code>if</code></span><span>-check&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Narrow</span></span><span>&#x20;via&#x20;</span><span ><code>if</code></span><span>&#x20;check&#x20;(with&#x20;</span><span ><code>typeof</code></span><span>&#x20;logic)&#x20;at&#x20;</span><span ><span>Runtime</span></span><span>&#x20;</span><CodeBlock language="tsx">{`function calcScore(value: number|string): number {\n  if(typeof value === "number") return value\n  if(typeof value === "string") return value.length\n  throw new Error("Not number or string")\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}