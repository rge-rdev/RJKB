import { existsSync, mkdirSync } from "fs"
import { root_main_topics } from "./src/data/"

console.log("this starts before Docusaurus!")

console.log(root_main_topics)

const dir = "docs/new-folder"

if (!existsSync(dir)) {
  mkdirSync(dir)
} else console.log("dir already exists!")
