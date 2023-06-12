/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewqxZQeQgZJWcEnzXxn(){
  return (<Tooltip
  id="preview__qxZQeQgZJWcEnzXxn"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Thread</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>sequence&#x20;of&#x20;</span><Link to="instruction"><span>Instruction</span></Link><span>s&#x20;(where&#x20;</span><Link to="machine-code"><span>Machine&#x20;Code</span></Link><span>)&#x20;executed&#x20;in&#x20;</span><Link to="cpu"><span>CPU</span></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 7 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>Thread&#x20;Pool</span><span>&nbsp;↔&nbsp;</span>fixed&#x20;number&#x20;of&#x20;<Link to="thread"><span>Thread</span></Link>s<span>&#x20;availabe&#x20;to&#x20;run&#x20;tasks&#x20;with&#x20;</span><Link to="concurrency"><span>Concurrency</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>JIT</span></span><span>&#x20;Processes&#x20;(ie&#x20;</span><span ><span>Parsing</span></span><span>,&#x20;</span><span ><span>Compilation</span></span><span>&#x20;&#x26;&#x20;</span><span ><span>Optimisation</span></span><span>)&#x20;occur&#x20;inside&#x20;</span><b>special&#x20;</b><span ><span>Thread</span></span><span>&#x20;within&#x20;</span><span ><span>JS&#x20;Engine</span></span><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Execution&#x20;Thread</span><span>&nbsp;↔&nbsp;</span><span>Part&#x20;of&#x20;</span><Link to="ec"><span>EC</span></Link><span>&#x20;currently&#x20;run&#x20;in&#x20;</span><Link to="cpu"><span>CPU</span></Link><span>&#x20;</span><Link to="thread"><span>Thread</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>Background&#x20;Thread</span><span>&nbsp;↔&nbsp;</span><Link to="thread"><span>Thread</span></Link><span>&#x20;run&#x20;separate&#x20;from&#x20;main&#x20;</span><Link to="execution-thread"><span>Execution&#x20;Thread</span></Link><span>&#x20;of&#x20;</span><Link to="app"><span>App</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span ><span>JIT</span></span><span>&#x20;</span><span ><code>Processes</code></span><span>&#x20;run&#x20;separate&#x20;from&#x20;</span>main&#x20;<span ><span>Thread</span></span><span>&#x20;in&#x20;</span><span ><span>Call&#x20;Stack</span></span><span>;&#x20;can&#x20;not&#x20;access&#x20;via&#x20;</span><span ><code>Code</code></span><span>&#x20;</span></cite></li></ol>
    <Link to="thread#references"><button className="react-tooltip__ref-link">
          View 2 more
        </button></Link>
    </small></Tooltip>)
}