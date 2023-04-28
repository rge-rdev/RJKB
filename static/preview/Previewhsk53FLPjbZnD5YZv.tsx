/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Previewhsk53FLPjbZnD5YZv(){
  return (<Tooltip
  id="preview__hsk53FLPjbZnD5YZv"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Structural&#x20;Type&#x20;System</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Structural&#x20;Type&#x20;Equivalence</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Static-Type"><span>Static&#x20;Type</span></Link><span>&#x20;</span><b>equivalence</b><span>&#x20;by&#x20;same&#x20;structure&#x20;(where&#x20;</span><b>constituent&#x20;&#x22;name&#x22;&#x20;&#x26;&#x20;type</b><span>&#x20;both&#x20;match)&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span ><span>TS</span></span><span>&#x20;uses&#x20;</span><span ><span>Structural&#x20;Type&#x20;System</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Variants-of-Static-Type-System-in-other-Programming-Language/Nominal-Type-System"><span>Nominal&#x20;Type&#x20;System</span></Link><span>&#x20;vs&#x20;</span><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Variants-of-Static-Type-System-in-other-Programming-Language/Structural-Type-System"><span>Structural&#x20;Type&#x20;System</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;throws&#x20;in&#x20;</span><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Variants-of-Static-Type-System-in-other-Programming-Language/Nominal-Type-System"><span>Nominal&#x20;Type&#x20;System</span></Link><span>&#x20;but&#x20;NOT&#x20;</span><Link to="/wiki/JS/TS/TS-Definition/Static-Type-System/Variants-of-Static-Type-System-in-other-Programming-Language/Structural-Type-System"><span>Structural&#x20;Type&#x20;System</span></Link><span></span><CodeBlock language="tsx">{`class A {name = "A"}\nClass B {name = "B"}\nconst newA: A = new B()`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>class&#x20;A&#x20;&#x26;&#x20;B&#x20;are&#x20;</span><b>structurally</b><span>&#x20;equivalent&#x20;in&#x20;a&#x20;</span><span ><span>Structural&#x20;Type&#x20;System</span></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}