import { existsSync, mkdirSync } from "fs"
// import { root_main_topics } from "./src/data/"

console.log("this starts before Docusaurus!")

// console.log(root_main_topics.keys)

const dir =
  "docs/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems/alongerdirnamemaycauseproblems"

if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true })
} else console.log("dir already exists!")
