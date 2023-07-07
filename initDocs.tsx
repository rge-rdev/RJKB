/**
 * Copyright(c) Roger Jiang
 */

import fs from "fs-extra"
import { uptime } from "process"
import {
  root_main_topic_ids,
  getDoc,
  id_to_key_slug,
  getChildren,
  getAliasIDs,
  getAliasSlugs,
  getParentId,
  getRefIDs,
  get_path_from_id,
  hasRefs,
  hasChildren,
  isLeaf,
  getNonOrphanTags,
  id_to_source_mdx,
  getMinUID,
  getDateUpdated,
  id_to_min_slug,
  getUIDSlug,
} from "./src/data/"
import { id_to_mdx, id_to_plaintext, LOG_CLI_PROGRESS } from "./src/utility"
import escapeRegExp from "lodash/escapeRegExp"
import uniq from "lodash/uniq"
import uniqWith from "lodash/uniqWith"
import {
  getPreviewImports,
  get_map_all_static_preview_tsx_length,
} from "./src/components/Preview"
import axios from "axios"

const {
  TYPESENSE_PROTOCOL,
  TYPESENSE_SERVER,
  TYPESENSE_PORT,
  TYPESENSE_API_KEY,
  APPLICATION_ID,
  MAP_SIZE,
  TS_PUT_REQS,
  TS_PUT_DELAY,
  DOCS_BASE,
  SLUG_SIZE,
  LOG,
  MAIN_UID,
} = require("dotenv").config().parsed

let debug_keywords: any[] = []
let debug_tags: any[] = []
let ouput_docsearch_alias: string[] = []

let num_docs = 0
let num_skipped = 0
// let num_links = 0
let num_tags = 0
// let num_axios_put_reqs = 0
let num_alias_redirect_mdx = 0 // deprecated
let num_preview_refs = 0 //? # times a preview tsx was referenced by a mdx doc
let num_doc_refs = 0 //? # times a doc was referenced inside a mdx doc as a main/child/ref

const __DOC_LENGTH = +MAP_SIZE //8457

/**
 * recursive dir & md docs init loop
 *
 * @function generate_mdx_page_from_id used to @effect
 *
 *
 *
 * !YUCK - need to clean bad input of illegal reserved JS characters for compat with mdx-loader AND handle broken chunks
 *  ✅ fixed @function id_to_tags to .replace unescaped " & ' in middle of string
 *  ✅ fixed @function id_to_mdx with extra @param config.safe to refactor extra string - important to allow non-safe escaping since  I still need the raw unescaped JSX/code snippets to render elsewhere
 *
 *  TODO: refactor duplicate regex transforms into helper //? although, admittedly it's easier keeping all the logic in one single place - and these regex patterns mostly don't apply elsewhere - maybe just refactor up a level && keep it function scope
 *  TODO: run prettier format on transformed mdx after its created - OR while it's still a template string? !ONLY if it doesn't hurt perf
 *
 * @param id
 * @returns
 */

export const map_all_tags: Map<string, string[]> = new Map()
export const getTags = (id: string) => map_all_tags.get(id)
export const map_all_routes: Map<string, string[]> = new Map()
export const getRoute = (id: string) => map_all_routes.get(id)

const show_extra_debug_yaml = false

const bing_max_title_limit = 70

// I could programmatically generate the following with variant spacers but its far simpler/faster to just bash it out now
//? Also, even though I should perhaps collocate utilities in src/utility - it seems neater to collocate helper here, especially since it's single-use
const map_affix_title = new Map([
  [5, "|RJKB"],
  [6, "| RJKB"],
  [7, " | RJKB"],
  [8, "|Dev Wiki"],
  [9, "| Dev Wiki"],
  [10, " | Dev Wiki"],
  [15, "|FullStack Wiki"],
  [16, "| FullStack Wiki"],
  [17, " | FullStack Wiki"],
  [19, "|FullStack Dev Wiki"],
  [20, "| FullStack Dev Wiki"],
  [21, "|FullStack Dictionary"],
  [22, "| FullStack Dictionary"],
  [23, " | FullStack Dictionary"],
  [25, "|FullStack Dev Dictionary"],
  [26, "| FullStack Dev Dictionary"],
  [30, "|FullStack Dev Wiki Dictionary"],
  [31, "| FullStack Dev Wiki Dictionary"],
  [32, " | FullStack Dev Wiki Dictionary"],
])

const map_affix_description = new Map([
  [5, "|Wiki"],
  [6, "| Wiki"],
  [7, " | Wiki"],
  [9, "|Dev Wiki"],
  [10, "| Dev Wiki"],
  [11, " | Dev Wiki"],
  [13, "|web-Dev Wiki"],
  [14, " |web-Dev Wiki"],
  [15, "|FullStack Wiki"],
  [16, "| FullStack Wiki"],
  [17, " | FullStack Wiki"],
  [18, " | Full-Stack Wiki"],
  [21, "|FullStack Wiki by RJ"],
  [22, " |FullStack Wiki by RJ"],
  [23, " | FullStack Wiki by RJ"],
  [24, "|FullStack Wiki by Roger"],
  [25, " |FullStack Wiki by Roger"],
  [26, "|FullStack Wiki by Roger J"],
])
// Unless the page is really thin on content - my name should not be plastered all over the head tags!

function get_affix_title(
  input_str: string,
  _map: Map<number, string>,
  bing_title_max_limit: number
) {
  const title_length = input_str.length
  const min_tag_l = [..._map.keys()][0] // elegant solution to find min length from unordered map (assumes initial position is lowest num)
  if (title_length - min_tag_l > bing_title_max_limit) return input_str
  let title_space_remaining = bing_title_max_limit - title_length
  let found = false
  while (found === false && title_space_remaining > 0) {
    const match = _map.get(title_space_remaining)
    if (match) return input_str + match
    if (!match) title_space_remaining -= 1
  }
  return input_str //fallback in case no string match was mapped
}

