import _ from "lodash"
import React from "react"
import { Tooltip } from "react-tooltip"
import { getTags } from "../../initDocs"
import { get_path_from_id } from "../data"
import {
  id_to_mdx,
  id_to_plaintext,
  id_to_ref_mdx,
  id_to_ref_mdx_jsx,
  id_to_tooltop,
} from "../utility"

interface PreviewProps {
  id: string
  notMarkup?: boolean
}

export default function Preview({ id, notMarkup }: PreviewProps) {
  // const tooltip_key = id_to_mdx(id, "key", { safe: true, jsx: true })
  const tooltip_value = id_to_mdx(id, "value", { safe: true, jsx: true }) || ""
  const ref_mdx = id_to_ref_mdx_jsx(id)
  const ref_arr =
    ref_mdx
      ?.filter((ref) => typeof ref === "string" && ref.length > 0)
      .map((ref) => `<li><cite>${ref}</cite></li>`) || []
  const ref_l = ref_arr.length
  const ref_show_l = 3
  const ref_has_more = ref_show_l < ref_l
  const ref_top =
    ref_show_l && ref_show_l < ref_l
      ? ref_arr.slice(0, ref_show_l).join("")
      : ref_arr
  // const ref_bot = ref_arr.slice(ref_show_l).join("")
  // const is_ref_bot = ref_bot.length
  // const aka = ""
  const ref_path = get_path_from_id(id)
    ? get_path_from_id(id) + "#references"
    : undefined

  const tooltip_id = `preview__${id}`
  // const tags =
  //   getTags(id)
  //     ?.map(
  //       (tag) =>
  //         `<code class="rounded-full h-10"><Link to="/docs/tags/${_.kebabCase(
  //           tag
  //         )}">${tag.trim()}</Link></code>`
  //     )
  //     .join("") || ""
  // const num_tags = getTags(id)?.length || ""
  //! manually rendering to static markup since renderToStaticMarkup() is not working right...
  if (!notMarkup && tooltip_value.length) {
    return `
  <Tooltip
    id="${tooltip_id}"
    place="top"
    clickable
  >
      <small>\n\t<blockquote class="font-extrabold">\n\t<span>${tooltip_value}</span></blockquote>\n<h6>${
      ref_l
        ? `<cite class="text-xs">Cited ${ref_l} time${
            ref_l > 1 ? "s" : ""
          }</cite></h6>\n<ol>${ref_top}</ol>`
        : ""
    }${
      ref_has_more
        ? `<Link to="${ref_path}">View ${ref_l - ref_show_l} more Refs</Link>`
        : ""
    }
      </small></Tooltip>
  `
    //! somehow </small></Tooltip> is being return & written to mdx TWICE - sometimes with sections of incomplete pieces of refs html - how is that even possible? This may hint at a serious engine bug - possibly a bad optimizing assumption from the compiler?
    if (!tooltip_value.length) return "" // should never return here - keep as future guard clause
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
}

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
