/**
 * Copyright(c) Roger Jiang
 */

import fs from "fs-extra"
import { exec } from "child_process"

const js_asset_basepath = "build/assets/js/"
const js_file = fs
  .readdirSync(js_asset_basepath)
  .find((file) => file.match(/main\.[a-z0-9]+\.js/))
const js_path = js_asset_basepath + js_file

let js_text = fs.readFileSync(js_path, {
  encoding: "utf8",
})
console.log(`main js path: ${js_path}`)
const raw_js_size = fs.statSync(js_path).size
console.log(`main js size: ${(raw_js_size * 1e-3).toFixed(1)}KB`)

fs.writeFileSync("./test/raw_main.js", js_text) // backup for manual resets

const strip_license_reminder =
  /\/\*! For license information please see main.[a-z0-9]+.js.LICENSE.txt \*\/\n\(/

js_text = js_text.replace(strip_license_reminder, "/*Copyright Roger Jiang*/(") // - 68 bytes!

if (false) {
  /**
   * disabling docs:{id: string}[] ends up breaking noscript mode somehow?!
   */
  const re_uid =
    /(?<={"id":")([0-9a-z-]{1}\/([0-9a-z-]{1,2}\/)*)(?=[A-Za-z0-9-]+")/g // updated for new minified docs generator
  // /((?<={"id":")([A-Za-z-]+\/([A-Za-z0-9-]+\/)*)(?=[A-Za-z0-9-]+")||())/g // assumes NO root docs with numbers!
  // /(?<={"id":")([A-Za-z-]+\/([A-Za-z-]+\/)*)(?=[A-Za-z0-9-]+")/g // missed out slugs with numbers!
  // /(?<={"id":")([A-Za-z-]+\/[A-Za-z-]+(\/[A-Za-z-]+)+\/)(?=[A-Za-z0-9-]+")/g// spot the mistake!

  js_text = js_text.replace(re_uid, "")
}

// regex for sidebar junk removal for minified uid slug version only
//prettier-ignore
// const re_sidebar = /(?<=\[)((,)?{"id":"(intro|[0-9a-z]{1,2}(\/[0-9a-z]{1,2})*\/[a-z0-9]+)","path":"\/[a-z0-9]+","sidebar":"s"}(,)?)+(?=\])/g
// /((,)?{"id":"(intro|[0-9a-z]{1}(\/[0-9a-z]{1})*\/[a-z0-9]+)","path":"\/[a-z0-9]+","sidebar":"s"}(,)?)+/g

// regex for sidebar with semantic uid slugs
//prettier-ignore
const re_sidebar = /(?<="docs":\[)((,)?{"id":"(intro|[0-9a-z]+(\/[0-9a-z]+)*\/[a-z0-9]+)","path":"\/[a-z0-9-\\_]+","sidebar":"s"}(,)?)+/g // 154.4KB

const config_js_id = require("./wiki_entry_uid.js").id
const config_js_path = require("./wiki_entry_uid.js").path

js_text = js_text.replace(
  re_sidebar,
  // '{"id":"4/3mr","path":"/3mr","sidebar":"s"}' // min uid version
  `{"id":"${config_js_id}","path":"${config_js_path}","sidebar":"s"}` // semantic version!
)
/*break sidebar nav for 192KB
const re_sidebar_routeConfig =
  // /(,{path:"\/[a-z0-9-]+(\/[a-z0-9-]+)*",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0})/g
  /(,{path:"\/(?!blog)[a-z0-9-]+((?<!blog)\/[a-z0-9-]+)*(?<!path:"\/js)",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0(,sidebar:"s")})/g // only some of the routes have `,sidebar: "s"` at end!
js_text = js_text.replace(re_sidebar_routeConfig, "")
*/
/* Looks like chunk assignment - break when omit
const re_content_json =
  /,("\/[a-z0-9-\\]+(?<!\/(js|blog))-[a-z0-9]+":{"y":"[0-9]+","content":"[a-z0-9]+"})/
// /((,)?"\/[a-z0-9-\\]+(?<!\/(js|blog))-[a-z0-9]+":{"y":"[0-9]+","content":"[a-z0-9]+"})+/g // selective
// /((,)?"\/[a-z0-9-\\]+":{"y":"[0-9]+","content":"[a-z0-9]+"})+/g // 142KB - but might be critically linked to chunk splitting, breaks
js_text = js_text.replace(re_content_json, "")
*/
/* break wiki & blog tag routing for 131KB
const re_tag_plugins =
  /(,"\/(blog\/)?tags\/[a-z0-9-]+":{"y":"[a-z0-9]+","z":{"plugin":"[a-z0-9]+"},"tag":"[a-z0-9]+"})+/g
js_text = js_text.replace(re_tag_plugins, "")
*/

if (false) {
  /**
   * even accounting for `this`, code somewhere else may still need to invoke it, hence it breaks.
   */

  const re_unmangled_lambda =
    /(function\(\){return (?!this|[a-zA-Z0-9+\[\]=&|.,\(\)-]+(\.(bind|apply|call)\(|this)))([a-zA-Z0-9+\[\]=&|.,\(\)-]+)(})/g
  // /(function\(\){return )([a-zA-Z0-9+\[\]=&|.,\(\)-]+)(})/g

  js_text = js_text.replace(re_unmangled_lambda, "()=>$2")
}
/**
 * minify __comp && __context -=30KB
 */

const re__context = /__context/g //13.2KB
js_text = js_text.replace(re__context, "z")
const re__comp = /__comp/g // 22.2KB
js_text = js_text.replace(re__comp, "y")

const re_mdx_paths = /@site\/docs(\/[0-9a-z]{1,2})*\/[0-9a-z]{1,2}.mdx/g
js_text = js_text.replace(re_mdx_paths, "") // 67.7KB

const re_json_paths =
  /,{path:"\/(?!blog|tags)[a-z0-9-]+((?<!blog)\/[a-z0-9-]+)*",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0}/g // 0.2KB - it's mostly tags!!
// /,{path:"\/(?!blog)[a-z0-9-]+((?<!blog)\/[a-z0-9-]+)*",component:u\("\/[a-z0-9-]+(\/[a-z0-9-]+)*","[a-z0-9]+"\),exact:!0}/g // 116.1KB - breaks routes for semantic slugs but NOT min_uid slugs!
js_text = js_text.replace(re_json_paths, "")

// const re_content = /.{10}(?<!"|-|{| |,|[a-zA-Z]{1}|\(\?:)content(?!"|-|}| |,|[a-zA-Z]{1}).{10}/g // 2654 hits for "content" - 15KB gain after minify to "c" or something similar

// const output_js_path = js_path
// const output_debug_path = "./mangled_js_output.js"

// fs.writeFileSync(output_debug_path, js_text) // useful to see file from root, disable for prod
fs.writeFileSync(js_path, js_text)

// const final_js_size = fs.statSync(output_debug_path).size
const final_js_size = fs.statSync(js_path).size

console.log(
  `reduced ${((raw_js_size - final_js_size) * 1e-3).toFixed(1)}KB by ${(
    (1 - final_js_size / raw_js_size) *
    100
  ).toFixed(1)}% to final bundle size of ${(final_js_size * 1e-6).toFixed(2)}MB`
)

const js_file_br = js_file + ".br"
const js_file_gz = js_file + ".gz"
const js_path_br = js_path + ".br"
const js_path_gz = js_path + ".gz"

fs.removeSync(js_path_br)
fs.removeSync(js_path_gz)

const js_bat = `if exist "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_path_br}" del "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_br}"
if exist "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_path_gz}"  del "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_gz}" 
"C:\\Program Files\\PeaZip\\res\\bin\\brotli\\brotli.exe" -9 --large_window=27 "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file}"  -o "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_br}"
"C:\\Program Files\\PeaZip\\res\\bin\\7z\\7z.exe" a -tgzip -mx9 -mfb=128 -sccUTF-8 -bb0 -bse0 -bsp2 "-wC:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\" "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file_gz}" "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\js\\${js_file}"`

const temp_js_bat_path = "mangle_js.bat"

fs.writeFileSync(temp_js_bat_path, js_bat)

exec(temp_js_bat_path)

console.log("executing secondary .bat to rezip chunk assets...")
setTimeout(() => {
  console.log(`output new archives to: ${js_file_br} & ${js_file_gz}`)
}, 2000)
