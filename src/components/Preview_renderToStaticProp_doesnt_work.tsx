import _ from "lodash"
import React from "react"
import { Tooltip } from "react-tooltip"
import { get_path_from_id, getAliasIDs, getAliasSlugs } from "../data"
import {
  id_to_mdx,
  id_to_plaintext,
  id_to_ref_mdx,
  id_to_ref_mdx_jsx,
  id_to_tooltop,
} from "../utility"
import { renderToStaticMarkup } from "react-dom/server"

const map_all_static_preview: Map<string, string> = new Map()

export function getStaticPreviews(ids: string[]) {
  if (!ids) return
  const output_static_previews: string[] = []
  ids.forEach((id) => {
    let static_preview = map_all_static_preview.get(id)
    if (static_preview) output_static_previews.push(static_preview)
    if (!static_preview) {
      const PreviewJSX = Preview(id)

      if (!PreviewJSX) return
      if (PreviewJSX)
        output_static_previews.push(renderToStaticMarkup(PreviewJSX))
    }
  })
  return output_static_previews
}

export function Preview(id: string) {
  const tooltip_key = id_to_mdx(id, "key", { safe: true, jsx: true })
  if (!tooltip_key) return
  const tooltip_value = id_to_mdx(id, "value", {
    safe: true,
    jsx: true,
  })?.trim()
  if (!tooltip_value) return

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
            `<span>${id_to_mdx(id, "key", { safe: true, jsx: true })}</span>`
        )
        .join("<span>&#x2C;&#x20;</span>")}`
    : ""
  const ref_path = get_path_from_id(id)
    ? get_path_from_id(id) + "#references"
    : undefined

  const tooltip_id = `preview__${id}`
  //! manually rendering to static markup since renderToStaticMarkup() is not working right...
  if (ref_path && tooltip_key && tooltip_value) {
    const show_more_refs = ref_has_more
      ? `<Link to="${ref_path}">View ${ref_l - ref_show_l} more Refs</Link>`
      : ""

    const ref_slice = ref_arr.slice(0, ref_show_l)
    const refs = ref_slice.map((ref) => `<li><cite>${ref}</cite></li>`).join("")
    const ref_jsx = ref_l
      ? `<cite class="text-xs">Cited ${ref_l} time${
          ref_l > 1 ? "s" : ""
        }</cite><ol>${refs}</ol>`
      : ""
    return (
      <div>
        <Tooltip
          id={tooltip_id}
          place="top"
          clickable
        >
          <small>
            <dfn>
              <dt>
                ${tooltip_key}${aka}
              </dt>
              <dd>
                <blockquote className="font-extrabold">
                  <span>{tooltip_value}</span>
                </blockquote>
              </dd>
            </dfn>
            {ref_jsx}
            {show_more_refs && <footer>{show_more_refs}</footer>}
          </small>
        </Tooltip>
      </div>
    )
  }
}

/** OMIT TAGS/ALIAS for now
   <Tooltip
    id="${tooltip_id}"
    place="right"
    clickable
  >
    <small class="flex flex-row">
      ${num_tags && tags}
    </small>
  </Tooltip>
   */

//? THIS DOESN'T WORK AND DOESN'T GET TRANSFORMED BY REACTDOMSERVER'S STATIC RENDER FN - EVEN WHEN THIS WAS LEFT AS AN ACTUAL FC
/*
  return (
    notMarkup && (
      <>
        <Tooltip
          id={tooltip_id}
          place="top"
        >
          <dl>
            <dt>
              <code>{tooltip_key}</code>
            </dt>
            {tooltip_value && <dd>{tooltip_value}</dd>}
          </dl>
        </Tooltip>
        <Tooltip
          id={tooltip_id}
          place="bottom"
        >
          {ref_mdx ? (
            <div>
              ## References
              <ol>{ref_mdx.map((ref) => `<ul>${ref}</ul>\n`).join("")}</ol>
            </div>
          ) : (
            <div>No Refs</div>
          )}
        </Tooltip>
        <Tooltip
          id={tooltip_id}
          place="right"
        >
          <div>
            Tags: <code>TAG 1</code>
            <code>TAG 2</code>
            <code>TAG 3</code>
          </div>
        </Tooltip>
      </>
    )
  )
  */

/* Bad example below...
export function Preview_mdx(id: string, return_as_mdx?: boolean): string
export function Preview_mdx(id: string, return_as_mdx?: boolean): JSX.Element
export function Preview_mdx(id: string, return_as_mdx?: boolean) {
  // const tooltip_mdx = id_to_tooltop(id).trim()
  // const tooltip_id = `#tooltip__${id}`
  const tooltip_key = id_to_plaintext(id)
  const tooltip_value = id_to_plaintext(id)
  const ref_mdx = id_to_ref_mdx(id)
  const tooltip_id = `tooltip__${id}`

  if (!return_as_mdx)
    return (
      <>
        <Tooltip
          id={tooltip_id}
          place="top"
        >
          <div>
            <h1>
              <code>{tooltip_key}</code>
            </h1>
            {tooltip_value && <h2>{tooltip_value}</h2>}
          </div>
        </Tooltip>
        <Tooltip
          id={tooltip_id}
          place="bottom"
        >
          {ref_mdx ? (
            <div>
              ## References
              <ol>{ref_mdx.map((ref) => `<ul>${ref}</ul>\n`).join("")}</ol>
            </div>
          ) : (
            <div>No Refs</div>
          )}
        </Tooltip>
        <Tooltip
          id={tooltip_id}
          place="right"
        >
          <div>
            Tags: <code>TAG 1</code>
            <code>TAG 2</code>
            <code>TAG 3</code>
          </div>
        </Tooltip>
      </>
    )
  if (return_as_mdx)
    return `<>
  <Tooltip
    id=${tooltip_id}
    place="top"
  >
    <div>
      <h1>
        <code>${tooltip_key}</code>
      </h1>
      ${tooltip_value && <h2>{tooltip_value}</h2>}
    </div>
  </Tooltip>
  <Tooltip
    id=${tooltip_id}
    place="bottom"
  >
    ${
      ref_mdx ? (
        <div>
          ## References
          <ol>{ref_mdx.map((ref) => `<ul>ref</ul>\n`).join("")}</ol>
        </div>
      ) : (
        <div>No Refs</div>
      )
    }
  </Tooltip>
  <Tooltip
    id=${tooltip_id}
    place="right"
  >
    <div>
      Tags: <code>TAG 1</code>
      <code>TAG 2</code>
      <code>TAG 3</code>
    </div>
  </Tooltip>
</>`
}
*/
