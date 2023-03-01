// import { existsSync, mkdirSync } from "fs"
import fs from "fs-extra"
import { uptime } from "process"
import {
  root_main_topic_ids,
  getDoc,
  id_to_key_slug,
  root_main_topics,
  getChildren,
  map_size,
  path_map,
  getAliasIDs,
  getAliasSlugs,
  getParentId,
} from "./src/data/"
import {
  id_to_mdx,
  id_to_plaintext,
  id_to_tags,
  LOG_CLI_PROGRESS,
} from "./src/utility"
import _ from "lodash"

let debug_keywords: any[] = []
let debug_tags: any[] = []

let num_docs = 0
let num_skipped = 0
let num_links = 0
let num_alias_redirect_mdx = 0

// const entries = path_map.entries()
// const array = [...entries]
// const path_map_string = array.join("\n\n")
// fs.outputFile("test/paths_map.mdx", path_map_string)

// console.log("this starts before Docusaurus!")

// generate root dirs for each main topic (root_main_topics) map to docs/_TOPIC
// console.log("map size = ", map_size)

// const main_root_filepaths = root_main_topic_ids.map((id) => {
//   const doc_slug = id_to_key_slug(id)

//   return `docs/${doc_slug}/${doc_slug}.mdx`
// })

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
 * @param id
 * @returns
 */
