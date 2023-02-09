// import { existsSync, mkdirSync } from "fs"
import fs from "fs-extra"
import {
  root_main_topic_ids,
  getDoc,
  id_to_key_slug,
  root_main_topics,
} from "./src/data/"

console.log("this starts before Docusaurus!")

// generate root dirs for each main topic (root_main_topics) map to docs/_TOPIC

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

async function loop_docs_mkdir(path: string, children: string[]) {
  children.forEach(async (id) => {
    // console.log("Intializing dir for docs")
    const doc = getDoc(id)
    if (!doc) return
    // const slug_key = doc_to_slugify_key(doc)
    const slug_key = id_to_key_slug(id)
    path += `/${slug_key}`
    const filepath = path + ".md"
    const file = filepath.split("/").slice(-1)
    console.log(`create new file: ${file} at "${path}" for ID: ${id}`)
    try {
      await fs.ensureFile(filepath).then(() => {
        console.log(`created ${id} is child of ${path}`)

        // console.log(`${id} was created`)
      })
      // .finally(() => {
      //   // now recursively lookup children and repeat
      //   console.log("id=", id)
      //   const doc = getDoc(id)
      //   const child_docs = doc?.["children"]
      //   console.log(child_docs)
      //   if (!child_docs) return
      //   loop_docs_mkdir(child_docs)
      // })
    } catch (err) {
      console.log(err)
    }
  })
}

/**
 * @param main_doc_dirs === string[] of dir path to write to NOT IDs!!
 */

main_root_filepaths.forEach(async (path: string, i: number) => {
  console.log("Intializing Root Docs Folders")
  try {
    await fs.ensureFile(path).then(() => {
      console.log(`${path} was created`)
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
      console.log(`Now recursively looping over children from ${path}`)
      loop_docs_mkdir(path, child_docs)
    })
  } catch (err) {
    console.log(err)
  }
})

// map_to_mdx.forEach((key, id) => console.log(`id: ${id} =`, key))
// console.log(map_to_mdx)