function generate_mdx_page_from_id(
  id: string,
  slug_key: string,
  filepath: string
) {
  let title = id_to_plaintext(id)?.replace(/"/g, `'`) //.replace(/\\/g, `&#92;`)
  num_doc_refs += 1
  const title_illegal_unicode = title?.match(/\\(x|u)/)?.length
  let title_mdx = title
  if (title_illegal_unicode)
    title_mdx = `<code>\u005C\u2028\${title_mdx}</code>`
  const title_yaml = title?.replace(/\\/g, "\\u005C\\u2028").trim() || "" //(/\\/g, `\\\\`) || ""
  // alternatively, infer YAML-safe title from slug //! BUT this loses \ in terms
  //? why is \\u005c\\u005c (which appears as \u005c\u005c in mdx) OK but NOT \\ (in MDX)?! Makes no sense - must be some quirk with mdx-loader/docusaurus parser
  const title_has_line_breaks = Boolean(title?.match(/[\n]+/)?.length)
  let value_mdx = id_to_mdx(id, "value", {
    safe: true,
    preview: true,
    // jsx: true,
  })
  let title_source_mdx = id_to_source_mdx(id)
  //? KEEP TITLE & VALUE as plaintext && MARKDOWN - to allow docusaurus to add to TOC - ANY JSX will break this

  const value_mdx_newLine = value_mdx?.match(/([\n])+/g)?.length
  const value_mdx_code = value_mdx?.match(
    /^([ ]*export |[ ]*import )/gm
  )?.length
  const value_mdx_link =
    DOCS_BASE === "docs"
      ? value_mdx?.match(/(]\((\/docs|\.)\/[a-zA-Z-/]*)\)/gm)?.length
      : value_mdx?.match(RegExp(`(]\((/${DOCS_BASE}|\.)/[a-zA-Z-/]*)\)`, "gm"))
          ?.length
  if (value_mdx_newLine && value_mdx_code && !value_mdx_link)
    value_mdx = `\`\`\`tsx\n\n${value_mdx}\n\n\`\`\`\n`

  const alias_ids = getAliasIDs(id) // return string[] | []
  const alias_slugs = getAliasSlugs(id).filter((slug) => slug.length > 0) // return string[] | []
  //! use filepath to infer parent tags from path

  let tags = getNonOrphanTags(id) || []

  //! new quirk discovered - \abc === abc as a tag - which was the cause of the duplicate route error - docusaurus won't render backslash
  //! quirk "Unicode/other escape" === "Unicode other escape" as a tag!
  //? keep strings with identical characters but different cAsEs
  const default_keywords = [
    "define",
    "definition",
    "ELI5",
    "explain",
    "what is",
    "How to",
  ]

  // switch order to put order for term > aliases > tags > defaults - just in case SEO cares about the order!
  let keywords = uniq(
    ["", ...alias_slugs, ...tags, ...default_keywords].filter(
      (s) => typeof s !== "undefined" && s && s.length > 0
    )
  )
  // map_all_tags.set(id, tags)
  //! DEDUP tags but KEEP dup for max SEO

  debug_keywords.push(keywords || "___NOTHING")
  debug_tags.push(tags)
  if (tags) num_tags += tags.length
  //?is "is" better than "=" for SEO? "=" makes more sense grammatically, and also should be what appears in the search results.
  let meta_title = `${title_yaml}${
    alias_slugs.length
      ? ` aka ${alias_slugs.join(", ").replace(/!/g, "\\!")}` //? low priority to add & for last alias
      : ""
  }${
    id_to_plaintext(id, "value")
      ? " = " +
        id_to_plaintext(id, "value")?.replace(/"/g, `'`).replace(/\\/g, `&#92;`)
      : ""
  }`.slice(0, 70) //? to appease our inferior bing overlords
  const meta_title_prefix = "Define "
  if (meta_title.length + meta_title_prefix.length <= bing_max_title_limit)
    meta_title = meta_title_prefix + meta_title
  if (meta_title.length < bing_max_title_limit - 5)
    meta_title = get_affix_title(meta_title, map_affix_title, 70)
  if (meta_title.length < 15)
    meta_title = `Define ${meta_title} | FullStack Wiki for Fullstack Devs` //? to appease our inferior bing overlords
  // const title_match_ref = `[\`${title}\`](`
  const alias_mdx_arr = alias_ids.map((id) =>
    id_to_mdx(id, "key", { safe: true })
  )

  const title_alias_str = [title, ...alias_mdx_arr]
    .map((str) => escapeRegExp(str).trim())
    .join("|")
  const re_title_alias_ref = new RegExp(
    `\\[(\`(${title_alias_str})\`)\\]\\(`,
    "g"
  )
  const alias_synonyms = uniq(
    alias_mdx_arr
      .map((a) => a?.trim().replace(/`/g, ""))
      .filter((alias) => alias !== undefined && alias.length > 0)
  ) as string[] | []

  if (alias_synonyms.length > 1)
    ouput_docsearch_alias.push(
      `["${title}", ${alias_synonyms.map((alias) => `"${alias}"`).join(`, `)}]`
    )
  const child_jsx = false

  //TODO fix identical child skip check
  // const title_mdx = id_to_mdx(id, "key", { safe: true })?.replace(/(?<=])\([a-zA-Z\\ -_/]+\)$/, "")

  function remove_middle_backticks(str: string) {
    // return str.replace(/(?<=^`.*)`(?=.*`$)/g, "")
    return str.replace(/(?<=^`.*)`(?=.*`)/g, "")
  }

  const child_text_array = getChildren(id)?.map((child_id) => {
    let v = id_to_mdx(child_id, "value", {
      safe: true,
      preview: true,
      jsx: child_jsx,
    })?.trim()
    const k_preview_if_no_v = !v //? Show preview for K if there is only key value - usually this is for children with single sentence/paragraph descriptions
    let k = id_to_mdx(child_id, "key", {
      safe: true,
      preview: k_preview_if_no_v,
      jsx: child_jsx,
    })?.trim() //! No point showing preview for child keys since their values will be shown next here anyway!
    if (k) num_doc_refs += 1
    if (k === "Status") return ""
    if (child_jsx) {
      if (k && v) return `<h2>${k}<span> ↔ </span>${v}</h2>`
      if (k) return `<h2>${k}<span></h2>`
      if (!k) return ""
    }
    const child_source = id_to_source_mdx(child_id)
    let skip_k = k?.length === 0 || k?.match(/^contains:/)?.length

    const k_code = k?.match(/^(```)/gm)?.length
    const v_code = v?.match(/^(```)/gm)?.length

    const k_link =
      DOCS_BASE === "docs"
        ? k?.match(/]\((\/docs|\.)\/([0-9a-zA-Z-/]*)\)/gm)?.length
        : k?.match(RegExp(`]\((/${DOCS_BASE}|\.)/([0-9a-zA-Z-/]*)\)`, "gm"))
            ?.length
    const v_link =
      DOCS_BASE === "docs"
        ? v?.match(/]\((\/docs|\.)\/([0-9a-zA-Z-/]*)\)/gm)?.length
        : v?.match(RegExp(`]\((/${DOCS_BASE}|\.)/([0-9a-zA-Z-/]*)\)`, "gm"))
            ?.length

    const k_leaf = isLeaf(child_id)

    const k_newLine = k?.match(/(\n)+/g)?.length
    const v_newLine = v?.match(/(\n)+/g)?.length

    const k_illegal = k?.match(/^([ ]*export |[ ]*import )/gm)?.length
    const v_illegal = v?.match(/^([ ]*export |[ ]*import )/gm)?.length

    const k_img = k?.match(
      /((\!\[[a-zA-Z0-9_-]+]\(@site\/static\/(files|img)\/([a-zA-Z0-9-_\.]+)\))|(<Image[ \n]+img={require\('([@a-zA-Z0-9-_\./]+)'\)}[ \n]*\/>))/gm
    )?.length // not working?
    //!added [ ]* to account for accidental whitespace before export/import which will get formatted out by prettier later

    const k_inlineCode = k?.match(/<code>.*<\/code>/)?.length

    let k_path = get_path_from_id(child_id)
    // const k_without_code = k?.[0] !== "`" && k?.[k.length - 1] !== "`"

    if (!k_code && (k_newLine || k_illegal) && !k_img && !k_link) {
      k = `\n\n\`\`\`tsx\n${k}\n\`\`\`` //! escape ` inside template literal too!
    }

    if (!v_code && (v_newLine || v_illegal) && !v_link)
      v = `\n\n\`\`\`tsx\n${v}\n\`\`\``
    // if (v_code && v_illegal)
    v?.replace(/^(export(?= )|import(?= ))/gm, "<code>$1</code> ")

    //? TODO: make prettier ignore every single (long) regex line
    // prettier-ignore
    k = k?.trim().replace(/^((export(?= )|import(?= ))(( default function| function| async function| const| var| let)|(?= )))/, "<code>$1</code> ")
    // prettier-ignore
    v = v?.trim().replace(/^((export(?= )|import(?= ))(( default function| function| async function| const| var| let)|(?= )))/, "<code>$1</code> ")

    if (k && v && !skip_k) {
      // k = k_without_code ? `\`${k}\`` : k //! prefix extra escape here ONLY if not already exists
      /*
      k =
        k_without_code && !k_link && !k_inlineCode
          ? `\`${k.replace(/`/g, "")}\``
          : k //! replace ` due to # `\x` and other quirks with mdx breaking things! but <code> still fine
      */
      k =
        k_path && !k_link && !k_leaf
          ? `[${remove_middle_backticks("`" + k.trim() + "`")}](${k_path})`
          : k
      return `${
        k_code || k_illegal || k_newLine || k_img ? "" : "## "
      }${k}\n\n${
        v_code || v_newLine ? "" : "" //skip ## headers for value content? keep the value code/newline check for future use
      }${v}\n\n${child_source}`
    }
    const recheck_code = k?.match(/^(```)/gm)?.length
    //.replace(/(\*\*_)?)(?=.*(\3\2))/g, "$1`")
    //.replace(/((\*\*)?(_)?)(?=.*(\3\2))/g, "`$4")
    if (k && !v && !skip_k) {
      const k_bold_markup = k.match(/(\*\*)(?=.*\*\*)/g)?.length
      return !recheck_code && !k_link && !k_img && !k_inlineCode && !k_leaf
        ? k_path
          ? `[${!k_bold_markup ? "`" : ""}${k.replace(/`/g, "")}${
              !k_bold_markup ? "`" : ""
            }](${k_path})\n\n`
          : `${!k_bold_markup ? "`" : ""}${k.replace(/`/g, "")}${
              !k_bold_markup ? "`\n\n" : ""
            }`
        : `${
            !k_img && !recheck_code && !k_leaf ? "## " : ""
          }${k}\n\n${child_source}`
    }
    if (!k && v) return `\n\n${v}${child_source}`
    return ""
  })

  const ref_jsx = false

  let ref_ids_arr = getRefIDs(id) || [] //["PLACEHOLDER REF_ID1", "REF_ID2_FOR", "REF_ID3_DEBUG"]
  const references = ref_ids_arr
    .map((ref_id) => {
      let k = id_to_mdx(ref_id, "key", { safe: true, jsx: ref_jsx })?.replace(
        re_title_alias_ref,
        "[**_$1_**]("
        // `[**_${title_match_ref.slice(1, -2)}_**](`
      )
      if (k) num_doc_refs += 1
      let v = id_to_mdx(ref_id, "value", {
        safe: true,
        preview: true,
        jsx: ref_jsx,
      })?.replace(re_title_alias_ref, "[**_$1_**](")

      if (ref_jsx) {
        if (k) return `<li>${k}${v ? ` ↔ ${v}` : ""}</li>`
        if (!k) return ""
      }

      const k_code = k?.match(/^(```)/gm)?.length
      const v_code = v?.match(/^(```)/gm)?.length

      const k_link =
        DOCS_BASE === "docs"
          ? k?.match(/]\((\/docs|\.)\/([0-9a-zA-Z-/]*)\)/gm)?.length
          : k?.match(RegExp(`]\((/${DOCS_BASE}|\.)/([0-9a-zA-Z-/]*)\)`, "gm"))
              ?.length

      const k_newLine = k?.match(/(\n)+/g)?.length //! check if I want escaped new line or actual new line
      const v_newLine = v?.match(/(\n)+/g)?.length

      const k_illegal = k?.match(/^([ ]*export |[ ]*import )/gm)?.length
      const v_illegal = v?.match(/^([ ]*export |[ ]*import )/gm)?.length

      const k_img = k?.match(
        /((\!\[[a-zA-Z0-9_-]+]\(@site\/static\/(files|img)\/([a-zA-Z0-9-_\.]+)\))|(<Image[ \n]+img={require\('([@a-zA-Z0-9-_\./]+)'\)}[ \n]*\/>))/gm
      )?.length //! Added Ideal Image regex - still need to test/confirm Ideal Image file size bug is worth it

      if (
        !k_code &&
        (k_newLine || k_illegal) &&
        !k_link &&
        typeof k?.trim()?.length === "number" &&
        k?.trim()?.length > 20
      ) {
        k = `\n\n\`\`\`tsx\n${k}\n\`\`\`` //! escape ` inside template literal too!
      }

      if (!v_code && (v_newLine || v_illegal)) v = `\n\n\`\`\`tsx\n${v}\n\`\`\``
      v = v?.replace(/^(export(?= )|import(?= ))/gm, "<code>$1</code> ")
      const k_inlineCode = k?.match(/<code>.*<\/code>/)?.length
      if (k && v) {
        const k_path = get_path_from_id(ref_id) //! map_id NOT id!!

        if (k[0] !== "`" && k[k.length - 1] !== "`" && !k_link && !k_inlineCode)
          k = `\`${k}\`` //!prevent ``` being accidentally created inline - which breaks mdx!
        k = k?.replace(/^(export(?= )|import(?= ))/gm, "<code>$1</code> ")
        k = k_path && k.length && !k_link ? `[${k}](${k_path})` : k

        return `${k_code || k_illegal || k_newLine || k_img ? "" : ""}${k} ↔ ${
          v_code || v_newLine ? "" : ""
        }${v}\n`
      }
      // if (k && !v) return `${k_code || k_newLine || k_img ? "" : ""}${k}\n\n`
      // if (!k && v) return `\n\n${v}`
    })
    .filter((str) => str !== undefined)

  const child_summary = getChildren(id)
    ?.map(
      (child_id) =>
        id_to_plaintext(child_id, "key")
          ?.trim()
          .replace(/\\(?=[^0xu]{1})/g, "\\\\")
          .replace(/\\(?=[0xu]{1})/g, `\\\\​`) //!<- ZERO-WIDTH SPACE!
    )
    ?.filter(
      (c) =>
        c && c !== "Aliases" && c !== "Size" && c !== "Status" && c.length > 0
    )
  let description = `${title_yaml}${
    id_to_plaintext(id, "value")
      ? " is defined as: " +
        id_to_plaintext(id, "value")
          ?.replace(/"/g, `'`)
          .replace(/\\(?=[^0xu]{1})/g, `\\\\`)
          .replace(/\\(?=[0xu]{1})/g, `\\\\​`) //!<- ZERO-WIDTH SPACE!
          .trim()
      : ""
  }. Topics on: ${
    child_summary ? child_summary.join(", ") : ""
  }. Read more: ${tags.map((w) => `${w}`).join(", ")}`
    .trim()
    .replace(/"/g, "'")
    .slice(0, 160) //? to appease our inferior bing overlords
  description = get_affix_title(description, map_affix_description, 160)
  //? .replace(/\\(?=[0xu]{1})/g, `\\\\\\\\`) to fix unicode literals to end up in meta description - but still pass through mdx-loader, other parsers, etc. Maybe simpler to just directly inject own string literals into <head> - but going to stick within confines of docusaurus for now.
  //! \0 of \xxx comes out as \\0 & \\xxx in description - not great but acceptable.
  //!! changed \0 to \​0 with ZERO-WIDTH SPACE! - still occupies one extra char but

  const id_min = getMinUID(id)
  const slug = getUIDSlug(id)

  const output_mdx = `---
