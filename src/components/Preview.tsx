/**
 * Copyright(c) Roger Jiang
 */

import React from "react"
import { get_path_from_id, getAliasIDs } from "../data"
import { id_to_mdx, id_to_ref_mdx_jsx } from "../utility"
import fs from "fs-extra"

//? use map to memoize & skip repeat preview_FC compute
const map_all_static_preview: Map<string, string> = new Map()

export function getStaticPreviews(ids: string[]) {
  if (!ids) return
  const output_static_previews: string[] = []
  ids.forEach((id) => {
    let static_preview = map_all_static_preview.get(id)
    if (static_preview) output_static_previews.push(static_preview)
    if (!static_preview) {
      static_preview = Preview(id)
      if (!static_preview) return
      if (static_preview) output_static_previews.push(static_preview)
    }
  })
  return output_static_previews
}

function getStaticPreviewTSX(id: string) {
  const PreviewJSX = Preview(id)

  return (
    PreviewJSX &&
    `/**
 * Copyright(c) Roger Jiang
 */
import React from "react"
//@ts-ignore
import CodeBlock from "@theme/CodeBlock"
import { Link } from "react-router-dom"
import { Tooltip } from "react-tooltip"
export default function Preview${id}(){
  return (${PreviewJSX})
}`
  )
}
//? Fragment NOT needed - but keep there for easier expansion

const map_all_static_preview_imports: Map<string, string> = new Map()
const map_all_static_preview_tsx: Map<string, string> = new Map()

export function get_map_all_static_preview_tsx_length() {
  return map_all_static_preview_tsx.size
}

export function getPreviewImports(ids: string[]) {
  if (!ids) return
  const output_static_preview_imports: string[] = []
  ids.forEach((id) => {
    let Preview_filename = `Preview${id}`
    let static_preview_import = map_all_static_preview_imports.get(id)
    if (static_preview_import)
      output_static_preview_imports.push(static_preview_import)
    if (!static_preview_import) {
      let static_preview_tsx = map_all_static_preview_tsx.get(id)
      if (!static_preview_tsx) {
        static_preview_tsx = getStaticPreviewTSX(id)
        if (static_preview_tsx)
          map_all_static_preview_tsx.set(id, static_preview_tsx)
      }
      if (!static_preview_tsx) return
      if (static_preview_tsx) {
        // static_preview_import = `\nimport ${Preview_filename} from "/static/preview/${Preview_filename}"\n\n<${Preview_filename}/>`
        const preview_path = `@site/static/preview/${Preview_filename}`
        // static_preview_import = `\nexport const ${Preview_filename} = React.lazy(() => import(useBaseUrl("/preview/${Preview_filename}")))\n\n<React.Suspense fallback={null}><${Preview_filename}/></React.Suspense>`
        static_preview_import = `\nexport const ${Preview_filename} = React.lazy(() => import("${preview_path}"))\n\n<React.Suspense fallback={null}><${Preview_filename}/></React.Suspense>`
        if (static_preview_import)
          output_static_preview_imports.push(static_preview_import)
        try {
          fs.outputFile(
            `static/preview/${Preview_filename}.tsx`,
            static_preview_tsx
          )
        } catch (error) {}
      }
    }
  })
  return output_static_preview_imports
}

