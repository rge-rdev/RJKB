/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewTrRynP8Fino9F5mST(){
  return (<Tooltip
  id="preview__TrRynP8Fino9F5mST"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Traverse</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>(</span><em>process</em><span>)&#x20;to&#x20;move&#x20;across&#x20;</span><Link to="graph"><span>Graph</span></Link><span>&#x20;&#x26;&#x20;select&#x20;</span><Link to="node_graph"><code>Nodes</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>BFS</span><span>&nbsp;↔&nbsp;</span><Link to="search-algo"><span>Search&#x20;Algo</span></Link><span>&#x20;to&#x20;</span><Link to="traverse_graph"><span>Traverse</span></Link><span>&#x20;</span><b>breadth&#x20;first</b><span>,&#x20;down&#x20;</span><Link to="graph"><span>Graph</span></Link><span>&#x20;child&#x20;layer&#x20;by&#x20;child&#x20;layer</span></cite></li><li><cite className="react-tooltip__ref-list"><span>DFS</span><span>&nbsp;↔&nbsp;</span><Link to="search-algo"><span>Search&#x20;Algo</span></Link><span>&#x20;to&#x20;</span><Link to="traverse_graph"><span>Traverse</span></Link><span>&#x20;</span><b>depth&#x20;first</b><span>&#x20;down&#x20;</span><Link to="graph"><span>Graph</span></Link><span>&#x20;entire&#x20;child&#x20;subtree&#x20;&#x26;&#x20;backtrack</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Fibonacci&#x20;Recursive</span><span>&nbsp;↔&nbsp;</span><span>assume&#x20;sequence&#x20;starts&#x20;with&#x20;1.&#x20;Example&#x20;of&#x20;BAD&#x20;</span><Link to="recursion"><code>Recursive</code></Link><span>&#x20;fn.&#x20;</span><Link to="traverse_graph"><span>Traverse</span></Link><span>&#x20;down&#x20;Fibonacci&#x20;Tree&#x20;until&#x20;reach&#x20;1</span><CodeBlock language="tsx">{`function fibonacci(index: number) { \n  if(index <= 1) return 1\n  return fibonacci(index-1) + fibonacci(index-2)\n}`}</CodeBlock></cite></li></ol>
    
    </small></Tooltip>)
}