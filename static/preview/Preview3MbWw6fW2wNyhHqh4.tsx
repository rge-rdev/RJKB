/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview3MbWw6fW2wNyhHqh4(){
  return (<Tooltip
  id="preview__3MbWw6fW2wNyhHqh4"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Guard&#x20;Clause</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Language/JS-Syntax/Statement/Control-Flow"><span>Control&#x20;Flow</span></Link><span>&#x20;condition&#x20;to&#x20;trigger&#x20;early&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration/return"><code>return</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>use&#x20;with&#x20;</span><span ><span>Guard&#x20;Clause</span></span><span>&#x20;to&#x20;throw&#x20;custom&#x20;Error&#x20;message</span><CodeBlock language="json">{`if(!response.ok) throw new Error(\`\${X} no found!\`)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>can&#x20;use&#x20;if-</span><span ><span>Guard&#x20;Clause</span></span><span>&#x20;instead&#x20;of&#x20;</span><span ><code>switch</code></span><span>&#x20;to&#x20;handle&#x20;different&#x20;actions&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>use&#x20;</span><span ><span>Guard&#x20;Clause</span></span><span>&#x20;as&#x20;alternative&#x20;to&#x20;if-else&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>set&#x20;</span><b><code>allow</code></b><span>&#x20;boolean&#x20;</span><span ><span>Guard&#x20;Clause</span></span><span>&#x20;to&#x20;check&#x20;if&#x20;event&#x20;listener&#x20;type&#x20;supported&#x20;on&#x20;element</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Guard&#x20;Clause</span></span><span>&#x20;to&#x20;test&#x20;if&#x20;</span><span ><code>string</code></span><span>&#x20;is&#x20;only&#x20;whitespace&#x20;else&#x20;</span><span ><code>return</code></span><span></span><CodeBlock language="tsx">{`if (!/\S/.test(str: string) return`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}