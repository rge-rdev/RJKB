import React from "react"
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function PreviewkQeJKrMxeJp4ugzi8(){
  return (<Tooltip
  id="preview__kQeJKrMxeJp4ugzi8"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt"><code>WinSxS</code></code><em>&#x20;aka&#x20;</em><code className="italic font-bold"><span>Windows&#x20;Component&#x20;Store</span></code></dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span><span>huge&#x20;backup&#x20;copy&#x20;for&#x20;old&#x20;version&#x20;of&#x20;dll/exe&#x20;&#x26;&#x20;other&#x20;system&#x20;files&#x20;for&#x20;compat.&#x20;&#x22;Windows&#x20;Side&#x20;By&#x20;Side&#x22;&#x20;to&#x20;fix&#x20;</span><Link to="/wiki/Computer-Science/Computer-Language/Computer/OS/Windows/WinSxS/DLL-Hell"><span>DLL&#x20;Hell</span></Link><span>&#x20;by&#x20;wasting&#x20;disk&#x20;space.&#x20;</span><Link to="/wiki/Computer-Science/Computer-Language/Computer/OS/Windows/WinSxS/NTFS-Hard-Link"><span>NTFS&#x20;Hard&#x20;Link</span></Link><span>&#x20;-&#x20;Explorer&#x20;overestimate&#x20;size&#x20;slightly</span></span></blockquote>
      </dd>
    </dfn>
    <cite className="react-tooltip__ref-header">Cited 3 times</cite>
    <ol className="font-semibold"><li><cite className="react-tooltip__ref-list"><span>to&#x20;calc&#x20;</span><Link to="/wiki/Computer-Science/Computer-Language/Computer/OS/Windows/WinSxS"><code>WinSxS</code></Link><span>&#x20;actual&#x20;size</span><CodeBlock language="bash">{`DISM.exe /Online /Cleanup-Image /AnalyzeComponentStore`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>to&#x20;clean&#x20;</span><Link to="/wiki/Computer-Science/Computer-Language/Computer/OS/Windows/WinSxS"><code>WinSxS</code></Link><span>&#x20;unnecessary&#x20;file&#x20;SAFE</span><CodeBlock language="bash">{`DISM.exe /Online /Cleanup-Image /StartComponentCleanup`}</CodeBlock></cite></li><li><cite className="react-tooltip__ref-list"><span>to&#x20;del&#x20;</span><Link to="/wiki/Computer-Science/Computer-Language/Computer/OS/Windows/WinSxS"><code>WinSxS</code></Link><span>&#x20;old&#x20;ver&#x20;backups&#x20;KILL&#x20;ROLLBACK</span><CodeBlock language="bash">{`DISM.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase`}</CodeBlock><span>&#x20;</span></cite></li></ol>
    
    </small></Tooltip>)
}