export default function Preview(id: string) {
  // need to check if id is for alias - in which case need to assign original ref that alias is pointing to - I think this is this is the root of the silent fails
  const tooltip_key = id_to_mdx(id, "key", { safe: true, jsx: true })
  if (!tooltip_key) return ""
  const tooltip_value = id_to_mdx(id, "value", {
    safe: true,
    jsx: true,
  })?.trim()
  if (!tooltip_value) return ""

  const ref_mdx = id_to_ref_mdx_jsx(id)
  const ref_show_l = 5
  const ref_arr =
    ref_mdx?.filter((ref) => typeof ref === "string" && ref.length > 0) || []
  const ref_l = ref_arr.length
  const ref_has_more = ref_show_l < ref_l
  const alias_ids = getAliasIDs(id)
  const aka = alias_ids?.length
    ? `<em>&#x20;aka&#x20;</em>${getAliasIDs(id)
        ?.map(
          (id) =>
            `<code className="italic font-bold">${id_to_mdx(id, "key", {
              safe: true,
              jsx: true,
            })}</code>`
        )
        .join("<span>&#x2C;&#x20;</span>")}`
    : ""
  const ref_path = get_path_from_id(id)
    ? get_path_from_id(id) + "#references"
    : undefined

  const tooltip_id = `preview__${id}`
  //! manually rendering to static markup since renderToStaticMarkup() is not working right...
  if (ref_path && tooltip_key && tooltip_value) {
    const ref_slice = ref_arr.slice(0, ref_show_l)

    const ref_header = ref_l
      ? `<cite className="react-tooltip__ref-header">Cited ${ref_l} time${
          ref_l > 1 ? "s" : ""
        }</cite>`
      : ""
    const refs = ref_l
      ? `<ol className="font-semibold">` +
        ref_slice
          .map(
            (ref) =>
              `<li><cite className="react-tooltip__ref-list">${ref}</cite></li>`
          )
          .join("") +
        "</ol>"
      : ""
    const show_more_refs =
      ref_l && ref_has_more
        ? `<Link to="${ref_path}"><button className="react-tooltip__ref-link">
          View ${ref_l - ref_show_l} more
        </button></Link>`
        : ""
    return `<Tooltip
  id="${tooltip_id}"
  place="top"
  clickable
>
  <small>
    <dfn>
      <dt><code className="react-tooltip__dt">${tooltip_key}</code>${aka}</dt>
      <dd>
        <blockquote className="react-tooltip__dd"><span>${tooltip_value}</span></blockquote>
      </dd>
    </dfn>
    ${ref_header}
    ${refs}
    ${show_more_refs}
    </small></Tooltip>`
  }
}

/**
 * !! CONFIRMED BUGS DUE TO FS.OUTPUTFILE 💣☠💣☠💣☠
 * !! MIXING DEEP RECURSION WITH ASYNC FILEWRITES LEADS TO CORRUPTED STATIC MARKUP OUTPUT 💣☠💣☠
 * ?✅ FIXED after fallback to fs.outputFileSync - but now write times are MUCH slower... but 52 seconds for my new SYNCHRONOUS SSG script vs 22 seconds ASYNC - obviously insignificant compared to 2hr+ docusaurus build times but worth exploring when docs expands far beyond 10K
 * ? Interestingly, the async file write corruption is deterministic - resulting in the exact same garbled text output each time
 * ? These bugs did not arise until after adding second level of recursion with Preview MDX SSG - could I still have avoided these errors if I just wrote my own async logic for fs.writeFile instead of relying on fs-extra?
 */

/**
 -> Switch to /static/preview/*.tsx output
    //? Still unsure if the bugs in Preview static markup was caused by async calls or hitting some limit for template strings - but now refactoring each preview to separate .tsx seems to have suppressed all errors - even though the exact same static markup code is being used... strange
      //? have not inspected the source code for fs.outputFile but I suspect some error is arising from this call chain - perhaps there is a max limit to the number of async file writes due to some I/O constraint? It's also very possible that all these recursive loops are too excessive and contribute to this - although it seemed to work fine before Preview mdx was added?
 */

/** 
    //! 03-13: Still getting irregular template string bugs - 1 in 1000 or so <Tooltip></Tooltip> is missing the beginning - getting cropped as "${tooltip_id}\n"place="\ntopclickable>...</Tooltip> instead?!
    //! REGEX to trim dup </small></Tooltip> endings
    const re_to_fix_duplicate_small_tooltip_closing_tags_somehow_showing_up_do_to_wierd_JS_engine_breakdown =
      /(?<=<\/small><\/Tooltip>)[\n ]+.*<\/small><\/Tooltip>(?=([ \n]+<Tooltip|[ \n]+))/g
    //! REALLY WIERD THAT (.*)</small></Tooltip> ends up duplicated and truncated at random place where (.*) can vary in length but is truncated leaving broken HTML - if I modify the template literal slightly shorter or longer - the place where it is truncated changes - so at least the error seems deterministic
    //! somehow </small></Tooltip> is being return & written to mdx TWICE - sometimes with sections of incomplete pieces of refs html - how is that even possible? This may hint at a serious engine bug - possibly a bad optimizing assumption from the compiler?
 */

/** //? Preview is unsuitable to add to client-side for time being due to call chain requiring @function id_to_mdx & @function obj_to_mdx, which depend on my server-side node.js scripts and also sub-libraries which require node.js process, etc - which Webpack 5+ and deliberately cut out polyfill support for. Although hacks exist to manually polyfill these - it does not make sense to bloat the client with such heavy logic, especially for SSG-based site.
 */
