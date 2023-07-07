// import { uptime } from "process"
import fs from "fs-extra"

// write stale wiki id if entry_uid file not found
if (!fs.readdirSync("./").find((file) => file.match(/wiki_entry_uid.js/)))
  fs.writeFileSync(
    "./wiki_entry_uid.js",
    `./module.exports={id:"4/3mf",path:"/js"}`
  )

//write placeholder env variables
if (!fs.readdirSync("./").find((file) => file.match(/^.env$/)))
  fs.writeFileSync(
    "./.env",
    `TYPESENSE_API_KEY=__THIS_IS_A_FAKE_PLACEHOLDER_BOOTSTRAP_KEY
  TYPESENSE_HOST=rjkb.fly.dev
  TYPESENSE_PORT=443
  TYPESENSE_PROTOCOL=https
  TYPESENSE_ENABLE_CORS=true
  APPLICATION_ID=rjkb
  DOCUSAURUS_SSR_CONCURRENCY=16
  NODE_OPTIONS="--max_old_space_size=24000"
  TYPESENSE_SERVER=rjkb.fly.dev
  EMAIL=rge.rdev@gmail.com
  MAIL_TO=mailto:rge.rdev+website@gmail
  GIT_USER=rge-rdev
  TS_NODE_1=rjkb.fly.dev
  MAP_SIZE=8231
  TYPESENSE_CLIENT_SEARCH_KEY=9pcfLpgVR9Kk3Ab4rfn5VZpOSICplkTx
  TS_PUT_REQS=NO
  LOG=NO
  TS_PUT_DELAY=60000
  PROD_PROTOCOL=https
  PROD_BASE_URL=ifullstack.dev
  PROD_URL=https://ifullstack.dev
  LINKEDIN=https://ifullstack.dev/about
  DOCS_BASE=
  SLUG_SIZE=50
  MAIN_UID=HWLTjZrhernsLocy7`
  )