${
  title && title !== null && title !== undefined ? `title: "${title_yaml}"` : ""
}
${
  meta_title && meta_title !== null && meta_title !== undefined
    ? `meta_title: "${meta_title}"`
    : ""
}
${
  description && description !== null && description !== undefined
    ? `description: "${description}"`
    : ""
}
tags: [${tags.map((w) => `"${w}"`).join(", ")}]${
    keywords.length > 0
      ? `\nkeywords: [${keywords.map((w) => `"${w}"`).join(", ")}]`
      : ""
  }${
    show_extra_debug_yaml
      ? `
alias IDs: [${alias_ids.join(", ")}]
aliases: [${alias_slugs.join(", ").replace(/!/g, "\\!")}]
references: [${ref_ids_arr.join(", ")}]
filepath: "/${filepath}"
route: "http://localhost:3000/${filepath.split("/").slice(0, -1).join("/")}"`
      : ""
  }
slug: /${slug}
id: ${id_min}
last_update:
  date: ${getDateUpdated(id)}
  author: Roger Jiang
---

${
  title_has_line_breaks
    ? `${title}${value_mdx ? `\n\n${value_mdx}` : ""}`
    : `# [${
        title_illegal_unicode ? title_mdx : `\`${title_mdx?.trim()}\``
      }](${slug}) ${
        value_mdx ? `${value_mdx_newLine ? "\n\n" : " ↔ "}${value_mdx}` : ""
      }`
}${title_source_mdx}${
    alias_slugs.length ? `\n\n *aka* ${alias_slugs.join(", ")}` : ""
  }${
    child_text_array ? "\n\n" + child_text_array.join("") : ""
  }\n\n## References\n\n${
    ref_jsx
      ? `${references.length ? `<ol>${references.join("")}</ol>` : ""}`
      : references.map((ref, i) => `${i + 1}. ${ref}\n`).join("")
  }`

  const re_preview_ids =
    /(?<=\[<span data-tooltip-id="preview__)([a-zA-Z0-9]+)(?=">)/g
  const ids_with_preview = uniq(output_mdx.match(re_preview_ids)) || []

  // const preview_mdx = getStaticPreviews(ids_with_preview)
  const preview_mdx = getPreviewImports(ids_with_preview)
  if (preview_mdx) num_preview_refs += preview_mdx.length

  return output_mdx + "\n\n" + preview_mdx?.join("\n\n")
}
/**
 * !EXTREME PAIN - After testing and assessing MDXJS for a while - it seems to have TERRIBLE - and worst of all, INCONSISTENT ability to parse MDX & JSX when used inline
 *    !SIMPLY NOT WORTH THE EFFORT and complex REGEX to patch and fix every single quirk - For the purposes of this SSG script - rendering pure jsx should just be fine and perhaps better to avoid all these BAD PARSING LOGIC BUGS. Even though these parsing fails have been supposed been patched in v2 of MDXJS - docusaurus remains stuck in v1 for the time being.
 * TODO: MUST MIGRATE all programmatically generated doc files into jsx to avoid terrible MDX loader
 *
 * PAINFUL: to find fix for the extra commas in array map to string in MDX - need to use .join(",") instead of .toString()!!
 * !MUST postfix .map with .join(", ") to prevent docusaurus/mdx-loader1.0 to inject extra annoyingly unhelpful commas!
 *
 * PAINFUL: for some stupid reason arrays get turn back into comma separated lists by Docusaurus MDX loader?!
 * !MUST double wrap string[] for docusaurus/mdx-loader1.0 to properly render front matter as string[]
 *
 * PAINFUL: every single string[] needs to be rejoined by ", " to add extra space separater else docusaurus/mdx-loader dumb parser will throw without extra space (which for some reason it removes by itself!)
 * !MUST .join(", ") every string[] for front matter!
 *
 * PAINFUL: Docusaurus/MDX-Loader1.0 will throw if title or description doesn't have double quotes wrapping them in the final front matter!
 * ?!MUST wrap title & description with double quotes in front matter!
 *
 * NOW: THIS - WTF?!
 * [ERROR] Error while parsing Markdown front matter.
 * This can happen if you use special characters in front matter values (try using double quotes around that value).
 *
 * !ID over-rides sidebar route generation
 * Adding "UID" frontmatter attribute to track original JSON DB ID
 *
 * !IMPORTANT rules to avoid breaking YAML Front Matter
 *  - AVOID unescaped \ inside YAML! - pass @const title_safe for YAML but keep unescaped @const title for content @
 *
 */

