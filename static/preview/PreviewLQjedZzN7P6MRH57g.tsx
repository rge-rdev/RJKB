/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewLQjedZzN7P6MRH57g(){
  return (<Tooltip
  id="preview__LQjedZzN7P6MRH57g"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Reject</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>&#x1F4A9;Error&#x20;during&#x20;async&#x20;task</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 4 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Promise&#x20;Lifecycle</span><span>&nbsp;↔&nbsp;</span><span>(</span><em>model</em><span>)&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise"><code>Promise</code></Link><span>&#x20;process&#x20;to&#x20;start&#x20;as&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise/Promise-Lifecycle/Pending"><span>Pending</span></Link><span>&#x20;&#x26;&#x20;end&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise/Promise-Lifecycle/Settled"><span>Settled</span></Link><span>&#x20;into&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise/Promise-Lifecycle/Settled/Fullfill"><span>Fullfill</span></Link><span>&#x20;||&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise/Promise-Lifecycle/Settled/Reject"><span>Reject</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>.finally()</code><span>&nbsp;↔&nbsp;</span><Link to="/wiki/JS/JS-Language/JS-Syntax/Chain"><span>Chain</span></Link><span>&#x20;</span><Link to="/wiki/JS/JS-Definition/Multi-paradigm/First-Class-Functions/Higher-Order-Function/Callback-Function"><code>Callback</code></Link><span>&#x20;to&#x20;call&#x20;at&#x20;end,&#x20;regardless&#x20;of&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise/Promise-Lifecycle/Settled/Fullfill"><span>Fullfill</span></Link><span>&#x20;or&#x20;</span><Link to="/wiki/JS/JS-Language/Object/Promise/Promise-Lifecycle/Settled/Reject"><span>Reject</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><b>C</b><span>hain&#x20;</span><span ><code>.catch()</code></span><span>&#x20;to&#x20;handle&#x20;error&#x20;on&#x20;</span><span ><span>Async</span></span><span>&#x20;</span><span ><span>Reject</span></span><span>&#x20;</span><CodeBlock language="jsx">{`.catch(err => console.err(err.message))`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span ><code>Promise</code></span><span>&#x20;will&#x20;eventually&#x20;</span><span ><span>Settled</span></span><span>&#x20;into&#x20;either&#x20;</span><span ><span>Fullfill</span></span><span>&#x20;or&#x20;</span><span ><span>Reject</span></span><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}