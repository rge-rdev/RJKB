/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewHogvn56EDbDmeSxKw(){
  return (<Tooltip
  id="preview__Hogvn56EDbDmeSxKw"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><span>Private&#x20;Constructor</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><Link to="constructor-function"><span>Constructor&#x20;Function</span></Link><span>&#x20;prepend&#x20;with&#x20;</span><Link to="private"><code>private</code></Link><span>&#x20;to&#x20;restrict&#x20;access&#x20;to&#x20;within&#x20;class,&#x20;prevent&#x20;</span><Link to="instantiation"><span>Instantiation</span></Link><span>&#x20;with&#x20;</span><Link to="new"><code>new</code></Link><span>&#x20;</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>access&#x20;</span><Link to="private-constructor"><span>Private&#x20;Constructor</span></Link><span>&#x20;via&#x20;</span><Link to="static-method"><span>Static&#x20;Method</span></Link><span>&#x20;</span></cite></li><li><cite className="react-tooltip__ref-list"><span>!snippet&#x20;accessing&#x20;</span><span ><span>Private&#x20;Constructor</span></span><span></span><CodeBlock language="tsx">{`class AccountingDep {\n  private static instance: AccountingDep\n  static getInstance() {\n    if(this.instance) return this.instance\n    this.instance = new AccountingDep("wasd", [])\n    return this.instance\n  }\n}`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>Singleton</span><span>&nbsp;↔&nbsp;</span><Link to="ts-syntax"><span>TS&#x20;Syntax</span></Link><span>&#x20;Pattern&#x20;to&#x20;ensure&#x20;exactly&#x20;only&#x20;one&#x20;object&#x20;instance&#x20;of&#x20;a&#x20;class,&#x20;using&#x20;</span><Link to="private-constructor"><span>Private&#x20;Constructor</span></Link><span>&#x20;&#x26;&#x20;</span><Link to="static-method"><span>Static&#x20;Method</span></Link><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}