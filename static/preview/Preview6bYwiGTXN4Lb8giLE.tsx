import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview6bYwiGTXN4Lb8giLE(){
  return (<Tooltip
  id="preview__6bYwiGTXN4Lb8giLE"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Hidden&#x20;Dependency</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>External&#x20;outer&#x20;scope&#x20;variable&#x20;or&#x20;invoking&#x20;external&#x20;function</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>example&#x20;of&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Side-Effect/Hidden-Dependency"><span>Hidden&#x20;Dependency</span></Link><span>&#x20;in&#x20;impure&#x20;function</span><CodeBlock language="tsx">{`let c = 3;\nfunction add(a, b) {\n  console.log(a, b); // console = external depenency\n  return a + b + c; // c = external dependency\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Side-Effect/Hidden-Dependency"><span>Hidden&#x20;Dependency</span></Link><span>&#x20;can&#x20;be&#x20;moved&#x20;into&#x20;input&#x20;</span><Link to="/wiki/JS/JS-Language/Primitive/undefined/Argument"><span>Argument</span></Link><span>&#x20;to&#x20;turn&#x20;into&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/Paradigm/Functional-Programming/Pure-Function"><span>Pure&#x20;Function</span></Link><span></span><CodeBlock language="tsx">{`function add(a, b, c, log) {\n  log(a, b)\n  return a + b + c;\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Side&#x20;Effect</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;with&#x20;external&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Side-Effect/Hidden-Dependency"><span>Hidden&#x20;Dependency</span></Link><span>&#x20;that&#x20;read/writes&#x20;to&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Side-Effect/External-System"><span>External&#x20;System</span></Link><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}