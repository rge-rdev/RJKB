// import { existsSync, mkdirSync } from "fs"
import fs from "fs-extra"
import {
  root_main_topic_ids,
  getDoc,
  id_to_key_slug,
  root_main_topics,
  getChildren,
  map_size,
} from "./src/data/"
import { id_to_mdx, id_to_plaintext, id_to_tags } from "./src/utility"

// console.log("this starts before Docusaurus!")

// generate root dirs for each main topic (root_main_topics) map to docs/_TOPIC
// console.log("map size = ", map_size)

const main_root_filepaths = root_main_topic_ids.map((id) => {
  const doc_slug = id_to_key_slug(id)

  return `docs/${doc_slug}/${doc_slug}.md`
})

/**
 * recursive dir & md docs init loop
 *
 **-> 1. load children uid_string[]
 **  -> 2. map each doc to new dir
 **   -> 3. map new .md to each new dir
 **     -> 4. find doc from string_id
 **       -> 4. doc["children"]? => doc[]
 **         -> 5. repeat step 3
 */
async function generate_mdx_page_from_id(id: string) {
  const key_mdx = id_to_mdx(id, "key")
  const value_mdx = id_to_mdx(id, "value")
  const tags = id_to_tags(id)
  // const keywords = [id_to_tags(id)]
  const description = id_to_plaintext(id, "value")

  const output_mdx = `
  ---
  id: ${id}
  tags: [${tags}]
  keywords: [${tags}]
  description: ${description}
  ---
  # ${key_mdx}
  ## ${value_mdx}
  ## References
  `
  return output_mdx
}
let num = 0

const template_mdx = `
---
aliases: [abc, def]
description: My template for mdx
tags: [Hello, TS, React]
---

- a[google_link](www.google.com)
- wasd
- wasd2

# TITLE - H1 will not appear in TOC

## Only H2 (and H3) will appear in TOC

### Only H3 (and H2) will appear in TOC

## References

1. a[google_link](www.google.com)
2. wasd
3. wasd2

`

fs.outputFile("docs/intro.mdx", template_mdx)

async function loop_docs_mkdir(path: string, children: string[]) {
  children.forEach(async (id) => {
    // console.log("Intializing dir for docs")

    const doc = getDoc(id)
    if (!doc) return
    // const slug_key = doc_to_slugify_key(doc)
    const slug_key = id_to_key_slug(id)

    // console.log("path before split=", path)

    const file = `${slug_key}.mdx`
    const filepath = `${path}/${slug_key}/${slug_key}.mdx`
    const dirpath = `${path}/${slug_key}`
    // console.log(`create new file: ${filepath} at "${dirpath}" for ID: ${id}`)
    // console.log("filepath=", filepath)
    // console.log("dirpath=", dirpath)
    num += 1
    // process.stdout.write(`#${num} Writing ${file} to ${dirpath}`)
    process.stdout.write(
      `Generating MDX from JSON: ${Math.trunc((100 * num) / map_size)}%`
    )
    process.stdout.clearLine(1)
    process.stdout.cursorTo(0)
    try {
      // await fs.ensureFile(filepath).then(() => {

      await fs
        .outputFile(filepath, await generate_mdx_page_from_id(id))
        .then(() => {
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
  })
}

/**
 * @param main_doc_dirs === string[] of dir path to write to NOT IDs!!
 */

main_root_filepaths.forEach(async (path: string, i: number) => {
  // console.log("Intializing Root Docs Folders")
  try {
    await fs.ensureFile(path).then(() => {
      num += 1
      // console.log(`${path} was created`)
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
        return console.log(`${path} is leaf node - no children found.`)
      // console.log(`Now recursively looping over children from ${path}`)
      const dirpath = String(path.split("/").slice(0, -1).join("/"))
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

// map_to_mdx.forEach((key, id) => console.log(`id: ${id} =`, key))
// console.log(map_to_mdx)
