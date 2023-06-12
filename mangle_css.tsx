/**
 * Copyright(c) Roger Jiang
 */

import fs from "fs-extra"

import uniq from "lodash/uniq"
import { exec } from "child_process"

const css_asset_basepath = "build/assets/css/"
const css_file = fs
  .readdirSync(css_asset_basepath)
  .find((file) => file.match(/\.css$/))
const css_path = css_asset_basepath + css_file

// console.log(css_path)

const css_text = fs.readFileSync(css_path, {
  encoding: "utf8",
})
const raw_css_size = fs.statSync(css_path).size

const regexp =
  /(--(?:ifm|docsearch|docusaurus|doc|tw|prism){1}-[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)?)?)?)?(?!(-)?[a-zA-Z0-9]+))/g

const css_match = css_text?.match(regexp) ? [...css_text?.match(regexp)!] : null //[0] //.forEach(x => {if(x) visited.add(x)});
// const css_match = css_text?.match(regexp) //[0] //.forEach(x => {if(x) visited.add(x)});

if (!css_match) {
  console.log("There's no CSS variables left to mangle! Terminating")
  process.exit()
}

// console.log(css_match)

const raw_css_match = css_match.length

const num_uniq_css = uniq(css_match)

const num_uniq_css_l = num_uniq_css.length

// console.log(num_uniq_css_l)

const dict = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]
// console.log(dict.length)

function uniq_css_class(i: number) {
  if (i < 52) return "" + dict[i]
  if (i / 52 < 52) return "" + dict[Math.floor(i / 52) - 1] + dict[i % 52]
  if (i / 52 > 52) {
    console.log("i > max limit : broke the UID generator!")
    // process.exit()
  }
}

const map_css_mangle = new Map(
  num_uniq_css.map((selector, i) => {
    if (selector && uniq_css_class) return [selector, uniq_css_class(i)]
    else {
      console.log(`${selector} ${i} broke the mangle generator`)
      process.exit()
    }
  })
)

const output_css_path = css_path

;(function () {
  let output_css = css_text
  map_css_mangle.forEach((v, k) => {
    // console.log(v, k)
    if (v)
      output_css = output_css.replace(
        new RegExp(`${k}(?!-[a-zA-Z0-9]+)`, "g"),
        `--${v}`
      )
  })

  //! Last ditch attempts to patch out bad infima CSS styles here - if it's too much effort to modify at the source!
  // const reg_css_item = /\.footer__link-item{display:block}/
  // output_css = output_css.replace(reg_css_item, "")

  fs.writeFileSync(output_css_path, output_css)
})()

const final_css_size = fs.statSync(output_css_path).size

console.log(
  `reduced docusaurus junk CSS by ${(
    100 *
    (1 - final_css_size / raw_css_size)
  ).toFixed(2)}% by ${((raw_css_size - final_css_size) / 1000).toFixed(
    2
  )}KB mangling ${num_uniq_css_l} variables out of ${raw_css_match} total instances`
)

// WIP: mangle the sh!t of out all class selectors too!

// const selector_regex = /(?<=,|\{)\.[a-zA-Z0-9-]+(?=\{)/g
// const selector_list_regex = /(?<=,|\}|\{)\.[a-zA-Z0-9-_]{2,}(?:,\.[a-zA-Z0-9-_]+)?(?:,\.[a-zA-Z0-9-_]+)?(?:,\.[a-zA-Z0-9-_]+)?(?:,\.[a-zA-Z0-9-_]+)?(?:,\.[a-zA-Z0-9-_]+)?(?:,\.[a-zA-Z0-9-_]+)?(?:,\.[a-zA-Z0-9-_]+)?(?=\{|:+)/g

const css_file_br = css_file + ".br"
const css_file_gz = css_file + ".gz"
const css_path_br = css_path + ".br"
const css_path_gz = css_path + ".gz"

fs.removeSync(css_path_br)
fs.removeSync(css_path_gz)

const css_bat = `if exist "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_path_br}" del "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_file_br}"
if exist "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_path_gz}"  del "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_file_gz}" 
"C:\\Program Files\\PeaZip\\res\\bin\\brotli\\brotli.exe" -9 --large_window=27 "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_file}"  -o "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_file_br}"
"C:\\Program Files\\PeaZip\\res\\bin\\7z\\7z.exe" a -tgzip -mx9 -mfb=128 -sccUTF-8 -bb0 -bse0 -bsp2 "-wC:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\" "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_file_gz}" "C:\\Users\\Z\\react-dev\\rjdb-map\\build\\assets\\css\\${css_file}"`

const temp_css_bat_path = "mangle_css.bat"

fs.writeFileSync(temp_css_bat_path, css_bat)

exec(temp_css_bat_path)
