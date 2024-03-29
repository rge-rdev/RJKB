/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewx8zogyXaMwhdzSYPb(){
  return (<Tooltip
  id="preview__x8zogyXaMwhdzSYPb"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Dynamic&#x20;Level</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="ts"><span>TS</span></Link><span>&#x20;</span><Link to="runtime"><span>Runtime</span></Link><span>&#x20;</span><Link to="language-level"><span>Language&#x20;Level</span></Link><span>&#x20;of&#x20;</span><Link to="js"><span>JS</span></Link><span>&#x20;</span><Link to="source-code"><span>Source&#x20;Code</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="variable"><span>Variable</span></Link><span>s&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 5 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>Value</span></span><span>s&#x20;exist&#x20;on&#x20;</span><span ><span>Dynamic&#x20;Level</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>regular&#x20;</span><span ><span>function</span></span><span>s&#x20;exist&#x20;on&#x20;</span><span ><span>Dynamic&#x20;Level</span></span><span>&#x20;as&#x20;factory&#x20;for&#x20;</span><span ><span>Value</span></span><span>s&#x20;</span><code>(</code><span>with&#x20;</span><span ><span>Parameter</span></span><span>&#x20;in&#x20;parentheses</span><code>)</code><CodeBlock language="tsx">{`const valueFactory = (x: number) => x;\nconst myValue = valueFactory(123);`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Regular&#x20;</span><span ><span>function</span></span><span>&#x20;exist&#x20;at&#x20;</span><span ><span>Dynamic&#x20;Level</span></span><span>&#x20;&#x26;&#x20;are&#x20;factory&#x20;for&#x20;</span><span ><span>Value</span></span><span>s&#x20;with&#x20;</span><span ><span>Parameter</span></span><span>&#x20;representing&#x20;</span><span ><span>Value</span></span><span>s&#x20;</span><CodeBlock language="tsx">{`const valueFactory = (x: number) => x\nconst myValue = valueFactory(123)`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Language&#x20;Level</span><span>&nbsp;↔&nbsp;</span><Link to="ts"><span>TS</span></Link><span>&#x20;exists&#x20;on&#x20;</span><Link to="dynamic-level"><span>Dynamic&#x20;Level</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="static-level"><span>Static&#x20;Level</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>TS</span></span><span>&#x20;has&#x20;no&#x20;impact&#x20;on&#x20;</span><span ><span>Dynamic&#x20;Level</span></span><span>&#x20;&#x26;&#x20;does&#x20;not&#x20;improve/affect&#x20;performance&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}