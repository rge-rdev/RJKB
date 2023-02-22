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
} from "./src/data/"
import {
  id_to_mdx,
  id_to_plaintext,
  id_to_tags,
  LOG_CLI_PROGRESS,
} from "./src/utility"
import _ from "lodash"

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
    // const k = _.escape(id_to_mdx(id, "key"))
    // const v = _.escape(id_to_mdx(id, "value"))
    const k = id_to_mdx(id, "key")
    const v = id_to_mdx(id, "value")
    if (k && v) return `## ${_.unescape(k)}\n\n${_.unescape(v)}\n\n`
    if (k && !v) return `## ${_.unescape(k)}\n\n`
  })
  // if (title && title[0] === "<" && title[title.length] === ">") title

  /**
 keywords: [${tags.join(", ")}]
aliases: [${aliases.join(", ")}]
description: "${description}"
references: [${references.join(", ")}]
title: "${key_plaintext}"
tags: [${tags.join(", ")}]
# ${key_mdx}

## ${value_mdx}

${children_value ? `${children_value}\n\n` : ""}
 */

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

# [${title}](./) ↔ ${value_mdx}${
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


# TITLE - H1 will not appear in TOC

## Only H2 (and H3) will appear in TOC

### Only H3 (and H2) will appear in TOC

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

const path_map: Map<string, string> = new Map()
/**
 * @function get_path_from_id
 *
 * will keep this helper here instead of utilities or data
 * since path_map is set from this folder
 *
 * @param id
 * @returns
 */
export function get_path_from_id(id: string) {
  return path_map.get(id)
}

/**
 * @emits slug_key_arr to write to @see slug-keys.mdx
 *
 * @param path
 * @param children
 */
async function loop_docs_mkdir(path: string, children: string[]) {
  children.forEach(async (id) => {
    // console.log("Intializing dir for docs")

    const doc = getDoc(id)
    if (!doc) return
    const slug_key = id_to_key_slug(id)

    const filepath = `${path}/${slug_key}/${slug_key}.mdx`
    const dirpath = `${path}/${slug_key}`
    path_map.set(id, `/${dirpath}`)
    // console.log(`create new file: ${filepath} at "${dirpath}" for ID: ${id}`)
    // console.log("filepath=", filepath)
    // console.log("dirpath=", dirpath)
    num += 1
    // process.stdout.write(`#${num} Writing ${file} to ${dirpath}`)
    LOG_CLI_PROGRESS(
      num,
      map_size,
      "filepaths",
      "Convert JSON to MDX",
      "✍ Generating MDX",
      "✅ MDX COMPLETE",
      init_mdx_map_time
    )

    if (slug_key) slug_key_arr.push(slug_key)
    if (num === 13592) {
      try {
        // console.table(slug_key_arr)
        const slug_key_mdx = slug_key_arr.join("\n\n# ")
        await fs.outputFile(`src/pages/debug/slug-keys.mdx`, slug_key_mdx)
      } catch (error) {}
      try {
        console.log(path_map.entries())
      } catch (error) {}
    }

    // Generate MDX from ID AFTER ABOVE Sequence of writing to map of ID to plaintext_slug_path
    try {
      await fs
        .outputFile(filepath, await generate_mdx_page_from_id(id))
        .then(() => {
          generate_id_redirect(id, dirpath)
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

    // after final mdx generated - output slug_key report mdx at /debug/slug-keys.mdx
  })
}

/**
     if (num === map_size - 1) {

    }
 */

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
    const dirpath = `docs/${doc_slug}/${doc_slug}`
    const filepath = `docs/${doc_slug}/${doc_slug}.mdx`
    path_map.set(id, `/${dirpath}`)
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
          const doc = root_main_topics[i]
          // console.log("doc=", doc)

          const child_docs = doc?.["children"]
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
// map_to_mdx.forEach((key, id) => console.log(`id: ${id} =`, key))
// console.log(map_to_mdx)
