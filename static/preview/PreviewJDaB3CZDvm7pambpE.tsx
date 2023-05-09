/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewJDaB3CZDvm7pambpE(){
  return (<Tooltip
  id="preview__JDaB3CZDvm7pambpE"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Runtime</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Dynamically</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>final&#x20;lifecyle&#x20;stage&#x20;when&#x20;</span><Link to="/wiki/Computer-Science/Computer-Language/Computer/Program"><span>Program</span></Link><span>&#x20;is&#x20;run&#x20;inside&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC"><span>EC</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 17 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Runtime&#x20;Error</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Exception"><span>Exception</span></Link><span>&#x20;at&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Runtime"><span>Runtime</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Dynamically-Typed</span><span>&nbsp;↔&nbsp;</span><span>of&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument/Variable"><span>Variable</span></Link><span>&#x20;not&#x20;fixed&#x20;to&#x20;one&#x20;</span><Link to="/wiki/JS/TS/TS-Syntax/Type"><span>Type</span></Link><span>&#x20;at&#x20;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Declaration"><span>Declaration</span></Link><span>,&#x20;</span><b>can&#x20;be&#x20;reassigned</b><span>,&#x20;only&#x20;become&#x20;known&#x20;at&#x20;</span><Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Runtime"><span>Runtime</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Hook</span></span><span>&#x20;has&#x20;specific&#x20;calling&#x20;order&#x20;that&#x20;must&#x20;not&#x20;change&#x20;at&#x20;</span><span ><span>Runtime</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;</span><span ><span>Union&#x20;Type</span></span><span>&#x20;with&#x20;</span><span ><span>Runtime</span></span><span>&#x20;check&#x20;</span><CodeBlock language="tsx">{`function add(a: number|string, b: number|string) {\n  if(typeof a === "number" && typeof b = "number") {\n    return a + b\n  }\n  return a.toString() + b.toString()\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>unknown</code></span><span>&#x20;can&#x20;be&#x20;used&#x20;with&#x20;</span><span ><span>Runtime</span></span><span>&#x20;</span><span ><span>Type-Check</span></span><span>&#x20;logic</span><CodeBlock language="tsx">{`let input: unknown\ninput = "bob"\nif (typeof input === "string") input.toUpperCase()`}</CodeBlock></cite></li></ol>
    <Link to="/wiki/JS/JS-Definition/JS-Engine/Call-Stack/EC/Runtime#references"><button className="react-tooltip__ref-link">
          View 12 more
        </button></Link>
    </small></Tooltip>)
}