let num = 0

const template_mdx = `---
aliases: [abc, def]
description: My template for mdx
keywords: [123,345]
tags: [Hello, TS, React]
---

## ALL BOILERPLATE MDX AUTO-GENERATED BY SCRIPT

:::danger
Through painful trial and error - the following are examples of SSG rendered front matter that breaks yaml loading

Most of illegal characters can be fixed with extra quotes - APART from extra quotes being themselves!

\`\`\`yaml title="illegal characters for YAML Front Matter"
tags: ["contains:'Extra' unescaped quotes inside"]
keywords: ["contains:'Extra' unescaped quotes inside"]
keywords: []
keywords: [\`wasd\`]
keywords: [123]
keywords: [!_wordsbeginngingwith_!]
keywords: [>_RIGHT_ANGLE_BRACK_IS_NOT_FINE]

\`\`\`

:::

:::important
This is how the FINAL yaml should appear inside mdx - so it needs DOUBLE escaping to render correctly within SSG!
That means to output \`\\\\\` it needs to be sent as \`\\\\\\\\\`!

\`\`\`yaml title="SAFE characters for YAML Front Matter"
tags: []
keywords: [\`wasd\`]
keywords: [123]
keywords: ["!_exclamation_in_quotes_is_fine"]
keywords: [<_LEFT_ANGLE_BRACKET_IS_FINE]
keywords: [">_RIGHT_ANGLE_BRACKET_IN_QUOTES_IS_FINE"]
tags: ['contains:\\\\"Extra\\\\" escaped quotes inside']
keywords: ['contains:\\\\"Extra\\\\" escaped quotes inside']
\`\`\`

:::

:::important
MDX is just syntactic sugar over React.createElement calls - so no unsafe characters* are allowed!
Additional certain keywords are parsed by mdx-loader - so must never be mixed as plaintext.

This is even the case, if it normally works in regular React apps

\`\`\`yaml title="UNSAFE characters for MDX (as plaintext) must be escaped!"
<>
<></>
<!DOCTYPE>
Any<Typeof_TS_Generics>
import // @new line - special reserved word for mdx-loader
export // @new line - special reserved word for mdx-loader
\`\`\`

:::

## List of safe JS keywords to start new lines with in mdx:

module

module.exports

module.exports =

module.exports = {}

require

require()

var

Import < NOT CASE SENSITIVE!

IMPORT


## List of UNSAFE JS Keywords in MDX

\`\`\`tsx
import
export
<anyanglebracketswithoutterminating>
Any.Typescript<angleBracketNotation>
\`\`\`

- [link back to home](/)
\`\`\`
- [link back to home](/)
\`\`\`
- [link to google](https://www.google.com)
\`\`\`
- [link to google](https://www.google.com)
\`\`\`
- [link to \`src/pages/intro\`](/intro)


\`\`\`
- [link to \`src/pages/intro\`](/intro)
\`\`\`
- [link to \`src/pages/redirect\`, which redirects to /${DOCS_BASE}/react](/redirect)

- [link to \`/${DOCS_BASE}/intro\`](/${DOCS_BASE}/intro)
- [link to \`/${DOCS_BASE}/JS/JS-Definition\`](/${DOCS_BASE}/JS/JS-Definition)

## [<pre><code>\</code><code>xxx</code></pre>](/${DOCS_BASE}/JS/JS-Language/Object/RegExp/RegExp-Syntax/body-of-RegExp-expression-abc-inside-abc/Atom/Character-Escape/Unicode-other-escape/xxx)

## Load from \`docusaurus.png\` from \`@site/static/img/docusaurus.png\`

![random puppy](@site/static/img/docusaurus.png)

## A random puppy avatar from Unsplash!

![random puppy](https://source.unsplash.com/300x300/?puppy)

# TITLE - H1 will not appear in TOC

## Only H2 (and H3) will appear in TOC

### Only H3 (and H2) will appear in TOC

## ADD ALL global exports to \`src/theme/MDXComponents.tsx\`

\`\`\`tsx
import React from "react"
// highlight-next-line
import MDXComponents from "@theme-original/MDXComponents"
import { Redirect } from "@docusaurus/router"

export default {
  // highlight-next-line
  ...MDXComponents,
  Redirect,
}
\`\`\`

### Now just Add \`<Redirect to"\\whatever" />\` to mdx!

## Tables

| Col1 | Col2 |
| ---- | ---- |
| A    | B    |
| C    | D    |

## References

1. [Link to Docusaurus Docs Guide Section](https://docusaurus.io/docs/category/guides)
2. wasd
3. wasd2`

