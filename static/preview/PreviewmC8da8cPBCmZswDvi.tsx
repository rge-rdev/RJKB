/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewmC8da8cPBCmZswDvi(){
  return (<Tooltip
  id="preview__mC8da8cPBCmZswDvi"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Effect</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/First-Class-Functions/Higher-Order-Function/Callback-Function"><code>Callback</code></Link><span>&#x20;to&#x20;run&#x20;inside&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>,&#x20;under&#x20;certain&#x20;conditions</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 14 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;once&#x20;</span><b>onMount</b><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;empty&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;once&#x20;</span><b>onMount</b><span>&#x20;+&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect/Cleanup-Function"><code>Cleanup</code></Link><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;empty&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;&#x26;&#x20;return&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect/Cleanup-Function"><span>Cleanup&#x20;Function</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>Effect</span></span><span>&#x20;code&#x20;omitted;&#x20;only&#x20;return&#x20;</span><span ><span>Cleanup&#x20;Function</span></span><span>&#x20;when&#x20;executed</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;on&#x20;specific&#x20;renders</span><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;relevant&#x20;data&#x20;in&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span></span><CodeBlock language="tsx">{`useEffect(() => { document.title = title\n  }, [title] )`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;+&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect/Cleanup-Function"><code>Cleanup</code></Link><span>&#x20;on&#x20;</span><b>specific&#x20;renders</b><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;property&#x20;in&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect/Cleanup-Function"><span>Cleanup&#x20;Function</span></Link><span>&#x20;</span></cite></li></ol>
    <Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect#references"><button className="react-tooltip__ref-link">
          View 9 more
        </button></Link>
    </small></Tooltip>)
}