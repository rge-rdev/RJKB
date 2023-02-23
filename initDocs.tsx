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
} from "./src/data/"
import {
  id_to_mdx,
  id_to_plaintext,
  id_to_tags,
  LOG_CLI_PROGRESS,
} from "./src/utility"
import _ from "lodash"

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
 * @param id
 * @returns
 */

async function generate_mdx_page_from_id(id: string) {
  // const key_mdx = id_to_mdx(id, "key")
  const title = id_to_plaintext(id)?.replace(/"/g, `'`).replace(/\\/g, `&#92;`)
  const value_mdx = id_to_mdx(id, "value")?.replace(/"/g, `'`)
  const tags = ["TAG1", "TAG2", "TAG3"] //id_to_tags(id)
  const aliases = ["ALIAS1", "ALIAS2", "ALIAS3"]
  const description = id_to_plaintext(id, "value")
    ?.replace(/"/g, `'`)
    .replace(/\\/g, `&#92;`)

  const references = ["REF_ID1", "REF_ID2", "REF_ID3"]
  const child_text_array = getChildren(id)?.map((id) => {
    const k = _.escape(id_to_mdx(id, "key"))
    const v = _.escape(id_to_mdx(id, "value"))
    // const k = id_to_plaintext(id, "key")
    // const v = id_to_plaintext(id, "value")
    // if (k && v) return `## ${_.unescape(k)}\n\n${_.unescape(v)}\n\n`
    // if (k && !v) return `## ${_.unescape(k)}\n\n`
    if (k && v) return `## ${k}\n\n${v}\n\n`
    if (k && !v) return `## ${k}\n\n`
    return ""
  })

  const output_mdx = `---
${title && title !== null && title !== undefined ? `title: "${title}"\n` : ""}${
    description && description !== null && description !== undefined
      ? `description: "${description}"\n`
      : ""
  }keywords: [${tags.join(", ")}]
tags: [${tags.join(", ")}]
aliases: [${aliases.join(", ")}]
references: [${references.join(", ")}]
id: ${id}
uid: ${id}
---

# [\`${title}\`](./) ${value_mdx ? `↔ ${value_mdx}` : ""}${
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
tags: [Hello, TS, React]
---

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

\`\`\`
import React from "react"
import MDXComponents from "@theme-original/MDXComponents"
import { Redirect } from "@docusaurus/router"

export default {
  ...MDXComponents,
  Redirect,
}

\`\`\`

### Now just Add \`<Redirect to"\\whatever" />\` to mdx!

## References

1. [Link to Docusaurus Docs Guide Section](https://docusaurus.io/docs/category/guides)
2. wasd
3. wasd2`

fs.outputFile("docs/intro.mdx", template_mdx)

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

async function generate_id_redirect(id: string, dirpath: string) {
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

    const doc = getDoc(id)
    if (!doc) return
    const slug_key = id_to_key_slug(id)

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
      init_mdx_map_time
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
    let skip_next =
      slug_key === "Aliases" ||
      slug_key === "Color" ||
      slug_key === "Status" ||
      slug_key === "Sources" ||
      slug_key === "Size"
    if (omit_check && slug_key && !skip_next)
      __plaintext__id_array.push(`__${slug_key}__${id}`)
    if (num === 13592 && omit_check) {
      try {
        // console.table(slug_key_arr)
        const plaintext_id_mdx = __plaintext__id_array.join("\n\n# ")
        await fs.outputFile(`test/omit-check.mdx`, plaintext_id_mdx)
      } catch (error) {}
    }

    // Generate MDX from ID AFTER ABOVE Sequence of writing to map of ID to plaintext_slug_path
    if (!skip_next && !skip && slug_key)
      try {
        await fs
          .outputFile(filepath, await generate_mdx_page_from_id(id))
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

    try {
      await fs
        .outputFile(filepath, await generate_mdx_page_from_id(id))
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
          const dirpath = String(filepath.split("/").slice(0, -1).join("/"))
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
