/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewJ82Xe9KHZ2Jrff3yM(){
  return (<Tooltip
  id="preview__J82Xe9KHZ2Jrff3yM"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Typesense&#x20;Collection</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>typesense&#x20;</span><Link to="virtual-collection"><span>Virtual&#x20;Collection</span></Link><span>&#x20;as&#x20;</span><Link to="json"><span>JSON</span></Link><span>&#x20;to&#x20;store/retrieve/mutate&#x20;aliases</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 2 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Synonym&#x20;Collection</span><span>&nbsp;↔&nbsp;</span><span>each&#x20;synonym&#x20;map&#x20;to&#x20;</span><Link to="typesense-collection"><span>Typesense&#x20;Collection</span></Link><span>&#x20;BUT&#x20;can&#x20;only&#x20;</span><Link to="put"><code>PUT</code></Link><span>&#x20;one&#x20;synonym&#x20;entry&#x20;per&#x20;</span><Link to="req_handler"><code>Req</code></Link><span>&#x20;?!&#x20;No&#x20;way&#x20;to&#x20;batch&#x20;all&#x20;synonyms?!&#x20;Also,&#x20;synonyms&#x20;don&#x27;t&#x20;pass&#x20;on&#x20;from&#x20;docscraper&#x20;config&#x20;json?!!</span></cite></li><li><cite className="react-tooltip__ref-list"><span>&#x1F4A9;&#x20;</span><span ><code>typesense-doc-scraper</code></span><span>&#x20;adds&#x20;timestamp&#x20;postfix&#x20;to&#x20;collection&#x20;name&#x20;resulting&#x20;in&#x20;duplicate&#x20;</span><span ><span>Typesense&#x20;Collection</span></span><span>&#x20;on&#x20;subsequent&#x20;scrapes!&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}