/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewaY33d94EcrR2dgwTF(){
  return (<Tooltip
  id="preview__aY33d94EcrR2dgwTF"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>useEffect()</code></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="/wiki/React/React-API/Hooks-API/Hook"><span>Hook</span></Link><span>&#x20;to&#x20;run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;in&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/FC"><span>FC</span></Link><span>&#x20;at&#x20;specific&#x20;stage&#x20;of&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/Component-Lifecycle"><span>Component&#x20;Lifecycle</span></Link><span>,&#x20;set&#x20;by&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 14 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>!flow&#x20;diagram&#x20;for&#x20;</span><span ><code>useEffect()</code></span><span>&#x20;</span>
![image](@site/static/files/ZMJVpdF-6lPunhVH5gh0kZIlRc_KU2YJNuhxEuXFTzW7ryD5I2xeKdzaLWQSA7qq6tHyYXffXDhj6bcu0LeeURgplaiyRFzmiECeqeDNqvW0oz1pMLsGs4ZhgK1ZBRHg.png)
<span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Cleanup&#x20;Function</span><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/Object/Function/function"><span>function</span></Link><span>&#x20;call&#x20;on&#x20;</span><Link to="/wiki/React/React-Definition/Component-Based-Architecture/Component/Component-Lifecycle/Unmount"><span>Unmount</span></Link><span>,&#x20;via&#x20;return&#x20;function&#x20;from&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;once&#x20;</span><b>onMount</b><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;empty&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;once&#x20;</span><b>onMount</b><span>&#x20;+&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect/Cleanup-Function"><code>Cleanup</code></Link><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;empty&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span>&#x20;&#x26;&#x20;return&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect/Cleanup-Function"><span>Cleanup&#x20;Function</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/Effect"><span>Effect</span></Link><span>&#x20;on&#x20;specific&#x20;renders</span><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;relevant&#x20;data&#x20;in&#x20;</span><Link to="/wiki/React/React-API/Hooks-API/Deps-Array"><span>Deps&#x20;Array</span></Link><span></span><CodeBlock language="tsx">{`useEffect(() => { document.title = title\n  }, [title] )`}</CodeBlock></cite></li></ol>
    <Link to="/wiki/React/React-API/Hooks-API/Effect-Hook/useEffect#references"><button className="react-tooltip__ref-link">
          View 9 more
        </button></Link>
    </small></Tooltip>)
}