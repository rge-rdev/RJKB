/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewTQZJXLFQu7Y5Eiz2m(){
  return (<Tooltip
  id="preview__TQZJXLFQu7Y5Eiz2m"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Deps&#x20;Array</span></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Dependency&#x20;Array</span></code><span>&#x2C;&#x20;</span><code className="italic font-bold"><span>Depdencies&#x20;Array</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="dependency"><code>Deps</code></Link><span>[]&#x20;to&#x20;pass&#x20;as&#x20;last&#x20;</span><Link to="argument"><code>arg</code></Link><span>&#x20;to&#x20;</span><Link to="trigger"><span>Trigger</span></Link><span>&#x20;</span><Link to="hook"><span>Hook</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 15 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="effect"><span>Effect</span></Link><span>&#x20;once&#x20;</span><b>onMount</b><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;empty&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="effect"><span>Effect</span></Link><span>&#x20;once&#x20;</span><b>onMount</b><span>&#x20;+&#x20;</span><Link to="cleanup-function"><code>Cleanup</code></Link><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;empty&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;&#x26;&#x20;return&#x20;</span><Link to="cleanup-function"><span>Cleanup&#x20;Function</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="effect"><span>Effect</span></Link><span>&#x20;on&#x20;specific&#x20;renders</span><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;relevant&#x20;data&#x20;in&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span></span><CodeBlock language="tsx">{`useEffect(() => { document.title = title\n  }, [title] )`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Run&#x20;</span><Link to="effect"><span>Effect</span></Link><span>&#x20;+&#x20;</span><Link to="cleanup-function"><code>Cleanup</code></Link><span>&#x20;on&#x20;</span><b>specific&#x20;renders</b><span>&nbsp;↔&nbsp;</span><span>call&#x20;</span><Link to="useeffect"><code>useEffect()</code></Link><span>&#x20;with&#x20;property&#x20;in&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="cleanup-function"><span>Cleanup&#x20;Function</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><code>useMemo()</code><span>&nbsp;↔&nbsp;</span><Link to="memoizing-hook"><span>Memoizing&#x20;Hook</span></Link><span>&#x20;to&#x20;</span><Link to="memoization"><code>Memoize</code></Link><span>&#x20;entire&#x20;</span><Link to="component"><span>Component</span></Link><span>,&#x20;some&#x20;</span><Link to="jsx"><span>JSX</span></Link><span>&#x20;or&#x20;</span><Link to="props"><code>props</code></Link><span>,&#x20;based&#x20;on&#x20;</span><Link to="deps-array"><span>Deps&#x20;Array</span></Link><span>&#x20;change</span></cite></li></ol>
    <Link to="deps-array#references"><button className="react-tooltip__ref-link">
          View 10 more
        </button></Link>
    </small></Tooltip>)
}