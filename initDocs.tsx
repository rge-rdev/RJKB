// import { existsSync, mkdirSync } from "fs"
import fs from "fs-extra"
import { root_main_topics, map_to_mdx } from "./src/data/"

console.log("this starts before Docusaurus!")

// generate root dirs for each main topic (root_main_topics) map to docs/_TOPIC

const main_doc_dirs = root_main_topics.map((obj) => {
  return `docs/${obj.key.toString().replace("/", "-")}/${obj.key
    .toString()
    .replace("/", "-")}.md`
})
main_doc_dirs.forEach(async (doc) => {
  console.log("Intializing Root Docs Folders")
  try {
    await fs.ensureFile(doc).then(() => console.log(`${doc} was created`))
  } catch (err) {
    console.log(err)
  }
})

// map_to_mdx.forEach((key, id) => console.log(`id: ${id} =`, key))
console.log(map_to_mdx)