// write placeholder rem json data - with only root parent nodes for demo
if (!fs.readdirSync("./src/data").find((file) => file.match(/^rem.json$/)))
  fs.writeFileSync(
    "./src/data/rem.json",
    `{
  "knowledgebaseId": "local-RJKB-PUBLIC-DEMO-JSON-PLACEHOLDER",
  "name": "RJKB-PUBLIC-DEMO-DATA",
  "exportDate": "${new Date()}",
  "exportVersion": 1,
  "docs": [
    {
      "key": ["CSS"],
      "children": [
        "j3hRGYhqkJjygoZDh",
        "dgC4GEPYH9gbNAFSX",
        "TNSxgtmMqTBBurvxc",
        "xQo8RnTaXWND9RyXN",
        "rBbf4kfrHbus4yuZk",
        "msdFtrDcs5uuj37vj",
        "JCj48JtZENw2oj4hv",
        "kJkRq7f8e8gBP3ifu",
        "kKzP25SWbpR5HZjrP",
        "47QZS3B8gmwDzXR63"
      ],
      "u": 1686079714844,
      "_id": "35nBdhDNJLwCCyz6A",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "mC58T8gYLamzNB996", "i": "q" },
        " to express ",
        {
          "text": "style & layout",
          "b": true,
          "cId": "4701647585018456",
          "i": "m"
        },
        " of (",
        { "_id": "76YZFGLsBuRNyEMqN", "i": "q" },
        ") via ",
        { "_id": "xQo8RnTaXWND9RyXN", "i": "q" },
        " "
      ],
      "parent": null,
      "crt": {
        "l": { "a": { "_id": "dgC4GEPYH9gbNAFSX", "s": "" } },
        "o": {
          "s": {
            "_id": "j3hRGYhqkJjygoZDh",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        }
      },
      "references": [
        { "q": "mfZtwKcQJhKfXjymA", "f": "value" },
        { "q": "JCj48JtZENw2oj4hv", "f": "key" },
        { "q": "xypcDdwXqnc6rytfS", "f": "value" },
        { "q": "4LqTYsbb27MHQas3D", "f": "key" },
        { "q": "6djGW5MEumHv6ddqN", "f": "key" },
        { "q": "vb4hpW7tEueYKRvGF", "f": "value" },
        { "q": "ee4YA8kLPXLMHKiSB", "f": "value" },
        { "q": "7iyGd5cFBMu7uJMxm", "f": "key" },
        { "q": "7LdprgJvjEGWDrfrN", "f": "value" },
        { "q": "TNSxgtmMqTBBurvxc", "f": "value" },
        { "q": "hAYLofrYBHxghTKNP", "f": "value" },
        { "q": "BjFEaATautbzCrie3", "f": "key" },
        { "q": "kKzP25SWbpR5HZjrP", "f": "key" },
        { "q": "KugDtkRr5ZTQPmarj", "f": "value" },
        { "q": "xXFgDcRFcDYzHAoWv", "f": "value" },
        { "q": "A3thZ3oChC4v85fAf", "f": "value" },
        { "q": "eNcKv4Fr2Rc2Te9MH", "f": "value" },
        { "q": "cdZoQAd5j8BDyBiv4", "f": "value" },
        { "q": "74yaPyZMWzYfcWZhQ", "f": "value" },
        { "q": "rBbf4kfrHbus4yuZk", "f": "value" },
        { "q": "LKXiQpc86zTdFA2KY", "f": "value" },
        { "q": "rrZviPWTwet9WtXZe", "f": "value" }
      ],
      "n": 1,
      "forget": null
    },
    {
      "key": [{ "_id": "2n8Gw7PvXGPcFQm7i", "i": "q" }],
      "children": [
        "AWmkgRX8myhLP43b3",
        "aod6BXcsqQFna2hT9",
        "qkx9E6sfJwSGFthup"
      ],
      "u": 1672085711399,
      "_id": "dgC4GEPYH9gbNAFSX",
      "parent": "35nBdhDNJLwCCyz6A"
    },
    {
      "key": ["Cascade"],
      "children": [
        "R3RQDmYmGXK3ecjE6",
        "hAYLofrYBHxghTKNP",
        "vSdsAud8eF9Ds9qwa"
      ],
      "u": 1686078410749,
      "_id": "TNSxgtmMqTBBurvxc",
      "parent": "35nBdhDNJLwCCyz6A",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "35nBdhDNJLwCCyz6A", "i": "q" },
        " ",
        { "_id": "Bx3buAt2XEz595FaZ", "i": "q" },
        " to compute value for each property "
      ]
    },
    {
      "key": ["Style Rule"],
      "children": [
        "y5afj36d3xbwkqYGf",
        "89Jm5bRW3z4Pyb5kC",
        "msYZaNTLtanpngGqs",
        "8s9gHEkgxPtJTNMWv",
        "k6YRREXirvN4sfZTY"
      ],
      "u": 1686179954439,
      "_id": "xQo8RnTaXWND9RyXN",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "Ruleset with ",
        { "_id": "sg4kXfammnBdqqTTy", "i": "q" },
        " & ",
        { "_id": "msYZaNTLtanpngGqs", "i": "q" },
        " block "
      ],
      "references": [
        { "q": "P53RoCw9FKp9TbSsi", "f": "value" },
        { "q": "jS29WDfJvv9eR5Wdr", "f": "value" },
        { "q": "iruof2mBDMvTFjBct", "f": "value" },
        { "q": "nKse2ksxqEb2SJCft", "f": "value" },
        { "q": "qbiaQRT5JPmPywERj", "f": "value" },
        { "q": "C8sHzJa9TwTcgkfyd", "f": "value" },
        { "q": "eNWtP2JwvtBGquoAz", "f": "value" },
        { "q": "mKBGJXTuWm7cJBCbq", "f": "value" },
        { "q": "sg4kXfammnBdqqTTy", "f": "value" },
        { "q": "89Jm5bRW3z4Pyb5kC", "f": "value" },
        { "q": "tXqsPncqa6K8q35ek", "f": "value" },
        { "q": "35nBdhDNJLwCCyz6A", "f": "value" },
        { "q": "hAYLofrYBHxghTKNP", "f": "value" },
        { "q": "8s9gHEkgxPtJTNMWv", "f": "key" },
        { "q": "k6YRREXirvN4sfZTY", "f": "key" },
        { "q": "vSdsAud8eF9Ds9qwa", "f": "value" },
        { "q": "mePCBT3KMy9EzEgjJ", "f": "value" },
        { "q": "BqBodvene4NWw3R5z", "f": "value" },
        { "q": "rTkvvXeStTaG4PiZL", "f": "value" },
        { "q": "yoGsmM8Jrfm4c2hoo", "f": "key" }
      ],
      "parent": "35nBdhDNJLwCCyz6A"
    },
    {
      "key": ["Visual Formatting Model"],
      "children": [
        "rf3vZDKwuHYuhNpQt",
        "a4GiFNJnDZTQPBtb5",
        "C8rhAQTkd99fh8QZp",
        "4yZbji2Mj7bLcMwS4"
      ],
      "u": 1686179954439,
      "_id": "rBbf4kfrHbus4yuZk",
      "parent": "35nBdhDNJLwCCyz6A",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "(",
        { "text": "model", "l": true, "i": "m" },
        ") for ",
        { "_id": "j6emogRh63KGoCm38", "i": "q" },
        " to process/compute ",
        { "_id": "35nBdhDNJLwCCyz6A", "i": "q" },
        " values & display ",
        { "_id": "8pKWpQgtsXxLYT9TE", "i": "q" },
        "  "
      ],
      "crt": { "l": { "a": { "_id": "rf3vZDKwuHYuhNpQt", "s": "" } } },
      "references": [
        { "q": "a4GiFNJnDZTQPBtb5", "f": "value" },
        { "q": "C8rhAQTkd99fh8QZp", "f": "key" }
      ]
    },
    {
      "key": ["CSS Syntax"],
      "children": [
        "CaYWMTZdFerwqWAqB",
        "NisjpyXprcTRKpQQL",
        "etxxPLeXQLyq2d9Bd",
        "sg4kXfammnBdqqTTy",
        "Y2ycgSgAGK8ExfZiq",
        "Lz274fpdsY8Sp93Jd",
        "kzDiJQpbTWysLPaLb",
        "icucivGi7rPtiE8m2",
        "HmAj7XYM5Myd4PA9F",
        "tKiZHztAnB7HNLfZW",
        "7zuJTiHdKSmWHQabu",
        "d5MShwX9XyfAe9Z9R",
        "LKXiQpc86zTdFA2KY",
        "CwhiZucTcEsytq2f9",
        "rrZviPWTwet9WtXZe",
        "SDPJKC43iXeEW5KeT"
      ],
      "u": 1686078379289,
      "_id": "msdFtrDcs5uuj37vj",
      "parent": "35nBdhDNJLwCCyz6A",
      "crt": {
        "o": {
          "s": {
            "_id": "NisjpyXprcTRKpQQL",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "CaYWMTZdFerwqWAqB", "s": "" } }
      },
      "type": 1,
      "enableBackSR": true,
      "value": [
        "List of vanilla CSS syntax only, Sass, PCSS, etc in CSS Stack"
      ],
      "forget": true,
      "references": [
        { "q": "sg4kXfammnBdqqTTy", "f": "value" },
        { "q": "d5MShwX9XyfAe9Z9R", "f": "key" },
        { "q": "tKiZHztAnB7HNLfZW", "f": "value" },
        { "q": "7zuJTiHdKSmWHQabu", "f": "value" },
        { "q": "etxxPLeXQLyq2d9Bd", "f": "key" },
        { "q": "rrZviPWTwet9WtXZe", "f": "value" },
        { "q": "rTkvvXeStTaG4PiZL", "f": "value" }
      ]
    },
    {
      "key": [{ "i": "q", "_id": "35nBdhDNJLwCCyz6A" }],
      "children": [
        "tFcpQXjmsZ6gwaMKz",
        "AgpzGf9RMNrNDzh4H",
        "54evFoWk53WRdLCJ9",
        "iKy8BmwRpwdRd5Q6e",
        "CvoA7yJc3s5JdgQP7",
        "KTctweF8vF2fct25X",
        "nhZDaPn5yqnr9ckZi",
        "5NwYjtmeCqPn9xfZN",
        "c7Cxmhw3S2k4bdaNC",
        "x3CX8Picujx2RGzYL",
        "qezYP3jmuYTgqLFqr",
        "YTL8rSSLYdv8scZiC",
        "RGGSN3EM6sqJiBX4b",
        "4n57rpqpEGcffHuyY",
        "LAkciJycGbtfFFGQa",
        "bKDQrvZir6v5kEyaj",
        "GS8sNyEfBgigM7oEY",
        "k4nFZ5um6KeLmE7EH",
        "9eTaJgfcZuFPtP62J",
        "mGL9396QhQG5xsTTE"
      ],
      "u": 1680562414797,
      "_id": "JCj48JtZENw2oj4hv",
      "type": 6,
      "parent": "35nBdhDNJLwCCyz6A"
    },
    {
      "key": ["CSS Stack"],
      "children": [
        "M5z69BapyBaeFGgvf",
        "dPtMKKhWYfuzwRNfr",
        "t7cXi2p2cA3jrxtLX",
        "9JapcMPaseTxWJFZj",
        "cdZoQAd5j8BDyBiv4",
        "wgZHoB6AouaYvtKGN",
        "A3thZ3oChC4v85fAf",
        "Pdv6DgpzdtLaHxb2A"
      ],
      "u": 1686078383762,
      "_id": "kJkRq7f8e8gBP3ifu",
      "parent": "35nBdhDNJLwCCyz6A",
      "type": 1,
      "enableBackSR": true,
      "value": ["List of useful/popular CSS libs & frameworks"],
      "crt": {
        "l": { "a": { "_id": "dPtMKKhWYfuzwRNfr", "s": "" } },
        "o": {
          "s": {
            "_id": "M5z69BapyBaeFGgvf",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        }
      },
      "references": [
        { "q": "wgZHoB6AouaYvtKGN", "f": "value" },
        { "q": "74yaPyZMWzYfcWZhQ", "f": "value" },
        { "q": "Pdv6DgpzdtLaHxb2A", "f": "key" }
      ],
      "forget": true
    },
    {
      "key": [],
      "children": [],
      "u": 1671893369622,
      "_id": "47QZS3B8gmwDzXR63",
      "parent": "35nBdhDNJLwCCyz6A"
    },
    {
      "key": ["Stylesheet Language"],
      "children": ["X38vcFdpPXrRks6rq"],
      "u": 1674424699675,
      "_id": "mC58T8gYLamzNB996",
      "parent": "BsZdDi99oMDRntube",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "BsZdDi99oMDRntube", "i": "q" },
        " to express how to visually present docs"
      ],
      "references": [{ "q": "35nBdhDNJLwCCyz6A", "f": "value" }]
    },
    {
      "key": ["HTML"],
      "children": [
        "7oG966z6c7n8a399F",
        "quqRGdc4MgvvzbQJc",
        "cyvFYRcv8DJYxq8dW",
        "sFNFJj3gn4LxqDsjM",
        "83grRTSuXoqZu9mQA",
        "tWjpmFPhYgeMaXPD9",
        "9CLJfbRetH3whKJxD",
        "76YhKkcT95w6554FG",
        "pa6epD49GxasQ2sfE",
        "Ya4GX4Aa3APY4Qj7F"
      ],
      "n": 1,
      "u": 1686078978000,
      "_id": "76YZFGLsBuRNyEMqN",
      "crt": {
        "o": {
          "s": {
            "_id": "cyvFYRcv8DJYxq8dW",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "os": {
          "os": {
            "_id": "quqRGdc4MgvvzbQJc",
            "s": "developer.mozilla.org/en US/docs/Learn/HTML/Cheatsheet",
            "v": [{ "i": "q", "_id": "EgjzsKLvSjiWrLHde" }]
          }
        },
        "l": { "a": { "_id": "7oG966z6c7n8a399F", "s": "" } }
      },
      "enableBackSR": true,
      "value": [
        { "_id": "PeH65ie4nro3mctZM", "i": "q" },
        " to express ",
        { "_id": "8pKWpQgtsXxLYT9TE", "i": "q" },
        " ",
        { "text": "struct/content", "b": true, "i": "m" },
        " "
      ],
      "references": [
        { "q": "5aZE9eMseyBFvJMcQ", "f": "key" },
        { "q": "9EpmPryCF6sBNkt25", "f": "value" },
        { "q": "o6KndB8FJCHngXuNE", "f": "value" },
        { "q": "JPr6NqMyxWLjep7jn", "f": "key" },
        { "q": "EqewRCCgYzj2gZ5TF", "f": "value" },
        { "q": "t9QrWKdi5MoQt36c3", "f": "value" },
        { "q": "DcwEraWad46opcQoY", "f": "value" },
        { "q": "pdnoQ42es8ckcd4c6", "f": "value" },
        { "q": "r8MivjfS7bnGLGPr5", "f": "value" },
        { "q": "nKse2ksxqEb2SJCft", "f": "value" },
        { "q": "qbiaQRT5JPmPywERj", "f": "value" },
        { "q": "8jqkKvL2coHX4jyoY", "f": "value" },
        { "q": "r9fGuETmz6vskWbc5", "f": "key" },
        { "q": "WDc76MvuTiAn2HTtc", "f": "value" },
        { "q": "aqvzRosAuZuZEK4wh", "f": "value" },
        { "q": "imyKYyWNcDJqQPHur", "f": "value" },
        { "q": "zGncWCtAGNMDSHK5M", "f": "value" },
        { "q": "WeKc6XhzbMuLYNBb2", "f": "value" },
        { "q": "YRoioGqFa2d2YSKbh", "f": "key" },
        { "q": "8j7DQYZHtZpeF82eb", "f": "value" },
        { "q": "jJzB73TjtwRMybJBo", "f": "value" },
        { "q": "mfZtwKcQJhKfXjymA", "f": "value" },
        { "q": "35nBdhDNJLwCCyz6A", "f": "value" },
        { "q": "vb4hpW7tEueYKRvGF", "f": "value" },
        { "q": "tWjpmFPhYgeMaXPD9", "f": "key" },
        { "q": "yYQKdFfr5Rt7Z4thu", "f": "value" },
        { "q": "ee4YA8kLPXLMHKiSB", "f": "value" },
        { "q": "xypcDdwXqnc6rytfS", "f": "value" },
        { "q": "QFod6YCBuZhJzpSWq", "f": "key" },
        { "q": "fy2SYQ6sNNGmGXJSz", "f": "key" },
        { "q": "JA98dKuxSmWCYgkes", "f": "key" },
        { "q": "FkXyqcuJsucLKnD4o", "f": "key" },
        { "q": "Y4K2hZbKy9vP83biv", "f": "key" },
        { "q": "9CLJfbRetH3whKJxD", "f": "value" },
        { "q": "F8QburnnxoG53eRWk", "f": "key" },
        { "q": "ec4M2oxwG2Pg7H7vY", "f": "value" },
        { "q": "LTHp2hrorfhzT7xzM", "f": "value" },
        { "q": "8tzd6cjyGSfD9JAxA", "f": "value" },
        { "q": "6KQqb87yH7oMefZm2", "f": "value" },
        { "q": "aqpyD9zYB5Su7JNtS", "f": "key" },
        { "q": "FR4hCywzHGdYuRsyK", "f": "key" },
        { "q": "AhQAAzBZa5wF3jLpY", "f": "key" },
        { "q": "iRJ5tkJnS5zCNhuK8", "f": "value" },
        { "q": "AwA3zAswEZdkMRvyw", "f": "key" },
        { "q": "AFA7phR8QdbJCn9aS", "f": "value" },
        { "q": "g83rHB5nufN3cDM5N", "f": "value" },
        { "q": "wjjKTsnuGehY2WAQv", "f": "key" },
        { "q": "76YhKkcT95w6554FG", "f": "key" },
        { "q": "9qE8bLao9wgucPbr3", "f": "value" },
        { "q": "wcJx8rZ7hhLBjhCJy", "f": "value" },
        { "q": "twEdvMdKPWpsP6tek", "f": "value" },
        { "q": "LARsXguQKBtCnvWcR", "f": "value" },
        { "q": "v93ZhQKDcjPCEPRve", "f": "value" },
        { "q": "kdJmJ9WAR9Soep8jK", "f": "value" },
        { "q": "BjFEaATautbzCrie3", "f": "key" },
        { "q": "cy2rJRD8r5nHCqQoF", "f": "key" },
        { "q": "A2hXAubqFwt9F5eEX", "f": "value" },
        { "q": "to3nwxqbbKyFLuDbb", "f": "key" },
        { "q": "8HgfcPhoJsdZip3LA", "f": "value" },
        { "q": "igsjWeBmeGA2LikX4", "f": "value" },
        { "q": "wieo8wb6wJA49avnb", "f": "value" }
      ]
    },
    {
      "key": [{ "_id": "2n8Gw7PvXGPcFQm7i", "i": "q" }],
      "children": ["MvjcMw4g9BbJsN43v", "DthkZroPqFr3WkH2H"],
      "u": 1680736038325,
      "_id": "7oG966z6c7n8a399F",
      "parent": "76YZFGLsBuRNyEMqN"
    },
    {
      "key": [
        {
          "i": "i",
          "url": "%LOCAL_FILE%R_XQeprWba-sC33CoRvhRcKDZic5cV1cdLczriEacnBmMwr598pACzh2WFKWmW2bUTDegweD9Co0SKXVTMkVkXGtAOJh-g63CV_I69rFnxkm_QaUnVWKM_mnbgP0f4ba.png",
          "width": 597,
          "height": 341.691318327974,
          "loading": false
        },
        " "
      ],
      "children": [],
      "u": 1680736038325,
      "_id": "sFNFJj3gn4LxqDsjM",
      "parent": "76YZFGLsBuRNyEMqN",
      "crt": { "x": {} }
    },
    {
      "key": ["Flow Content"],
      "children": [
        "82gNuGveEDqQDfWJA",
        "gSWPceu5pKhJ99QXa",
        "8HgfcPhoJsdZip3LA",
        "288zhEcBs9Fa5wSQJ",
        "GdqdcqyoxcMsNmjXo",
        "nco8D5k2RkS5vqkYH",
        "CRb2EhC44kh8PK7Yw",
        "bfrxcFhbwgJzfc3QZ",
        "FnPSu3XAE8akpB9tW",
        "WjodLTBZgcRevBnoA",
        "LixwWqzAgGhvsej3P"
      ],
      "u": 1686078962775,
      "_id": "83grRTSuXoqZu9mQA",
      "parent": "76YZFGLsBuRNyEMqN",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "any ",
        { "_id": "8HgfcPhoJsdZip3LA", "i": "q" },
        " to go inside ",
        { "_id": "ec4M2oxwG2Pg7H7vY", "i": "q" },
        " via ",
        { "_id": "gSWPceu5pKhJ99QXa", "i": "q" },
        " "
      ],
      "references": [
        { "q": "WAfv5LfiH8Da7eAMz", "f": "value" },
        { "q": "bfrxcFhbwgJzfc3QZ", "f": "value" },
        { "q": "nco8D5k2RkS5vqkYH", "f": "value" },
        { "q": "CRb2EhC44kh8PK7Yw", "f": "value" },
        { "q": "GdqdcqyoxcMsNmjXo", "f": "value" },
        { "q": "WjodLTBZgcRevBnoA", "f": "key" },
        { "q": "FnPSu3XAE8akpB9tW", "f": "value" },
        { "q": "5R9Xtroe68MW2yqR4", "f": "value" }
      ],
      "forget": null,
      "crt": { "l": { "a": { "_id": "82gNuGveEDqQDfWJA", "s": "" } } }
    },
    {
      "key": [{ "i": "q", "_id": "76YZFGLsBuRNyEMqN" }],
      "children": [
        "b9Aq7HzdPgbrHmouj",
        "B9jRPQZFMWQGXPN3a",
        "fXGwMxmgjBMEZoYqa",
        "cetFxHkNNCMf4fTx9",
        "4HM45HaACmDeLkjSg",
        "oz2QDjsAHQEqYSYQv",
        "ph623umSf7CKTLXQ5",
        "hTeQZG7rqNzcNj4xR",
        "PiTACLkMCxgtuHAJv",
        "CYfGNmHdtntAzb8mL",
        "Tiy4WNRsdXHMDbBvz",
        "JAC8MfdBnqNnZYSnW",
        "EkJFiSZeakGSFjGWk",
        "WCvjg5RMx7cCD5FiT",
        "izGmqqQ7monWuQRBW",
        "hezkczaTWG9EA6qFA",
        "dQStLLnF9htcK4xrm",
        "JBGRbWsCJeQmb7su5",
        "6Zds6hvbvs823XumB",
        "7smJhGQuSwefSfE4S",
        "KA8Myis8vwkmjnSqq",
        "MEsCYvqHMdS6mureS",
        "fKYZ7Z5AyZzSzPesT",
        "JD6NNvEAL2HuGuniH",
        "8BSLvpc8hgjoMSCj9",
        "Tu7P5WAPoinK7QkjE",
        "opYCgfmXEueAH5pSM",
        "xN2EWXak9SFCNNZM3",
        "Q47Ts8j5kvL6TLcbE",
        "R68gHXAdkacymKKP3",
        "EmFXto3suBNxr3tQk",
        "qFfgChNxSqzfvBiZ6",
        "33adj4onHyqnzQd9D",
        "4fWXhwitSNycEtEzz",
        "3cNrvan8kWAZPz2Br",
        "Pntid3Lc9TkiRBKmB",
        "6bWhZLdRtLs6Yc3Bp",
        "4KoiFFzLjQuLti4K2",
        "LgzwBeoNoF8vJXsXi"
      ],
      "u": 1680736038324,
      "_id": "tWjpmFPhYgeMaXPD9",
      "type": 6,
      "parent": "76YZFGLsBuRNyEMqN"
    },
    {
      "key": ["HTML Entity"],
      "children": [
        "nTCyMu8JZBnQ3z9yj",
        "jy2EJXwExKgbDLDPw",
        "eL4fzWiNXF9LryZde",
        "cjXCTCWXjBsw6vX23",
        "zdcHzYbXb3yeXyqRd",
        "2NRjpWJJSnzK37Xt3",
        "Bp267eTgZ9TbL9rDC",
        "wieo8wb6wJA49avnb"
      ],
      "u": 1685808320278,
      "_id": "9CLJfbRetH3whKJxD",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "QEA56Gyq3xqXojA5y", "i": "q" },
        " to display ",
        { "text": "reserved invisible chars", "b": true, "i": "m" },
        " in ",
        { "_id": "76YZFGLsBuRNyEMqN", "i": "q" },
        " "
      ],
      "parent": "76YZFGLsBuRNyEMqN",
      "references": [
        { "q": "F8xyGtbNvPohfxcJW", "f": "value" },
        { "q": "TKXPEXojfKqpi6M3L", "f": "key" },
        { "q": "Bp267eTgZ9TbL9rDC", "f": "key" },
        { "q": "cjXCTCWXjBsw6vX23", "f": "key" },
        { "q": "wieo8wb6wJA49avnb", "f": "value" },
        { "q": "jfoHFYTTGCY437shk", "f": "value" }
      ],
      "crt": {
        "os": {
          "os": {
            "_id": "jy2EJXwExKgbDLDPw",
            "s": "Entity - MDN Web Docs Glossary: Definitions of Web-related terms | MDNHTML Standard",
            "v": [
              { "i": "q", "_id": "ZL7vtnHpkC7DwRueT" },
              { "i": "q", "_id": "MwACjmxhMDcnwEn8A" }
            ]
          }
        },
        "l": { "a": { "_id": "nTCyMu8JZBnQ3z9yj", "s": "" } }
      }
    },
    {
      "key": ["Metadata Content"],
      "children": [
        "Qhmb3DCruK4ZMRe29",
        "pH5qktCZ2hLrLT2NL",
        "xYodBL2TnCNXC7Cpk",
        "oHmg5FBcj7drsptBd",
        "scKk24dcjPFhwDm5c",
        "jKzZizWSYGKH6gC5D",
        "xw2r3KEHc6tNqEMdH",
        "7LdprgJvjEGWDrfrN",
        "BBSY9NhyGRoFkwk5b",
        "vWKDiXHorT9puev2Q",
        "LARsXguQKBtCnvWcR",
        "Te6P9FPY4KAfRcKtq"
      ],
      "u": 1686078815898,
      "_id": "pa6epD49GxasQ2sfE",
      "parent": "76YZFGLsBuRNyEMqN",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "8HgfcPhoJsdZip3LA", "i": "q" },
        " to mod ",
        {
          "text": "presentation/behavior",
          "b": true,
          "cId": "8180784007241815",
          "i": "m"
        },
        " of ",
        { "_id": "xw9NYRFFX8Hnxv4PC", "i": "q" },
        " & provides additional info"
      ],
      "references": [
        { "q": "xYodBL2TnCNXC7Cpk", "f": "value" },
        { "q": "oHmg5FBcj7drsptBd", "f": "value" },
        { "q": "scKk24dcjPFhwDm5c", "f": "value" },
        { "q": "jKzZizWSYGKH6gC5D", "f": "value" },
        { "q": "xw2r3KEHc6tNqEMdH", "f": "value" },
        { "q": "7LdprgJvjEGWDrfrN", "f": "value" },
        { "q": "BBSY9NhyGRoFkwk5b", "f": "value" },
        { "q": "Te6P9FPY4KAfRcKtq", "f": "key" },
        { "q": "vWKDiXHorT9puev2Q", "f": "value" }
      ],
      "forget": true,
      "crt": { "l": { "a": { "_id": "Qhmb3DCruK4ZMRe29", "s": "" } } }
    },
    {
      "key": [],
      "children": [],
      "u": 1680736038323,
      "_id": "Ya4GX4Aa3APY4Qj7F",
      "parent": "76YZFGLsBuRNyEMqN"
    },
    {
      "key": ["Markup Lang"],
      "children": [
        "CqmzxkAcBX7RKaxMm",
        "KMydDpENRyWWRDrpH",
        "E87ywxPfLtRZbCv7h",
        "GjzXhuHCZaRahhXP4",
        "iJYA8JnwTqycjPj7z",
        "iyDtopN6npzgat68Y",
        "MT2Sfffne8SjYKvtg",
        "EGhbuoTgAb8JZNjhD"
      ],
      "u": 1685977887243,
      "_id": "PeH65ie4nro3mctZM",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "BsZdDi99oMDRntube", "i": "q" },
        " to control ",
        {
          "text": "style & layout",
          "b": true,
          "cId": "6694574219304532",
          "i": "m"
        },
        " presentation in documents"
      ],
      "forget": null,
      "references": [
        { "q": "yvSDHQ9t3A66D7hMi", "f": "value" },
        { "q": "cs2PfNnPrRJqvSwX9", "f": "key" },
        { "q": "L2kr5SQEfDHttWRWW", "f": "value" },
        { "q": "K7zDwr4FK2sNSGWch", "f": "value" },
        { "q": "draGa9vvoe6cqejiK", "f": "key" },
        { "q": "iJYA8JnwTqycjPj7z", "f": "value" },
        { "q": "KMydDpENRyWWRDrpH", "f": "key" },
        { "q": "5NZWMsGEuMXwApXj9", "f": "value" },
        { "q": "QfCNhYvuMaqK99dm4", "f": "value" },
        { "q": "E87ywxPfLtRZbCv7h", "f": "value" },
        { "q": "76YZFGLsBuRNyEMqN", "f": "value" },
        { "q": "EGhbuoTgAb8JZNjhD", "f": "value" }
      ],
      "parent": "BsZdDi99oMDRntube",
      "crt": { "l": { "a": { "_id": "CqmzxkAcBX7RKaxMm", "s": "" } } }
    },
    {
      "key": ["Web Page"],
      "children": ["u5c87aHwj8gCPsGi2", "uBE3XXJcHx5dtzknS"],
      "u": 1683814793631,
      "_id": "8pKWpQgtsXxLYT9TE",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "mCpoAWoZnaBRnvD8w", "i": "q" },
        " Document link to ",
        { "_id": "xSstF5KviS3MB6sLw", "i": "q" },
        " "
      ],
      "references": [
        { "q": "heN7NCPyjpgrC5w5P", "f": "value" },
        { "q": "7keEtgPjb3P2H6GA6", "f": "value" },
        { "q": "uBE3XXJcHx5dtzknS", "f": "value" },
        { "q": "pHYE8Hvbyp6vwPAWi", "f": "value" },
        { "q": "LTHp2hrorfhzT7xzM", "f": "value" },
        { "q": "GzGa6ipQeeQ93Q7qA", "f": "value" },
        { "q": "KB2eWKppcPGB7SRrw", "f": "value" },
        { "q": "rTqya3vrZoXSWo3Na", "f": "value" },
        { "q": "eFpanwiZYZqPJWAHZ", "f": "value" },
        { "q": "76YZFGLsBuRNyEMqN", "f": "value" },
        { "q": "mGpQexPRvbPEpxyDM", "f": "value" },
        { "q": "9qE8bLao9wgucPbr3", "f": "value" },
        { "q": "n8HnM89swGYw8wdCW", "f": "value" },
        { "q": "9DCJYzctFyPGwciNs", "f": "value" },
        { "q": "gSWPceu5pKhJ99QXa", "f": "value" },
        { "q": "E3fGHSoKi3xPf9AXK", "f": "value" },
        { "q": "rBbf4kfrHbus4yuZk", "f": "value" },
        { "q": "u5c87aHwj8gCPsGi2", "f": "key" },
        { "q": "AiYqMYSauDLsYPG67", "f": "value" },
        { "q": "KxW7JMNftYQtyjumz", "f": "value" },
        { "q": "DXWmNsmh7zp5DqCAv", "f": "key" },
        { "q": "XoEyiCtKYErT9e6yj", "f": "key" },
        { "q": "bDTtEDLJrukYNgrYo", "f": "value" },
        { "q": "Lb6AM7vRuTTpjYfuF", "f": "key" },
        { "q": "ognR7PSJfcC9XtBL3", "f": "value" }
      ],
      "parent": "eFpanwiZYZqPJWAHZ"
    },
    {
      "key": ["Dev tool"],
      "children": [
        "Y6guwJdndtvBfW9Dn",
        "ugE2YZZfTjrvRFP9p",
        "EftE9ZbH9sRSytLJA",
        "dhMQEy6ZxMB4reJy3",
        "pJfRWyyEwBaKAhdej",
        "kco3eKgjY4oZu7PZi",
        "f8BnnqejjAeKEQtgQ",
        "3T7SHKw5Gdr3QM2yQ",
        "9e6MPcLFJ7vWoTSEs",
        "MyBmh3sv3WbtGhzEZ",
        "9W4WceKp37hitNGFo",
        "DxvLoCMrvbAeigGWz",
        "ZCXMgLypWsiNxDKMq",
        "2b6b5AbsK4Aesx655",
        "dNL2iGFxuWCiyMe4J",
        "9kpN96vFZnxyxkG9e",
        "s2gzR8L64kGSKynsg",
        "7X4pjMArcfPSR5Zsi",
        "WfP7oCzYFQZvYeehA",
        "TBxSQTfT6hjoyiGFy",
        "9NhyNXiCb3oADvwyd",
        "uLGA8dM4NQihBhq5L",
        "5HHjRizELhmuPk2ad"
      ],
      "n": 1,
      "u": 1686080247437,
      "_id": "9izw8RoFY6epyxXYK",
      "crt": {
        "o": {
          "s": {
            "_id": "kco3eKgjY4oZu7PZi",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "Y6guwJdndtvBfW9Dn", "s": "" } }
      },
      "enableBackSR": true,
      "value": [
        "Utility ",
        { "_id": "g55nW57nnoMrHhvdh", "i": "q" },
        " to dev ",
        { "_id": "FhRJm5jvLH9BSGTDg", "i": "q" },
        " "
      ],
      "references": [
        { "q": "rdRvbWb3ejQk3QaYP", "f": "value" },
        { "q": "WfP7oCzYFQZvYeehA", "f": "key" },
        { "q": "ZCXMgLypWsiNxDKMq", "f": "value" },
        { "q": "M9uHGYRsACqa68ufv", "f": "value" },
        { "q": "pJfRWyyEwBaKAhdej", "f": "value" },
        { "q": "sA3e3ccWPz8DwFNLq", "f": "value" },
        { "q": "f8BnnqejjAeKEQtgQ", "f": "value" },
        { "q": "SSwovHxkZm9pgPy3x", "f": "value" },
        { "q": "Tpgh5gZ6wr4z5ksHN", "f": "value" },
        { "q": "tdpktXBGdvstMQZgh", "f": "value" },
        { "q": "p7rNWNM7GukCadybT", "f": "value" },
        { "q": "mGLcrjNraB3LMqyLC", "f": "value" },
        { "q": "kkniAFzuRpcHciQ7P", "f": "value" },
        { "q": "mK77s95pSRAucFXa4", "f": "value" },
        { "q": "x9iEX6dRCakXrpYvt", "f": "value" },
        { "q": "PMCiru8TMKvkoaLQR", "f": "value" },
        { "q": "Zv9YBztE6MsKWx6rm", "f": "value" },
        { "q": "XxWwCWSi4yykwBz3b", "f": "value" },
        { "q": "3T7SHKw5Gdr3QM2yQ", "f": "value" },
        { "q": "KtXmxHgvyrX3PXYi7", "f": "value" },
        { "q": "Jk5CvXtASNGBWhtiZ", "f": "value" },
        { "q": "xXFgDcRFcDYzHAoWv", "f": "value" },
        { "q": "iTcvvc83ZtzNvbWNT", "f": "value" },
        { "q": "FgtjtybxJ5i3c8gms", "f": "value" },
        { "q": "BNEWxReXXQjB2Maqc", "f": "value" },
        { "q": "A3thZ3oChC4v85fAf", "f": "value" },
        { "q": "8gSe667nqbAaMQRky", "f": "value" },
        { "q": "cGhHYgszggNdp3pwN", "f": "value" },
        { "q": "dhMQEy6ZxMB4reJy3", "f": "value" },
        { "q": "tACyWirEcvQkpFvzy", "f": "value" },
        { "q": "3NLkDNAj8sNEXSj9Z", "f": "value" },
        { "q": "EftE9ZbH9sRSytLJA", "f": "value" },
        { "q": "FoYuavu9d78Ns7YQQ", "f": "value" },
        { "q": "dNL2iGFxuWCiyMe4J", "f": "value" },
        { "q": "5qznyvKN83Na38FoK", "f": "value" },
        { "q": "9e6MPcLFJ7vWoTSEs", "f": "value" },
        { "q": "DxvLoCMrvbAeigGWz", "f": "value" },
        { "q": "HFaH8uoGhY62Ee2Q8", "f": "value" },
        { "q": "ff5vyJvxZZKDHtTdE", "f": "value" },
        { "q": "tsd5Ajox4dxss95pX", "f": "value" },
        { "q": "2b6b5AbsK4Aesx655", "f": "value" },
        { "q": "qvqaYK5DF3syhKLHm", "f": "value" }
      ],
      "forget": null
    },
    {
      "key": [{ "_id": "2n8Gw7PvXGPcFQm7i", "i": "q" }],
      "children": [
        "THuB7juMGfPHCxcTv",
        "qjtschQfZgyJ7ouZL",
        "SrssREfaPZi8nv8RC"
      ],
      "u": 1686080230320,
      "_id": "Y6guwJdndtvBfW9Dn",
      "parent": "9izw8RoFY6epyxXYK"
    },
    {
      "key": ["API"],
      "children": [
        "Kin8T3yLchP4hBgob",
        "CAZXAtoziCXf8fPDt",
        "t5gmvooyTF2kxAFjg",
        "mbXD4dHKnieuW6KNY",
        "Sn25qsHJ9FfvnGNAX",
        "gi3hxqT2CEoDFWSKm",
        "aKgjrLb9Ycq6S4Wnn",
        "Z6krN3baMkufJQZMw",
        "BpavBza5JDdYoFhvg",
        "5CLArxLGXz7mt8hKe",
        "SaRfqaJ6dY8x6yaQH",
        "rHASpdrjAFWNKPWMT",
        "cWK87YozF5iHwoZuy",
        "9fzvricDDKjK4N2ps",
        "uiu6P7EQEnZRPp5nn"
      ],
      "u": 1686413277390,
      "_id": "ugE2YZZfTjrvRFP9p",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "8B6sLHCQmwzb56Z2A", "i": "q" },
        "'s ",
        { "_id": "MP5hXPJeveLXpdxcz", "cId": "9844907124027207", "i": "q" },
        { "text": " & properties ", "cId": "9844907124027207", "i": "m" },
        { "text": "exposed", "b": true, "cId": "9844907124027207", "i": "m" },
        { "text": " to outside", "cId": "9844907124027207", "i": "m" },
        " with ",
        {
          "text": "rules for interacting",
          "b": true,
          "cId": "9844907124027207",
          "i": "m"
        },
        { "text": " ", "cId": "9844907124027207", "i": "m" },
        " "
      ],
      "parent": "9izw8RoFY6epyxXYK",
      "crt": {
        "l": { "a": { "_id": "CAZXAtoziCXf8fPDt", "s": "" } },
        "o": {
          "s": {
            "_id": "Kin8T3yLchP4hBgob",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        }
      },
      "references": [
        { "q": "wR4tC9t5Bu55jb93Q", "f": "value" },
        { "q": "Pqbjmo2wdYfmSrXHZ", "f": "key" },
        { "q": "5XCEc2DB4WNvKiSPk", "f": "key" },
        { "q": "5CLArxLGXz7mt8hKe", "f": "key" },
        { "q": "9LFtb56ZygeCRiSJ6", "f": "value" },
        { "q": "uiu6P7EQEnZRPp5nn", "f": "value" },
        { "q": "8beEDK3gMvivxf4m5", "f": "value" },
        { "q": "n3DRivWhxwiTuoajr", "f": "key" },
        { "q": "HFaH8uoGhY62Ee2Q8", "f": "value" },
        { "q": "6vEgycgH5GkpYxCd6", "f": "value" },
        { "q": "iwDHXFXix9WBD2YyT", "f": "value" },
        { "q": "b5wX66hCeuSxdsn2G", "f": "value" },
        { "q": "XPFmPNvsQWaPQnS62", "f": "key" },
        { "q": "5z5KqWsE9SFXtEQWW", "f": "value" },
        { "q": "iarNcaKqEW3XTbMma", "f": "value" },
        { "q": "WorrERfFNvNQrydJ8", "f": "value" },
        { "q": "MsbWkmvuD2Yx5XGBZ", "f": "value" },
        { "q": "Sn25qsHJ9FfvnGNAX", "f": "value" },
        { "q": "3Yht89zmGjM52zRcx", "f": "key" },
        { "q": "t5gmvooyTF2kxAFjg", "f": "key" },
        { "q": "mbXD4dHKnieuW6KNY", "f": "key" },
        { "q": "7iy6AF7tKRZMpfkQT", "f": "key" },
        { "q": "zi3TJTen5Jq2PpmDY", "f": "value" },
        { "q": "SaRfqaJ6dY8x6yaQH", "f": "value" },
        { "q": "ouoGzhvGLmnrCJAup", "f": "key" },
        { "q": "hTLBkJkWpDqRgztdh", "f": "value" },
        { "q": "Kg5A8gSWgKyDB8JTS", "f": "value" },
        { "q": "YRERKhEoaprPGopYm", "f": "value" },
        { "q": "nH4Xzf6gaWHnNrkHr", "f": "value" },
        { "q": "h5xe568rHLYDDMAFE", "f": "value" },
        { "q": "G3sE8Y26kgDkunPRT", "f": "value" },
        { "q": "2HRCvDNoYiNxA47LH", "f": "value" },
        { "q": "fv6QFetH95FwEYyFH", "f": "value" }
      ]
    },
    {
      "key": ["Docker"],
      "children": [
        "Yg9ZtJJsTz8Sy7HG9",
        "FqoYuithCkXLWtfj4",
        "wyZ4zSWrx3LLxiBex",
        "StMguZGAkjGhGbGoi",
        "rtT6gpTtvkBcgm8tX",
        "49xSHoe6m9CuJax2a",
        "8r5F5AGE6T9Yi4vT7",
        "FoYuavu9d78Ns7YQQ",
        "M56NnDXAgk8HC6EgQ",
        "hF3gm3uncHsGqWhnB",
        "s4Ef45CTFxKEQeZBC",
        "yYGdHnCyXZ4LW4FQq",
        "rDsFXEYKAK8LDTbm4",
        "rXjTZLwbEAedLM7rb",
        "oZZpBgTzbMKuY2DqL",
        "8Z7YEwFPDjdWWn9jZ"
      ],
      "u": 1681324651745,
      "_id": "EftE9ZbH9sRSytLJA",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "popular ",
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to ",
        { "_id": "FqoYuithCkXLWtfj4", "i": "q" },
        " workload to run on any ",
        { "_id": "qFk2KuZZn37Aw5cCX", "i": "q" },
        "/",
        { "_id": "fTQtRwmSyoL6io4ZL", "i": "q" },
        " environ"
      ],
      "references": [
        { "q": "StMguZGAkjGhGbGoi", "f": "value" },
        { "q": "hF3gm3uncHsGqWhnB", "f": "key" },
        { "q": "FoYuavu9d78Ns7YQQ", "f": "value" },
        { "q": "Pu4rfZ47vtvy62eaf", "f": "key" },
        { "q": "fzHBqeYtu7sYZyFnE", "f": "key" },
        { "q": "rXjTZLwbEAedLM7rb", "f": "value" }
      ],
      "crt": {
        "os": {
          "os": {
            "_id": "Yg9ZtJJsTz8Sy7HG9",
            "s": "docs.docker.com/glossary/",
            "v": [{ "i": "q", "_id": "QbaypBcQCoSsnPtPk" }]
          }
        }
      }
    },
    {
      "key": ["IDE"],
      "children": [
        "vzbESpscHYByeZhuG",
        "Fxv4fFNo2weePu5rK",
        "nEqg9E44oNKLytizj",
        "KfjgvEtjdu4zcbCXB",
        "5KRXHXF2YsgsWgWL3",
        "kkniAFzuRpcHciQ7P",
        "jQyybriMjQiFsy2nm"
      ],
      "u": 1685815097769,
      "_id": "dhMQEy6ZxMB4reJy3",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to write/build/test ",
        { "_id": "9i74HqGTJjH3GaNAR", "i": "q" },
        " "
      ],
      "forget": null,
      "crt": { "l": { "a": { "_id": "Fxv4fFNo2weePu5rK", "s": "" } } },
      "references": [
        { "q": "hEceXrcRALuhf4gym", "f": "value" },
        { "q": "WTEqWcsMBB22FtfZX", "f": "value" },
        { "q": "vzbESpscHYByeZhuG", "f": "value" },
        { "q": "oskRiop5tvKGMJzoQ", "f": "value" },
        { "q": "jQyybriMjQiFsy2nm", "f": "key" },
        { "q": "MSXrBoWcxvb3FgsdL", "f": "value" },
        { "q": "74yaPyZMWzYfcWZhQ", "f": "value" },
        { "q": "e3tjEiJHFvM6TG7uq", "f": "key" }
      ]
    },
    {
      "key": ["HTTP Client"],
      "children": [
        "tsd5Ajox4dxss95pX",
        "pTjLoKQMBpz957k4f",
        "KH4hQoJWbt62fkbBr"
      ],
      "u": 1685117221817,
      "_id": "pJfRWyyEwBaKAhdej",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to inspect/debug/monitor & send/recieve HTTP Traffic "
      ],
      "references": [
        { "q": "tsd5Ajox4dxss95pX", "f": "value" },
        { "q": "KH4hQoJWbt62fkbBr", "f": "key" }
      ]
    },
    {
      "key": ["Build Tool"],
      "children": [
        "sA3e3ccWPz8DwFNLq",
        "LDEQHmzc9uwztXM7P",
        "uu9KGPkeo2JMzk62h",
        "Tpgh5gZ6wr4z5ksHN",
        "228ScehQRrBzmesLJ",
        "SSwovHxkZm9pgPy3x",
        "mDjTwFcCgEefvZLp2",
        "GWKNBEiPnYfvxFKBS",
        "CD2yCmPbAu5TpoeCz",
        "NxfNMMNddLrQNqMb4",
        "FgtjtybxJ5i3c8gms"
      ],
      "u": 1685450485726,
      "_id": "f8BnnqejjAeKEQtgQ",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to ",
        { "_id": "vFv4TzsqcLcxtKrHc", "i": "q" },
        " & ",
        {
          "_id": "BNEWxReXXQjB2Maqc",
          "aliasId": "yKs3sHEjCumb8zMWw",
          "i": "q"
        },
        " project"
      ],
      "forget": true,
      "references": [
        { "q": "CD2yCmPbAu5TpoeCz", "f": "value" },
        { "q": "NxfNMMNddLrQNqMb4", "f": "key" },
        { "q": "dSs4mPoLpkwFHEXEd", "f": "key" },
        { "q": "raKzrcq8AipxxKLiB", "f": "value" }
      ]
    },
    {
      "key": [{ "text": "cURL", "q": true, "i": "m" }],
      "children": ["5Bi6RHMG7AXLbBwpe", "5fhwNrtd4BsCEcfDS"],
      "u": 1680755770465,
      "_id": "3T7SHKw5Gdr3QM2yQ",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "7X4pjMArcfPSR5Zsi", "i": "q" },
        " ",
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to get/send data over network from ",
        { "_id": "8mCRco53Ysj8Y8Xrc", "i": "q" },
        "  "
      ],
      "crt": {
        "l": { "a": { "_id": "5fhwNrtd4BsCEcfDS", "s": "" } },
        "os": {
          "os": {
            "_id": "5Bi6RHMG7AXLbBwpe",
            "s": "github.com/curl/curl",
            "v": [{ "i": "q", "_id": "kqN2yJG53iskRWNnr" }]
          }
        }
      }
    },
    {
      "key": ["Test Runner"],
      "children": [
        "k2BWFn8aXuug2WMqj",
        "M6oRZJw8gEoadpYaJ",
        "2sKKcXS7quzhatCz5",
        "otcMi3EATtsxLh9eQ"
      ],
      "u": 1680755770929,
      "_id": "9e6MPcLFJ7vWoTSEs",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to run ",
        { "_id": "k2BWFn8aXuug2WMqj", "i": "q" },
        " for project"
      ],
      "forget": true,
      "references": [
        { "q": "GRRiCNP6rPsty6mmS", "f": "value" },
        { "q": "CjTYfkwgibNEp7Se6", "f": "value" },
        { "q": "M6oRZJw8gEoadpYaJ", "f": "key" }
      ]
    },
    {
      "key": ["Code Sandbox"],
      "children": [
        "ARcZbNtTsYL3ZrCLq",
        "iQHBGwZpc5ALd9Ywi",
        "rgaBtGhxbXitsHCMY",
        "LFRyrL7yANHyT6Abm"
      ],
      "u": 1686078683135,
      "_id": "MyBmh3sv3WbtGhzEZ",
      "parent": "9izw8RoFY6epyxXYK"
    },
    {
      "key": [{ "text": "dotconfig", "q": true, "i": "m" }],
      "children": ["6u5A3pcomLFyAuvzX", "6Fq3scaAQE7XbY5Ci"],
      "u": 1676045371553,
      "_id": "9W4WceKp37hitNGFo",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "(",
        { "text": "format", "l": true, "i": "m" },
        ") file to sync config settings, usually hidden"
      ],
      "references": [
        { "q": "6MbCSripqp3FQudF7", "f": "value" },
        { "q": "yQjm8qggHw3DgMEH8", "f": "value" },
        { "q": "6u5A3pcomLFyAuvzX", "f": "key" },
        { "q": "6Fq3scaAQE7XbY5Ci", "f": "value" },
        { "q": "JeKnG69pxAxbZmaNx", "f": "value" },
        { "q": "2AykErqXBYNky2RyQ", "f": "value" },
        { "q": "nCe5ytCcy9GG3pBSJ", "f": "value" }
      ]
    },
    {
      "key": [{ "text": "degit", "q": true, "i": "m" }],
      "children": [
        "tiYS4GbpnDkZhcyxK",
        "KZB7QMDgnmR47ABDt",
        "4FaMXra3ecyyGqjbb",
        "2tsX9kd4jCzumfZuv"
      ],
      "u": 1678897683574,
      "_id": "DxvLoCMrvbAeigGWz",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to clone ",
        { "_id": "ZGDF8Dd7ypXgyA93a", "i": "q" },
        ", auto find latest commit, download ass ",
        { "_id": "vce2shKStmCbvGqDy", "i": "q" },
        " - essentially alias for ",
        { "text": "git clone --depth 1 _SOMEGITREPOURL", "q": true, "i": "m" },
        " "
      ],
      "forget": null,
      "references": [
        { "q": "4FaMXra3ecyyGqjbb", "f": "key" },
        { "q": "tiYS4GbpnDkZhcyxK", "f": "key" },
        { "q": "zD2zbb5sQu5r8L25P", "f": "key" }
      ],
      "crt": {
        "os": {
          "os": {
            "_id": "KZB7QMDgnmR47ABDt",
            "s": "github.com/Rich Harris/degit",
            "v": [{ "i": "q", "_id": "agJtwW7qkXzD8a343" }]
          }
        }
      }
    },
    {
      "key": ["git"],
      "children": [
        "yWLmc4Y8cEYHMiX62",
        "fo9GGaxHapyxrqscs",
        "te4E4xuDzk5AjdPdf",
        "wjTF5YvvyipdjjSpd",
        "eBcwKiyQ9DMWtk2zp",
        "MxijKrMueovcmzFp8",
        "uic3Dy2Q4H4hLjknK",
        "hedyjf427ikWoYHfP",
        "dJpqvsWdQZ5rFMtcD"
      ],
      "u": 1686087975639,
      "_id": "ZCXMgLypWsiNxDKMq",
      "type": 1,
      "parent": "9izw8RoFY6epyxXYK",
      "enableBackSR": true,
      "value": [
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " system to track ",
        { "_id": "pb6Mng4mAww58jx64", "i": "q" },
        " in files/",
        {
          "_id": "9i74HqGTJjH3GaNAR",
          "aliasId": "SpCg8t5FNir7dyWk3",
          "i": "q"
        },
        " "
      ],
      "references": [
        { "q": "KYsSvCHHpXiHqeGPh", "f": "value" },
        { "q": "hedyjf427ikWoYHfP", "f": "key" },
        { "q": "yQjm8qggHw3DgMEH8", "f": "value" },
        { "q": "eBcwKiyQ9DMWtk2zp", "f": "value" },
        { "q": "DasziXS9fFpgmWeNq", "f": "value" },
        { "q": "fiz6qnmnNpg22xccA", "f": "value" },
        { "q": "MfX5SKCW2ogTJyfZC", "f": "value" }
      ]
    },
    {
      "key": [{ "text": "jq", "q": true, "i": "m" }],
      "children": [
        "itj5ChpmeTL4NA9SL",
        "4t3MhQggwt85QLitu",
        "hHBPJMsmWaTwcgTiT",
        "EJCb6C2dSaAZJskNp"
      ],
      "u": 1685983685548,
      "_id": "2b6b5AbsK4Aesx655",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "7X4pjMArcfPSR5Zsi", "i": "q" },
        " ",
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to work JSON . ",
        { "_id": "iHBxh6cYpRZ4yoa3S", "i": "q" },
        " ",
        { "_id": "C3EvfeezBi9vLN8Nk", "i": "q" },
        " ",
        {
          "_id": "jnvopRBDpcXG5SHSk",
          "aliasId": "FXaFLCbxapFjxw52C",
          "i": "q"
        },
        " "
      ],
      "references": [
        { "q": "Ej4aofB4vEt4wEnn6", "f": "key" },
        { "q": "hHBPJMsmWaTwcgTiT", "f": "key" },
        { "q": "EckBH8XiF2iYTACfH", "f": "key" }
      ],
      "crt": {
        "os": {
          "os": {
            "_id": "itj5ChpmeTL4NA9SL",
            "s": "programminghistorian.org/en/lessons/json and jq#core jq filters",
            "v": [{ "i": "q", "_id": "kP5QXnygj3WG3LY8d" }]
          }
        }
      },
      "forget": null
    },
    {
      "key": ["Prepack"],
      "children": [
        "48y68KGkBjnr2m3oG",
        "YbAQk9DCFScWWwxf4",
        "DN32g7gPNFFkW44Ev"
      ],
      "u": 1683383169050,
      "_id": "dNL2iGFxuWCiyMe4J",
      "parent": "9izw8RoFY6epyxXYK",
      "crt": {
        "os": {
          "os": {
            "_id": "YbAQk9DCFScWWwxf4",
            "s": "prepack.io/",
            "v": [{ "i": "q", "_id": "tmW9AKfkYZTMjLACw" }]
          }
        }
      },
      "enableBackSR": true,
      "value": [
        { "_id": "9izw8RoFY6epyxXYK", "i": "q" },
        " to recompile ",
        { "_id": "HWLTjZrhernsLocy7", "i": "q" },
        " ",
        {
          "_id": "9i74HqGTJjH3GaNAR",
          "aliasId": "SpCg8t5FNir7dyWk3",
          "i": "q"
        },
        " by ",
        {
          "_id": "TXTXMRm8azvTs8joG",
          "aliasId": "vQCnw8cKqifbmzRxa",
          "i": "q"
        },
        " for perf"
      ]
    },
    {
      "key": ["ScreenToGif"],
      "children": ["CoMyfvYRHp3kuBJfM"],
      "u": 1686078707420,
      "_id": "9kpN96vFZnxyxkG9e",
      "parent": "9izw8RoFY6epyxXYK"
    },
    {
      "key": ["online port checker"],
      "children": ["rXufW7Cfs9grSgRKA"],
      "u": 1670961521523,
      "_id": "s2gzR8L64kGSKynsg",
      "parent": "9izw8RoFY6epyxXYK",
      "type": 1,
      "enableBackSR": true,
      "value": ["online tool to verify IP:port access by remote third party."],
      "forget": true,
      "crt": {
        "os": {
          "os": {
            "_id": "rXufW7Cfs9grSgRKA",
            "s": "canyouseeme.org/",
            "v": [{ "i": "q", "_id": "5Svnq5yRMPE2dbtND" }]
          }
        }
      }
    },
    {
      "key": ["CLI"],
      "children": [
        "HB3JDMojdiwXM38q4",
        "8mCRco53Ysj8Y8Xrc",
        "S8rBwyhHKe2XjHPZW",
        "eiGwjfrGdaEr9vNcv",
        "Tm4YEWdXhutSxQE3G",
        "5vtxEfGBQbEyKD56w",
        "RBxsfkgkHDep9o9Z7"
      ],
      "u": 1682642808011,
      "_id": "7X4pjMArcfPSR5Zsi",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "Text-based ",
        { "_id": "snR7voDJrhXWj7Xdz", "i": "q" },
        " to provide cmd ",
        { "_id": "e92R4WcyJewkNpJmu", "i": "q" },
        "s to ",
        { "_id": "8mCRco53Ysj8Y8Xrc", "i": "q" },
        " "
      ],
      "parent": "9izw8RoFY6epyxXYK",
      "references": [
        { "q": "S8rBwyhHKe2XjHPZW", "f": "key" },
        { "q": "eiGwjfrGdaEr9vNcv", "f": "value" },
        { "q": "M9uHGYRsACqa68ufv", "f": "value" },
        { "q": "rdRvbWb3ejQk3QaYP", "f": "value" },
        { "q": "AacHcWQdJmT6sw8Nu", "f": "value" },
        { "q": "tdpktXBGdvstMQZgh", "f": "value" },
        { "q": "8gSe667nqbAaMQRky", "f": "value" },
        { "q": "p7rNWNM7GukCadybT", "f": "value" },
        { "q": "q63FsEZffnYZBXchA", "f": "value" },
        { "q": "aMoH5A6wLSgPXdXM2", "f": "value" },
        { "q": "mK77s95pSRAucFXa4", "f": "value" },
        { "q": "Zv9YBztE6MsKWx6rm", "f": "value" },
        { "q": "3T7SHKw5Gdr3QM2yQ", "f": "value" },
        { "q": "xXFgDcRFcDYzHAoWv", "f": "value" },
        { "q": "iTcvvc83ZtzNvbWNT", "f": "value" },
        { "q": "oNr9LR4egZ87zRtRQ", "f": "value" },
        { "q": "tACyWirEcvQkpFvzy", "f": "value" },
        { "q": "p37twFtXp4W525E7g", "f": "value" },
        { "q": "NmAaRFEGiEWzk64ER", "f": "value" },
        { "q": "2b6b5AbsK4Aesx655", "f": "value" },
        { "q": "FoYuavu9d78Ns7YQQ", "f": "value" },
        { "q": "aZBLCJBAmpZYRFDjv", "f": "value" }
      ],
      "crt": { "l": { "a": { "_id": "HB3JDMojdiwXM38q4", "s": "" } } }
    },
    {
      "key": [{ "i": "q", "_id": "9izw8RoFY6epyxXYK" }],
      "children": [
        "jWAhMedzHsxAd3WwE",
        "Eprvzo39obEDAGCZH",
        "JfsWosrFSgwWgHjFK",
        "Qj93cLhK7qnbqtyYM",
        "EbNhhSyC9oK5BGTML",
        "SD4qEzMer7f6d475D",
        "Knk8s278duEv5G7MH",
        "NdaqStN9E6oPQd7gw",
        "ibfAn5Fnbd92gwCdx",
        "CMePhFr5e4TeZPn7o",
        "o3hhpMhPXCAYgZstA",
        "EwTqSyaBKtonopa7y",
        "TRkwsZe4KQpDmtMEx",
        "7uyJ9Jh833MruivFT",
        "qgjainH5ppPFuGaCp",
        "4Rc3CCFfCphcPJJW4",
        "kHrRZEeDfqhsnP7xu",
        "pDs8FrLyHDRZ4jcmp",
        "m6Q6fm5juQnNNFZgW",
        "yXum3jXrLDQwdEX4M",
        "MnLAvhzXdTkmfADrw",
        "yK3FmSbNhfTGQdoBj",
        "eFTp6wAxWFry7bsc4",
        "87wyPoMg3iRsivd6q",
        "tDcYt7EWSwiZ9KnmT",
        "aQSCuRFKHcZ98LESP",
        "LRgAHq4YZ7C5zTnzg",
        "SagKsTf97XaCutPzS",
        "CuCAN6hL3qaAeDnHX",
        "neEgLzNxE9riajAj3",
        "Fbps5KizFugLsY29i",
        "FudckcbK6z365WvK4",
        "aoB8MGEs7PCncHj9C",
        "pxed3WBcKjBY2vYM7",
        "mkDfdmrApvYA4YjoM",
        "CgMJSMwff36NjaTGs",
        "8MckHEBdHtq8XetXb",
        "tDgMv6c3mmbWdRTAF",
        "XqvNd9TPyKiLSm9eP",
        "xtR2SprSM68agkFQd",
        "z4EAr9XxYiTsWwWZC"
      ],
      "u": 1680565261470,
      "_id": "WfP7oCzYFQZvYeehA",
      "type": 6,
      "parent": "9izw8RoFY6epyxXYK"
    },
    {
      "key": ["Webhook"],
      "children": [
        "ivrXXHeogxhFFyysJ",
        "7gK9PupQMYGTSSJDc",
        "p7rNWNM7GukCadybT",
        "qu2Pvwyu4whyd2Knc",
        "huA2JE4onHqeifRcP"
      ],
      "u": 1683643416869,
      "_id": "TBxSQTfT6hjoyiGFy",
      "type": 1,
      "references": [
        { "q": "njKnCou5h8A7wG9Qk", "f": "key" },
        { "q": "uFLYXM96huMqcCDPZ", "f": "key" },
        { "q": "APA7LD99LuGA4Puer", "f": "key" },
        { "q": "4GZNFjqti4SBiEtkM", "f": "key" },
        { "q": "mT7pfAqHpKCRqP3Ms", "f": "key" },
        { "q": "g3JnwCD5ocHHaC6vX", "f": "key" },
        { "q": "7gK9PupQMYGTSSJDc", "f": "key" },
        { "q": "BajXTQynCwAy83TH8", "f": "key" },
        { "q": "M56NnDXAgk8HC6EgQ", "f": "value" }
      ],
      "parent": "9izw8RoFY6epyxXYK",
      "enableBackSR": true,
      "value": [
        {
          "_id": "ihD6Fqps25jmJGYtz",
          "aliasId": "aLFiBwyLvvHDzGHKj",
          "i": "q"
        },
        " for ",
        { "_id": "pCaL4QRt5XkkpMTwR", "i": "q" },
        " web event, to push real-time updates to ",
        { "_id": "8B6sLHCQmwzb56Z2A", "i": "q" },
        "/",
        { "_id": "jLgNKqacy7wgSHzAD", "i": "q" },
        " "
      ],
      "crt": { "l": { "a": { "_id": "ivrXXHeogxhFFyysJ", "s": "" } } }
    },
    {
      "key": ["Flowchart Tools"],
      "children": [
        "kSFSQLDNWvnoGTSRs",
        "RDXjH25Sz7bu2NBSq",
        "FR5RDJsaoa5NZZDJg"
      ],
      "u": 1686078731189,
      "_id": "9NhyNXiCb3oADvwyd",
      "parent": "9izw8RoFY6epyxXYK"
    },
    {
      "key": ["Foam"],
      "children": ["ZqiNQu8YpiYtFsbik", "sQZGZ4riReBtgiptx"],
      "u": 1682642669717,
      "_id": "uLGA8dM4NQihBhq5L",
      "type": 1,
      "crt": {
        "os": {
          "os": {
            "_id": "ZqiNQu8YpiYtFsbik",
            "s": "foambubble.github.io/foam/marketplace.visualstudio.com/items?itemName=foam.foam vscode",
            "v": [
              { "i": "q", "_id": "CbpRoaH24rmbrBWvj" },
              { "i": "q", "_id": "7R3qiN2o3gFrMifKM" }
            ]
          }
        }
      },
      "references": [
        { "q": "9mJsGkqEkDSzjdSMx", "f": "key" },
        { "q": "4KK3nPp7MCNGerQtG", "f": "key" },
        { "q": "WWyhb76YHhRmXM5vg", "f": "key" },
        { "q": "DbwbsTAjnAGC63SAz", "f": "key" },
        { "q": "sQZGZ4riReBtgiptx", "f": "key" }
      ],
      "parent": "9izw8RoFY6epyxXYK",
      "enableBackSR": true,
      "value": ["VSC ext to generate wiki notes/flashcards from code?"],
      "forget": true
    },
    {
      "key": [],
      "children": [],
      "u": 1672516829096,
      "_id": "5HHjRizELhmuPk2ad",
      "parent": "9izw8RoFY6epyxXYK"
    },
    {
      "key": ["Program"],
      "children": [
        "DaZohnvd9LgJgw5Yf",
        "uJYn7xDjzenfoEQ7k",
        "Bx3buAt2XEz595FaZ",
        "ssBed7bbHW2S7GmxM"
      ],
      "u": 1685977476494,
      "_id": "g55nW57nnoMrHhvdh",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "self-contained sequence of ",
        { "_id": "e92R4WcyJewkNpJmu", "content": false, "i": "q" },
        " to perform task"
      ],
      "references": [
        { "q": "aTHH8FXm73dqHCyaP", "f": "value" },
        { "q": "57Zv3zxcyD9PNPHZQ", "f": "key" },
        { "q": "E384BXR9ZLYApmhuy", "f": "key" },
        { "q": "pywJPf3QeGNmMWJog", "f": "value" },
        { "q": "385guNMZZp74ErpYg", "f": "value" },
        { "q": "HBQdHR4MSmYrwDL6q", "f": "value" },
        { "q": "qEdbXu5Pib366jDGb", "f": "value" },
        { "q": "f5uECEpJJnEYcicCS", "f": "value" },
        { "q": "7XvEXYkGd3wwCfTQd", "f": "value" },
        { "q": "aC4anWwe7rHBeQbRd", "f": "key" },
        { "q": "FHuY9MCyCz7mztJMt", "f": "value" },
        { "q": "zemomLmRmpoCHcmpe", "f": "value" },
        { "q": "m3cz8PKs9qpTdHQQn", "f": "value" },
        { "q": "Ta9x7GdMGgcDfx5im", "f": "key" },
        { "q": "2BGNyGtv9NKJQzqHK", "f": "value" },
        { "q": "NaqHrHoDibtfafddt", "f": "value" },
        { "q": "74FiXib3nYwk7d8pP", "f": "value" },
        { "q": "NRMW2X2SAKWp7P48r", "f": "value" },
        { "q": "DaZohnvd9LgJgw5Yf", "f": "key" },
        { "q": "Xk6nR3mXM84BhggxW", "f": "value" },
        { "q": "eiGwjfrGdaEr9vNcv", "f": "value" },
        { "q": "25avbMQmzAS4qppLf", "f": "value" },
        { "q": "FKFDntB464TNg69YL", "f": "value" },
        { "q": "qZRZpEeKKZMvCPZtw", "f": "value" },
        { "q": "9i74HqGTJjH3GaNAR", "f": "value" },
        { "q": "dEF4JpDubBtWoT3fx", "f": "value" },
        { "q": "GzGa6ipQeeQ93Q7qA", "f": "value" },
        { "q": "JDaB3CZDvm7pambpE", "f": "value" },
        { "q": "bJMWyPuGvhRoanPqn", "f": "value" },
        { "q": "h3YomwNCxziGPMonJ", "f": "value" },
        { "q": "afrECxrLLg4GkAaBE", "f": "value" },
        { "q": "ssBed7bbHW2S7GmxM", "f": "value" },
        { "q": "fK7eR6oR4Je2gPqMo", "f": "value" },
        { "q": "9uMGAsvf5oxJrdYPJ", "f": "value" },
        { "q": "dpqDNwFudMJJsitxW", "f": "value" },
        { "q": "RcDD7ptiymK7xT5Qs", "f": "value" },
        { "q": "FhRJm5jvLH9BSGTDg", "f": "value" },
        { "q": "WpabcYNL9rqc37rWj", "f": "value" },
        { "q": "2AuCzxjfoT8u8LGTn", "f": "value" },
        { "q": "F2nD9kq9bq49DBi6H", "f": "value" },
        { "q": "L6bm6S8CddTBmh97e", "f": "value" },
        { "q": "Hhfx8MjiQ25tqyJeb", "f": "value" },
        { "q": "Yem9tQ5rNvkGGTiBR", "f": "value" },
        { "q": "RHQYajMmdtu7f72ZH", "f": "value" },
        { "q": "FqoYuithCkXLWtfj4", "f": "value" },
        { "q": "9izw8RoFY6epyxXYK", "f": "value" },
        { "q": "5wTtku6JSchT7NTKn", "f": "value" }
      ],
      "parent": "FKFDntB464TNg69YL",
      "crt": { "l": { "a": { "_id": "uJYn7xDjzenfoEQ7k", "s": "" } } }
    },
    {
      "key": ["Software"],
      "children": [
        "MXBSNurGf5WnAvwCs",
        "25avbMQmzAS4qppLf",
        "z7Sw6J6fvSY3AcNCn",
        "o6Q2EJ5GmDGLmDvhj",
        "cpynKZDbNfQ9xqGcJ",
        "rKoZvFZYSXBkP3ubj"
      ],
      "u": 1681404595013,
      "_id": "FhRJm5jvLH9BSGTDg",
      "references": [
        { "q": "3XXrDMAnd7EMidKdZ", "f": "value" },
        { "q": "NeAaQ27Kyn3LyHeux", "f": "value" },
        { "q": "fTQtRwmSyoL6io4ZL", "f": "value" },
        { "q": "yvqEXQJ9sTyBuv4nv", "f": "value" },
        { "q": "Sd7yMyZaYFSTFsAZj", "f": "value" },
        { "q": "XR9NxyxfttuFDPgAW", "f": "value" },
        { "q": "aKgjrLb9Ycq6S4Wnn", "f": "value" },
        { "q": "tpyMbpMtWjvh8HApd", "f": "value" },
        { "q": "oiJctyHppyHsjwnNP", "f": "key" },
        { "q": "8B6sLHCQmwzb56Z2A", "f": "value" },
        { "q": "rKoZvFZYSXBkP3ubj", "f": "key" },
        { "q": "z7Sw6J6fvSY3AcNCn", "f": "value" },
        { "q": "v8gQTKg8EzfY5Em7G", "f": "value" },
        { "q": "zcQR3rKqpmpY6u3GB", "f": "value" },
        { "q": "MNJbMtTqJj8Ymwxkq", "f": "value" },
        { "q": "M4Tk3QX3MRiPuRbsA", "f": "value" },
        { "q": "t5gmvooyTF2kxAFjg", "f": "key" },
        { "q": "LnYy2kqokFEXpWxxX", "f": "value" },
        { "q": "rHZQrguph5SNkNEaj", "f": "value" },
        { "q": "TetSGgPSFFbZyBFiv", "f": "value" },
        { "q": "kDnwCqS9tsuC2WbxC", "f": "value" },
        { "q": "esXeS2HREdMyorX2E", "f": "value" },
        { "q": "rtT6gpTtvkBcgm8tX", "f": "value" },
        { "q": "MXBSNurGf5WnAvwCs", "f": "value" },
        { "q": "9izw8RoFY6epyxXYK", "f": "value" },
        { "q": "38bYjGni5Nb77wdBc", "f": "value" },
        { "q": "Sw5Fyhz793nkuaan3", "f": "value" }
      ],
      "parent": "FKFDntB464TNg69YL",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "set of ",
        {
          "_id": "g55nW57nnoMrHhvdh",
          "aliasId": "GzEhAv25hHXoQAKfy",
          "i": "q"
        },
        " to perform tasks (on ",
        { "_id": "FKFDntB464TNg69YL", "i": "q" },
        ")"
      ],
      "forget": true
    },
    {
      "key": ["React"],
      "children": [
        "rAmLR2MTZguHHNZsi",
        "iRgxhunfebNHzCELq",
        "AzQj9schT37md4Eui",
        "kBu7Qsvz5r6NPchaA",
        "pFCETDs5vSbPinDYv",
        "rPRstq7Z6SoDfjJMi",
        "H5esqxiqR3MkD2QuC",
        "bSLc699TqCeBLbuSG",
        "aANQ5wf9QkSB6Buu7"
      ],
      "u": 1686079740379,
      "_id": "G887bqycfCYCmncMh",
      "enableBackSR": true,
      "crt": {
        "o": {
          "s": {
            "_id": "AzQj9schT37md4Eui",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "r": {
          "s": {
            "_id": "iRgxhunfebNHzCELq",
            "s": "H2",
            "v": [{ "i": "q", "_id": "GBxZwzDPpAbDAQpAY" }]
          }
        },
        "l": { "a": { "_id": "rAmLR2MTZguHHNZsi", "s": "" } }
      },
      "references": [
        { "q": "niovyM6ofyjeKSYm5", "f": "key" },
        { "q": "GHyoQtNDa8At3oQzK", "f": "key" },
        { "q": "8RJdbh7d9sbaE3pyD", "f": "key" },
        { "q": "9qcft7ZoSsN69XWs5", "f": "key" },
        { "q": "kBu7Qsvz5r6NPchaA", "f": "key" },
        { "q": "Qsdg5xR2n4LZ8bM9o", "f": "value" },
        { "q": "9jjYDttkJFbPMZW4j", "f": "value" },
        { "q": "3apmEvsNEPPRaXSB9", "f": "value" },
        { "q": "oB8bYNHFSPyRLLqMM", "f": "value" },
        { "q": "XfzK9M3CoQyZaJt9X", "f": "value" },
        { "q": "6KQqb87yH7oMefZm2", "f": "value" },
        { "q": "5z5KqWsE9SFXtEQWW", "f": "value" },
        { "q": "FPZmXnno5fnM5A8CA", "f": "value" },
        { "q": "MuB74BarWvmKQYzBt", "f": "key" },
        { "q": "pofApdiFx4WuXirZH", "f": "value" },
        { "q": "Zb4s5yPSMoujnsZkj", "f": "value" },
        { "q": "MP3KiYFGTEawBaYwS", "f": "value" },
        { "q": "9dc4XQ3rMMFNa7mo7", "f": "key" },
        { "q": "zKN2sE44CWGjZ5WBs", "f": "key" },
        { "q": "aZS6rpha853cLhJsE", "f": "value" },
        { "q": "SgRf7itswpQTcj6dn", "f": "value" },
        { "q": "2RNFkgXk8f4JbAxNu", "f": "value" },
        { "q": "mGLcrjNraB3LMqyLC", "f": "value" },
        { "q": "FMLHd2wm78tiGLSjP", "f": "value" },
        { "q": "dfS7kiuXaDd9DPLst", "f": "value" },
        { "q": "7gLqeoC92Fvje4oYu", "f": "value" },
        { "q": "Rx7C3mfvD3tbttuPq", "f": "value" },
        { "q": "LGCaoRsGLYEN2D4Kc", "f": "key" }
      ],
      "parent": null,
      "value": [
        { "_id": "SgRf7itswpQTcj6dn", "i": "q" },
        " ",
        { "_id": "6ERdmyzDi2vQobG6F", "i": "q" },
        " to build ",
        { "_id": "8B6sLHCQmwzb56Z2A", "i": "q" },
        " ",
        { "_id": "snR7voDJrhXWj7Xdz", "i": "q" },
        " via ",
        { "_id": "WvmdtwyRb3ESuKpyp", "i": "q" },
        " ",
        { "_id": "mjTCbhpeijxbWPdJP", "i": "q" },
        " "
      ],
      "type": 1,
      "forget": false,
      "n": 1
    },
    {
      "key": [{ "_id": "2n8Gw7PvXGPcFQm7i", "i": "q" }],
      "children": ["miZ5yaZc8nLTeTdXr"],
      "u": 1683730757018,
      "_id": "rAmLR2MTZguHHNZsi",
      "parent": "G887bqycfCYCmncMh"
    },
    {
      "key": [{ "i": "q", "_id": "G887bqycfCYCmncMh" }],
      "children": [
        "5SwQ2EQMgqPSjfYCg",
        "jEbqsbJZgvAmCrn79",
        "sqwezP6e2LMqTbvEx",
        "w7CzNip7STEeWNegd",
        "av8T6F8M8feRPnTvH",
        "aznX5eBAzojYnvcfs",
        "tNg3AxqZEpPvdvfg5",
        "b7vZzJTXurAZX7jWN",
        "nwB4jvcpWQwYMQK7E",
        "kTFCcTFCTaFZpF4cd",
        "dfpeMMxdsFH6pky6Y",
        "bTkPrqciv5GnTiKbA",
        "dEjDaKLgPaw6mhf4R",
        "Yniw9cYCurLEmhbaP",
        "P4MNiTbdM8kYsgXdt",
        "X34apTWHkqgw8ReKE",
        "gdt5PbA9vGnESQPMT",
        "bjbJjobjWPXXRpkYa",
        "cLQvbFg9B565rBrES",
        "eBy76DZSSF2opabHc",
        "5CjkhpsH4K3PqBnSS",
        "LgbNm6i63JZGHPuY4",
        "bRCtprPXsJpKzhsk6"
      ],
      "u": 1682642591242,
      "_id": "kBu7Qsvz5r6NPchaA",
      "type": 6,
      "parent": "G887bqycfCYCmncMh"
    },
    {
      "key": ["React Concepts"],
      "children": [
        "W9ZPwR6gvDuEGptQm",
        "SgRf7itswpQTcj6dn",
        "Zb4s5yPSMoujnsZkj",
        "MP3KiYFGTEawBaYwS",
        "Gg69yNgwG8hNaTJNM",
        "Rx7C3mfvD3tbttuPq",
        "aZS6rpha853cLhJsE",
        "mjTCbhpeijxbWPdJP",
        "mMhBxSMm7cMmqjSRi",
        "whqNqQjbBJxxendya",
        "SmcstZDv9b9h3gmK3",
        "2JYGkBPCfnCatktYn"
      ],
      "u": 1686413277391,
      "_id": "pFCETDs5vSbPinDYv",
      "parent": "G887bqycfCYCmncMh",
      "references": [{ "q": "2JYGkBPCfnCatktYn", "f": "key" }],
      "crt": {
        "o": {
          "s": {
            "_id": "Gg69yNgwG8hNaTJNM",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "W9ZPwR6gvDuEGptQm", "s": "" } }
      },
      "type": 1,
      "enableBackSR": true,
      "value": [
        "Definitions on React Concepts, ",
        {
          "_id": "f8HSnzHhJAHApZkFA",
          "aliasId": "pHGbLbq3XQvP9txvv",
          "i": "q"
        },
        " & Comparisons to other frameworks"
      ],
      "forget": true
    },
    {
      "key": ["React API"],
      "children": [
        "rS3TeW3dh3uP8j835",
        "FMLHd2wm78tiGLSjP",
        "QuTfcZsNCNR5htht5",
        "MCR98AgduANTAFehA",
        "CGkiSvenxM6nGHJjF",
        "9jrLaaao4SmCHXBrt",
        "xpCmfT7YgY384ZgSh",
        "e7WxnAK8Z3Gqpi6aB",
        "iXMFXcqvSzC4M3Sta",
        "we9bt9NFFsyFKDmAB",
        "AFA7phR8QdbJCn9aS"
      ],
      "u": 1686079445599,
      "_id": "rPRstq7Z6SoDfjJMi",
      "parent": "G887bqycfCYCmncMh",
      "enableBackSR": true,
      "type": 1,
      "value": ["core lib to expose react functionality "],
      "forget": true,
      "references": [
        { "q": "9jrLaaao4SmCHXBrt", "f": "value" },
        { "q": "CGkiSvenxM6nGHJjF", "f": "value" },
        { "q": "vDfZdq9P8Crv9k4KN", "f": "value" },
        { "q": "xpCmfT7YgY384ZgSh", "f": "value" },
        { "q": "e7WxnAK8Z3Gqpi6aB", "f": "value" },
        { "q": "iXMFXcqvSzC4M3Sta", "f": "key" },
        { "q": "HcamSPu8LRv8EFp3a", "f": "key" },
        { "q": "FMLHd2wm78tiGLSjP", "f": "value" },
        { "q": "arnSMDWZWxG9jAttf", "f": "key" }
      ],
      "crt": {
        "o": {
          "s": {
            "_id": "QuTfcZsNCNR5htht5",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "rS3TeW3dh3uP8j835", "s": "" } }
      }
    },
    {
      "key": ["React Stack"],
      "children": [
        "LTTm2BKT4c8TJuxRr",
        "Scvhtt7iptMXxhPoK",
        "reQe9pXmpjqwHJrrY",
        "W3HSC2hSpJnZDHPw9",
        "Rku6LjmDdzW5TZyFF",
        "wqYoiXRimsRz6297h",
        "mGLcrjNraB3LMqyLC",
        "nH4Xzf6gaWHnNrkHr",
        "bmv6gQiEg9ZyXwHNr",
        "gHzkNK2iWPfgHu39p",
        "2oazDgptzQZ8utX43",
        "vqSfANsM8bvAoHd4F",
        "FPZmXnno5fnM5A8CA",
        "5b3HwwP5NP7xCqCbE",
        "77hyjkRPzCdZsJS3d",
        "7W9gBzJWGwQRQ2eZ6",
        "awsM4dgwJWRpY5YSC",
        "RRKzCiMgPSTv4No7L",
        "PtucH4LAFfBCDjhd3",
        "HWst3our9nHxh6woD",
        "pofApdiFx4WuXirZH",
        "Dk3oPDX6h9EdC7Lsu",
        "CovfcPsr9BT7FaAzk",
        "7Q5NTRq49LTEA9mzQ",
        "a5LobspZzaXWWaQH4",
        "7zniAF8TPYtf2Wqjc",
        "wGcsWuyow8p2s5EAb",
        "7F9kkSEgC4JhdA9do",
        "5s7dKC385zPY2frDA",
        "zPhaLgCKDeq6zF7GQ",
        "Jzj5d84RSSqrcsEQC",
        "5sf4y4StXxFLf6imb",
        "5qznyvKN83Na38FoK",
        "Xj48rHyFd2SMuocBa",
        "ej7cLxS6YXtvyqvni"
      ],
      "u": 1686079333934,
      "_id": "H5esqxiqR3MkD2QuC",
      "parent": "G887bqycfCYCmncMh",
      "references": [
        { "q": "wqYoiXRimsRz6297h", "f": "key" },
        { "q": "HXzM83tnCBxxewLtr", "f": "value" },
        { "q": "5b3HwwP5NP7xCqCbE", "f": "key" },
        { "q": "HWst3our9nHxh6woD", "f": "value" },
        { "q": "SgRf7itswpQTcj6dn", "f": "value" },
        { "q": "RRKzCiMgPSTv4No7L", "f": "value" },
        { "q": "7W9gBzJWGwQRQ2eZ6", "f": "value" },
        { "q": "awsM4dgwJWRpY5YSC", "f": "value" },
        { "q": "5s7dKC385zPY2frDA", "f": "value" },
        { "q": "7zniAF8TPYtf2Wqjc", "f": "value" },
        { "q": "77hyjkRPzCdZsJS3d", "f": "value" },
        { "q": "a5LobspZzaXWWaQH4", "f": "value" },
        { "q": "nH4Xzf6gaWHnNrkHr", "f": "value" },
        { "q": "Xj48rHyFd2SMuocBa", "f": "value" },
        { "q": "7Q5NTRq49LTEA9mzQ", "f": "value" },
        { "q": "PtucH4LAFfBCDjhd3", "f": "value" },
        { "q": "Dk3oPDX6h9EdC7Lsu", "f": "value" },
        { "q": "ptZ7nXZSjs3vJ74G8", "f": "value" },
        { "q": "vqSfANsM8bvAoHd4F", "f": "value" }
      ],
      "crt": {
        "o": {
          "s": {
            "_id": "5sf4y4StXxFLf6imb",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "Rku6LjmDdzW5TZyFF", "s": "" } },
        "a": {}
      },
      "enableBackSR": true,
      "value": ["Broader React Ecosystem, third party libraries & frameworks "],
      "forget": true,
      "type": 1
    },
    {
      "key": ["React Snippets"],
      "children": [
        "Xu4JqdQw4NGJaFxuS",
        "d5ZwMpWLLGXBC3GXk",
        "sXRmmdneWsJ8m4Jhg",
        "xbzAdmjRTkzMDs8XW",
        "JH8hn2ar2FF9TZY9B",
        "s2c8pdokHkCFa6yui"
      ],
      "u": 1686079359466,
      "_id": "bSLc699TqCeBLbuSG",
      "parent": "G887bqycfCYCmncMh",
      "crt": {
        "o": {
          "s": {
            "_id": "d5ZwMpWLLGXBC3GXk",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "Xu4JqdQw4NGJaFxuS", "s": "" } }
      },
      "enableBackSR": true,
      "value": ["useful React custom hooks/patterns"],
      "forget": true,
      "type": 1
    },
    {
      "key": ["React Versions"],
      "children": [
        "tL5v2dZ8tupwAqK2F",
        "kYpd6ShwckiRqEPyL",
        "ymBpZjtqXuAkSQxNR",
        "gy6JxnzmiNB5ELF7d",
        "mamrz4S3Hnv8XB7PB",
        "9ZEqLbx2CTFreP4kF"
      ],
      "u": 1686079375695,
      "_id": "aANQ5wf9QkSB6Buu7",
      "enableBackSR": true,
      "type": 1,
      "parent": "G887bqycfCYCmncMh",
      "value": ["breaking change, major features"],
      "forget": true,
      "crt": {
        "o": {
          "s": {
            "_id": "kYpd6ShwckiRqEPyL",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "tL5v2dZ8tupwAqK2F", "s": "" } }
      },
      "references": [{ "q": "9ZEqLbx2CTFreP4kF", "f": "key" }]
    },
    {
      "key": ["Minimalist"],
      "children": [
        "TgaPcbXhNynGiWsZj",
        "9dc4XQ3rMMFNa7mo7",
        "zKN2sE44CWGjZ5WBs"
      ],
      "u": 1672086556842,
      "_id": "SgRf7itswpQTcj6dn",
      "parent": "pFCETDs5vSbPinDYv",
      "type": 1,
      "enableBackSR": null,
      "value": [
        { "_id": "G887bqycfCYCmncMh", "i": "q" },
        " focus to ",
        { "_id": "snR7voDJrhXWj7Xdz", "i": "q" },
        " ",
        {
          "_id": "i7RyjJ9m94LgRhPuh",
          "aliasId": "WQXmDD65BP747zbkR",
          "i": "q"
        },
        ", defer other design concerns to ",
        {
          "_id": "H5esqxiqR3MkD2QuC",
          "aliasId": "YXMWaKjW8YvpGoykK",
          "i": "q"
        },
        " "
      ],
      "forget": null,
      "references": [{ "q": "G887bqycfCYCmncMh", "f": "value" }]
    },
    {
      "key": ["Lib"],
      "children": [
        "RhsGeSSWwdJm7Hxsg",
        "jXcKy3R7ur7YtmQqb",
        "7aaCYebMnJkoTdXBj",
        "wnCAZqvQw6CSNGZ4S",
        "iRJ5tkJnS5zCNhuK8",
        "ogZoRz4PHaMJ6C6AX",
        "5NZWMsGEuMXwApXj9",
        "E3fGHSoKi3xPf9AXK",
        "74xinssHLbEyZWF6X",
        "GEoRiD9E9Q53HbSe4",
        "nxCuKAXY3QJc9kfQ2",
        "7obieuTYNBHy2GeQZ",
        "9nTJNzTgJNEKELjh4",
        "fQgXdknGAkHXqYfvz",
        "WycPPm6kzXDCjZdiT",
        "y6aogQ36yCNnTQuef",
        "iHBxh6cYpRZ4yoa3S"
      ],
      "u": 1686079211487,
      "_id": "6ERdmyzDi2vQobG6F",
      "crt": {
        "a": {},
        "o": {
          "s": {
            "_id": "y6aogQ36yCNnTQuef",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "7aaCYebMnJkoTdXBj", "s": "" } }
      },
      "references": [
        { "q": "5n7rLdym83urSeGhg", "f": "key" },
        { "q": "WHqS9PhpqWwtcNzAy", "f": "key" },
        { "q": "wsyaANk9tZjhG9iXx", "f": "value" },
        { "q": "5SArbMdqgQANGqyck", "f": "value" },
        { "q": "7SpAZxBSkezSAxQQT", "f": "key" },
        { "q": "z8tJRWhXy7q5DEPLi", "f": "key" },
        { "q": "7obieuTYNBHy2GeQZ", "f": "value" },
        { "q": "74xinssHLbEyZWF6X", "f": "key" },
        { "q": "ydEDw7GCtEuaDT8b7", "f": "key" },
        { "q": "iRJ5tkJnS5zCNhuK8", "f": "value" },
        { "q": "YSALaRcPiYu2HPjYe", "f": "value" },
        { "q": "CJ7tNxfNRkpGAyv4M", "f": "value" },
        { "q": "pofApdiFx4WuXirZH", "f": "value" },
        { "q": "ATGv9ZziR2Pp7S3J6", "f": "value" },
        { "q": "nxCuKAXY3QJc9kfQ2", "f": "value" },
        { "q": "G887bqycfCYCmncMh", "f": "value" },
        { "q": "RhsGeSSWwdJm7Hxsg", "f": "value" },
        { "q": "HXzM83tnCBxxewLtr", "f": "value" },
        { "q": "yTELagNw3DtmwxsAF", "f": "value" },
        { "q": "fQgXdknGAkHXqYfvz", "f": "value" },
        { "q": "iHBxh6cYpRZ4yoa3S", "f": "value" },
        { "q": "wnCAZqvQw6CSNGZ4S", "f": "value" },
        { "q": "ajDCo4GbnuY3HdsLF", "f": "value" },
        { "q": "4E4BzH2f9YpvnTcpt", "f": "value" },
        { "q": "Zb4s5yPSMoujnsZkj", "f": "value" }
      ],
      "parent": "HWLTjZrhernsLocy7",
      "type": 1,
      "enableBackSR": false,
      "value": [
        "Library Collection of prewritten ",
        {
          "_id": "9i74HqGTJjH3GaNAR",
          "aliasId": "SpCg8t5FNir7dyWk3",
          "i": "q"
        },
        " to reuse in ",
        { "_id": "8B6sLHCQmwzb56Z2A", "i": "q" },
        " "
      ],
      "forget": null
    },
    {
      "key": ["App"],
      "children": [
        "A2c3mjxYPrcgdirjj",
        "afrECxrLLg4GkAaBE",
        "qasg4iRbLEMseJHcj",
        "Jmz5dx36tshSYZpMf",
        "SoQ7KJEdXFCg6762c",
        "cAujs3jtuXELzM9Zb"
      ],
      "u": 1685809777542,
      "_id": "8B6sLHCQmwzb56Z2A",
      "parent": "yDNvnfGTqaGqBdCw9",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "FhRJm5jvLH9BSGTDg", "i": "q" },
        " to perform specific task "
      ],
      "references": [
        { "q": "yDNvnfGTqaGqBdCw9", "f": "value" },
        { "q": "CZg4f8H2ySYYZceB8", "f": "key" },
        { "q": "BpWYmTdZAtwt3F4y8", "f": "key" },
        { "q": "ugE2YZZfTjrvRFP9p", "f": "value" },
        { "q": "ogZoRz4PHaMJ6C6AX", "f": "value" },
        { "q": "mDjTwFcCgEefvZLp2", "f": "value" },
        { "q": "6ERdmyzDi2vQobG6F", "f": "value" },
        { "q": "qXaxHswpoTZw8AXzH", "f": "value" },
        { "q": "zCuq5HgqM56Ep59Pd", "f": "value" },
        { "q": "SeNcZPAnTagWDKMmv", "f": "value" },
        { "q": "FPZmXnno5fnM5A8CA", "f": "value" },
        { "q": "ZjeNKho7Y6DHEZhNq", "f": "value" },
        { "q": "hLPCDz9ALHQHQkHiX", "f": "value" },
        { "q": "k8qFo7GbHfgoxbZEQ", "f": "value" },
        { "q": "CZ7dRjqzBRn5jc2s7", "f": "value" },
        { "q": "DETCTLXcSwJegW24k", "f": "value" },
        { "q": "ssBed7bbHW2S7GmxM", "f": "value" },
        { "q": "6Kmf67y4qkhBCmp5X", "f": "value" },
        { "q": "r2TNoy6ZrN9ipac7u", "f": "value" },
        { "q": "59xsicHEY4mkrKd5Q", "f": "key" },
        { "q": "gZ5RFN5RqgB9dyePd", "f": "value" },
        { "q": "7LdhhyFJikH7ivsTg", "f": "key" },
        { "q": "mfZtwKcQJhKfXjymA", "f": "value" },
        { "q": "P7ANgkvh8RsryLsFk", "f": "value" },
        { "q": "2xqhvgvGyo6NZ9aAP", "f": "value" },
        { "q": "2YHCBbKm58xaPDhib", "f": "value" },
        { "q": "o6Q2EJ5GmDGLmDvhj", "f": "value" },
        { "q": "rW2jxkuh8sDGswTup", "f": "value" },
        { "q": "8EdGoNSp59p7676MJ", "f": "value" },
        { "q": "6Fq3scaAQE7XbY5Ci", "f": "value" },
        { "q": "cy2rJRD8r5nHCqQoF", "f": "key" },
        { "q": "mjTCbhpeijxbWPdJP", "f": "value" },
        { "q": "8mgrT4EtB58XtakCe", "f": "value" },
        { "q": "G887bqycfCYCmncMh", "f": "value" },
        { "q": "wcYB2aeLLt8CNGF5x", "f": "value" },
        { "q": "dSs4mPoLpkwFHEXEd", "f": "key" },
        { "q": "2AuCzxjfoT8u8LGTn", "f": "value" },
        { "q": "FgtjtybxJ5i3c8gms", "f": "value" },
        { "q": "WSigeKBvcfs48E73R", "f": "value" },
        { "q": "rtT6gpTtvkBcgm8tX", "f": "value" },
        { "q": "Jmz5dx36tshSYZpMf", "f": "value" },
        { "q": "SoQ7KJEdXFCg6762c", "f": "key" },
        { "q": "TBxSQTfT6hjoyiGFy", "f": "value" },
        { "q": "3qEaQfx7W7wPzCM7e", "f": "value" },
        { "q": "JwqiX5wM2XPDXqEC5", "f": "value" },
        { "q": "rLwD97KXxgj4agJzt", "f": "value" },
        { "q": "7gLqeoC92Fvje4oYu", "f": "value" },
        { "q": "kuhoHttHHdcs7Kbiq", "f": "value" },
        { "q": "g58cdyzus7J8fWCWG", "f": "value" },
        { "q": "eGaDbuDc6QFGxnMhX", "f": "value" },
        { "q": "vjm4Wozw5CMyMNXuF", "f": "value" },
        { "q": "AvnSRmG4xTFDx4ivc", "f": "value" }
      ],
      "crt": { "l": { "a": { "_id": "A2c3mjxYPrcgdirjj", "s": "" } } },
      "forget": true
    },
    {
      "key": ["UI"],
      "children": [
        "BPxcGPTdoS9jqsdCo",
        "HSPLsw7fzzumZXJ9N",
        "atQvciqNiynrjRgis",
        "qonhbSb523uFHPdY4",
        "6unz97YbK67pv3WKm",
        "Fgdh4jskow2SQPrFY",
        "rDSFch9KSg6FtKFcB",
        "SMHMxd3EHiryXLoXt",
        "xQFHETWgiob6CX4CW",
        "zXeyee2gWNeLA7xHf",
        "eGaDbuDc6QFGxnMhX",
        "iSKKEuGMBoM6ojLcF",
        "ecajyau34Z2tDW9dN",
        "LYYzLDBHdqT5dYyTj",
        "pk344PKWNXavX9tNS",
        "nQfJMZseeczF5wrwM",
        "T3x7aJq8nieCkSnWi"
      ],
      "u": 1685448785348,
      "_id": "snR7voDJrhXWj7Xdz",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "Interaction between human and app/",
        { "_id": "qFk2KuZZn37Aw5cCX", "i": "q" },
        " "
      ],
      "forget": null,
      "references": [
        { "q": "FEnys3oXB8iqG6X3m", "f": "value" },
        { "q": "7X4pjMArcfPSR5Zsi", "f": "value" },
        { "q": "JA98dKuxSmWCYgkes", "f": "key" },
        { "q": "KNm9xEKez7k3JZ7yu", "f": "value" },
        { "q": "EfMquonyJrZboSjPj", "f": "value" },
        { "q": "G96rdE8iaBWxG24yy", "f": "value" },
        { "q": "3apmEvsNEPPRaXSB9", "f": "value" },
        { "q": "9Le7zdA2R4LzoE852", "f": "value" },
        { "q": "o8BiR7bm48DzK79Nx", "f": "key" },
        { "q": "i7DAbX8cdnz36qJ5n", "f": "value" },
        { "q": "fD4XZ8GjdcPhe6v7X", "f": "key" },
        { "q": "eRAR89dLAmMxMdawe", "f": "key" },
        { "q": "fHP3aCpQAzfXuhFJP", "f": "value" },
        { "q": "aqsvCrwWhsThnczWj", "f": "value" },
        { "q": "G887bqycfCYCmncMh", "f": "value" },
        { "q": "8EhPW7nsHAznBeA3j", "f": "value" },
        { "q": "HwKeFeydG7rhfbPjY", "f": "value" },
        { "q": "DRqdiWxfxZbQZwkPZ", "f": "value" },
        { "q": "iF3f45TBoYriQJKsd", "f": "value" },
        { "q": "Kw25jTAAczPopyxe6", "f": "value" },
        { "q": "PMsyGjebCRd3tMrGr", "f": "value" },
        { "q": "PGjc4az5ENqGpkujF", "f": "value" },
        { "q": "FREJAuM8AGy4PRb5d", "f": "value" },
        { "q": "f8M7N7jYeqrTHnpHY", "f": "value" },
        { "q": "SgRf7itswpQTcj6dn", "f": "value" },
        { "q": "mjTCbhpeijxbWPdJP", "f": "value" },
        { "q": "RRKzCiMgPSTv4No7L", "f": "value" },
        { "q": "7W9gBzJWGwQRQ2eZ6", "f": "value" },
        { "q": "atQvciqNiynrjRgis", "f": "key" },
        { "q": "tQAR39hRZSuLw3QcD", "f": "value" },
        { "q": "waeuaMSHtjpfKXgkH", "f": "key" },
        { "q": "DEKHYBb6Ss5H9aCWj", "f": "value" },
        { "q": "7Q5NTRq49LTEA9mzQ", "f": "value" },
        { "q": "T8AvuQSoj97aZn7Hg", "f": "value" },
        { "q": "fw3XzuDt4EcEdBktc", "f": "value" },
        { "q": "tRedNigY97HHpe8jg", "f": "value" },
        { "q": "hcLiovZwQKGytg5op", "f": "value" },
        { "q": "wrtc6R7PfHsc8jnQE", "f": "value" },
        { "q": "ZnEyquqC6aMnNfMGf", "f": "value" },
        { "q": "Td8KEDPjbHNpeZ96R", "f": "value" },
        { "q": "SsR5N9j9q9Ba83mAP", "f": "value" },
        { "q": "WwXCTnm6JJ9b5soag", "f": "value" },
        { "q": "MPwiv4FCqtLxnKDNv", "f": "value" },
        { "q": "vNCDT3z7juXCDLf4Z", "f": "value" },
        { "q": "fyu3Q2vwLv4CJxkEY", "f": "value" },
        { "q": "j94t9vDXL65n4fSWo", "f": "value" },
        { "q": "5qznyvKN83Na38FoK", "f": "value" },
        { "q": "CArdxToa8tHEh834o", "f": "value" },
        { "q": "K9EzK5p3agYf5C6YR", "f": "key" },
        { "q": "8htPS3Dvxb6ZkMDQq", "f": "value" },
        { "q": "SRyov8KumGKaQgw9F", "f": "value" },
        { "q": "GntmPvrCKRfE6sHNu", "f": "value" },
        { "q": "BCCShibXCaSj88EpB", "f": "value" },
        { "q": "gwfypDNNCc8Z8u3pZ", "f": "value" },
        { "q": "jBHNwXSZkRDFAhiBR", "f": "value" },
        { "q": "hKe6kSgYHagFYJ49M", "f": "value" },
        { "q": "cAujs3jtuXELzM9Zb", "f": "value" },
        { "q": "AHmePyKsePaeEm7uz", "f": "key" },
        { "q": "DENCKsP2BbCxoiayL", "f": "key" }
      ],
      "parent": "Z6krN3baMkufJQZMw",
      "crt": { "l": { "a": { "_id": "BPxcGPTdoS9jqsdCo", "s": "" } } }
    },
    {
      "key": ["Declarative"],
      "children": ["Lucfk2RmtR3kHJb2C"],
      "u": 1686413277390,
      "_id": "WvmdtwyRb3ESuKpyp",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "(",
        { "_id": "f8HSnzHhJAHApZkFA", "l": true, "i": "q" },
        ") to express logic w/o explicit ",
        { "_id": "t64QrpM7YG6YF8xmW", "i": "q" },
        " via ",
        { "_id": "H5Cmy6FwRRqez2G9h", "i": "q" },
        " "
      ],
      "references": [
        { "q": "TrakBEkDrSzSdo4uM", "f": "key" },
        { "q": "2GtgSthFPr9CSuWqh", "f": "key" },
        { "q": "xbLFKT8DZ3ScM6kEb", "f": "key" },
        { "q": "Bibe9KmuSfMkKK68E", "f": "key" },
        { "q": "RP2S7WqwL2ToTnfr6", "f": "key" },
        { "q": "5s7dKC385zPY2frDA", "f": "value" },
        { "q": "pofApdiFx4WuXirZH", "f": "value" },
        { "q": "wHsoST3QbwtyDzRiS", "f": "value" },
        { "q": "sXRmmdneWsJ8m4Jhg", "f": "value" },
        { "q": "reQe9pXmpjqwHJrrY", "f": "value" },
        { "q": "GgaufAoZamB686WfL", "f": "key" },
        { "q": "G887bqycfCYCmncMh", "f": "value" },
        { "q": "A23cmg9qfyPfXoaaX", "f": "value" },
        { "q": "EyAJmMN93p9pjgP6a", "f": "value" },
        { "q": "H5YPG3z6QnCR4MjoS", "f": "value" }
      ],
      "parent": "f8HSnzHhJAHApZkFA",
      "crt": { "l": { "a": { "_id": "Lucfk2RmtR3kHJb2C", "s": "" } } },
      "forget": null
    },
    {
      "key": ["Component Based Architecture"],
      "children": [
        "M9rbhbEv85RzpNCiZ",
        "3ojPtP7RvHEQGutQT",
        "6zFeR38SJAdHZmyq6",
        "FGrRLxyeqZkpFDAJv",
        "j5TCo3rwnj4KCdnNh",
        "kp3Jj82QMW3uf8hzz"
      ],
      "u": 1685809972777,
      "_id": "mjTCbhpeijxbWPdJP",
      "parent": "pFCETDs5vSbPinDYv",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "(",
        { "_id": "f8HSnzHhJAHApZkFA", "l": true, "i": "q" },
        ") to visualize ",
        { "_id": "snR7voDJrhXWj7Xdz", "i": "q" },
        " as ",
        { "_id": "FGrRLxyeqZkpFDAJv", "i": "q" },
        " to architect (",
        { "_id": "3ojPtP7RvHEQGutQT", "content": true, "i": "q" },
        ") ",
        {
          "_id": "8B6sLHCQmwzb56Z2A",
          "aliasId": "v6hBrkmtgMdFboRJM",
          "i": "q"
        },
        " "
      ],
      "forget": null,
      "references": [
        { "q": "j5TCo3rwnj4KCdnNh", "f": "key" },
        { "q": "kp3Jj82QMW3uf8hzz", "f": "key" },
        { "q": "6zFeR38SJAdHZmyq6", "f": "key" },
        { "q": "G887bqycfCYCmncMh", "f": "value" }
      ],
      "crt": { "l": { "a": { "_id": "M9rbhbEv85RzpNCiZ", "s": "" } } }
    },
    {
      "key": ["JS"],
      "children": [
        "xGHT4T2Y5ecgguJm8",
        "GKPL23nQ8LNXEPmCt",
        "kmQtPPr4TsRwXcKsn",
        "Bd3nky2oGJnNK4xLz",
        "4LMrSh26z3n56XmTT",
        "6ERdmyzDi2vQobG6F",
        "7G4isDLaTAkt3fxyH",
        "PR6QXQ7XD2g3PmTaF",
        "Z39RDuJCMzaWFn7Si",
        "YdakJ8sdsQrNdCQh3",
        "kpGfJEeApeXWDkEMC"
      ],
      "n": 1,
      "u": 1686415819750,
      "_id": "HWLTjZrhernsLocy7",
      "crt": {
        "l": { "a": { "_id": "GKPL23nQ8LNXEPmCt", "s": "" } },
        "o": {
          "s": {
            "_id": "xGHT4T2Y5ecgguJm8",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        }
      },
      "type": 1,
      "enableBackSR": true,
      "references": [
        { "q": "fGEeuMAmiMPCCc4gM", "f": "value" },
        { "q": "GBnGQYGtDJ4KroXqC", "f": "key" },
        { "q": "AEBoiQSaYLojdg6Et", "f": "key" },
        { "q": "J3c6AqTrWqsXw4Bge", "f": "value" },
        { "q": "WQkKchSrkXQWtjmpH", "f": "value" },
        { "q": "ac7rN93HYgnRnkQtt", "f": "value" },
        { "q": "Lt6i89HjYzg9FfMGy", "f": "key" },
        { "q": "9EpmPryCF6sBNkt25", "f": "value" },
        { "q": "zL3x4X6r9FzESo96i", "f": "key" },
        { "q": "wHBpAHvKv5o2uDkmv", "f": "key" },
        { "q": "ncGcLyfbSKf4DKyma", "f": "key" },
        { "q": "Azxi39vjFBLmnsuap", "f": "value" },
        { "q": "ZgRiewh8TbXEJ9d7a", "f": "key" },
        { "q": "veemiRXp9CZMZanGD", "f": "value" },
        { "q": "DBE3dRG4oJz6cNyYd", "f": "key" },
        { "q": "o6KndB8FJCHngXuNE", "f": "value" },
        { "q": "JPr6NqMyxWLjep7jn", "f": "key" },
        { "q": "EqewRCCgYzj2gZ5TF", "f": "value" },
        { "q": "bea98XGzphGjYudEW", "f": "key" },
        { "q": "CjSMqiKNZPwZdHj88", "f": "key" },
        { "q": "8wYSn9RWDvbqSMcEN", "f": "value" },
        { "q": "DcwEraWad46opcQoY", "f": "value" },
        { "q": "oEFTWY6LLsLs3iHP9", "f": "key" },
        { "q": "KdoYsqLzzqAnRCGAG", "f": "value" },
        { "q": "wsyaANk9tZjhG9iXx", "f": "value" },
        { "q": "nHnYbwtiuASJrsrT9", "f": "key" },
        { "q": "Ki3e7BexEnXDBkrhx", "f": "value" },
        { "q": "WEhxxPnpKmFxvvJen", "f": "key" },
        { "q": "5SArbMdqgQANGqyck", "f": "value" },
        { "q": "YPaTwPM7A4Lqc7KFT", "f": "value" },
        { "q": "cWBjQE52Kq5Mtugsg", "f": "value" },
        { "q": "r9fGuETmz6vskWbc5", "f": "key" },
        { "q": "iesfttYpZqjQwuSFY", "f": "value" },
        { "q": "bQmBZ5fNGY8CuHp7M", "f": "key" },
        { "q": "WDc76MvuTiAn2HTtc", "f": "value" },
        { "q": "imyKYyWNcDJqQPHur", "f": "value" },
        { "q": "5zB4arcYNCTzyatcZ", "f": "value" },
        { "q": "a2YTN7ZKwu494RZzi", "f": "key" },
        { "q": "azn8fd6zGfjRg3RJC", "f": "key" },
        { "q": "8j7DQYZHtZpeF82eb", "f": "value" },
        { "q": "cmKCPS7yxk5jEqWkp", "f": "key" },
        { "q": "zZytPdc65fPAiiNWP", "f": "value" },
        { "q": "MZzxjDhYk9P2GuxFT", "f": "key" },
        { "q": "SY5xfJsAJQgH28Tye", "f": "key" },
        { "q": "Qkb6oRhqaCu6rEBwb", "f": "key" },
        { "q": "JBvJerji7jBvnTtfi", "f": "value" },
        { "q": "PWq8ZPXG37zhRZqcu", "f": "key" },
        { "q": "3kcPKu96bvcG2e8BF", "f": "key" },
        { "q": "2oYFG5X6FmpcMtFeH", "f": "key" },
        { "q": "YLPP6kxhcTcAKHBvs", "f": "key" },
        { "q": "wWfBHv7Z6BJx3i986", "f": "key" },
        { "q": "zWtbHYYcZiYCJh8gP", "f": "value" },
        { "q": "DtoyBp78gpqTmdSEF", "f": "value" },
        { "q": "2BGNyGtv9NKJQzqHK", "f": "value" },
        { "q": "74FiXib3nYwk7d8pP", "f": "value" },
        { "q": "PR6QXQ7XD2g3PmTaF", "f": "value" },
        { "q": "9LFtb56ZygeCRiSJ6", "f": "value" },
        { "q": "4LMrSh26z3n56XmTT", "f": "key" },
        { "q": "7GtzGFC2HT9fqHzyR", "f": "value" },
        { "q": "mfZtwKcQJhKfXjymA", "f": "value" },
        { "q": "arCEFLSCWAB7YtfZH", "f": "key" },
        { "q": "u4khKXqtDyt3cZ2rT", "f": "value" },
        { "q": "7obieuTYNBHy2GeQZ", "f": "value" },
        { "q": "4LqTYsbb27MHQas3D", "f": "key" },
        { "q": "5KkFhus87qGuzEaNN", "f": "key" },
        { "q": "ee4YA8kLPXLMHKiSB", "f": "value" },
        { "q": "xypcDdwXqnc6rytfS", "f": "value" },
        { "q": "QFod6YCBuZhJzpSWq", "f": "key" },
        { "q": "NHYjx43ujGxdXsN6y", "f": "key" },
        { "q": "rnba3JCv6sYgRe4c9", "f": "key" },
        { "q": "YdakJ8sdsQrNdCQh3", "f": "key" },
        { "q": "6djGW5MEumHv6ddqN", "f": "key" },
        { "q": "5NZWMsGEuMXwApXj9", "f": "value" },
        { "q": "zmPcrwo8F748BpA5i", "f": "value" },
        { "q": "x8zogyXaMwhdzSYPb", "f": "value" },
        { "q": "Z39RDuJCMzaWFn7Si", "f": "value" },
        { "q": "xw2r3KEHc6tNqEMdH", "f": "value" },
        { "q": "aqpyD9zYB5Su7JNtS", "f": "key" },
        { "q": "AwA3zAswEZdkMRvyw", "f": "key" },
        { "q": "97GqvSQ8at6fC53vG", "f": "value" },
        { "q": "gMnv8pK25Y5225u6L", "f": "key" },
        { "q": "Z2vCYk2uvvvzSiAML", "f": "value" },
        { "q": "CJ7tNxfNRkpGAyv4M", "f": "value" },
        { "q": "rdRvbWb3ejQk3QaYP", "f": "value" },
        { "q": "Tpgh5gZ6wr4z5ksHN", "f": "value" },
        { "q": "pMXNdpBF24tHNcoFQ", "f": "value" },
        { "q": "AFA7phR8QdbJCn9aS", "f": "value" },
        { "q": "AAD8YdXDHHdfGiDWT", "f": "value" },
        { "q": "BjFEaATautbzCrie3", "f": "key" },
        { "q": "awhiPRy3DMPCQcxpK", "f": "key" },
        { "q": "eE8PS42GapPFCXdq4", "f": "value" },
        { "q": "vrihFWgHQA8jWd8R9", "f": "value" },
        { "q": "zrickL2tP6HZsvjea", "f": "value" },
        { "q": "EN34NsoTGxBL4j48R", "f": "key" },
        { "q": "3h346Yny9LWHPJuL2", "f": "value" },
        { "q": "3TQN7CqmwSd77cBnJ", "f": "value" },
        { "q": "GH6SXBYyyFC8mowLx", "f": "value" },
        { "q": "L6bm6S8CddTBmh97e", "f": "value" },
        { "q": "cQpDiycjLZTQ96Zft", "f": "value" },
        { "q": "A3thZ3oChC4v85fAf", "f": "value" },
        { "q": "vzbESpscHYByeZhuG", "f": "value" },
        { "q": "iHBxh6cYpRZ4yoa3S", "f": "value" },
        { "q": "pLjYaia3wvdoBs48H", "f": "value" },
        { "q": "dNL2iGFxuWCiyMe4J", "f": "value" },
        { "q": "cyDa6WoPZHtuvgsNM", "f": "value" },
        { "q": "9nTJNzTgJNEKELjh4", "f": "value" },
        { "q": "iwDHXFXix9WBD2YyT", "f": "value" },
        { "q": "ogZoRz4PHaMJ6C6AX", "f": "value" },
        { "q": "AQiuxgtkvzyaZZmuF", "f": "value" },
        { "q": "ajDCo4GbnuY3HdsLF", "f": "value" },
        { "q": "MW9K96HfYg59TTmgy", "f": "value" },
        { "q": "iXFea6PojHqCYykLq", "f": "value" },
        { "q": "FhBLthubWDDGWoe4E", "f": "value" },
        { "q": "e2ugyREhCzCghancY", "f": "key" },
        { "q": "XRGSkYYosTaNawans", "f": "key" },
        { "q": "b4uYPgvHoaAd7ARey", "f": "key" },
        { "q": "gX7R4wHk8GYnnDhrC", "f": "value" },
        { "q": "kKeDii4yyeoQGpENZ", "f": "value" },
        { "q": "XZKPpzkuZPfSogtFn", "f": "value" },
        { "q": "MBuBbbsssDNgJgEJs", "f": "key" },
        { "q": "4z7gANRaEibWuGWzk", "f": "key" },
        { "q": "MAGWM9upGer4ka8MW", "f": "key" },
        { "q": "PnQWKcku7YrZmJ3Sf", "f": "key" },
        { "q": "arnSMDWZWxG9jAttf", "f": "key" },
        { "q": "d5euHTQkDXFTioruK", "f": "value" },
        { "q": "qvqaYK5DF3syhKLHm", "f": "value" },
        { "q": "t8ZvzibXSsm2yGnvB", "f": "key" },
        { "q": "FR5RDJsaoa5NZZDJg", "f": "value" }
      ],
      "value": [
        { "_id": "mDkEPZJF7KYAHZLje", "i": "q" },
        " ",
        { "_id": "Wjbm4ffactEqpdkHE", "i": "q" },
        " ",
        {
          "_id": "F46ayoC5CmYX3tLoq",
          "aliasId": "LEJpS73xtNFi4yaC6",
          "i": "q"
        },
        " ",
        { "_id": "jp7v7BwjYsaPxJACZ", "i": "q" },
        " ",
        { "_id": "EWC8dAd5uDT4nzqgn", "i": "q" },
        " for full stack ",
        { "_id": "KB2eWKppcPGB7SRrw", "i": "q" },
        " "
      ],
      "parent": null
    },
    {
      "key": [{ "_id": "2n8Gw7PvXGPcFQm7i", "i": "q" }],
      "children": [
        "zSeYmbJZcHnXce327",
        "NSNqraCb8rXNfp3kR",
        "4QPCbZzDem2b3wcri"
      ],
      "u": 1677290349223,
      "_id": "GKPL23nQ8LNXEPmCt",
      "parent": "HWLTjZrhernsLocy7"
    },
    {
      "key": ["JS Concepts"],
      "children": [
        "ivPvrGBRCSpAcFDqL",
        "6Tk9ukQbQaYgGiP6A",
        "mDkEPZJF7KYAHZLje",
        "74FiXib3nYwk7d8pP",
        "9LFtb56ZygeCRiSJ6",
        "gX7R4wHk8GYnnDhrC",
        "pcqRaQELamjKLcoYy"
      ],
      "u": 1686415875090,
      "_id": "kmQtPPr4TsRwXcKsn",
      "parent": "HWLTjZrhernsLocy7",
      "references": [],
      "type": 1,
      "enableBackSR": true,
      "crt": {
        "o": {
          "s": {
            "_id": "6Tk9ukQbQaYgGiP6A",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "ivPvrGBRCSpAcFDqL", "s": "" } }
      },
      "value": ["broader concept definitions on what JS is & how it works"],
      "forget": true
    },
    {
      "key": ["JS Language"],
      "children": [
        "qEWqwDWe8GoPHAr5C",
        "wp9tbiMqyuqkCo9st",
        "gfoaDXrJa2a2qzjzp",
        "i7RyjJ9m94LgRhPuh",
        "pexPF84p9K3tWTPTS",
        "bTSLG55MG4278TTY9",
        "e92R4WcyJewkNpJmu",
        "KaR9Sy58RczmHTjzK",
        "mWGAe9sELNZswg4TC",
        "rrxfsKjKjwv6E2N22",
        "SCTBe7XHEAGakcCp6",
        "YNJ2a2NxjbPv3ujsB",
        "6ysYQqWfPSQwsKvce",
        "hbbx66DZ3mQ7SZTWj",
        "cszDanXJXSRACsYpB"
      ],
      "u": 1686413277391,
      "_id": "Bd3nky2oGJnNK4xLz",
      "parent": "HWLTjZrhernsLocy7",
      "type": 1,
      "enableBackSR": true,
      "crt": {
        "o": {
          "s": {
            "_id": "wp9tbiMqyuqkCo9st",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "qEWqwDWe8GoPHAr5C", "s": "" } }
      },
      "value": ["Syntax & keyword definitions for JS"],
      "forget": true
    },
    {
      "key": [{ "i": "q", "_id": "HWLTjZrhernsLocy7" }],
      "children": [
        "fouNqjnfSiv9NEDQj",
        "vy3uCRT65Ccd5AWGT",
        "grpRe852gxTJAd9G5",
        "bEExCwX9K8q485sbg",
        "RipSZq9kdqbWhQQ9j",
        "crEQHoSeA5KjZtdxX",
        "Bdu2FmvvhsoPivxKW",
        "yx3xJakf9eS7CA5m9",
        "WnatoH9rDBdWc4vLZ",
        "7ZRuS2Af7w8oF94yw",
        "rQ3hzZDTvoMLN77GA",
        "G5GdFEfwRqLdrqgLi",
        "xFQLaAG82QZuhb4Xt",
        "MWE69D4bpcXBq3dE4",
        "i25yjPWuDqMcEYAGz",
        "eg9z45sSAobxkzSoY",
        "kobkzZwzwFg9NPyc9",
        "zaLSaWEL5vtws4HZ4",
        "JBWT97y7rjcfhLGog",
        "K9ZhXM4hdcJF7oyu9",
        "sWigy9JHD52vgMpAZ",
        "Gn2nRGwHWygaZA34X",
        "euJuXkctT3J2C6w2f",
        "QjxWaew5EKfkyJSud",
        "jAPeATvjFFxmd3crs",
        "Tqi6JcFwr8M2RF3SZ",
        "JKNQq9FvgACgxcumK",
        "tdct4gg964emyHGLF",
        "hTfhJcfDEWyDrjxG8",
        "vefPdNxkgbY2kDEkz",
        "nz7zz5FLbdQStSNQt",
        "dERBTjxZQmoQzujyB",
        "pAsbeAiuesm8JMChp",
        "o3ZWdqSySgBLLBkb9",
        "9XRJvumzJLqkWPkRG",
        "Toj8ihDTwkDRbKkMc",
        "8ALEJGcfXmknzmt7p",
        "SNMB5QpbgyfoszyPN",
        "fYtrqJAToTxziyWt5",
        "5k4a86rzx8Hb4otjF",
        "Hi6io54gFQahS2rqz",
        "ForrGDQhuEJjhSkS9",
        "r3iSqGKBxug4FX6MH",
        "ZhAJzSu3MJMhM58vc",
        "5G2FdjrTwtfSPrEhG",
        "fBjGAQywL66tBpbZN",
        "hPS2WGDY5yRQzDQJE",
        "qqj2DRpJLHbfpwKs4",
        "rwzwC3vrAE4zt2tgb",
        "dtqxE3Y5wMHdjBDxm",
        "hw2KEYDR8BNQqesqt",
        "APHD79EbXviTCBizo",
        "EP5JiYSw6Bizabtod",
        "cGBcC2n6Q4vTNmzPZ",
        "6c9gAYqgWQNmwBY4E",
        "y3jaqRL4mkgE6fBCa",
        "wXFP2AD7ZbBu6F3kJ",
        "9eWXcvT4vksBcXNfy",
        "J9meLEf2zzbZagQxZ",
        "ihgSzYggcFtzNPNqM",
        "xp3uJmyW9q3wHo6ag",
        "CoppvjRWdhaGaFYR4",
        "umzC7QzhF6Jc9K7Wf",
        "opzqnyoprsaBHanm9",
        "vCvKu837ErWiJQWjx",
        "NCsCxtLpPnuY8yhtN",
        "gJQ3vM3ksvXK9GzyJ",
        "7KYiG9YaRdL2iGi5j",
        "YRKhGyunxn8sE2C83",
        "oAo2mwNnbQZWvk6if",
        "XSir5tfYwNRihskHD"
      ],
      "u": 1683645305188,
      "_id": "4LMrSh26z3n56XmTT",
      "type": 6,
      "parent": "HWLTjZrhernsLocy7"
    },
    {
      "key": ["JS Snippets"],
      "children": [
        "DWLxNmRANdTtRPHtg",
        "sN8fWwLZA6kRW8xAF",
        "4Ehtbj6gXdkxPKSdu",
        "JuAhxjjRWyMMtp8WZ",
        "vDSHN5rJ2qp3TXnSK",
        "xNMvhXjAcidsNc7jz"
      ],
      "u": 1686079483122,
      "_id": "7G4isDLaTAkt3fxyH",
      "parent": "HWLTjZrhernsLocy7",
      "crt": {
        "o": {
          "s": {
            "_id": "sN8fWwLZA6kRW8xAF",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "DWLxNmRANdTtRPHtg", "s": "" } }
      },
      "enableBackSR": true,
      "value": ["collect useful vanilla-only JS snippets here"],
      "forget": true,
      "type": 1
    },
    {
      "key": ["TS"],
      "children": [
        "6sZ3Ptv8fnfRWsFhc",
        "D2vFCCkmfnb4xrF8G",
        "7MdGQmbFoh9xpCPTy",
        "4ZRsRLoyysKDhRbdt",
        "ChEYvzcMLnTHztLkq",
        "PgtafEK3ZKbDrDrKQ",
        "G9Zk2HTk4n44XXSQY",
        "YfytR3GuhkktsFkhf"
      ],
      "u": 1686079623549,
      "_id": "PR6QXQ7XD2g3PmTaF",
      "enableBackSR": null,
      "value": [
        { "_id": "4iXrJXNHZSEXe9WWQ", "i": "q" },
        " of ",
        { "_id": "HWLTjZrhernsLocy7", "i": "q" },
        " + ",
        { "_id": "w3MANuj8P9aC4tGAC", "i": "q" },
        " layer"
      ],
      "forget": null,
      "type": 1,
      "crt": {
        "o": {
          "s": {
            "_id": "4ZRsRLoyysKDhRbdt",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "D2vFCCkmfnb4xrF8G", "s": "" } }
      },
      "references": [
        { "q": "umHvfQmdEDetYkqLH", "f": "value" },
        { "q": "Tkd9d8bYogv6zj9fH", "f": "key" },
        { "q": "eExZcc39hLDLtQuHQ", "f": "key" },
        { "q": "fg3zYuuEBsd9eSQ38", "f": "key" },
        { "q": "ZgRiewh8TbXEJ9d7a", "f": "key" },
        { "q": "omrZ2BRWex5wCQn7Z", "f": "key" },
        { "q": "DBE3dRG4oJz6cNyYd", "f": "key" },
        { "q": "Z2ZFt4KwEmzD3DpPC", "f": "key" },
        { "q": "SpxTpF7wjrvKbR9Q4", "f": "key" },
        { "q": "P5W34HziordvuRSeH", "f": "value" },
        { "q": "cz6XMoQZrWgPzgNPz", "f": "key" },
        { "q": "a2YTN7ZKwu494RZzi", "f": "key" },
        { "q": "MZzxjDhYk9P2GuxFT", "f": "key" },
        { "q": "aaxw5YCm682FGvAmB", "f": "key" },
        { "q": "iwhcLdmJ33yHTTQTF", "f": "key" },
        { "q": "MN9mK6R68TGCf3ju7", "f": "key" },
        { "q": "PgtafEK3ZKbDrDrKQ", "f": "key" },
        { "q": "eNNtjAkNbK2Th7dsd", "f": "key" },
        { "q": "M9uHGYRsACqa68ufv", "f": "value" },
        { "q": "LRaWYQ8GFSLNycDh4", "f": "key" },
        { "q": "NHYjx43ujGxdXsN6y", "f": "key" },
        { "q": "7q64q5uHJS2h9FoNk", "f": "key" },
        { "q": "6djGW5MEumHv6ddqN", "f": "key" },
        { "q": "YpMWyepuSpjWBAJS6", "f": "key" },
        { "q": "Hx4SbiPHMidndveBn", "f": "key" },
        { "q": "k5WMgNqSxZ4y3cDq7", "f": "key" },
        { "q": "7ecBFfLegZ9LRcZvD", "f": "value" },
        { "q": "AacHcWQdJmT6sw8Nu", "f": "value" },
        { "q": "WTEqWcsMBB22FtfZX", "f": "value" },
        { "q": "KpNTjC2CJkmXaMdef", "f": "key" },
        { "q": "QTbq9mNfhaFBqPDPn", "f": "value" },
        { "q": "C3GmYMzZiicspuFmF", "f": "value" },
        { "q": "97GqvSQ8at6fC53vG", "f": "value" },
        { "q": "i4Ac9ctQ8wJNZNoNw", "f": "key" },
        { "q": "XmrcTneAd6MFCQQDw", "f": "key" },
        { "q": "LqB6XuJjkPFRwPsEH", "f": "key" },
        { "q": "7edFdBTtENXMDoYR6", "f": "key" },
        { "q": "2oz3qLvG47HhG9M2g", "f": "key" },
        { "q": "gMnv8pK25Y5225u6L", "f": "key" },
        { "q": "rdRvbWb3ejQk3QaYP", "f": "value" },
        { "q": "x8zogyXaMwhdzSYPb", "f": "value" },
        { "q": "CuryApS7xZoy98toe", "f": "value" },
        { "q": "kdJmJ9WAR9Soep8jK", "f": "value" },
        { "q": "gwxcSaGuHAysFusmY", "f": "value" },
        { "q": "W8Y2H2FypxcrW4NNg", "f": "value" },
        { "q": "QfCNhYvuMaqK99dm4", "f": "value" },
        { "q": "jSWRpzHAM3gEqd8nK", "f": "value" },
        { "q": "MW9K96HfYg59TTmgy", "f": "value" },
        { "q": "97hBTEPqvby8xJvQY", "f": "value" },
        { "q": "NWWv4DHX44MSPQnQp", "f": "value" },
        { "q": "EhK7Xq5sy8rkvA3aM", "f": "value" },
        { "q": "SSwovHxkZm9pgPy3x", "f": "value" },
        { "q": "rJfvdupntLKkzkLwj", "f": "key" },
        { "q": "e8EEXXoSKWpetcxhy", "f": "key" },
        { "q": "yb7xMZ2HKa8Y48W9u", "f": "value" },
        { "q": "WauoJPByQisLA9Jns", "f": "key" },
        { "q": "vHkpydd7xhSrithpX", "f": "key" },
        { "q": "BJd5yaTW2Juiv7i9P", "f": "key" },
        { "q": "XfahvP4mw3EgQAEeg", "f": "key" },
        { "q": "vBhNBMCrBz68NRZWi", "f": "value" }
      ],
      "parent": "HWLTjZrhernsLocy7"
    },
    {
      "key": ["Node.js"],
      "children": [
        "pdDXb4YnqBrq2xnvg",
        "y9Gm42QMDtjfLsATS",
        "b7tdD2sorQfrsZoi8",
        "tdpktXBGdvstMQZgh",
        "ZFbEyS2xZXA4ejZc5",
        "CJ7tNxfNRkpGAyv4M",
        "5fhS2hqvNNW9WtwKE",
        "4stKzzK5eWpfDE2wZ",
        "9A7emnhEDCZb6uAhg",
        "B6xwEdGETFh9S8zMZ",
        "bBgZydSE75SXfLgXY"
      ],
      "u": 1686079760318,
      "_id": "Z39RDuJCMzaWFn7Si",
      "enableBackSR": true,
      "forget": null,
      "parent": "HWLTjZrhernsLocy7",
      "crt": {
        "o": {
          "s": {
            "_id": "y9Gm42QMDtjfLsATS",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "pdDXb4YnqBrq2xnvg", "s": "" } }
      },
      "type": 1,
      "references": [
        { "q": "5fhS2hqvNNW9WtwKE", "f": "value" },
        { "q": "yo92cgiHmYh2aWQhs", "f": "key" },
        { "q": "bBgZydSE75SXfLgXY", "f": "key" },
        { "q": "mfZtwKcQJhKfXjymA", "f": "value" },
        { "q": "TuDSFdNEbepdhWhya", "f": "key" },
        { "q": "3NLkDNAj8sNEXSj9Z", "f": "value" },
        { "q": "e4v63KY4oXAmKoMJ5", "f": "key" },
        { "q": "cMh6vicsesMjuyXwy", "f": "value" },
        { "q": "sTBTD9vGhWbxBibBd", "f": "key" },
        { "q": "AacHcWQdJmT6sw8Nu", "f": "value" },
        { "q": "gMnv8pK25Y5225u6L", "f": "key" },
        { "q": "bDbJLMK3pGjpjLC7c", "f": "key" },
        { "q": "59xsicHEY4mkrKd5Q", "f": "key" },
        { "q": "ddMThkuygrKdKE4dj", "f": "key" },
        { "q": "GQ7pMZKEN2P5xzGMh", "f": "key" },
        { "q": "i4F9A9nktGmL7WkdF", "f": "value" },
        { "q": "wXbqHBAHr6e6pft3i", "f": "key" },
        { "q": "9zzdu4JmYoctWPM9Y", "f": "key" },
        { "q": "Y4ATxSdqaTP53655Y", "f": "key" },
        { "q": "MooaGCh2FLbm7R2rp", "f": "value" },
        { "q": "hEXd5JbDFyw6udAjA", "f": "value" },
        { "q": "4xhNbPhWnZ8r5XhZt", "f": "value" },
        { "q": "MrBAaiQHQT6iDdMoE", "f": "value" },
        { "q": "zfwgwBDrSrazyARBz", "f": "value" },
        { "q": "HqbQCP2QTFjd2FdZx", "f": "value" },
        { "q": "hKyvNZiQFDaiBB9Sv", "f": "value" },
        { "q": "ecqjkt9AESLaeg82i", "f": "value" },
        { "q": "WorrERfFNvNQrydJ8", "f": "value" },
        { "q": "TGmZhy7SY82vyZdnW", "f": "value" },
        { "q": "227zyuTkm78pCtB6Z", "f": "value" },
        { "q": "rJST372XHEJeWCpai", "f": "value" },
        { "q": "xjgqJxGkagirgjG5L", "f": "key" },
        { "q": "LCzCvPF6rCR4nDaBS", "f": "value" },
        { "q": "9pXf2aBJg5ukPXhrg", "f": "key" },
        { "q": "iTpdZoLArpxW8Znwi", "f": "key" },
        { "q": "WX4JQ6dX9SxWucDpX", "f": "key" },
        { "q": "P9MvqpEP9WreuBSG2", "f": "value" },
        { "q": "ZcnJC34ihXoekKnjM", "f": "value" },
        { "q": "nrCsfXcyqrS9guoer", "f": "value" },
        { "q": "Xv8dRpDeisHe73LaX", "f": "value" },
        { "q": "vBhNBMCrBz68NRZWi", "f": "value" }
      ],
      "value": [
        { "_id": "NRMW2X2SAKWp7P48r", "i": "q" },
        " to execute ",
        { "_id": "HWLTjZrhernsLocy7", "i": "q" },
        " outside ",
        { "_id": "GzGa6ipQeeQ93Q7qA", "i": "q" },
        " "
      ]
    },
    {
      "key": [{ "i": "m", "q": true, "text": "JavaScript" }],
      "children": [
        "F5iMCohQifz4uKvzr",
        "yGgz9oLet52r2skyG",
        "Cq885px5RGjAQQzTb",
        "eFYJAYaQFemr5tYvo",
        "bagNQ7MwLrjTWbNWu",
        "2dJ9uCiqRgaGAs4Ch",
        "nTQTuF9eCDCCJGMGa",
        "7ynK6gsB3DtKGoPSJ",
        "yyEixSzw39RN4JXmv",
        "DhQhxiGYAdRKTNcnT",
        "9TCCnaXmGu4cgyMWs",
        "2YxQnA2SJeY9dwTzX",
        "DEyr8fs7yAm73FiYL",
        "xrEYK5fGADMfr7ta2",
        "zLohGsGopvvMXnwK4",
        "jzTTPxhGhRGfa7Xop",
        "23RpcrgS7kHiiTZop",
        "PmaChFcWHj7b9nk6c",
        "KxZt6PfnkYbYsKe4M",
        "MiFDSkG6wPwTBJLxF",
        "FxZYFa9w56922pGJZ",
        "mzZdzs8Zo9Qocmq4R",
        "8DePYgy2m6SrfB6Ky",
        "evNe5Nbnsm7dwcaXs",
        "tMx3SxL38ZCisyW5F",
        "PY24dXLWdZXMciBiN",
        "PJFfMTARjCDcWp7Ww",
        "x4MSWYLPesFjpi6vQ",
        "jtsutDEPGzGqyb9fD",
        "Gg97QBTuwxg7YBZzd",
        "paJCRrkaTkjJL2ahz",
        "uQGPfYujWYcTPs6di",
        "Wzpbau7vNyjEBccvp",
        "MFuh8EjcNv4d3hKnr",
        "f6F4qcDJBFFd5iMyX",
        "SSs9NqsBcfreErFy5",
        "sTBALogAmtNg5EWqE",
        "8wmGb8P5qLzpTdoxR",
        "wbQuDqfbymxKY8Qxr",
        "hDNcrHS4wozAYBa6R",
        "j8aX3AFJCdLs39Jd8",
        "xB7MjtLfg962PW2rC",
        "pjJzYjrwuWhTt5zwb",
        "8TrB8JRfyqqv7jWZL",
        "EWwk7TEctek3DiuhT",
        "PJNdQ3gkHECjeHjMP",
        "5yjgZ5v7eri2epTxZ",
        "ux6Eo4ccBJWKnghbK",
        "8TwyxcREapzyktjTb"
      ],
      "u": 1670364387899,
      "_id": "kpGfJEeApeXWDkEMC",
      "type": 6,
      "parent": "HWLTjZrhernsLocy7"
    },
    {
      "key": ["Multi-paradigm"],
      "children": [
        "f8HSnzHhJAHApZkFA",
        "Wjbm4ffactEqpdkHE",
        "psgaNefTk3AzLZrQy",
        "h8o3FGjAeEzwtvFhA",
        "jvikZRjYYZhv7m6b7",
        "kw5q5ipEBmDG5LDud"
      ],
      "u": 1686415875091,
      "_id": "mDkEPZJF7KYAHZLje",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "(",
        { "text": "property", "l": true, "i": "m" },
        ") ",
        { "_id": "Z5kuYBHkEihbsxubo", "i": "q" },
        { "text": " flexible & versatile", "b": true, "i": "m" },
        ", to allow multiple ",
        {
          "_id": "f8HSnzHhJAHApZkFA",
          "aliasId": "pHGbLbq3XQvP9txvv",
          "i": "q"
        },
        " to pick & choose from"
      ],
      "parent": "kmQtPPr4TsRwXcKsn",
      "references": [
        { "q": "HWLTjZrhernsLocy7", "f": "value" },
        { "q": "kw5q5ipEBmDG5LDud", "f": "key" },
        { "q": "nBMrsHZCWK9WASuhj", "f": "value" },
        { "q": "TLdyKK9YPaqitSqBZ", "f": "value" }
      ]
    },
    {
      "key": ["High-Level"],
      "children": ["6CexCG2iqE2PMEtRW", "SJMPMtPENMHFQ7FTq"],
      "u": 1686413277390,
      "_id": "Wjbm4ffactEqpdkHE",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "of ",
        { "_id": "Z5kuYBHkEihbsxubo", "i": "q" },
        " to ",
        {
          "_id": "H5Cmy6FwRRqez2G9h",
          "aliasId": "sM5ZvHgcrbKGrj58h",
          "i": "q"
        },
        " ",
        { "_id": "9i74HqGTJjH3GaNAR", "i": "q" },
        " away from ",
        { "_id": "fJyiC5uxwvPCKLKbA", "i": "q" },
        " details (ie allocating ",
        { "_id": "qFk2KuZZn37Aw5cCX", "i": "q" },
        " resources) "
      ],
      "parent": "mDkEPZJF7KYAHZLje",
      "references": [
        { "q": "WSvEshuh6MCKYyKTB", "f": "value" },
        { "q": "rNFQSfdngdfPyijWL", "f": "value" },
        { "q": "Y4ATxSdqaTP53655Y", "f": "key" },
        { "q": "HWLTjZrhernsLocy7", "f": "value" },
        { "q": "SJMPMtPENMHFQ7FTq", "f": "key" },
        { "q": "cQpDiycjLZTQ96Zft", "f": "value" }
      ]
    },
    {
      "key": ["Prototypal Inheritance"],
      "children": [
        "PnQWKcku7YrZmJ3Sf",
        "MAGWM9upGer4ka8MW",
        "zmRWhwPjSbEteLfgF",
        "dKsZ8QZkp7x6JaHHK",
        "LBsdoBvMkpb7hYYfq",
        "wBvxHKFJSDDADmJFo",
        "4wJDAZSfgssqayEJ2",
        "xwA92J7jodKDK8wF6",
        "4z7gANRaEibWuGWzk",
        "fExBEjHHKhRmK8tbN",
        "u7KY5Zu5zpFDmLnwt",
        "DJGd2mNu4byM6Aodn",
        "QhBHkaX824RaivCuA",
        "KJkP9DXBcNTu4tTD3",
        "aY9wcaszWBxEPokGx",
        "q2HWpXsXBhRS7tXpi",
        "gR2nWmhzKA77crMz4",
        "nEwicWDaEGzes6S2w"
      ],
      "u": 1686415894964,
      "_id": "F46ayoC5CmYX3tLoq",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "text": "Link", "b": true, "i": "m" },
        " for all ",
        { "_id": "gfoaDXrJa2a2qzjzp", "i": "q" },
        " to their ",
        { "_id": "aY9wcaszWBxEPokGx", "i": "q" },
        ", to mimic ",
        { "_id": "2Th3Qvp64zAFRbFsF", "i": "q" },
        " access to ",
        { "_id": "MP5hXPJeveLXpdxcz", "i": "q" },
        " & props"
      ],
      "forget": null,
      "parent": "jp7v7BwjYsaPxJACZ",
      "references": [
        { "q": "HWLTjZrhernsLocy7", "f": "value" },
        { "q": "gR2nWmhzKA77crMz4", "f": "key" },
        { "q": "KJkP9DXBcNTu4tTD3", "f": "key" },
        { "q": "5u877wnW7hxo7TDL3", "f": "value" },
        { "q": "mTwPpiMdAu2ohQJqD", "f": "value" },
        { "q": "aY9wcaszWBxEPokGx", "f": "value" },
        { "q": "xwA92J7jodKDK8wF6", "f": "value" },
        { "q": "NMs6XSWgz6mWmzmqd", "f": "value" },
        { "q": "DJGd2mNu4byM6Aodn", "f": "key" },
        { "q": "MAGWM9upGer4ka8MW", "f": "key" },
        { "q": "PnQWKcku7YrZmJ3Sf", "f": "key" }
      ],
      "crt": { "l": { "a": { "_id": "QhBHkaX824RaivCuA", "s": "" } } }
    },
    {
      "key": ["OOP"],
      "children": [
        "8QgBpYnjgBC7s6gcv",
        "3mwwBnaDomZsw5icv",
        "H5Cmy6FwRRqez2G9h",
        "8beEDK3gMvivxf4m5",
        "2Th3Qvp64zAFRbFsF",
        "HfY4t5utbQCSmnHmz",
        "F46ayoC5CmYX3tLoq",
        "zcr3ZfFY9Nsgj9ZLx",
        "5sJfDAuAddcwerJc4",
        "EcmjoznuPoDNp3nPu",
        "wyd8mYTJM4mgdPKRH"
      ],
      "u": 1686416006283,
      "_id": "jp7v7BwjYsaPxJACZ",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "f8HSnzHhJAHApZkFA", "i": "q" },
        " to organize & structure data as ",
        { "_id": "3mwwBnaDomZsw5icv", "i": "q" },
        " "
      ],
      "parent": "f8HSnzHhJAHApZkFA",
      "forget": null,
      "crt": { "l": { "a": { "_id": "8QgBpYnjgBC7s6gcv", "s": "" } } },
      "references": [
        { "q": "5sJfDAuAddcwerJc4", "f": "key" },
        { "q": "WauoJPByQisLA9Jns", "f": "key" },
        { "q": "KEnTAdQPwDv7kraJL", "f": "key" },
        { "q": "rWcAt5WgKtpziPuDc", "f": "key" },
        { "q": "cQpDiycjLZTQ96Zft", "f": "value" },
        { "q": "HWLTjZrhernsLocy7", "f": "value" },
        { "q": "q8hQyhrFpXnzie8mN", "f": "value" },
        { "q": "aY9wcaszWBxEPokGx", "f": "value" },
        { "q": "iPEcg7FhJB7Et4XXZ", "f": "key" },
        { "q": "MAGWM9upGer4ka8MW", "f": "key" }
      ]
    },
    {
      "key": ["Scripting Language"],
      "children": [
        "ofyEHZhGxfMcQuDPe",
        "qeGzk5Hp9GzSWPwqi",
        "y2oKkqSzPvnug6T6m",
        "rNFQSfdngdfPyijWL",
        "KGCEMS4gpoGBNrw6e",
        "cT3koHcujxdTj6BYS"
      ],
      "u": 1674664983028,
      "_id": "EWC8dAd5uDT4nzqgn",
      "parent": "Z5kuYBHkEihbsxubo",
      "type": 1,
      "enableBackSR": true,
      "value": [
        { "_id": "Z5kuYBHkEihbsxubo", "i": "q" },
        " with ",
        { "_id": "aFH6R2ia7CpLSLrJL", "i": "q" },
        "s based on API calls to automate a pre-existing system"
      ],
      "forget": true,
      "references": [
        { "q": "qeGzk5Hp9GzSWPwqi", "f": "value" },
        { "q": "rNFQSfdngdfPyijWL", "f": "value" },
        { "q": "HWLTjZrhernsLocy7", "f": "value" },
        { "q": "KGCEMS4gpoGBNrw6e", "f": "key" }
      ]
    },
    {
      "key": ["Web Dev"],
      "children": [
        "yDNvnfGTqaGqBdCw9",
        "6Ep87p5puRddE27HT",
        "jLgNKqacy7wgSHzAD",
        "2xqhvgvGyo6NZ9aAP",
        "P7ANgkvh8RsryLsFk",
        "GzGa6ipQeeQ93Q7qA",
        "PSy3HAAdytjNAQ4CF"
      ],
      "u": 1679949324763,
      "_id": "KB2eWKppcPGB7SRrw",
      "parent": "25avbMQmzAS4qppLf",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "work to develop ",
        { "_id": "8pKWpQgtsXxLYT9TE", "i": "q" },
        " & ",
        { "_id": "yDNvnfGTqaGqBdCw9", "i": "q" },
        " "
      ],
      "forget": true,
      "references": [
        { "q": "qeGzk5Hp9GzSWPwqi", "f": "value" },
        { "q": "PSy3HAAdytjNAQ4CF", "f": "key" },
        { "q": "HWLTjZrhernsLocy7", "f": "value" }
      ]
    },
    {
      "key": ["Computer Science"],
      "children": [
        "vura2EvrbTBkFpmCZ",
        "hv8jAcEzeo7S3XYiR",
        "R7NhtdZvtzrNu758p",
        "BsZdDi99oMDRntube",
        "4KemvP8XBWfD9EZRG",
        "v8gQTKg8EzfY5Em7G",
        "zcfDANo3FjTKzWEjG"
      ],
      "n": 1,
      "u": 1686079953478,
      "_id": "bcxqhqezdr3iRjhNq",
      "references": [],
      "crt": {
        "o": {
          "s": {
            "_id": "R7NhtdZvtzrNu758p",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "vura2EvrbTBkFpmCZ", "s": "" } }
      },
      "parent": null
    },
    {
      "key": [{ "_id": "2n8Gw7PvXGPcFQm7i", "i": "q" }],
      "children": ["RFyRibLFDiGD7WfBB"],
      "u": 1685810592425,
      "_id": "vura2EvrbTBkFpmCZ",
      "parent": "bcxqhqezdr3iRjhNq"
    },
    {
      "key": ["Network"],
      "children": [
        "dmQ8wFYkLeGHyBTsP",
        "xCbp2HN7Jb86TowP4",
        "Ft2KwcCZbZyLSvMS3",
        "dng9Xx7kijoC9JFvS",
        "rHfgzbConxaQcfxjv",
        "fDNPDezEKLWjQifMg",
        "GqpdiHL4XKcSzoDXp",
        "gPSccK3PomETiDLmk"
      ],
      "u": 1686078663376,
      "_id": "hv8jAcEzeo7S3XYiR",
      "references": [
        { "q": "Jps6bNTvthFP9s38X", "f": "key" },
        { "q": "pFZsfLqmquXHhzmCH", "f": "value" },
        { "q": "4z6i7rHssNMs3qSDt", "f": "value" },
        { "q": "d6Qqa8ELDTKktoD8e", "f": "value" },
        { "q": "c9vSWE4jn8rPvBiN8", "f": "value" },
        { "q": "9RZAyEoAK7qt38TEA", "f": "value" },
        { "q": "yrApTJAqYDvbcXHEe", "f": "value" },
        { "q": "CHBrwsbLYNv25R6s8", "f": "value" },
        { "q": "jHcTFE9kRHRwragKw", "f": "key" },
        { "q": "wRjb83agqK4ZL8GAF", "f": "value" },
        { "q": "TqKALfW9ZW92fic3s", "f": "value" },
        { "q": "jW99FHofLoe9D6dHo", "f": "value" },
        { "q": "GqpdiHL4XKcSzoDXp", "f": "key" },
        { "q": "tNqMrYR9Wf5u6zWHK", "f": "value" },
        { "q": "28EfqJYptp8t3MsDt", "f": "value" },
        { "q": "A6FvfSAgXRsT37WLp", "f": "value" },
        { "q": "anQAMYeiweY8bq8hy", "f": "value" },
        { "q": "CahYTtp6XSEYXAeLe", "f": "value" },
        { "q": "9yzvSDmw8nGwpKLov", "f": "value" },
        { "q": "B82Tp9uEaNxBWjteo", "f": "value" },
        { "q": "BExuTwTCL8bpZbcX5", "f": "value" }
      ],
      "enableBackSR": true,
      "value": [
        { "_id": "FKFDntB464TNg69YL", "i": "q" },
        " connect via ",
        { "_id": "Ft2KwcCZbZyLSvMS3", "i": "q" },
        " to share/exchange data"
      ],
      "parent": "bcxqhqezdr3iRjhNq",
      "type": 1,
      "crt": { "l": { "a": { "_id": "dmQ8wFYkLeGHyBTsP", "s": "" } } }
    },
    {
      "key": ["Computer Lang"],
      "children": [
        "bvRMA9iTWtaZocakP",
        "26dxDqfNPG7fooSbe",
        "PeH65ie4nro3mctZM",
        "mC58T8gYLamzNB996",
        "Z5kuYBHkEihbsxubo",
        "Amsqtw4rYFb5bwsmY",
        "FKFDntB464TNg69YL",
        "jrMJEnzPsyYfqAtRf",
        "CkmLcDySECqmNE5bY",
        "oG3NQLn3RbSzDSsDG"
      ],
      "u": 1686413277390,
      "_id": "BsZdDi99oMDRntube",
      "type": 1,
      "enableBackSR": true,
      "value": [
        "Language to communicate with ",
        { "_id": "FKFDntB464TNg69YL", "i": "q" }
      ],
      "forget": true,
      "references": [
        { "q": "eZvSw2Nwm8GtCyT7d", "f": "value" },
        { "q": "RTTeG9G8qZQkXr6t2", "f": "key" },
        { "q": "7uXMchFdiNZeLHHiE", "f": "value" },
        { "q": "3RvjXMagRJawZNcys", "f": "value" },
        { "q": "n3RFE3m9XhoxFrW8Y", "f": "value" },
        { "q": "8Wuy3B2xjy4BPE4wd", "f": "key" },
        { "q": "Z5kuYBHkEihbsxubo", "f": "value" },
        { "q": "PeH65ie4nro3mctZM", "f": "value" },
        { "q": "oG3NQLn3RbSzDSsDG", "f": "key" },
        { "q": "r2TNoy6ZrN9ipac7u", "f": "value" },
        { "q": "mC58T8gYLamzNB996", "f": "value" }
      ],
      "parent": "bcxqhqezdr3iRjhNq",
      "crt": {
        "o": {
          "s": {
            "_id": "26dxDqfNPG7fooSbe",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "bvRMA9iTWtaZocakP", "s": "" } }
      }
    },
    {
      "key": ["Data Structure"],
      "children": [
        "PRE8xQgdNGLdGWmRe",
        "2Zq5qhsCjN5uqgNuD",
        "w89RtXtfJDcGdgc7m",
        "yLTat3WmoPgNKLuXk",
        "TSkJrdvSq2wi7JjkE",
        "YuD3zQ3XKgrRWYW56",
        "fDXDyTi8yN8zTDsrK",
        "JWWjFYD6dKzSR63Ch",
        "5dBbh6t72TQgTaRQF",
        "jxYNChov88zkZEWCJ",
        "zsfjzBRps5omPLc7B",
        "Rzwm8rMts4dRSmRmz"
      ],
      "u": 1686078144349,
      "_id": "4KemvP8XBWfD9EZRG",
      "parent": "bcxqhqezdr3iRjhNq",
      "type": 1,
      "enableBackSR": true,
      "value": ["how data is organize, manage & store"],
      "forget": true,
      "references": [
        { "q": "yLTat3WmoPgNKLuXk", "f": "value" },
        { "q": "zsfjzBRps5omPLc7B", "f": "key" },
        { "q": "JfxEL2EXGgs8T6X4c", "f": "key" },
        { "q": "AFy3uRsHuL7fzqMSn", "f": "value" }
      ],
      "crt": {
        "o": {
          "s": {
            "_id": "2Zq5qhsCjN5uqgNuD",
            "s": "Draft",
            "v": [{ "i": "q", "_id": "ScxFxrd5HHK6nQEMp" }]
          }
        },
        "l": { "a": { "_id": "PRE8xQgdNGLdGWmRe", "s": "" } }
      }
    },
    {
      "key": ["Design Pattern"],
      "children": [
        "K7KXnnCQ4urxZdiiT",
        "WSigeKBvcfs48E73R",
        "GwTenckbvRJAzxEHh",
        "bgx7NL6QeqLwefZiW",
        "2xuekmEGrdNZHDWHQ",
        "ezKntaJopxedeLgsL",
        "XzyiLiSathrgKzo5h",
        "9wG5Yb6g7CzEg2SYJ",
        "i29aorZateKReGPi5",
        "DXt4ukxQZsdXxoTPs",
        "JHFMponJrdL2DhcZJ",
        "es8ngmhzNXS8Bakva"
      ],
      "u": 1686413277390,
      "_id": "v8gQTKg8EzfY5Em7G",
      "enableBackSR": true,
      "value": [
        "General reusable ",
        { "text": "solution", "b": true, "i": "m" },
        " to (common) ",
        { "text": "problem", "b": true, "i": "m" },
        " in ",
        { "_id": "FhRJm5jvLH9BSGTDg", "i": "q" },
        " design"
      ],
      "references": [
        { "q": "ghzaasrek6mxTXATb", "f": "value" },
        { "q": "LWwK5KxTTaykR45Sg", "f": "value" },
        { "q": "xpENDqtesn4ePrcWa", "f": "value" },
        { "q": "MStbakuiToFXBMLHg", "f": "value" },
        { "q": "YY8WZHQWtAcBsA46z", "f": "value" },
        { "q": "ezKntaJopxedeLgsL", "f": "value" },
        { "q": "rwooaypigWauW7ytW", "f": "value" },
        { "q": "K7KXnnCQ4urxZdiiT", "f": "key" },
        { "q": "D7nw8k4iicimGEFCp", "f": "value" },
        { "q": "vy54kfFwj7n7CEgxy", "f": "key" },
        { "q": "2xuekmEGrdNZHDWHQ", "f": "key" },
        { "q": "t5zfBump4mqbsa7hf", "f": "key" },
        { "q": "bgx7NL6QeqLwefZiW", "f": "value" },
        { "q": "GwTenckbvRJAzxEHh", "f": "value" },
        { "q": "WJJSkNbYhiQFicZ6H", "f": "value" },
        { "q": "i29aorZateKReGPi5", "f": "value" },
        { "q": "AiYqMYSauDLsYPG67", "f": "value" },
        { "q": "zvpcdjepKoL53Eotn", "f": "value" },
        { "q": "vcjABoRT6LZm4NFfY", "f": "value" },
        { "q": "JHFMponJrdL2DhcZJ", "f": "value" },
        { "q": "7F9kkSEgC4JhdA9do", "f": "value" },
        { "q": "5rRmjHeR5hpM5YA8E", "f": "value" },
        { "q": "Faz5SQhB8isyjMPQh", "f": "value" },
        { "q": "WSigeKBvcfs48E73R", "f": "value" },
        { "q": "wE4P95P32AKADGEjc", "f": "value" },
        { "q": "gRfpfWNS7qTwpJkdw", "f": "value" },
        { "q": "pMJ77Dwmd8XDAfLKB", "f": "key" },
        { "q": "es8ngmhzNXS8Bakva", "f": "value" }
      ],
      "parent": "bcxqhqezdr3iRjhNq"
    },
    {
      "key": ["General Computing Concepts"],
      "children": [
        "SuEZSy7ttDbyzkcR2",
        "P4BHNAGAzv7EQDLE7",
        "Yem9tQ5rNvkGGTiBR",
        "68YiSjbcDx8K5pJ2x",
        "jnvopRBDpcXG5SHSk",
        "qXqMt9fjftzc3NCfd",
        "6DWue5Ah8kyWJjGti",
        "wSukhM4piTLGaRxNx",
        "KmQS8DYKW435cv6Aw",
        "wE4P95P32AKADGEjc",
        "gRE2CArb4JpKM93Yc",
        "T84ykNnfR4bS42DHo",
        "hAJQFBJZjgqgFLyqf",
        "KwjRG5tnFuPNbwRt3",
        "AYcjQgR6rmKw9xFe3",
        "mSCAAWfiKd3eduZEP",
        "mQZfSZEooySezTRLx",
        "RL6g3RyrzXSz8qMKr",
        "4Cn57yBeeKJFmYgxn",
        "A2hXAubqFwt9F5eEX",
        "PMZK7JMEq8YHwDN9D",
        "qkpKfDFQBGWMQesvE",
        "AinibbKzjph4KRzHT",
        "tDGMbEmgYRxoFprcG",
        "DhjP7RDWqnMarAkHw",
        "veQwNfduWaWtWc47a",
        "JHb57xLzqE2795fjn",
        "J3FHHg9j8kqyuc7hZ",
        "GbtGwoX74Mji74ZPS",
        "pBzSwmwDyhA9Yfs4X",
        "7EiBpTevKANtPuSbH"
      ],
      "u": 1686078178577,
      "_id": "zcfDANo3FjTKzWEjG",
      "parent": "bcxqhqezdr3iRjhNq",
      "crt": { "a": {}, "l": { "a": { "_id": "SuEZSy7ttDbyzkcR2", "s": "" } } },
      "type": 1,
      "enableBackSR": true,
      "value": ["sort into better categories later"],
      "forget": true
    }
  ]
}
    `
  )