fs.outputFile("docs/intro.mdx", template_mdx)

function RedirectMDX(redirect_path: string) {
  return `---
unlisted: true
---
<Redirect to="${redirect_path}" />`
}

/**
 * !Find alternative way to redirect aliases - instead of <Redirect />

*
 * @param id
 * @param dirpath
 */

async function generate_id_redirect(alias_path: string, redirect_path: string) {
  const redirect_mdx = RedirectMDX(redirect_path)
  try {
    await fs.outputFile(alias_path, redirect_mdx)
    num_alias_redirect_mdx += 1
  } catch (error) {}
}

// push arrays to debug & keep track of appended slugs & paths
let slug_key_arr = [""]
let long_slugs_arr: string[] = []
slug_key_arr.pop()
let __plaintext__id_array = [""]
__plaintext__id_array.pop()

/**
 * @function loop_docs_mkdir to @function fs.outputFile()
 *
 * @param parent_path to pass parent dir as props
 * @param children to pass child_id_string[] to loop over
 */

async function loop_docs_mkdir(
  parent_path: string,
  children: string[],
  skip?: boolean
) {
  children.forEach(async (id, i) => {
    // Test if node reachable
    if (id === "y5hFD38xf2fcXxRup") {
      // if (id === "H5Cmy6FwRRqez2G9h") {
      // "H5Cmy6FwRRqez2G9h",
      // "8beEDK3gMvivxf4m5",
      // "2Th3Qvp64zAFRbFsF",
      // "HfY4t5utbQCSmnHmz"
      console.log("REACHED")
      process.exit()
    }
    // console.log("Intializing dir for docs")
    const title = id_to_plaintext(id)
      ?.replace(/"/g, `'`)
      .replace(/\\/g, `&#92;`)
    const title_has_line_breaks = Boolean(title?.match(/[\n]+/)?.length)

    const doc = getDoc(id)
    if (!doc) return
    // const slug_key = id_to_key_slug(id)
    const slug_key = id_to_min_slug(id)
    const min_key = i.toString(36) //!
    if (!slug_key) return
    const filepath = `${parent_path}/${min_key}/${min_key}.mdx` //? SAME dir/file.mdx is mandatory?!
    const dirpath = `${parent_path}/${min_key}`
    // const min_doc_slug = getMinUID(id)
    // if (!min_doc_slug) return
    // const filepath = `docs/${min_doc_slug}.mdx`
    // const dirpath = `docs/${min_doc_slug}`
    // console.log(`create new file: ${filepath} at "${dirpath}" for ID: ${id}`)
    // console.log("filepath=", filepath)
    // console.log("dirpath=", dirpath)
    num += 1
    // process.stdout.write(`#${num} Writing ${file} to ${dirpath}`)
    // console.log(num)
    LOG_CLI_PROGRESS(
      num,
      __DOC_LENGTH,
      // 8457 + 1,
      // map_size,
      "docs",
      "SSG MDX",
      "⏳ ✍ ",
      "✅ MDX",
      init_mdx_map_time,
      `${num} MDX with ${num_tags} tags,`,
      `${get_map_all_static_preview_tsx_length()} Preview TSX,`,
      ouput_docsearch_alias.length,
      `sets of synonyms in ${(uptime() - init_mdx_map_time).toFixed(2)}s`
      // num_alias_redirect_mdx,
      // "Alias Redirect MDX"
    )
    const prev_slug = dirpath.split("/").slice(0, -1).pop()

    const debug_slug = true
    if (slug_key && debug_slug) slug_key_arr.push(slug_key)
    if (num === __DOC_LENGTH && debug_slug) {
      try {
        // console.table(slug_key_arr)
        const slug_key_mdx = slug_key_arr.join("\n")
        // await fs.outputFile(`test/slug-keys.mdx`, slug_key_mdx)
        process.stdout.write(
          `output ${long_slugs_arr.length} url slugs over ${SLUG_SIZE} chars to test/slug-keys.mdx\n`
        )
        fs.outputFileSync(`test/slug-keys.mdx`, slug_key_mdx)
      } catch (error) {}
    }
    const omit_check = true
    const pop_parent_path = parent_path
    const parent_slug = pop_parent_path.split("/").pop()
    const use_react_router_redirects = false
    const use_node_put_to_typesense_server = TS_PUT_REQS === "YES"
    const axios_delay = +TS_PUT_DELAY

    if (slug_key === "Aliases" || slug_key === "aliases") {
      const parent_id = getParentId(id) || ""

      if (use_react_router_redirects) {
        const alias_slugs = getAliasSlugs(parent_id)
        // console.log(`parent_slug: ${parent_slug} alias_slugs:${alias_slugs}`)

        alias_slugs.forEach((alias_slug) => {
          const alias_filepath = `${parent_path}/${alias_slug}.mdx`
          //! Add extra step to ensure alias does not clash with sibling slug - such as /Bittorrent/Torrent.mdx clash with /Bittorrent/torrent/torrent.mdx - only docusaurus prod build throws on error - client build allows silent fail - bad detection, will only warn and then break during SSG phase at 92% progress after 2+hrs!
          // console.log(alias_filepath)
          //! alias_slug !== parent_slug TAKES CASE INTO CONSIDERATION!

          if (
            alias_slug.toLowerCase() !== parent_slug?.toLowerCase() &&
            alias_slug.toLowerCase() !== "index" //! Add skip to index alias here
          )
            generate_id_redirect(
              alias_filepath,
              `/${parent_path}?alias=${alias_slug}`
            )
          //! Must add extra slash to ensure router path relative to root!
          //! Forgot to avoid duplicate alias slug overriting parent!
        })
      }
      if (use_node_put_to_typesense_server) {
        // const parent_slug = id_to_key_slug(parent_id)?.toLowerCase()
        const parent_slug = id_to_min_slug(parent_id)
        const parent_mdx = id_to_mdx(id, "key", { safe: true })
        const synonym_collection = `${parent_slug}-synonyms`
        const synonym_path = `${TYPESENSE_PROTOCOL}://${TYPESENSE_SERVER}:${TYPESENSE_PORT}/collections/${APPLICATION_ID}/synonyms/${synonym_collection}`
        const alias_ids = getAliasIDs(parent_id)
        const alias_mdx_arr = alias_ids.map((id) =>
          id_to_mdx(id, "key", { safe: true })
        )
        const synonyms_arr = uniqWith(
          [parent_mdx, parent_slug, ...alias_mdx_arr]
            .map((a) => a?.trim().replace(/`/g, ""))
            .filter((alias) => alias !== undefined && alias.length > 0),
          (a, b) => (a && a.toLowerCase()) === (b && b.toLowerCase())
        ) as string[] | []

        const skip = synonyms_arr?.find(
          (synonym) => synonym === "Root Element"
        )?.length
        // if (!skip) num_axios_put_reqs += 1

        let data = JSON.stringify({
          synonyms: synonyms_arr,
        })

        let config = {
          method: "put",
          maxBodyLength: Infinity,
          url: synonym_path,
          headers: {
            "X-TYPESENSE-API-KEY": TYPESENSE_API_KEY,
            "Content-Type": "application/json",
          },
          data,
        }

        ;(async function putRJKBTypesenseSynonymsCollection() {
          if (!skip)
            setTimeout(async () => {
              try {
                const response = await axios.request(config)
                console.log(
                  // num_axios_put_reqs,
                  synonym_path,
                  JSON.stringify(response.data)
                )

                //! fly.io free VM is only 1vCPU and REALLY CAN'T handle too many concurrent reqs!
              } catch (error) {
                console.log(error)
                process.exit()
              }
            }, axios_delay)
        })()
      }
    }

    const no_refs = !hasRefs(id)
    const no_children = !hasChildren(id)

    let skip_next =
      // (slug_key === "index" && prev_slug !== "index") || //! fix the docusaurus complaint about duplicate routes resulting from alias redirect named "index"
      slug_key === prev_slug || //! skip duplicate with parent & avoid clash with actual alias
      doc.type === 6 || //! Add "type 6" doc to skip list
      slug_key === "Aliases" || //! Defer Aliases logic to parent role during @function generate_mdx_page_from_id
      slug_key === "aliases" ||
      slug_key === "Color" ||
      slug_key === "Status" ||
      slug_key === "Sources" ||
      slug_key === "Size" ||
      (no_refs && no_children) || //! skip docs for leaf nodes w/o refs or children - to cut down on repetition w/o affecting nested hierarchy routing
      Boolean(slug_key.match(/^contains-/)) //! Shave off 180 "contains:" type docs //!recall that : was swapped for - by slugify!
    // slug_key.length > 15 //! BEFORE: 7187 Files, 6418 Folders --> AFTER >20: 4,522 Files, 3,970 Folders --> <15 3,574 Files, 3,167 Folders
    //? How to embed template literal inside regex experssion ?    Boolean(slug_key.match(/^contains:${parent_slug}/))
    // if (id === "jJfERuHx5ENeC9ax9") skip_next = true // Skip !BUGS
    if (skip_next) num_skipped += 1
    if (omit_check && slug_key && !skip_next)
      __plaintext__id_array.push(`__${slug_key}__${id}`)
    if (num > __DOC_LENGTH * 0.975 && LOG === "YES")
      process.stdout.write(`${num} - ${__DOC_LENGTH}\n`)
    if (!skip_next && slug_key && debug_slug && slug_key.length > +SLUG_SIZE)
      long_slugs_arr.push(slug_key)
    if (num === __DOC_LENGTH && debug_slug) {
      try {
        const long_slugs_mdx = long_slugs_arr.join("\n")
        fs.outputFileSync(`test/long-slugs.mdx`, long_slugs_mdx)
      } catch (error) {}
    }
    if (num === __DOC_LENGTH && omit_check) {
      try {
        // console.table(slug_key_arr)
        const plaintext_id_mdx = __plaintext__id_array.join("\n\n# ")
        await fs.outputFile(`test/omit-check.mdx`, plaintext_id_mdx)
      } catch (error) {}
    }
    // console.log(`num=${num}`) // to recheck __DOC_LENGTH still valid
    // if (num % 1000 === 0) console.log(`processed ${num / 1000}000 docs\n`)
    if (num === __DOC_LENGTH) {
      process.stdout.write(
        `\n\n${num} output debug files & remove breaking mdx`
      )
      fs.outputFile("test/DEBUG_KEYWORDS.mdx", debug_keywords.join("\n"))
      fs.outputFile("test/DEBUG_TAGS.mdx", debug_tags.join("\n"))
      const alias_output_dir = "test/DEBUG_ALIAS_LIST.mdx"
      process.stdout.write(
        `\n${ouput_docsearch_alias.length} sets of synonyms for docsearch to: ${alias_output_dir}`
      )
      fs.outputFile(
        alias_output_dir,
        '"synonyms": [' + ouput_docsearch_alias.join(",\n") + "]"
      )
    }
    // Generate MDX from ID AFTER ABOVE Sequence of writing to map of ID to plaintext_slug_path
    if (!skip_next && !skip && slug_key && !title_has_line_breaks)
      try {
        const mdx = generate_mdx_page_from_id(id, slug_key, filepath)
        num_docs += 1
        fs.outputFileSync(filepath, mdx)
        // await fs.outputFile(filepath, mdx).then(() => { //!TOGGLE TO GO BACK TO BUGGED ASYNC - WILL CORRUPT STATIC OUTPUT FOR A FEW FILES
        // generate_id_redirect(id, dirpath) // CUTTING OUT redirect SSG - 13000 <Redirect/> FCs is way too LAGGY!
        // write_to_md(filepath, )
        // const full_mdx = ""
        // fs.writeFile(filepath, full_mdx)
        const children = getChildren(id)
        if (num === __DOC_LENGTH) {
          process.stdout.write(
            `\n\nSSG Output: ${num} docs processed, skipped ${
              num - num_docs
            } & output ${num_docs} MDX files\nEach MDX with ${num_doc_refs} links\n${get_map_all_static_preview_tsx_length()} Preview TSX with ${num_preview_refs} links\n${num_skipped} docs skipped\n in ${(
              uptime() - init_mdx_map_time
            ).toFixed(2)}s`
          )
        }
        if (!children) return
        loop_docs_mkdir(dirpath, children)
      } catch (err) {
        console.log("err:", filepath, err)
      }
    if (skip_next || skip || !slug_key) {
      const children = getChildren(id)
      if (!children) return
      loop_docs_mkdir(dirpath, children, skip_next)
    }
    // if (slug_key === "Aliases") {
    //   const children = getChildren(id)
    //   if (!children) return
    //   loop_docs_mkdir(dirpath, children)
    // }
    // after final mdx generated - output slug_key report mdx at /debug/slug-keys.mdx
  })
}

/**
 * REFACTOR
 *  const main_root_filepaths = root_main_topic_ids.map((id) => {
 *  const doc_slug = id_to_key_slug(id)
 *     return `docs/${doc_slug}/${doc_slug}.mdx`
 *  })
 *
 *
 * @param main_doc_dirs === string[] of dir path to write to NOT IDs!!
 */
const init_mdx_map_time = uptime()

;(function () {
  root_main_topic_ids.forEach(async (id: string, i: number) => {
    const doc_slug = id_to_key_slug(id)
    const min_key = i.toString(36) //!
    const dirpath = `docs/${min_key}` // LEAVE /docs filesys folder same
    const filepath = `docs/${min_key}/${min_key}.mdx`
    if (!doc_slug) return
    // const min_doc_slug = getMinUID(id)
    // if (!min_doc_slug) return
    // const dirpath = `docs/${min_doc_slug}` // LEAVE /docs filesys folder same
    // const filepath = `docs/${min_doc_slug}.mdx`
    if (id === MAIN_UID) {
      fs.outputFileSync(
        "wiki_entry_uid.js",
        `module.exports={id:"4/${getMinUID(id)}",path:"/${id_to_min_slug(id)}"}`
      )
    }
    try {
      const mdx = generate_mdx_page_from_id(id, doc_slug, filepath)
      await fs.outputFile(filepath, mdx).then(() => {
        num += 1

        /**
         * lookup children and repeat
         *
         * map each index in @param main_doc_dirs to @param root_main_topics for doc object
         */

        const child_docs = getChildren(id)
        // console.log("child_docs=", child_docs)
        if (!child_docs)
          return console.log(`${filepath} is leaf node - no children found.`)
        // console.log(`Now recursively looping over children from ${path}`)
        // const dirpath = String(filepath.split("/").slice(0, -1).join("/"))
        /**
         * FUCK - forgot to cut off _doc.md from end!
         * AND DON'T FORGET TO assign it FFS!!should be slice(0, -1)
         * AND DON'T FORGET TO JOIN IT BACK UP AGAIN !!
         * console.log("path after split=", path)
         * MUTATE path OUTSIDE .forEach loop!!
         */
        loop_docs_mkdir(dirpath, child_docs)
      })
    } catch (err) {
      console.log(err)
    }
  })
})()

if (0) {
  // fill up placeholder nodes for demo json for public repo - but only 1 level deep from root nodes
  let JSON_docs_array: string[] = []
  ;(function () {
    root_main_topic_ids.forEach(async (id: string, i: number) => {
      const doc = getDoc(id)
      if (doc) JSON_docs_array.push(JSON.stringify(doc))
      const child_docs = getChildren(id)
      child_docs?.forEach((id) => {
        if (getDoc(id)) JSON_docs_array.push(JSON.stringify(getDoc(id)))
      })
      const value_arr = doc?.value
        ?.map((el) => (typeof el?._id === "string" ? el._id : ""))
        .filter((el) => typeof el !== "undefined" && el.length > 0)
      if (value_arr)
        value_arr.forEach((id) => {
          if (getDoc(id)) JSON_docs_array.push(JSON.stringify(getDoc(id)))
        })
    })
  })()
  console.log(uniq(JSON_docs_array).join(","))
  fs.writeFileSync(
    "./REM_JSON_DOCS.json",
    `{"docs":[${uniq(JSON_docs_array).join(",")}]}`
  )
  process.exit()
}