async function generate_mdx_page_from_id(id: string, slug_key: string) {
  // const key_mdx = id_to_mdx(id, "key")
  const title = id_to_plaintext(id)?.replace(/"/g, `'`).replace(/\\/g, `&#92;`)
  const title_has_line_breaks = Boolean(title?.match(/[\n]+/)?.length)
  const value_mdx = id_to_mdx(id, "value")
    ?.replace(/"/g, `'`)
    ?.replace(/(?<!```.*)^import /gms, "\\`import\\` ")
    ?.replace(
      /(?<!```.*)^export default function /gms,
      "\\`export default function\\` "
    )
    ?.replace(/(?<!```.*)^export const /gms, "\\`export const\\` ")
    ?.replace(/(?<!```.*)^module/gms, "\\`module\\` ")

  const title_safe = slug_key.replace(/-+/g, " ")
  const hasTags = Boolean(id_to_tags(id)?.length)
  let init_tags = hasTags
    ? [id_to_tags(id) as string[], title_safe]
    : [title_safe]
  const tags = _.uniq(
    init_tags
      .concat(slug_key.replace(/-/g, " ")) // add de-slug key as safe title
      .filter((tag) => tag.length > 0)
  )
  // .filter((tag) => tag.length < 15)

  // const aliases = ["ALIAS1", "ALIAS2", "ALIAS3"] // PLACEHOLDER ALIAS KEYS
  const alias_ids = getAliasIDs(id) // return string[] | []
  const alias_slugs = getAliasSlugs(id).filter((slug) => slug.length > 0) // return string[] | []
  let keywords = [...tags, ...alias_slugs].filter(
    (s) => typeof s !== undefined && s && s.length > 0
  ) // add extra duplicate aliases for SEO keywords and avoid clutter within tags
  debug_keywords.push(keywords || "___NOTHING")
  debug_tags.push(tags)
  const description = id_to_plaintext(id, "value")
    ?.replace(/"/g, `'`)
    .replace(/\\/g, `&#92;`)

  const references = ["REF_ID1", "REF_ID2", "REF_ID3"]
  const child_text_array = getChildren(id)?.map((id) => {
    // const k = _.unescape(id_to_mdx(id, "key"))
    const k = id_to_mdx(id, "key", { safe: true })
    const v = id_to_mdx(id, "value", { safe: true })

    const k_code = k?.match(/^(\`\`\`)/)?.length
    const v_code = v?.match(/^(\`\`\`)/)?.length

    const k_newLine = k?.match(/[\\\n]+/g)
    const v_newLine = v?.match(/[\\\n]+/g)

    if (k && v)
      return `${k_code || k_newLine ? "" : "## "}${k}\n\n${
        v_code ? "" : "## "
      }${v}\n\n`
    if (k && !v) return `${k_code || k_newLine ? "" : "## "}${k}\n\n`
    if (!k && v) return `\n\n${v}`
    return ""
  })

  const output_mdx = `---
${title && title !== null && title !== undefined ? `title: "${title}"\n` : ""}${
    description && description !== null && description !== undefined
      ? `description: "${description}"\n`
      : ""
  }
tags: [${tags.map((w) => `\"${w}\"`).join(", ")}]${
    keywords.length > 0
      ? `\nkeywords: [${keywords.map((w) => `\"${w}\"`).join(", ")}]`
      : ""
  }
alias IDs: [${alias_ids.join(", ")}]
aliases: [${alias_slugs.join(", ").replace(/!/g, "\\!")}]
references: [${references.join(", ")}]
id: ${id}
---

ID_FOR_DEBUGGING = ${id}

${
  title_has_line_breaks
    ? `${title}${value_mdx ? `\n\n${value_mdx}` : ""}`
    : `# [\`${title}\`](./) ${value_mdx ? `↔ ${value_mdx}` : ""}`
}${alias_slugs.length ? `\n\n *aka* ${alias_slugs.join(", ")}` : ""}${
    child_text_array ? "\n\n" + child_text_array.join("") : ""
  }

## References

${references.map((ref, i) => `${i + 1}. ${ref}\n`).join("")}`
  return output_mdx
}
/**
 * PAINFUL: to find fix for the extra commas in array map to string in MDX - need to use .join("") instead of .toString()!!
 * !MUST postfix .map with .join("") to prevent docusaurus/mdx-loader1.0 to inject extra annoyingly unhelpful commas!
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
 */

let num = 0

const template_mdx = `---
aliases: [abc, def]
description: My template for mdx
keywords: [123,345]
tags: [Hello, TS, React]
---

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

# List of safe JS keywords to start new lines with in mdx:

module

module.exports

module.exports =

module.exports = {}

require

require()

var

Import < NOT CASE SENSITIVE!

IMPORT


# LISS OF BAD

\`\`\`tsx
import
export
<anyanglebracketswithoutterminating>
\`\`\`

- [link back to home](/)
\`\`\`
- [link back to home](/)
\`\`\`
- [link to google](www.google.com)
\`\`\`
- [link to google](www.google.com)
\`\`\`
- [link to \`src/pages/intro\`](/intro)

\`\`\`
- [link to \`src/pages/intro\`](/intro)
\`\`\`
- [link to \`src/pages/redirect\`, which redirects to /docs/react](/redirect)

- [link to \`/docs/intro\`](/docs/intro)
- [link to \`/docs/JS/JS-Definition\`](/docs/JS/JS-Definition)

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

function RedirectMDX(parent_path: string) {
  return `<Redirect to="${parent_path}" />
  `
}
// function RedirectMDX(parent_path: string) {
//   return `
// export default function RedirectTo() {
//   return <Redirect to="${parent_path}" />
// }
//   `
// }

function RedirectFCTSX_textdata(dirpath: string) {
  return `
import { Redirect } from "react-router-dom"

export default function RedirectTo() {
  return <Redirect to="/${dirpath}" />
}
  `
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
async function generate_id_redirect_OLD(id: string, dirpath: string) {
  const redirect_filepath = `src/pages/redirect/${id}.tsx`
  // NOT const redirect_filepath = `src/pages/redirect/${id}/${id}.tsx` - don't need extra /${id}/ for pages since Docusaurus renders /pages differently!
  try {
    await fs.outputFile(redirect_filepath, RedirectFCTSX_textdata(dirpath))
  } catch (error) {}
}

// push arrays to debug & keep track of appended slugs & paths
let slug_key_arr = [""]
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
  children.forEach(async (id) => {
    // console.log("Intializing dir for docs")
    const title = id_to_plaintext(id)
      ?.replace(/"/g, `'`)
      .replace(/\\/g, `&#92;`)
    const title_has_line_breaks = Boolean(title?.match(/[\n]+/)?.length)

    const doc = getDoc(id)
    if (!doc) return
    const slug_key = id_to_key_slug(id)
    if (!slug_key) return

    const filepath = `${parent_path}/${slug_key}/${slug_key}.mdx`
    const dirpath = `${parent_path}/${slug_key}`
    // console.log(`create new file: ${filepath} at "${dirpath}" for ID: ${id}`)
    // console.log("filepath=", filepath)
    // console.log("dirpath=", dirpath)
    num += 1
    // process.stdout.write(`#${num} Writing ${file} to ${dirpath}`)
    LOG_CLI_PROGRESS(
      num,
      map_size,
      "files",
      "SSG MDX",
      "⏳ ✍ ",
      "✅ MDX",
      init_mdx_map_time,
      num_alias_redirect_mdx,
      "Alias Redirect MDX"
    )

    const debug_slug = false
    if (slug_key && debug_slug) slug_key_arr.push(slug_key)
    if (num === 13592 && debug_slug) {
      try {
        // console.table(slug_key_arr)
        const slug_key_mdx = slug_key_arr.join("\n\n# ")
        await fs.outputFile(`test/slug-keys.mdx`, slug_key_mdx)
      } catch (error) {}
    }
    const omit_check = true
    const pop_parent_path = parent_path
    const parent_slug = pop_parent_path.split("/").pop()
    if (slug_key === "Aliases") {
      const parent_id = getParentId(id) || ""

      const alias_slugs = getAliasSlugs(parent_id)
      // console.log(`parent_slug: ${parent_slug} alias_slugs:${alias_slugs}`)

      alias_slugs.forEach((alias_slug) => {
        const alias_filepath = `${parent_path}/${alias_slug}.mdx`
        // console.log(alias_filepath)
        //! alias_slug !== parent_slug TAKES CASE INTO CONSIDERATION!
        if (alias_slug.toLowerCase() !== parent_slug?.toLowerCase())
          generate_id_redirect(alias_filepath, parent_path)
        //! Forgot to avoid duplicate alias slug overriting parent!
      })
    }

    let skip_next =
      slug_key === "Aliases" || //! Defer Aliases logic to parent role during @function generate_mdx_page_from_id
      slug_key === "Color" ||
      slug_key === "Status" ||
      slug_key === "Sources" ||
      slug_key === "Size" ||
      Boolean(slug_key.match(/^contains-/)) //! Shave off 180 "contains:" type docs //!recall that : was swapped for - by slugify!
    // slug_key.length > 15 //! BEFORE: 7187 Files, 6418 Folders --> AFTER >20: 4,522 Files, 3,970 Folders --> <15 3,574 Files, 3,167 Folders
    //? How to embed template literal inside regex experssion ?    Boolean(slug_key.match(/^contains:${parent_slug}/))
    if (omit_check && slug_key && !skip_next)
      __plaintext__id_array.push(`__${slug_key}__${id}`)
    if (num === 13592 && omit_check) {
      try {
        // console.table(slug_key_arr)
        const plaintext_id_mdx = __plaintext__id_array.join("\n\n# ")
        await fs.outputFile(`test/omit-check.mdx`, plaintext_id_mdx)
      } catch (error) {}
    }
    if (num === 13592) {
      fs.outputFile("test/debug_keywords.mdx", debug_keywords.join("\n"))
      fs.outputFile("test/debug_Tags.mdx", debug_keywords.join("\n"))
    }
    // Generate MDX from ID AFTER ABOVE Sequence of writing to map of ID to plaintext_slug_path
    if (!skip_next && !skip && slug_key && !title_has_line_breaks)
      try {
        await fs
          .outputFile(filepath, await generate_mdx_page_from_id(id, slug_key))
          .then(() => {
            // generate_id_redirect(id, dirpath) // CUTTING OUT redirect SSG - 13000 <Redirect/> FCs is way too LAGGY!
            // write_to_md(filepath, )
            // const full_mdx = ""
            // fs.writeFile(filepath, full_mdx)
            const children = getChildren(id)
            if (!children) return
            loop_docs_mkdir(dirpath, children)
            // console.log(`${id} was created`)
          })
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
    const dirpath = `docs/${doc_slug}`
    const filepath = `docs/${doc_slug}/${doc_slug}.mdx`
    if (!doc_slug) return
    try {
      await fs
        .outputFile(filepath, await generate_mdx_page_from_id(id, doc_slug))
        .then(() => {
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
