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
      "owner": "local-iKhHKzSKkJiQy2yNb",
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
      "subBlocks": [
        "47QZS3B8gmwDzXR63",
        "kKzP25SWbpR5HZjrP",
        "xQo8RnTaXWND9RyXN",
        "TNSxgtmMqTBBurvxc",
        "rBbf4kfrHbus4yuZk",
        "msdFtrDcs5uuj37vj",
        "kJkRq7f8e8gBP3ifu",
        "bSv8jZiMojBcGP2dh"
      ],
      "portalsIn": [
        "zWhaGFdX9y56wvvao",
        "xKtzB6n8qH75MCdvG",
        "LgzwBeoNoF8vJXsXi",
        "KCcdAocn4LMiKpdwc"
      ],
      "createdAt": 1653254742751,
      "u": 1686079714844,
      "_id": "35nBdhDNJLwCCyz6A",
      "srcRemId": "nKse2ksxqEb2SJCft",
      "srcRemC": "a/fakeImportArticle0.4068383445247259",
      "portalsIn,prev": [],
      "type": 1,
      "enableBackSR": true,
      "efc": null,
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
      "subBlocks,prev": [],
      "children,prev": [],
      "typeParents,prev": [],
      "excludedTypeParents,prev": [],
      "parent": null,
      "excludedTypeParents": [],
      "typeParents": ["JKCnZKdQJbwFwWRfP"],
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
      "references,prev": [],
      "rsp": ["JCj48JtZENw2oj4hv", "kKzP25SWbpR5HZjrP"],
      "rsp,prev": [],
      "folderOpen": false,
      "n": 1,
      "docUpdated": 1686079714844,
      "csb": {
        "xQo8RnTaXWND9RyXN": { "xQo8RnTaXWND9RyXN": true },
        "P3rAy9jWatMic3QS4": {
          "P3rAy9jWatMic3QS4": ["poi7MDKK9Bp9Lb4qN"],
          "poi7MDKK9Bp9Lb4qN": ["8ByLuRK3LgocDHgwg", "Hi6A5p9gJk7YEp8ra"],
          "8ByLuRK3LgocDHgwg": true
        },
        "Y2ycgSgAGK8ExfZiq": { "LhJb4m5tELsuASGjd": true },
        "u6MCrExmp9tbWvDXb": {
          "u6MCrExmp9tbWvDXb": true,
          "kX8koBupfdAokuyQQ": true,
          "4aymDhsvJaDRk2Z8h": true,
          "7QkxDJmsN85eroEqL": true,
          "sKRAxFjSi5ZWRj5M5": true
        },
        "L9sewLKytEDgn5LKz": {
          "L9sewLKytEDgn5LKz": [
            "vqJQD7AE9CJ39DxEo",
            "Q4NdQTHEk3BcoABMu",
            "2LCuwSNcwCa8m6ujT",
            "zW7EfDdD9dwjcyTZH",
            "BbHEGxneuQodTrhRY"
          ],
          "vqJQD7AE9CJ39DxEo": ["qAAWrEqDXE9Ge3Rx2"],
          "qAAWrEqDXE9Ge3Rx2": true,
          "Q4NdQTHEk3BcoABMu": true
        },
        "3JE4CWped4vg8kfC5": {
          "3JE4CWped4vg8kfC5": true,
          "jjRSLRe8kMCFNpAxF": true,
          "3RMs7QMxkYLnk2f2P": true
        },
        "W9ppRdBpbN4AuG6LB": {
          "W9ppRdBpbN4AuG6LB": true,
          "em7TuzuH24AdeNAg6": true,
          "7uuD8DJPe7ey3fFXN": true,
          "88FYSmTo3sNDT9Hcm": true
        },
        "sg4kXfammnBdqqTTy": {
          "sg4kXfammnBdqqTTy": [
            "L9sewLKytEDgn5LKz",
            "JAYAfDq7otXAJcYTv",
            "u6MCrExmp9tbWvDXb",
            "7ReELoY9WyqGpfK3s",
            "3JE4CWped4vg8kfC5",
            "W9ppRdBpbN4AuG6LB"
          ],
          "JAYAfDq7otXAJcYTv": true
        },
        "euy6pZESE5iQBzP2F": {
          "euy6pZESE5iQBzP2F": true,
          "SohkFDtACu9NCnPQt": true,
          "KhS9BHHeoxnW5dGez": true
        },
        "7zuJTiHdKSmWHQabu": {
          "7zuJTiHdKSmWHQabu": [
            "BxyTTQ5CcZwNwzGXy",
            "EzvT35hbmQWxppjDi",
            "WFWNF5JaQ8gWFhc9x"
          ],
          "BxyTTQ5CcZwNwzGXy": true,
          "SpBH2SGYeAchxyThA": true
        },
        "KugDtkRr5ZTQPmarj": { "KugDtkRr5ZTQPmarj": true },
        "RTsWjL725CtM7Sx5B": { "RTsWjL725CtM7Sx5B": true },
        "MKzpcBzYmYD6BHv5w": { "MKzpcBzYmYD6BHv5w": true },
        "t6cigcxviyHNSmYE5": { "t6cigcxviyHNSmYE5": true },
        "JJBFporbMn5cnXhaX": { "JJBFporbMn5cnXhaX": true },
        "2FwnenG9ZiKQ5LvAQ": { "2FwnenG9ZiKQ5LvAQ": true },
        "Qx2P4FLebY6Everwd": { "Qx2P4FLebY6Everwd": true },
        "jxx36iKST4wbhxpw5": { "jxx36iKST4wbhxpw5": true },
        "s3yjMWhjBgcxdrEJN": {
          "s3yjMWhjBgcxdrEJN": true,
          "xXFgDcRFcDYzHAoWv": [
            "LbLMjs4zrsS7ktbsD",
            "k2GJQESGxNZiECqCN",
            "td2cGv6dCnABg3sw4"
          ]
        },
        "cdZoQAd5j8BDyBiv4": {
          "cdZoQAd5j8BDyBiv4": ["Jk5CvXtASNGBWhtiZ", "fCW5CPdDMLdpAZioM"],
          "fCW5CPdDMLdpAZioM": true,
          "wFxHrzYGpHajXXwFa": true,
          "mePCBT3KMy9EzEgjJ": true
        },
        "wgZHoB6AouaYvtKGN": {
          "wgZHoB6AouaYvtKGN": true,
          "ryNtXiyji68roQEsZ": true
        },
        "74yaPyZMWzYfcWZhQ": {
          "74yaPyZMWzYfcWZhQ": [
            "s3yjMWhjBgcxdrEJN",
            "Qx2P4FLebY6Everwd",
            "euy6pZESE5iQBzP2F",
            "KugDtkRr5ZTQPmarj"
          ],
          "Qx2P4FLebY6Everwd": ["SohkFDtACu9NCnPQt"],
          "Ss3c37BpFYEpjhMiv": true,
          "SohkFDtACu9NCnPQt": ["HWNqxtM6eRFHZsNHC"],
          "xd4zYbJcBqmxfvw7w": ["jxx36iKST4wbhxpw5"]
        },
        "msdFtrDcs5uuj37vj": {
          "msdFtrDcs5uuj37vj": [
            "etxxPLeXQLyq2d9Bd",
            "sg4kXfammnBdqqTTy",
            "Y2ycgSgAGK8ExfZiq",
            "kzDiJQpbTWysLPaLb",
            "P3rAy9jWatMic3QS4",
            "HmAj7XYM5Myd4PA9F",
            "tKiZHztAnB7HNLfZW",
            "7zuJTiHdKSmWHQabu",
            "LKXiQpc86zTdFA2KY"
          ],
          "HmAj7XYM5Myd4PA9F": true,
          "LKXiQpc86zTdFA2KY": true,
          "BqBodvene4NWw3R5z": true
        },
        "kJkRq7f8e8gBP3ifu": {
          "kJkRq7f8e8gBP3ifu": true,
          "dPtMKKhWYfuzwRNfr": true,
          "t7cXi2p2cA3jrxtLX": ["74yaPyZMWzYfcWZhQ", "Faz5SQhB8isyjMPQh"],
          "Faz5SQhB8isyjMPQh": ["iB6aaEQyHjEPogwoF"],
          "9JapcMPaseTxWJFZj": [
            "eZr5KuJYbu7X7k3P4",
            "gA6S97PCAF7k9Ekck",
            "rwE6qYTfeooaLM7St",
            "jRaiqJ4vN2wyPFdfH",
            "rfdqPwaPTs8HcPFD3"
          ]
        }
      },
      "selectedInSearch": 36,
      "searchAliases": [],
      "forget": null,
      "lastPracticed": 1680030508269
    },
    {
      "key": ["HTML"],
      "owner": "local-iKhHKzSKkJiQy2yNb",
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
      "subBlocks": [
        "Ya4GX4Aa3APY4Qj7F",
        "pa6epD49GxasQ2sfE",
        "76YhKkcT95w6554FG",
        "sFNFJj3gn4LxqDsjM",
        "83grRTSuXoqZu9mQA",
        "tWjpmFPhYgeMaXPD9",
        "9CLJfbRetH3whKJxD",
        "xQo8RnTaXWND9RyXN",
        "y5afj36d3xbwkqYGf",
        "msYZaNTLtanpngGqs",
        "eFTifzMHhbeSvukGR",
        "7oG966z6c7n8a399F",
        "AiYqMYSauDLsYPG67",
        "DthkZroPqFr3WkH2H",
        "MvjcMw4g9BbJsN43v",
        "gSWPceu5pKhJ99QXa",
        "8HgfcPhoJsdZip3LA",
        "288zhEcBs9Fa5wSQJ",
        "GdqdcqyoxcMsNmjXo",
        "nco8D5k2RkS5vqkYH",
        "CRb2EhC44kh8PK7Yw",
        "bfrxcFhbwgJzfc3QZ",
        "FnPSu3XAE8akpB9tW",
        "8TqL475TjXtBNoz9m",
        "X3ZQdskwSt5hNZzGu",
        "yYQKdFfr5Rt7Z4thu",
        "aforCR2EcZ5QBKfEC",
        "igsjWeBmeGA2LikX4",
        "YQyBQC6nJmWc4hMbs"
      ],
      "portalsIn": [
        "xKtzB6n8qH75MCdvG",
        "5ybKgFz4PH3hPNrCQ",
        "YjGQAYv9d6BCAfvaP",
        "m7iQMihp7m5tPYZZW",
        "R3MqFebhAQJc5CSqn",
        "xBCphfSRRREEGmAHe",
        "NSZHyQgppq93JThQt",
        "NAoXYtLE7nFpcJCgX",
        "YbLEFhessBTk7LTgf",
        "EvCWutKBwBGfbedm7",
        "AknnahFXRuFo9TSfn",
        "h6YyLgtjZoqK8YjSu",
        "DcqumvZh88i6LP92h",
        "iuKJdiAvh3C3SNi2D",
        "gWvPZrCrJDvhssEyq"
      ],
      "createdAt": 1653254747421,
      "n": 1,
      "u": 1686078978000,
      "_id": "76YZFGLsBuRNyEMqN",
      "srcRemId": "7swbf3HN7bxbWGmFk",
      "srcRemC": "a/fakeImportArticle0.4068383445247259",
      "docUpdated": 1686078978000,
      "subBlocks,prev": [],
      "children,prev": [],
      "portalsIn,prev": [],
      "typeParents,prev": [],
      "excludedTypeParents,prev": [],
      "forceIsFolder": true,
      "folderOpen": true,
      "selectedInSearch": 176,
      "searchAliases": [{ "r": [" "] }, { "r": ["html"] }],
      "references,prev": [],
      "rsp,prev": [],
      "csb": {
        "5Sm2h6Bhhp8Nvtsjk": {
          "5Sm2h6Bhhp8Nvtsjk": true,
          "PtJ3QG689YnTE4w8P": true,
          "oACJbCYFR3mmFPmPd": true
        },
        "9RmCT2g5m7eRcKME6": {
          "9RmCT2g5m7eRcKME6": [
            "s8iXZ3Kvb3mAt26hp",
            "xiosgfaD2Kg4Mir9q",
            "kxdJDcn3RBz4axkEt"
          ]
        },
        "KBTLBS6C983f2ooEb": { "KBTLBS6C983f2ooEb": true },
        "WAfv5LfiH8Da7eAMz": { "WAfv5LfiH8Da7eAMz": true },
        "4vHk9CMa8BGx3Fvh5": { "4vHk9CMa8BGx3Fvh5": true },
        "scKk24dcjPFhwDm5c": { "scKk24dcjPFhwDm5c": true },
        "igsjWeBmeGA2LikX4": {
          "igsjWeBmeGA2LikX4": true,
          "f4nBjFHs4bQaBFP38": true,
          "7xF9KGejsLtDLJBuW": true,
          "qrRwoZdLfSRn96emJ": true,
          "FeAMJ6ab8ZcNjgkfy": true,
          "HQWjyMb593r3mSxP7": true,
          "55Lw3Sr7cEmKAH7E5": true
        },
        "9qE8bLao9wgucPbr3": {
          "9qE8bLao9wgucPbr3": true,
          "GQDoRJQ9L2WndD7Fx": true,
          "XyDxkWtJj2E5Mngfn": true,
          "ubEx7AZq7QyaBhh76": true,
          "XvpdTSyM5kESQnj9p": true,
          "7CKH2fT74nCBDt5re": true,
          "otjnJ3xvK7PSTSEn2": true,
          "74DF4EXzsdju8sMPf": true,
          "55MXac8Wf34hrHaLb": true,
          "sF2Nj9pu8gChtzpfN": true,
          "s7ZmPF2QLjhaLZAC2": true,
          "SH5oDQCiWiMNLXXkL": true,
          "YQyBQC6nJmWc4hMbs": true
        },
        "fHP3aCpQAzfXuhFJP": { "fHP3aCpQAzfXuhFJP": true },
        "BvJTekgyLo8nszLgc": { "BvJTekgyLo8nszLgc": true },
        "j78H7i687tCciFWxh": { "j78H7i687tCciFWxh": true },
        "WfZwHKATFt67CKBGh": { "WfZwHKATFt67CKBGh": true },
        "MtDjbLqxYuWrpQBv8": { "MtDjbLqxYuWrpQBv8": true },
        "YPeHHqYAkPM9xkncZ": { "YPeHHqYAkPM9xkncZ": true },
        "aforCR2EcZ5QBKfEC": {
          "aforCR2EcZ5QBKfEC": [
            "XrGtMXfb6hjgA6vgX",
            "NKMdqyaHxSQz2zG52",
            "jDHHanuA9mTFRawYv"
          ]
        },
        "LixwWqzAgGhvsej3P": {
          "LixwWqzAgGhvsej3P": true,
          "6q69SbmbB4JzP4rm9": true,
          "Hs2BekLj5wPcxrs5u": true
        },
        "bfdWnpREZuwxc3vqk": {
          "bfdWnpREZuwxc3vqk": true,
          "P3rAy9jWatMic3QS4": ["poi7MDKK9Bp9Lb4qN"],
          "poi7MDKK9Bp9Lb4qN": true,
          "8ByLuRK3LgocDHgwg": true,
          "LhJb4m5tELsuASGjd": true,
          "HmAj7XYM5Myd4PA9F": true
        },
        "GdqdcqyoxcMsNmjXo": { "GdqdcqyoxcMsNmjXo": true },
        "CRb2EhC44kh8PK7Yw": {
          "CRb2EhC44kh8PK7Yw": true,
          "q9tix9QifwbjqYXhy": true
        },
        "FnPSu3XAE8akpB9tW": {
          "FnPSu3XAE8akpB9tW": true,
          "saSZzxa426EDSeK4v": true,
          "ec4M2oxwG2Pg7H7vY": true
        },
        "pa6epD49GxasQ2sfE": {
          "pa6epD49GxasQ2sfE": ["pH5qktCZ2hLrLT2NL"],
          "pH5qktCZ2hLrLT2NL": true
        },
        "9CLJfbRetH3whKJxD": {
          "9CLJfbRetH3whKJxD": true,
          "nTCyMu8JZBnQ3z9yj": true
        }
      },
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
      "lastPracticed": 1685980011525,
      "enableBackSR": true,
      "efc": false,
      "value": [
        { "_id": "PeH65ie4nro3mctZM", "i": "q" },
        " to express ",
        { "_id": "8pKWpQgtsXxLYT9TE", "i": "q" },
        " ",
        { "text": "struct/content", "b": true, "i": "m" },
        " "
      ],
      "c": null,
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
      ],
      "typeParents": ["JKCnZKdQJbwFwWRfP", "C88qmFt65Cwja8YJN"],
      "excludedTypeParents": [],
      "rsp": ["tWjpmFPhYgeMaXPD9", "76YhKkcT95w6554FG"]
    },
    {
      "key": ["Dev tool"],
      "owner": "local-iKhHKzSKkJiQy2yNb",
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
      "subBlocks": [
        "CoMyfvYRHp3kuBJfM",
        "9kpN96vFZnxyxkG9e",
        "SrssREfaPZi8nv8RC",
        "mN4bFYRik2ZC3ahFX",
        "EJCb6C2dSaAZJskNp",
        "hHBPJMsmWaTwcgTiT",
        "4t3MhQggwt85QLitu",
        "2b6b5AbsK4Aesx655",
        "9e6MPcLFJ7vWoTSEs",
        "kSFSQLDNWvnoGTSRs",
        "FR5RDJsaoa5NZZDJg",
        "RDXjH25Sz7bu2NBSq",
        "9NhyNXiCb3oADvwyd",
        "ARcZbNtTsYL3ZrCLq",
        "LFRyrL7yANHyT6Abm",
        "iQHBGwZpc5ALd9Ywi",
        "tiYS4GbpnDkZhcyxK",
        "2tsX9kd4jCzumfZuv",
        "4FaMXra3ecyyGqjbb",
        "DxvLoCMrvbAeigGWz",
        "fyorrDExHx77rK2EY",
        "tEHMWLkxWzLpiMtgx",
        "DaZPRWqPM4tmzMPMQ",
        "9qxfc2T5uky44DM3y",
        "Kq3RG7Ywp9BB9jqGL",
        "eRqCmSAGsp48bmLxH",
        "B2rG2GpGbchYnGpkq",
        "uMprbSKyu9dkb6qzy",
        "CocGLFnxAGWFvdefa",
        "5HHjRizELhmuPk2ad",
        "EftE9ZbH9sRSytLJA",
        "s2gzR8L64kGSKynsg",
        "3T7SHKw5Gdr3QM2yQ",
        "uLGA8dM4NQihBhq5L",
        "6Fq3scaAQE7XbY5Ci",
        "dhMQEy6ZxMB4reJy3",
        "f8BnnqejjAeKEQtgQ",
        "rgaBtGhxbXitsHCMY",
        "MyBmh3sv3WbtGhzEZ",
        "pJfRWyyEwBaKAhdej",
        "TBxSQTfT6hjoyiGFy",
        "9W4WceKp37hitNGFo",
        "WfP7oCzYFQZvYeehA",
        "ugE2YZZfTjrvRFP9p",
        "dNL2iGFxuWCiyMe4J",
        "ZCXMgLypWsiNxDKMq",
        "T4SoMSbesNYKacY85",
        "otcMi3EATtsxLh9eQ",
        "2sKKcXS7quzhatCz5",
        "Y6guwJdndtvBfW9Dn",
        "7X4pjMArcfPSR5Zsi",
        "k2BWFn8aXuug2WMqj",
        "qjtschQfZgyJ7ouZL",
        "ENaEpceDBNEKXJCyW"
      ],
      "portalsIn": [
        "xKtzB6n8qH75MCdvG",
        "pERQqoNpoSNCFywZJ",
        "AhaFQPAw4LCCRr7jp"
      ],
      "createdAt": 1653574937147,
      "n": 1,
      "u": 1686080247437,
      "_id": "9izw8RoFY6epyxXYK",
      "srcRemId": "zqohWMBEqtxLQMQ7y",
      "srcRemC": "a/fakeImportArticle0.4068383445247259",
      "docUpdated": 1686080247437,
      "subBlocks,prev": [],
      "children,prev": [],
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
      "portalsIn,prev": [],
      "typeParents,prev": [],
      "excludedTypeParents,prev": [],
      "folderOpen": false,
      "csb": {
        "W4SwDtpEEgETvMqtH": {
          "W4SwDtpEEgETvMqtH": true,
          "QzEr4z845KDZCBA8k": true,
          "4wzbXi8S6jeTEmFmo": true
        },
        "hEk6qXvQyAbR8voMu": {
          "hEk6qXvQyAbR8voMu": true,
          "B28WfnLNvt96vHnpy": true,
          "uuDimRwJdzfRdoj6q": true,
          "YaHXMwXQCYwFrqtDJ": true,
          "HMGJ3mzmYyyvK3mhY": true,
          "7ZdJjtmyPopAopMaL": true,
          "R4dwuykbfueXMW9ux": true
        },
        "bAomZd5DgChMGJsdH": {
          "bAomZd5DgChMGJsdH": true,
          "B52d7z8bRJmw72X87": true
        },
        "Qsg4WHbsz6woT6pNc": {
          "Qsg4WHbsz6woT6pNc": true,
          "wqtTtdKkLu7gmq5R5": true,
          "rsn5wg57zj7SJjAY6": true
        },
        "BpavBza5JDdYoFhvg": { "BpavBza5JDdYoFhvg": true },
        "gj7XWcJiT33kbf6NQ": {
          "gj7XWcJiT33kbf6NQ": [
            "LgBZmnBZGLwKmuYqE",
            "MF6x42vDCmriPzoPJ",
            "vHrqswToDycbYgJKy",
            "dmXg93YPFJ6AY9zEr",
            "Ptcia8cqn8Nu7vspf",
            "Qg4KJgBiyYELveBd6"
          ],
          "m2FcAubZApdKFtyAm": [
            "aKJiJ8Roesf798SMD",
            "QXGyTageo3Bx84GwS",
            "LLM7sLDfvHj8GgcvY",
            "wbJGj2RcK5PvRdAwz"
          ],
          "aKJiJ8Roesf798SMD": [
            "zsErMP9285LG3ueiG",
            "vGKRom4XSvoArWMiK",
            "Ye7uDxSmTt3JTqEQA",
            "kpTHHnazPooncHwmG"
          ],
          "kpTHHnazPooncHwmG": true
        },
        "QtaEsZsyJsoKocuDE": { "QtaEsZsyJsoKocuDE": true },
        "MsdxJKEC7DeGjEPKB": { "MsdxJKEC7DeGjEPKB": true },
        "LjDjiizTJCKPuMP9G": { "LjDjiizTJCKPuMP9G": true },
        "WpiNyBzTeSJRLo5gJ": { "WpiNyBzTeSJRLo5gJ": true },
        "9ecxsXZQSB2Yhg9Qe": {},
        "LDEQHmzc9uwztXM7P": {
          "LDEQHmzc9uwztXM7P": true,
          "ZsFQgJYwTRGLbtSec": true
        },
        "pJfRWyyEwBaKAhdej": { "pJfRWyyEwBaKAhdej": true },
        "7X4pjMArcfPSR5Zsi": {
          "7X4pjMArcfPSR5Zsi": [
            "8mCRco53Ysj8Y8Xrc",
            "eiGwjfrGdaEr9vNcv",
            "sKhs5BhFT3pCbcDNN",
            "xNdTeDMRa9jCg7Jju",
            "Tm4YEWdXhutSxQE3G"
          ],
          "Tm4YEWdXhutSxQE3G": true
        },
        "f8BnnqejjAeKEQtgQ": {
          "f8BnnqejjAeKEQtgQ": true,
          "sA3e3ccWPz8DwFNLq": true,
          "228ScehQRrBzmesLJ": true,
          "Tpgh5gZ6wr4z5ksHN": true,
          "ofFe2Ahai84PCPoSy": true,
          "gqabqoFJiArcFdZ8R": true,
          "5h3j9tgKh5kZHm5SA": true,
          "iF9d9nvtmzo3oLvEQ": true,
          "XcxG3wcYMKriSxPXz": true,
          "GjEoyL2Jpo5mujGPQ": true,
          "BSxrMCJek2GEg7Hts": true,
          "wjLMg5s5tW4WPtZT9": true,
          "o58fbkCYG3TmMP3J4": true,
          "Wu6Tuop8YKHzqoJ2m": true,
          "ENaEpceDBNEKXJCyW": true,
          "duWYhqkS3jZHkhH9H": true,
          "WBpBSMbNhWECakyeE": true,
          "4w9ns5x2xj87tM2WK": true,
          "FeqYLHWuKmRReLPEf": true,
          "7ZvJqpiy4JBLbLAaD": true,
          "GNBXGPMzbXoiJL4Jr": true,
          "v8t4vQcGgKvrNSrf8": true
        },
        "uic3Dy2Q4H4hLjknK": {
          "uic3Dy2Q4H4hLjknK": true,
          "evTPtnrKXE3NK7aY8": true
        },
        "9W4WceKp37hitNGFo": { "9W4WceKp37hitNGFo": true },
        "ZcqBoxwYmEieFsSzX": {
          "ZcqBoxwYmEieFsSzX": ["mgY9LS6iD2fgn2pnF", "ixR9BKCGtiDxdX6P2"],
          "mgY9LS6iD2fgn2pnF": true,
          "ixR9BKCGtiDxdX6P2": true
        },
        "Lx9GuLTk8GDCp9N6z": {
          "Lx9GuLTk8GDCp9N6z": true,
          "DGt6yqvqW5HWm2rSQ": true
        },
        "ZCXMgLypWsiNxDKMq": {
          "ZCXMgLypWsiNxDKMq": true,
          "fo9GGaxHapyxrqscs": true,
          "yQjm8qggHw3DgMEH8": true,
          "6MbCSripqp3FQudF7": true,
          "LDJDbk6QBDR6oGy9s": ["9AH7td67NDq8cXZAG"],
          "9AH7td67NDq8cXZAG": true,
          "pb6Mng4mAww58jx64": true,
          "XKNcEKtnqSZgSCjqk": ["H9MjvksGKf8o2qDb4"],
          "54Ypujp4HAcKhDhmn": ["4E4BzH2f9YpvnTcpt"],
          "bQvpqeP5sdmvCdqav": ["nwrMRYJtzuaZcFT6g", "KYsSvCHHpXiHqeGPh"],
          "8vaiENa9X5NnohuYd": ["6vP3yJ6Mru56ANKd3"],
          "te4E4xuDzk5AjdPdf": true,
          "qnEzsoBNvYwpA6gqg": true,
          "rAP2Nch7X9zb7nfWx": true,
          "hZGrsbyH6t5M8rwDL": true,
          "ovhL7f2HWs5YoKtSP": true,
          "KLPAHqiTwbyrgQvZi": true,
          "Qzf4wrgBpd8gB9LgD": true,
          "K3mAZ4LKHiDkLkqA4": true,
          "co2y8yioz3wboRad5": true,
          "fofwcJGesrNoPcQ9R": true,
          "LdGLiaWXZKXAfso2y": true,
          "eWhGeDWRcDF58Ttxf": true,
          "8sDKq63xbGovP6a9A": true,
          "EGC5jREWdZQdmftSP": true,
          "mMyJhQafJ5Q65PnSo": true,
          "iDWTrFuZ22h8TmFJP": true,
          "PdddWE3F5dcXPtNwD": true,
          "qKLiKPYiNKQZYxdaA": true,
          "7wnPb4hMK4EfguFLa": true,
          "eXDXvYLCRSYwJ7QzD": true,
          "oBi4bF8CFtYjKQPx4": true,
          "wjTF5YvvyipdjjSpd": true,
          "8JbHzJyCXFjt6F3Ew": true,
          "MxijKrMueovcmzFp8": [
            "Ja84Q3QyLEsNj5cQW",
            "C3pkLDb7fsMyx3zQW",
            "6sWM2T52ob9CcZhFa",
            "Z7rDywot7sZk2sbkm",
            "oskRiop5tvKGMJzoQ",
            "viThnoGz8J6ZNAGGm",
            "o5ZEiuRTzk7HNNktE"
          ],
          "viThnoGz8J6ZNAGGm": true,
          "gS7BX5snrDhtbcT3X": true,
          "o5ZEiuRTzk7HNNktE": true
        },
        "sNEN3nf3uECB2QR7f": {
          "sNEN3nf3uECB2QR7f": [
            "YkwqDqiYvQSwnh5b2",
            "eLp3b4xbptt8fi2Ae",
            "22B7MWP86S4phTKeb"
          ]
        },
        "Zv9YBztE6MsKWx6rm": { "Zv9YBztE6MsKWx6rm": true },
        "dhMQEy6ZxMB4reJy3": {
          "dhMQEy6ZxMB4reJy3": [
            "vzbESpscHYByeZhuG",
            "nEqg9E44oNKLytizj",
            "KfjgvEtjdu4zcbCXB",
            "5KRXHXF2YsgsWgWL3",
            "kkniAFzuRpcHciQ7P"
          ],
          "vzbESpscHYByeZhuG": true,
          "8aAJMGXxcjZvrdB6M": true
        },
        "aKgjrLb9Ycq6S4Wnn": {
          "aKgjrLb9Ycq6S4Wnn": [
            "HJpNQtrw5QSuWwrr9",
            "NEHthAagER5R96y6d",
            "pywDKN4dNGdP37s7H"
          ],
          "HJpNQtrw5QSuWwrr9": true,
          "CFQ3fyTPqJCLKnwTE": true,
          "NEHthAagER5R96y6d": [
            "bkDbamRQzFEbk65ax",
            "8LLAb2tznZvCTKzEy",
            "2K5KRKrWTZqyyMYg8",
            "S2dP6Zxbsqg6p2aMo",
            "XxWwCWSi4yykwBz3b",
            "JFNeTM42iKMt2zz5j",
            "SoxhM6MXmy48x9Wzj",
            "umiQabXQnYtbCB44M"
          ],
          "bkDbamRQzFEbk65ax": true,
          "8LLAb2tznZvCTKzEy": true,
          "JFNeTM42iKMt2zz5j": true,
          "taifWPQ4hQbfLWYZa": true,
          "sbYf7p7Ao2X8fTCLw": true,
          "rZokF4zXToBZP36Xc": true,
          "9cAh5ckZDFMYAbA7F": true
        },
        "ugE2YZZfTjrvRFP9p": {
          "ugE2YZZfTjrvRFP9p": [
            "t5gmvooyTF2kxAFjg",
            "mbXD4dHKnieuW6KNY",
            "Sn25qsHJ9FfvnGNAX",
            "gi3hxqT2CEoDFWSKm",
            "aKgjrLb9Ycq6S4Wnn",
            "Z6krN3baMkufJQZMw",
            "BpavBza5JDdYoFhvg",
            "SaRfqaJ6dY8x6yaQH",
            "rHASpdrjAFWNKPWMT",
            "cWK87YozF5iHwoZuy",
            "9fzvricDDKjK4N2ps"
          ],
          "9cAh5ckZDFMYAbA7F": ["3xBd4TY4LQTkYY98z"]
        },
        "StMguZGAkjGhGbGoi": { "StMguZGAkjGhGbGoi": true },
        "EftE9ZbH9sRSytLJA": {
          "EftE9ZbH9sRSytLJA": [
            "FqoYuithCkXLWtfj4",
            "wyZ4zSWrx3LLxiBex",
            "StMguZGAkjGhGbGoi",
            "rtT6gpTtvkBcgm8tX",
            "49xSHoe6m9CuJax2a",
            "8r5F5AGE6T9Yi4vT7",
            "FoYuavu9d78Ns7YQQ",
            "M56NnDXAgk8HC6EgQ",
            "hF3gm3uncHsGqWhnB",
            "s4Ef45CTFxKEQeZBC"
          ],
          "8r5F5AGE6T9Yi4vT7": true,
          "FoYuavu9d78Ns7YQQ": true,
          "9u4NiDZFMWSh94xRm": true,
          "xzYrG6uZMzBCWNjkY": true,
          "M56NnDXAgk8HC6EgQ": true,
          "s4Ef45CTFxKEQeZBC": true
        },
        "M9uHGYRsACqa68ufv": {
          "M9uHGYRsACqa68ufv": true,
          "uk7TDqGzhkyEaY9tx": true,
          "x9G39bxGGqu5TfowL": true
        },
        "fYSQ7xNEFGPqXtcBi": {
          "fYSQ7xNEFGPqXtcBi": [
            "h3C2DjoTDrXcrwB8z",
            "nrCsfXcyqrS9guoer",
            "RWGDJhL5GXcxJ8cap",
            "zuDvqdNuJuHWSuLtq",
            "JzeBMvz57AsahQWBc",
            "upb98sPPyY46CBsGK",
            "KkRW5D5s8BwGKdeA7",
            "GbBEAw7DRpoqoAHWb",
            "SxqAaryirDKeG9r9G"
          ],
          "nrCsfXcyqrS9guoer": true,
          "jaXcNjKEtEYzEeJys": true,
          "S7yuqo7mBSkMYrBPZ": true,
          "RWGDJhL5GXcxJ8cap": [
            "mtZpLckdrgMuhkKSZ",
            "iC635xN4wc6iTBDgZ",
            "9vh7hEreabgGCA3px",
            "6xWXzza8aeNYpkEoA"
          ],
          "6xWXzza8aeNYpkEoA": true,
          "T3Fpjh52j2PqyxfXi": true,
          "JzeBMvz57AsahQWBc": true,
          "upb98sPPyY46CBsGK": true,
          "KkRW5D5s8BwGKdeA7": true,
          "Fuq8vAeQ3sENSDHhR": true,
          "NwsokCdTd4eckjcBW": true
        },
        "CoMyfvYRHp3kuBJfM": { "CoMyfvYRHp3kuBJfM": true }
      },
      "selectedInSearch": 222,
      "searchAliases": [{ "r": ["dev tool"] }, { "r": ["dev"] }],
      "lastPracticed": 1680538719500,
      "typeParents": ["JKCnZKdQJbwFwWRfP"],
      "excludedTypeParents": [],
      "enableBackSR": true,
      "efc": null,
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
      "references,prev": [],
      "rsp": ["WfP7oCzYFQZvYeehA"],
      "rsp,prev": [],
      "forget": null
    },
    {
      "key": ["React"],
      "owner": "local-iKhHKzSKkJiQy2yNb",
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
      "subBlocks": [
        "miZ5yaZc8nLTeTdXr",
        "rAmLR2MTZguHHNZsi",
        "rPRstq7Z6SoDfjJMi",
        "bSLc699TqCeBLbuSG",
        "H5esqxiqR3MkD2QuC",
        "pFCETDs5vSbPinDYv",
        "aANQ5wf9QkSB6Buu7",
        "kBu7Qsvz5r6NPchaA",
        "AHmePyKsePaeEm7uz",
        "EESneZRWm9pBDGRSB",
        "DENCKsP2BbCxoiayL",
        "uQnSHnr8LthJ3pH2p",
        "qupAXzeeSJPRxuacm",
        "yi6EyxK5cEMkPRJmp",
        "RPFzYRYtfCas4WuNS",
        "krDMjQd5dWZRbPEHf",
        "FfBqf2kT9vGNaDSCq",
        "MSSyjNBequh9v73CM"
      ],
      "portalsIn": [
        "xKtzB6n8qH75MCdvG",
        "JSms3WXYXz3dipTcp",
        "Y29sr6qYpSxEDzvvo",
        "jyESqbWWbtRa5RWsM",
        "qiiG5vQdkRJzkDvQk",
        "TGm8XRMH43MF3zNWJ",
        "oMFEADjdsyDnvBANy",
        "QBSmBtjJtLCQvaEeZ"
      ],
      "createdAt": 1653254579979,
      "u": 1686079740379,
      "_id": "G887bqycfCYCmncMh",
      "srcRemId": "Mx2WdRofjb2PKSxF6",
      "srcRemC": "a/fakeImportArticle0.4068383445247259",
      "docUpdated": 1686079740379,
      "subBlocks,prev": [],
      "children,prev": [],
      "portalsIn,prev": [],
      "typeParents,prev": [],
      "excludedTypeParents,prev": [],
      "forceIsFolder": true,
      "folderOpen": false,
      "csb": {
        "GLabGAM6Tc3zmhMMi": { "GLabGAM6Tc3zmhMMi": true },
        "b4z3MBP49gLmfa5YQ": {
          "b4z3MBP49gLmfa5YQ": true,
          "aq3qpvXPrw5tpBtz4": true,
          "uQfzopf93RSHzEksz": true,
          "ZWAHJ6XK46BukXYan": true,
          "6suwJJtv585YXbSfB": true,
          "RDbpEzADAHbcn7PJc": true,
          "B2AbvpQKfXP2qkWWh": true,
          "LfzQvYgNcqbTpHZZd": true,
          "vBBacXDfyCEb2ZCvp": true,
          "3YzWsEB3bqWkG9Shp": true,
          "wxKPy9zYTCTWHLz7X": true,
          "yTYixtwtJJ6cvsJPv": true,
          "p59EQFrNrBQexwv6K": true,
          "oBYEBaBtxpCK2KW7N": true
        },
        "jK45uqfiCtXsDxfxY": {
          "jK45uqfiCtXsDxfxY": true,
          "oHJgtTuMhRWJMc6dn": true,
          "8wYSn9RWDvbqSMcEN": true,
          "LPRhLviJZZJzdsC9c": true,
          "p7HBLBQjYwpnJqF2T": true,
          "APxBeh9xgWeGLTMmN": true
        },
        "YPaTwPM7A4Lqc7KFT": {
          "YPaTwPM7A4Lqc7KFT": true,
          "trpeaGfuC4485Wp55": true,
          "JzxmY5FFE5Su9Gr75": true,
          "cWBjQE52Kq5Mtugsg": true,
          "xMKMRF4CB2asvThFi": true,
          "Ss5Wgwcp73ZqCpxPC": true,
          "rBqRcvhEeB7M4BeNY": true
        },
        "mEZqb8sk9st937EQA": {
          "mEZqb8sk9st937EQA": true,
          "tP4kMssfnkBrHfztR": true,
          "KGekNNZzYGtmCat5S": ["67ZN5fvxCggfsgZYQ", "u2R2yccWHs9TNgEzq"],
          "67ZN5fvxCggfsgZYQ": true,
          "gQoxH8ZcJEyBeAYTq": true,
          "u2R2yccWHs9TNgEzq": true,
          "5aqZinMX5YqemGbCi": true,
          "LjuN2kT2F9XfSem2a": true,
          "7L7i44daXGna95obB": true,
          "jwHCRRCwfcJDdDH4G": [
            "xss2m2iWa7hZRArFJ",
            "yySdzjjsfrWgYEwFT",
            "nTtCzHTHJCmug6bpK",
            "2HoqjdRDbpdMtajS4",
            "ontMmwgEZQ5FwPhyK",
            "Jm2Hq9ux4mXh69FYb",
            "T6Cg4Xnr3fFRHn3BN",
            "LJCeGAA9mwt4BC4Kt"
          ],
          "xss2m2iWa7hZRArFJ": true,
          "7F8jDHf2ii6wa9eoZ": true,
          "jygKuJKHvpZrzohPS": true,
          "yySdzjjsfrWgYEwFT": true
        },
        "PTBGv4gkCJ6jJE5xy": {
          "PTBGv4gkCJ6jJE5xy": true,
          "KNXbvFEhuWsj6qYDC": true,
          "o5jMnhhk7xLTWDqJz": true
        },
        "qHrLvkmvEfvH6WStR": {
          "qHrLvkmvEfvH6WStR": true,
          "9mLHx8Bu6Aj9aTzjR": true,
          "ZYqjNCbhmzHNKt3S5": true,
          "nbd2Kztyx276tXDkJ": true,
          "Gm74p5DSQbGxG3oJe": true,
          "AgiweyfmLhdqPxArC": true,
          "mYxn8PAkFNxTMtZKu": true
        },
        "PLTSaMSFfKRJPPXiA": { "PLTSaMSFfKRJPPXiA": true },
        "dNEM5sn8hef5Xoe69": {
          "dNEM5sn8hef5Xoe69": true,
          "cEEjaLjf9ugvpGKAv": true
        },
        "F9FhyEMvzuuknEEok": {
          "F9FhyEMvzuuknEEok": true,
          "Qt6STW9sGHeiLqbNg": ["8xjWKf9Ktn8HzgTmR", "4f3bFFwFoj8BMyg73"],
          "8xjWKf9Ktn8HzgTmR": true,
          "2Z5MRWMTqCfTkpNbg": true,
          "4f3bFFwFoj8BMyg73": true,
          "TFLGxXmJLmZW5ZkjB": true,
          "orJLdgJcXMtsjWKyu": true,
          "ugzcCe2jPt33zERp5": true
        },
        "2RNFkgXk8f4JbAxNu": {
          "2RNFkgXk8f4JbAxNu": [
            "oFSRJtmjp3Z8wG48m",
            "nD3c5P5HzwscYxnb5",
            "rrsK9ZXo8it7fTiyK",
            "eC83eabc5kYEyi6Xy",
            "QYqtL3FiriNAhRGhr",
            "zb9ykLXYYEBmtmirX",
            "5cZxhW766fBHXQ43z",
            "K8t4cnBKqkq8NJb6X"
          ],
          "oFSRJtmjp3Z8wG48m": true,
          "ErWGzv3FkCcCpYhmG": true,
          "q5nLhBTkJsNnnHw2z": true,
          "nD3c5P5HzwscYxnb5": true
        },
        "75v84fDTbFEPcH92z": { "75v84fDTbFEPcH92z": true },
        "3ymEgABu45QHdfG8a": { "3ymEgABu45QHdfG8a": true },
        "9jjYDttkJFbPMZW4j": {
          "9jjYDttkJFbPMZW4j": [
            "dFnN6KiyTbDrDJ9Ab",
            "M22MBrZdToN9QK4Fg",
            "ioaQuETtpxRqBWLFH"
          ],
          "dFnN6KiyTbDrDJ9Ab": true,
          "M22MBrZdToN9QK4Fg": true,
          "ioaQuETtpxRqBWLFH": true
        },
        "FuKkbJuicKL2QLdoc": {
          "FuKkbJuicKL2QLdoc": true,
          "SrYkZDWFF4KBszfm9": true,
          "qRDTgLCiduknx4TEi": true,
          "Zhc5XZbtJqAzfNSGM": true,
          "g4qpPQwp4iyjgosT3": true,
          "XjAQnE23couAAEoR4": true
        },
        "DKWcH2GNL2Pontz2G": { "DKWcH2GNL2Pontz2G": true },
        "4pMWeYaxpRBNHcemT": { "4pMWeYaxpRBNHcemT": true },
        "fDM2Dv4G4caPe6PJD": {
          "fDM2Dv4G4caPe6PJD": true,
          "E6yjbNeCQQtHJTwdh": true,
          "uADtyC8sq7wMs285s": true
        },
        "jFhuGQDdZz8kFj8Py": {
          "jFhuGQDdZz8kFj8Py": true,
          "AFA7phR8QdbJCn9aS": true,
          "nzXA4dEqcX5oNJoGB": true,
          "c8Tif8EabsaxBBFKe": true,
          "8JSwiw4cPABsRX3Jm": true
        },
        "pNjDje6o6FW6fEmyc": {
          "pNjDje6o6FW6fEmyc": true,
          "Ax99LqhDH4kuBHKuW": true
        },
        "7abKTKbXsYZ7d5Fyo": {
          "7abKTKbXsYZ7d5Fyo": true,
          "daM2ABZwEYf7PWHCP": true,
          "JNu2cE9XfKcDL7wvp": true
        },
        "GJ4GaPT9r4hAhhfvL": {
          "GJ4GaPT9r4hAhhfvL": true,
          "qstNRks6q2b2c46TE": true,
          "9Le7zdA2R4LzoE852": true,
          "QEMD5H8DHWRmrw55M": [
            "SL4TsufmZKeGpD9qM",
            "xcpf7Yx3K2biKh3mH",
            "3o8shyHLX6dRhZKa3",
            "rSAa4pDgdu6ar3KXc"
          ],
          "xcpf7Yx3K2biKh3mH": true,
          "3apmEvsNEPPRaXSB9": true,
          "Y3Bfy959jCgwQHqcG": true,
          "ZtTtKzgv7tve7Zw7E": true,
          "CMnGrkphPHshZzzkK": true,
          "f8M7N7jYeqrTHnpHY": true,
          "mjHL83MTsEAu5A7se": true,
          "NAkYZ5XsEadNrQ8JM": true,
          "eeAsYRAwv4knBwHJd": true,
          "6tpeYKfF8BQWxidrf": true,
          "Q57iwLPya2NtEtsJG": true
        },
        "h8YNHPLEDiznoZ4u8": { "h8YNHPLEDiznoZ4u8": true },
        "u4yiFxbJvdZpqe4gZ": {
          "u4yiFxbJvdZpqe4gZ": true,
          "ZLWmWtMRr5asQMwgR": true
        },
        "Bn9WggxgEfhZxmgmh": { "Bn9WggxgEfhZxmgmh": ["DijfN6k8TAYNeqs28"] },
        "4bsKKWEYnbcGDs7tR": {
          "4bsKKWEYnbcGDs7tR": true,
          "92ZZ8izMWkfABithE": true,
          "rTqya3vrZoXSWo3Na": true
        },
        "zLyjofRn2CuRGTRHc": {
          "zLyjofRn2CuRGTRHc": true,
          "8P4mQkRGd5QhxM8Xj": true,
          "dAmFyf8Z7kgjwFQBv": true
        },
        "JH8hn2ar2FF9TZY9B": { "JH8hn2ar2FF9TZY9B": true },
        "LjMEni2DXvRTEgseg": { "LjMEni2DXvRTEgseg": true },
        "Ce8jpKNzRDhStNe4H": {
          "Ce8jpKNzRDhStNe4H": true,
          "y8YkvbzAp3CYuQm8j": true
        },
        "SjLKjt9wFWyEmdW4M": { "SjLKjt9wFWyEmdW4M": true },
        "CN3SFE6Kz2NNJfQpQ": {
          "CN3SFE6Kz2NNJfQpQ": true,
          "96KvafBji8unSbqrk": true,
          "zCuq5HgqM56Ep59Pd": true,
          "GRRiCNP6rPsty6mmS": true,
          "9e6MPcLFJ7vWoTSEs": true,
          "oNHbuhzv6FXkQPCFx": true
        },
        "FZz2u8dMsNBEeE9Le": {
          "FZz2u8dMsNBEeE9Le": true,
          "2SkDSsYT38TJ9qbA6": true
        },
        "atYRwxzQxGNfjrnLr": {
          "atYRwxzQxGNfjrnLr": true,
          "mGLcrjNraB3LMqyLC": true,
          "NZ7JdpQZGkG3AaH53": true,
          "8pTXYewCHjgq68cZi": true,
          "LTHp2hrorfhzT7xzM": true,
          "pLjYaia3wvdoBs48H": true,
          "BCzPAYm7qbJz7cNvh": true,
          "AtMpunz9jTww2tyq3": true,
          "qZoMdQJSxogQx6pfy": true
        },
        "NZrDJqacEi3jYRYJ5": { "NZrDJqacEi3jYRYJ5": true },
        "fX5NNqJXiqKZmS3js": { "fX5NNqJXiqKZmS3js": true },
        "WgaNanwykhTGrZrxX": { "WgaNanwykhTGrZrxX": ["H4ogNtxLBpszhoXCk"] },
        "2wiWZ55TZromXiQAH": { "2wiWZ55TZromXiQAH": true },
        "XWqooJvg6XRMWhxWY": { "XWqooJvg6XRMWhxWY": true },
        "8qkBE7Ji8npf9Difw": { "8qkBE7Ji8npf9Difw": true },
        "N32fx2AWwa8ECPqEj": { "N32fx2AWwa8ECPqEj": true },
        "BL4qkq3LxxhaSCE84": { "BL4qkq3LxxhaSCE84": true },
        "vy54kfFwj7n7CEgxy": {
          "vy54kfFwj7n7CEgxy": true,
          "xTyZBjzLFHTEz7n89": true
        },
        "MK2D45M3Gtg9gAi5a": { "MK2D45M3Gtg9gAi5a": true },
        "x6ya4v36Z9Txvgskq": { "x6ya4v36Z9Txvgskq": true },
        "KRHWM4xpfZNPRKm73": {
          "KRHWM4xpfZNPRKm73": true,
          "3h6RfpNKkvfNXLkpK": true,
          "YKzQWb5582F7wDren": true
        },
        "FpFcmWt6BuW2XZp3W": { "FpFcmWt6BuW2XZp3W": true },
        "aBkocPSofr2Qg6kG9": { "aBkocPSofr2Qg6kG9": true },
        "xFCZuEguGCpn5eEXB": {
          "xFCZuEguGCpn5eEXB": true,
          "Jn54ti8aYP4mCvvui": true,
          "BwdHvAYpvGAggz32j": true,
          "pR8RcfdediYbehdeD": true,
          "f64akpAggXc26tXEF": true,
          "A7MxCDbkHAoKifdHQ": true
        },
        "XiiN5dubo5gx4Zxct": { "XiiN5dubo5gx4Zxct": true },
        "3apmEvsNEPPRaXSB9": {
          "3apmEvsNEPPRaXSB9": true,
          "iQ2ojmKE8ovGDP6QA": true,
          "Y3Bfy959jCgwQHqcG": true,
          "ZtTtKzgv7tve7Zw7E": true,
          "CMnGrkphPHshZzzkK": true,
          "f8M7N7jYeqrTHnpHY": true,
          "mjHL83MTsEAu5A7se": true,
          "NAkYZ5XsEadNrQ8JM": true
        },
        "Ykz6yDXP2r7cAEDC2": { "Ykz6yDXP2r7cAEDC2": true },
        "XzSQqPhMiXe9t7PZn": { "XzSQqPhMiXe9t7PZn": true },
        "H5esqxiqR3MkD2QuC": {
          "v93ZhQKDcjPCEPRve": ["g83rHB5nufN3cDM5N"],
          "2RNFkgXk8f4JbAxNu": ["uJbQrMWjvQ4tX5FGE"]
        },
        "bSLc699TqCeBLbuSG": { "bSLc699TqCeBLbuSG": true },
        "kP5RMA8LgeujaHbhs": { "kP5RMA8LgeujaHbhs": true },
        "JHqZ3PG9KeYvahhog": { "JHqZ3PG9KeYvahhog": true },
        "YvE6AFAEcc4qG5tBa": { "YvE6AFAEcc4qG5tBa": true },
        "wjLM8pMW57p8pR66G": { "wjLM8pMW57p8pR66G": true },
        "SHpmNyHzXNbjEwx89": { "SHpmNyHzXNbjEwx89": true },
        "8asME84G83RrLqHex": { "8asME84G83RrLqHex": true },
        "xcpf7Yx3K2biKh3mH": { "xcpf7Yx3K2biKh3mH": true },
        "MSSyjNBequh9v73CM": { "MSSyjNBequh9v73CM": true },
        "TTz7qGZhTTCTNSMGR": { "TTz7qGZhTTCTNSMGR": true },
        "nL8v7KSSGS88nHs3k": { "nL8v7KSSGS88nHs3k": true },
        "P4cGDdudB4SeJM44s": { "P4cGDdudB4SeJM44s": true },
        "uyc4jPXF557iB6x3g": { "uyc4jPXF557iB6x3g": true },
        "xTpvP25sSXQ5zefML": { "xTpvP25sSXQ5zefML": true },
        "AwmkSpjTn5283a7RS": { "AwmkSpjTn5283a7RS": true },
        "Cx4bWEMSvEeto6pwJ": { "Cx4bWEMSvEeto6pwJ": true },
        "PXBPvL6yNepDT9kC4": {
          "PXBPvL6yNepDT9kC4": ["xTpvP25sSXQ5zefML", "AwmkSpjTn5283a7RS"]
        },
        "9Le7zdA2R4LzoE852": {
          "9Le7zdA2R4LzoE852": true,
          "gPXFuae5vBK7mN9uJ": true
        },
        "TPYNMmZ9mcRgevZco": { "TPYNMmZ9mcRgevZco": true },
        "Y2HDWHd2TA5ooPNMj": { "Y2HDWHd2TA5ooPNMj": true },
        "p52wZFwDhM2DWZAf2": { "p52wZFwDhM2DWZAf2": true },
        "FTRHGFtjJdyduzhCz": { "FTRHGFtjJdyduzhCz": true },
        "XdF7pxH8pcg9FLrYJ": {
          "XdF7pxH8pcg9FLrYJ": true,
          "NCpJeZHxaQdTghWPv": true,
          "Qn7vBns6YBFAJPNqr": true,
          "oMJLBELSykAQiciyh": true,
          "fDLXgP7xH6kheGk6P": true
        },
        "i7DAbX8cdnz36qJ5n": {
          "i7DAbX8cdnz36qJ5n": true,
          "6DuPeCqd8i4gGEZ7q": true
        },
        "wori2dWrFQWSyJJoi": { "wori2dWrFQWSyJJoi": true },
        "J9khDBbGNqL632DA5": {
          "J9khDBbGNqL632DA5": true,
          "uRiJexsLyyGEb9Rkk": true
        },
        "e89LSobobpdcu7dFP": {
          "e89LSobobpdcu7dFP": true,
          "kBKDPhrFxDN9cYoZ4": true,
          "T7KoAL2u6eBxnthm2": true,
          "Cq9cBnRDeqD2Sp33m": true
        },
        "ck6jx3CdAdjSjQQxB": {
          "ck6jx3CdAdjSjQQxB": true,
          "aZWRCz9ydQ4783KSX": true,
          "EJBhAGxvkcoHjuXnW": true,
          "EuBuLj3pv6zwprfcC": true,
          "nKHC2oJj9JQmuedKS": true
        },
        "CP5mGJY4YA47aJeR2": { "CP5mGJY4YA47aJeR2": true },
        "dwxr3AkXfpGhpBCQ7": {
          "dwxr3AkXfpGhpBCQ7": true,
          "poiicdcWBLnTPqbdn": true,
          "jwbwau22x9C2vcAWD": true
        },
        "5xpASpDMpjaWpSeBt": { "5xpASpDMpjaWpSeBt": true },
        "69MCPgFFbQaq5SaEo": { "69MCPgFFbQaq5SaEo": true },
        "9RQAwgZMuYidD8May": {
          "9RQAwgZMuYidD8May": true,
          "3ukrXgT3BLH5fj63w": true,
          "Yrbm7tXioZKpEo9gg": true,
          "32QmcxLHzuA58jRcB": true
        },
        "MsEbrPaPd5BbHhWKd": {
          "MsEbrPaPd5BbHhWKd": true,
          "XcsxsP49FzZ5cJu6D": true
        },
        "mHiFpcbAkttebdd6b": {
          "mHiFpcbAkttebdd6b": true,
          "4zPkQ9DmgnWQG7pcm": true
        },
        "wqoGwjJEKzgYxKFRz": { "wqoGwjJEKzgYxKFRz": true },
        "gvSYwdfshkeNTdyq9": {
          "gvSYwdfshkeNTdyq9": true,
          "MdD6Q3QoxpdeDS36F": true,
          "4Ehzhzu6wNchB3j5D": true
        },
        "5z5KqWsE9SFXtEQWW": { "5z5KqWsE9SFXtEQWW": true },
        "Qv2Q6WB2jYRwsZfJd": { "Qv2Q6WB2jYRwsZfJd": true },
        "RT6qcKMnZ6XCe53SK": {
          "RT6qcKMnZ6XCe53SK": true,
          "7Xetwvsdeg8axD8P2": true
        },
        "mPMQuX32eNNgK5wG7": { "mPMQuX32eNNgK5wG7": true },
        "aY33d94EcrR2dgwTF": { "aY33d94EcrR2dgwTF": true },
        "HtowJgGfaLjv5EJ4W": {
          "HtowJgGfaLjv5EJ4W": true,
          "Zkf4gmx7D7Ttsjo4B": true,
          "69aWuGLThvgjFN4B9": true,
          "FXJsM8zzH7YLXrrHF": true,
          "NRFm2n9W4rP2BzoX7": true,
          "uc54YZeztdeA4nDBK": true
        },
        "kkeAui7KhMfrZk9My": {
          "kkeAui7KhMfrZk9My": [
            "aY33d94EcrR2dgwTF",
            "i7DAbX8cdnz36qJ5n",
            "6TRhf7irodmGTsZtQ",
            "mC8da8cPBCmZswDvi",
            "uAWDPYC2uTihtgEp8"
          ],
          "aY33d94EcrR2dgwTF": [
            "dEMxdEiTMWEpeW9fg",
            "qpAhQ4KPgF4KoZC7m",
            "Nn5keha3aPbGCRqeQ"
          ]
        },
        "uaupADevPesWRkJFE": { "uaupADevPesWRkJFE": true },
        "jqS9kwC6zd3YnxXYW": { "jqS9kwC6zd3YnxXYW": true },
        "dWwBT42SL3ormFfc3": { "dWwBT42SL3ormFfc3": true },
        "Hi5szNeFWbFHDjz6C": {
          "Hi5szNeFWbFHDjz6C": true,
          "M4nSWGzoqQCmp48Bv": true,
          "fQzpTZzdtnzqLBgYh": true
        },
        "Pc353D3Di5qt9gi4X": { "Pc353D3Di5qt9gi4X": true },
        "fmoJFFG2tWQ9LsMMD": {
          "fmoJFFG2tWQ9LsMMD": true,
          "FEi6WkYTncPa6yyHy": true,
          "zGXK8w8mgEjN2XhJA": true,
          "zajKTrSQcZ5MCmb3A": true
        },
        "24LZFEB35rY3aHZWh": {
          "24LZFEB35rY3aHZWh": true,
          "dMSrCHqTTocJcNo9w": true,
          "EfMquonyJrZboSjPj": true,
          "egoXRDo7fHvNvruQi": true
        },
        "qXaxHswpoTZw8AXzH": {
          "qXaxHswpoTZw8AXzH": true,
          "X2xAgRSP8hBLfoNBN": true,
          "HfrPqviLa32xMJJxp": true
        },
        "pWo3krcaLcAn6PaGu": {
          "pWo3krcaLcAn6PaGu": true,
          "f7njHSMZJCZdHHfbR": true,
          "cPg2SXsZtYmFvQ3kX": true
        },
        "a7J299o4GiEute9zK": {
          "a7J299o4GiEute9zK": true,
          "xepiKGmSLFRAaEoGM": true,
          "e6QcLN54YLarZC8jw": true,
          "EpjG56Xot8fTMzMzB": true,
          "eQz4cgiuGd8GL4kcu": true,
          "TXni2K5RAdvMrpPpw": true
        },
        "Qsdg5xR2n4LZ8bM9o": { "Qsdg5xR2n4LZ8bM9o": true },
        "HfrPqviLa32xMJJxp": {
          "HfrPqviLa32xMJJxp": true,
          "BgrJT9NBdqhDHH2dy": true
        },
        "wjBLSPMKh7qjourFp": {
          "wjBLSPMKh7qjourFp": true,
          "MF6bs2nYaNLcvF4RF": true,
          "mMhBxSMm7cMmqjSRi": true
        },
        "tHfhuqv5dNkgLMQHb": {
          "tHfhuqv5dNkgLMQHb": true,
          "NFXN34CguJWxsNqW7": true,
          "ADPH2CdnXdGFkuHWG": true,
          "KSMpcMMgGpKWgjQZz": true,
          "Dx2crDr6LhJr7Sjds": true,
          "w3JLd2m5NkNnWL44S": true,
          "DwcSLGCGQ2apgvRHy": true
        },
        "9jrLaaao4SmCHXBrt": { "9jrLaaao4SmCHXBrt": true },
        "FGrRLxyeqZkpFDAJv": {
          "FGrRLxyeqZkpFDAJv": true,
          "qstNRks6q2b2c46TE": true,
          "QEMD5H8DHWRmrw55M": true,
          "TQZJXLFQu7Y5Eiz2m": true,
          "HSongob4tztCPa8Re": true,
          "8hMWc8wpqHRySieqh": true,
          "R4z4X3G2n5TyeMcYw": true,
          "hgq47kXbegrWBDv8o": true,
          "LoBAJd3WdZW5HT7eG": true,
          "G96rdE8iaBWxG24yy": true,
          "gFbeYSRbBcaCNYduo": true
        },
        "ezKntaJopxedeLgsL": { "ezKntaJopxedeLgsL": true },
        "CGkiSvenxM6nGHJjF": {
          "CGkiSvenxM6nGHJjF": true,
          "MRHrLhiHWDQhJLfNp": true,
          "qDwxNL4cZsJ4csNMa": true,
          "bbNTevnRLXd7esNyR": true,
          "kcyGaErdFT8GCyYB3": true,
          "gTBEGvyZf5mTAxSmz": true,
          "hbjLHrKrozYtwrcEe": true,
          "ufEuAw7tyJPyELdd8": true
        },
        "mGLcrjNraB3LMqyLC": {},
        "mMhBxSMm7cMmqjSRi": { "Yqtqq9TBBozaWPrt5": ["4pMWeYaxpRBNHcemT"] },
        "mjTCbhpeijxbWPdJP": {
          "mjTCbhpeijxbWPdJP": [
            "3ojPtP7RvHEQGutQT",
            "6zFeR38SJAdHZmyq6",
            "FGrRLxyeqZkpFDAJv"
          ],
          "hECDup8TYN3cMKjM8": ["QBTPy25RDMpHbD3WD"]
        },
        "rPRstq7Z6SoDfjJMi": {
          "rPRstq7Z6SoDfjJMi": true,
          "FMLHd2wm78tiGLSjP": true,
          "e7WxnAK8Z3Gqpi6aB": ["zxjn6YPhjCHXbNzB7"]
        },
        "Nn5keha3aPbGCRqeQ": { "Nn5keha3aPbGCRqeQ": true },
        "oKsQwdoqrKSfKu7zq": {
          "oKsQwdoqrKSfKu7zq": true,
          "2srGe63XWfbQicA8z": true
        },
        "TZTgrcze7ZS6MKntZ": { "TZTgrcze7ZS6MKntZ": true },
        "aANQ5wf9QkSB6Buu7": {
          "aANQ5wf9QkSB6Buu7": ["ymBpZjtqXuAkSQxNR", "gy6JxnzmiNB5ELF7d"],
          "ymBpZjtqXuAkSQxNR": true,
          "gy6JxnzmiNB5ELF7d": true,
          "mamrz4S3Hnv8XB7PB": true,
          "AmnaepmMBDEu8Xd54": true,
          "48qKfyHbdkbhvhFwq": true,
          "4Kvtnjmfgvb9FQ37w": true,
          "LNAasgZnZfzeYZg3n": true
        },
        "pFCETDs5vSbPinDYv": {
          "pFCETDs5vSbPinDYv": true,
          "SgRf7itswpQTcj6dn": true,
          "mjTCbhpeijxbWPdJP": [
            "3ojPtP7RvHEQGutQT",
            "6zFeR38SJAdHZmyq6",
            "FGrRLxyeqZkpFDAJv"
          ],
          "mMhBxSMm7cMmqjSRi": [
            "Yqtqq9TBBozaWPrt5",
            "2usidrbdb75meAaB5",
            "HfrPqviLa32xMJJxp",
            "XfzK9M3CoQyZaJt9X",
            "Qsdg5xR2n4LZ8bM9o",
            "xZmeTNfNxTAgaxdZD"
          ],
          "Yqtqq9TBBozaWPrt5": ["wjBLSPMKh7qjourFp"],
          "whqNqQjbBJxxendya": true,
          "tz8tqC4ZyXAyG6yTT": true,
          "d4faQifCFqJ3QrX85": true,
          "J9xrMEAgYMcTFqFus": true,
          "SmcstZDv9b9h3gmK3": true
        }
      },
      "enableBackSR": true,
      "efc": false,
      "selectedInSearch": 130,
      "searchAliases": [{ "r": ["react"] }],
      "references,prev": [],
      "rsp,prev": [],
      "tpam": null,
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
      "typeParents": ["JKCnZKdQJbwFwWRfP", "ZzyNYdTTTSrqLA8hf"],
      "excludedTypeParents": [],
      "parent": null,
      "rsp": ["kBu7Qsvz5r6NPchaA"],
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
      "lastPracticed": 1680554158601,
      "forget": false,
      "history": [{ "forget": false, "date": 1657837841819 }],
      "preMigrationPortalsIn": [
        "HstiHr7TjLampbrPh",
        "xKtzB6n8qH75MCdvG",
        "JdbFZeeLzkXQuK7P4",
        "ao22kTEMZyNSLXPPD",
        "R7WEyMGNP7x5owvjM",
        "kTRB2Z96rMiYtmF7t",
        "ogZoRz4PHaMJ6C6AX",
        "HWLTjZrhernsLocy7"
      ],
      "n": 1
    },
    {
      "key": ["JS"],
      "owner": "local-iKhHKzSKkJiQy2yNb",
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
      "subBlocks": [
        "Z39RDuJCMzaWFn7Si",
        "zSeYmbJZcHnXce327",
        "6ERdmyzDi2vQobG6F",
        "Bd3nky2oGJnNK4xLz",
        "kpGfJEeApeXWDkEMC",
        "YdakJ8sdsQrNdCQh3",
        "7G4isDLaTAkt3fxyH",
        "PR6QXQ7XD2g3PmTaF",
        "kmQtPPr4TsRwXcKsn",
        "4LMrSh26z3n56XmTT",
        "GKPL23nQ8LNXEPmCt",
        "4QPCbZzDem2b3wcri",
        "TB8qTSJ6FZasvgzoP"
      ],
      "portalsIn": [
        "3LBM2AXmsc3cyMWCX",
        "NkMubqe9AXhkveBah",
        "DEdwtijdxrfogpakQ",
        "L4z5oALWAY9XvfnnD",
        "nf5CHLadumf3wEKuM",
        "PfsfjmdT894QgvCWM",
        "SiwWatkedPhWYhjKf",
        "4mDTksgtMpZwhWCGv",
        "GoDoMmYLCbuf8fSKi",
        "zyzHkZEkGSWWHjDXW",
        "tKQHeyZgHpQpkKPRN",
        "poZM6txoazFqkzrY2",
        "jySLYB2ptWszattaW",
        "FD5AvZ2cwoiAfqwtA",
        "pMS2h8hhLXFMRQdD2",
        "8TpdZfGhjJk4mfJPq",
        "MJhTgAd8HyL52cmhP",
        "5a8gtjLCYfQ8RTnsr",
        "nFHFy6h245zbTh6iY",
        "PGFjhjoqPwvjQKXtm",
        "bGgZWuyPu3FknL2G4",
        "FDMt8SisyyE8SAA3p",
        "9FDAc83DnPCtj747a",
        "xKtzB6n8qH75MCdvG",
        "7hxxpmNAjMt66i8Hf",
        "GFSezuBouuHDLp8YY",
        "mcDsjkePrQwyC9MxL",
        "R6QL6FYR9nEAWmr2e",
        "wsSnwGpNWrussddrs",
        "apE3RJR6ovyLgJ8h8",
        "PXW2Ct3isJbf5thtM",
        "huJFjGY5TFByfo5hq",
        "dQ698HoWENmDyuF2h",
        "5gS5hDaQ4CCCKFYNE",
        "qX3YzNyWdEbErYECj",
        "g2ttK2k8EwGScEN3m",
        "SvdLeRGchcNzzDWew",
        "XbQTPzzhoN8YsGHi7",
        "kdzjybGMvAj2u4pgF",
        "gNSNieHE2c95jQqNz",
        "vzhuSEmcTZ7wsT7X9",
        "ptiKMDuXQDkTmHaAq",
        "CqtAiaskzfeZbZrpT",
        "LQdHifqGArSXYyQ42",
        "4kNE9dLHooMqRqd7N",
        "DWZ5Tp6f6gfhxKNFr",
        "wLP46DoePD5fJoaqj",
        "3KcMrgCTFNbFqeSzZ",
        "gWQr2SfJzsrBgDRXA",
        "uCEMK7m4YM5DbMLmc",
        "wAuBjgati3DiieQsD",
        "HHivsxqKbqjn6p7bW",
        "sgRd2AwTngv3DPpSK",
        "MjJeN4zRZeiG56N6e",
        "Eu3mXWmYXYPQn289b",
        "6qbkJ3dsPwjwZGjWH",
        "ZyXz2BQjrxNc8HeKj",
        "2n3ohh4MFqNPpkHk3",
        "WeDYmTNW2bM9KDwcG",
        "yDZSJQFtgHZ5MzLBt",
        "mFKPWxqqwJJHNWKKo",
        "GkRX69kPDwQ5aPXhT",
        "CTDiNCGMZNfwskAe8",
        "vPgehgz6AJKt2QKxE",
        "Lz9gsm77vKcyEbctY"
      ],
      "createdAt": 1653254593973,
      "n": 1,
      "u": 1686415819750,
      "_id": "HWLTjZrhernsLocy7",
      "srcRemId": "XHcnEAmyspANeZEPh",
      "srcRemC": "a/fakeImportArticle0.4068383445247259",
      "docUpdated": 1686094082877,
      "subBlocks,prev": [],
      "children,prev": [],
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
      "portalsIn,prev": [],
      "typeParents,prev": [],
      "excludedTypeParents,prev": [],
      "forceIsFolder": true,
      "folderOpen": false,
      "lastPracticed": 1680028938925,
      "type": 1,
      "references,prev": [],
      "rsp,prev": [],
      "selectedInSearch": 239,
      "searchAliases": [{ "r": ["js"] }],
      "csb": {
        "knNs8BCqGs7axty8G": { "knNs8BCqGs7axty8G": true },
        "WCJvozpBxFYJc549x": {
          "WCJvozpBxFYJc549x": true,
          "9EpmPryCF6sBNkt25": true,
          "He8LXcGc3392kkwrf": true
        },
        "2kktqoHitNoqHWmss": { "2kktqoHitNoqHWmss": true },
        "KmcabyGiTB68GWDqY": {
          "KmcabyGiTB68GWDqY": true,
          "sS3cR5aqt63R9PEL5": true,
          "ppaDuwDkLh8FdTCG7": true,
          "BumjGXzx9pGhMJkkd": true,
          "W6uQKWJWv3Cn5hS9t": true,
          "9QBFpc39bZ6pMe4We": true,
          "GSqcYonZZTH6neykL": true,
          "pJHQqgbZTWov4uiyv": true,
          "ZcfNamfSCRaxP2pKp": true,
          "WCh4TMfS8rFuBpAt4": true,
          "Yo4Fn5wjniPoFfPw2": true,
          "jBTosr7tZRENkrcx2": true,
          "6RsP3RE8NCxaYLDXx": true,
          "KSbZHJwG6WqbGfYbt": true,
          "EwQwFXfNdCNr7sGqL": true,
          "jSQPGpPA53GjGxqze": true,
          "KozfpiQsR5FbnLWuQ": true,
          "cBXeKSr9jwxLbNxpu": true,
          "hqHBeyKkKKghwLoq7": true,
          "v36RCttkqC78AtWeo": true,
          "6ShaS4FeYyLTc6Puz": true,
          "itLd6YWDdWxLYKDhK": true
        },
        "CYczTiDKPNR4GoBYN": {
          "CYczTiDKPNR4GoBYN": true,
          "BtCLEmkkvtJEw7eMW": true,
          "W85iMNc8Go4mXTdqm": true,
          "LKyA878KuZWbF4gkJ": true,
          "WZtyBYvJ2x3iopyer": true,
          "LDq9oxc8pRSYgeWvc": true,
          "scgKxXsn5uAxzFxZH": true,
          "jcKWYuokBWYA3au6r": true,
          "y4HK5ccy7Evq3QNnH": true,
          "8tEh8B3jrTyJ7ddcS": true,
          "TT6uaungpdrJEpEXn": true,
          "orfKda4QQ298ynhdd": true,
          "bT9tNLykyPp4qLw5k": true,
          "Lg8RkeBjKYze7fGRd": true,
          "Ha3fXEat3Ft8zTKPN": true,
          "mBo3bG3my6fgnYDSi": true,
          "GxbPdiniWMfa45n8g": true,
          "WaMsAPw9NFjFrrZaN": true,
          "J2jMpcsDd4NNvybtC": true,
          "SXB6dRu5NZsaz4PDs": true,
          "vXbFyj5zwiPuJ7R4k": true,
          "hb6zgTvpFXraXKjpq": true,
          "MrGgBiuGSNzuRwRi8": true,
          "6wyb7k9D35pid3LoN": true,
          "jmatdAou3jhfunmqa": true,
          "Gx44P2gQkpdbDxRbb": true,
          "buigEtpcKikQjmckf": true,
          "8zvbZy3sJnZ9ukud4": true,
          "LQ2ouaMQreAks6Esq": true,
          "f976WKJ96e7Lt9GDt": true,
          "237EoBWgpASAAf5q7": true,
          "5i2bykKusHExDet5s": true
        },
        "BhJywMQTRo6vZ2FLJ": { "BhJywMQTRo6vZ2FLJ": true },
        "mXEftBNi4ZGy3WvDu": {
          "mXEftBNi4ZGy3WvDu": true,
          "gqQFN6ktWirsRXf82": true,
          "Nxy3XFERkZFcBhMTg": true,
          "cv9Ryzs4FayySud3Y": true,
          "kY3fXZgYP2ZWJgXoo": true,
          "ZaKXZqKx2srmdX7MY": true
        },
        "iEiATFTTg7ARyokti": { "iEiATFTTg7ARyokti": true },
        "MZnTvedebh69rP8J4": { "MZnTvedebh69rP8J4": true },
        "oPco8fn85YwGDKYwH": {
          "oPco8fn85YwGDKYwH": true,
          "6KiWnivE87MuMG4QA": true,
          "ihTaSEz3cB8hNj9pQ": true,
          "ncTFoy9h8bdptjtoW": true,
          "nK4paoMfn3AjvS973": true,
          "c9wDr3carGkXMFYsn": true,
          "MugF3uf3vHoqyb59r": true,
          "9ZYKivnZ32XEWysFE": true,
          "bqne6TQMWH52BMnTJ": true,
          "DSjtw2uTtmyW5gs7n": true,
          "txXzhJQ4nDDDCAWvN": true,
          "Txp9qPmFtKE7oHHh4": true,
          "yiyJo6BMBx8LeLTBa": true
        },
        "EDBtg2G3vd3sLattJ": { "EDBtg2G3vd3sLattJ": true },
        "h5aXoQvnqvtaqJx5W": {
          "h5aXoQvnqvtaqJx5W": true,
          "gsnomDKRrwudJuWqA": true,
          "mrHHfgwS8grLku7qC": true
        },
        "NjyiqwoBzWbLBGrua": {
          "H63c8LNXYtv5mrb4L": ["ibbhrrAYEcwGYasME"],
          "ibbhrrAYEcwGYasME": true
        },
        "ibbhrrAYEcwGYasME": { "ibbhrrAYEcwGYasME": true },
        "ac7rN93HYgnRnkQtt": {
          "ac7rN93HYgnRnkQtt": true,
          "ZdeNkLbkGqtB9Momt": ["NjyiqwoBzWbLBGrua"],
          "H63c8LNXYtv5mrb4L": ["ibbhrrAYEcwGYasME"],
          "iKdE4uS5azmvWGQd7": true,
          "gmKhSG852TktdDDob": true,
          "adysGyJudt6wWjwYd": true,
          "gQy3YEuTac6g9Bnhz": true,
          "TJAYMimWMLLYuvM6P": true,
          "aScYASGBkPSQFc9RG": true,
          "PBc5ic8ie3zirsak7": true,
          "SCKrnuQ5N8nK2d7CD": true,
          "7abNWb2wRRhgLoKvs": true,
          "w5iNQFAiJLND8uRFT": true,
          "QcQQkXcsYXzkTmFgm": true,
          "LS7cEQQvcKoixNW7t": true,
          "o9CKKzs8E78Cwv64M": true,
          "TPqMehDtrb7wTSfNG": true,
          "qSDExZGaPQQvhpqpo": true,
          "ZJY8BtSPRzsAXiFRE": true,
          "aG9MY4YiG6h4mSzvo": true,
          "KjTeqKkShwMc8QgvR": true,
          "uJaX9dxHEaTKavua2": true,
          "APpDALB7TkofKMNLM": true,
          "qswqJeTxsRHEmsAZ2": true,
          "8oyWdzoFL2xLzM8Fb": true,
          "Pa7wbt8imHjSfCttD": true,
          "sjQaL85XXMdtn6dWK": true,
          "cMjmGnwyCLyDygcBf": true,
          "w6JdEmYCLrm5cPPGB": true,
          "tyktrTpBpo6xsBJrX": true,
          "MvsaeuyipeWhBzwB5": true,
          "QF65oHC3vkLgd3MeK": true,
          "whbnub58hx9mYcQMg": true,
          "eGtLYBb4psdLwEvXz": true,
          "FDWWj3N6Lrwu4avjw": true,
          "8fF4qeasRs7qm9mhd": true,
          "9vQyNsrANgRgEhpex": ["naX9SatteihfKwaeW"],
          "GkzE43MFfXNJNh4CE": true,
          "29HYgvWY2962jTSrp": true,
          "CdAzHytuhamS5QEdC": true,
          "bLXqwsfBSk2R6gqLG": true,
          "WME9xHGDsmAo4rpNv": true
        },
        "KdoYsqLzzqAnRCGAG": { "KdoYsqLzzqAnRCGAG": true },
        "2wBceqJM3d9ezZZu3": {
          "2wBceqJM3d9ezZZu3": true,
          "o6KndB8FJCHngXuNE": true,
          "iH9Y9Ssp4bxmRmD55": true,
          "CdGHpqmZdLgQD6jFy": true,
          "NKQDZKvBnECBxdTTY": true,
          "KWB45K3XFg42QiC6R": true,
          "wWsnvEGLdZgKRRzar": true,
          "DZrzSFSiTZAZrq3GZ": true,
          "uNN3bcf4GCiSZAg9Z": true,
          "447M93Bj8pf2kGqWh": true,
          "zDtBXtRpxGawJagPG": true,
          "ZqvaicEE4ETnMS5Mo": true,
          "TaTrvMtWz6Aarqzoi": true,
          "Nvh5eBLBGkMCs8Y4G": true,
          "3AfapYRW2sfQNBTpZ": true,
          "HTSRaTErxKmuddoK5": true,
          "R5yJ7PcFW77YXvXSJ": true,
          "S7zhc3yD9a9FDrSm2": true,
          "B7PcssYrsQCExG24a": true,
          "pFrFvkxCju7jiqhAa": true,
          "Fr429RnYz8HtTeFZR": true,
          "sZaveYKxJeyBkaoky": true,
          "HThNbd5njagbSi6MN": true,
          "zvjPDux2Fs4muqLe3": true,
          "DGwCWLibnHyPc6TfG": true,
          "ZRPJqxfmkYA9RqYAs": true,
          "vDpip7DksLi7sm8JT": true,
          "X4e588wqicvht3TD3": true,
          "aQrwmK8dwCdsHHoZB": true,
          "kcQoCcHajQHiWaxM4": true,
          "Wfnh9AsoKQAuFeoDf": true,
          "yu6pjYwNBtx7Bwiq4": true,
          "WbhGDo6fqCMKpxNNt": true,
          "hzfzpwpmL8QTTwtES": true,
          "v7TrxcaZvun9q7jDs": true,
          "W9kNKEPrch7ginpE8": true,
          "JPhoGYSS47EYiLifL": true,
          "9vyWE5baD9JtLbMBs": true,
          "5xQT2tgjjkn8qKcNf": true,
          "hC3YKKdcfLEJAKMfZ": true,
          "d8c9qZGd9R6eRy27r": true,
          "gHJ3K5gcxzH8S9Q3j": true,
          "ns7zr7AYbNRdeQbn3": true,
          "EQkdTneDrwtXxGvdn": true,
          "bea98XGzphGjYudEW": true,
          "Q43GEkfrs2zXW22HY": true,
          "RErne9r6uE29vcHZJ": true,
          "t6ja29ML32LTA4NGc": true,
          "DrF8vhGPMgRdGbvZs": true,
          "TNbY8CZ9vhGAEFmPs": true,
          "7qCkpXSwqrY5Te5Kn": true,
          "QTX2GaCTnjAT7v6N2": true,
          "FGP8xw2wJGhFeDkE4": true,
          "y28z5Zy7one4kbRH3": true,
          "vEaGRQrofT47kSkzx": true
        },
        "PXDm5GJX8tMGYHZbg": {
          "PXDm5GJX8tMGYHZbg": [
            "bpAzcRs3sp7yDoEEB",
            "raZAKY3yT3ZLxb4w3",
            "6KRsuqGCFPjfJCGiz",
            "zyKBBkLczesWnXa7E",
            "3ozSCYieCTpAcfCGF",
            "JXjaSxpPJeudkLoQE",
            "9HAKWXgGpfMrtMG8m",
            "QSWxYaGciLiz5uThD",
            "Mdw3TGS3mMZbmMXMW",
            "8iF6TzCnZb5GvNZyi",
            "eM9miAPdciwtzwpzp"
          ],
          "raZAKY3yT3ZLxb4w3": true,
          "6KRsuqGCFPjfJCGiz": true,
          "matTsmzo9yBcjksAD": true,
          "TWbFQXX87CFNcWJ4q": true,
          "Mdw3TGS3mMZbmMXMW": true,
          "pjsDLFkmXquHDqPa8": true,
          "9Qy4iyP8rLcSTme5W": ["QaHN9cRetzPuDftah"],
          "8iF6TzCnZb5GvNZyi": true,
          "wuk9F64dZdjePX3QH": true,
          "qrRmFaYFD7CyDscBh": true
        },
        "xQqF7d5KsH3Nn4Dek": {
          "xQqF7d5KsH3Nn4Dek": true,
          "uKXBDDNCn7Lrk4254": true,
          "x6BPRzkWr2TcNT3SB": true,
          "agtf3REFcinfGwvid": true,
          "NPpSSc4RwG4ooYRsy": true,
          "BmjX6ugFp4Z92qgHX": true,
          "3FbQvpMZkKJceZxPE": true,
          "W8fs2uKRJPTXz9ZWd": true,
          "rQnWH2XpgmdPFkSRC": true,
          "yjj9qYsaf5PsLEn7M": true,
          "CzwnHhEoZYbStbw4b": true,
          "P4eXeBoNZ3BCJPSTy": true,
          "QMhDTJkw88AMnrB4v": true,
          "auDsDmXvJEQ6iYHkH": true,
          "aEWyh9aY8LftLrTfX": true,
          "Nh9R7wcCbb2Bu3acW": true,
          "A2ymy6sZXi7wNPojf": true,
          "7Qsoe4Zg3BBQGFYvY": true,
          "iyqe4AvhP8SEsYwa8": true,
          "exA5WhYhnreMuSa24": true,
          "SRfeRcLbpwKGKBAgB": true,
          "6Mqdig485dmTicE9t": true,
          "CpPHeZN2dDutCvaPx": true,
          "NmxtkuyE5EMA6TdQG": true,
          "4FgKguLbWHgifENWS": true
        },
        "NWSKnr789AQcr4zjz": {
          "NWSKnr789AQcr4zjz": true,
          "SekCbEASCncoExkum": true
        },
        "2WYAJ3ENGor9ZxZ87": {
          "2WYAJ3ENGor9ZxZ87": true,
          "z7Pcu7ubB3ftYwncL": true
        },
        "jXyXSawDxvCeExegt": {
          "jXyXSawDxvCeExegt": true,
          "iAND8wC8wx5Zici7D": true,
          "G2AFyvbeNPnLY5CYu": true,
          "k8crejWLFwTFZBfMi": true,
          "Cs5ibRASrX7SouT8h": true,
          "GKKtN5mxYDLxcKAyt": true
        },
        "BEZLYeDE7nmuTNRTn": {
          "BEZLYeDE7nmuTNRTn": true,
          "iQi72n6ZZ2Q3mdwyN": true,
          "cDTDmEMHYCtgRyaf7": true
        },
        "WCjucpoEwys6cgB5e": {
          "WCjucpoEwys6cgB5e": true,
          "T2on32F2rsJxeuShR": true,
          "9wuayu74hxFPf2Szk": true,
          "NWSKnr789AQcr4zjz": true,
          "LtxQ6TonpCEDwZho6": true,
          "Zh92xxzAmHkJF44Nh": true,
          "XYmdYMa7SfSqMm5ne": true,
          "ARHaCz4sdnCooiibW": true,
          "G3YAyPBjAiQFBX9PH": true,
          "BkiJHgHRiQHvEbWnv": true,
          "n2kauaiZinrXga24G": [
            "zzSjfDRD24aBNPZc8",
            "T4eFZd5o9qbNpHp3y",
            "z2uSKpkx4BqenKth4",
            "dsqEjerpdK3Z44Dfr",
            "A9v3ydZtBT3BtEJr2",
            "BPmHPvZXjjsPkFh7P",
            "spEPTDxX4dJyDxumC",
            "ps3swBJhvLhPZXw9a",
            "F7NXBMCgy8kG9SDfC",
            "YCE2sFFEhf8F2jP5Z",
            "FBEsczA7TFSZoF9xN",
            "kxrYXqRADNNhNKkks",
            "JCLaqeRbuyptExQgo",
            "5RfcQCY6Kidiokvns",
            "42LFjDW5rcajmCbvv",
            "LBM2einbruT57HtFm"
          ],
          "dsqEjerpdK3Z44Dfr": true,
          "ZhEMEQJSR6qyyxzmH": true,
          "kxrYXqRADNNhNKkks": true,
          "c2KdsnaqjoGpBHhKc": true,
          "DCzGxQBF8i8igMHLK": true,
          "9hY7QrAwYj76GoEjC": true,
          "RxAHazghPb3Srjzdg": true,
          "ys5N9gFbsYKQRBoZ6": true,
          "GwdCfhshAf9v5cTFq": true,
          "9pDNXhyESQRwz54Pv": true,
          "ycAZSGZJYjLMieXCb": true,
          "bJ7PZa8qLxFT38BMb": true,
          "JzsnqqZo7YJWEF9tQ": true,
          "AnFnzbTj3AjdSApQb": true,
          "z6tZ3tHuuTfuQqntg": true,
          "kLwdQ8LwXM9Rkh5uy": true,
          "9xnSt8TnpRombtxGG": true,
          "3vu5WMAS62jddx5k7": true,
          "RmxwYZqHg5FktceSE": true,
          "iRZJ6b2ysbcn5Bce8": true,
          "c9vSWE4jn8rPvBiN8": true,
          "D9EGjpcJoAArHDuhf": true,
          "EFoDdFtwzws2DP849": true,
          "AGCaRQku8oCKb9mjg": true,
          "cpA49NHyA2xp39atH": true
        },
        "tcBMHWDu76hXeYuXd": { "tcBMHWDu76hXeYuXd": true },
        "qJCsamfLncCht8J7t": {
          "qJCsamfLncCht8J7t": true,
          "uEDhyYRsG8gdov3rC": true,
          "6qqmcP7Q9q64hFktN": true
        },
        "ATWenzsyBHuxu23pa": {
          "ATWenzsyBHuxu23pa": true,
          "oKSMcvsmzgkS2vxiz": true,
          "mLgmMjDcjGoLz54iM": true,
          "7RYPyeavNsNaTtbBb": true,
          "uvNTpX8NsZimwpahe": true,
          "XE8ZDu4fpe8q42K5B": true,
          "qacQktE4mf6o5qZ6r": true,
          "5rF7Cyv9x6576LB9q": true,
          "aWTNhA974BK4z4uQc": true
        },
        "Ya5MwZyG2ZhPESJ5f": {
          "Ya5MwZyG2ZhPESJ5f": true,
          "Azxi39vjFBLmnsuap": true,
          "CjSMqiKNZPwZdHj88": true,
          "3yj3PYfawb5FbJWGN": true,
          "5SMJfsizgnCAp7SEY": true
        },
        "rvSuZCyt6P9zhX5bR": { "rvSuZCyt6P9zhX5bR": true },
        "GGDv4nHr6DmW2aW4h": {
          "GGDv4nHr6DmW2aW4h": true,
          "WWb2ABSQkXiKMc33Z": true
        },
        "p4uzuA86nmZR9cxjL": {
          "p4uzuA86nmZR9cxjL": true,
          "pPNaCSyt9Wtd879Pg": true,
          "DFEdGtyf3PGTEQ8eE": true,
          "pXhGiEncDN7kj3usG": true
        },
        "DtoyBp78gpqTmdSEF": {
          "DtoyBp78gpqTmdSEF": ["k2r5ndZKsRYW5ahY5"],
          "k2r5ndZKsRYW5ahY5": ["2bimk8wriQfn3MCzv", "FKCrEPvP6QPgMPxxE"],
          "2bimk8wriQfn3MCzv": ["BdEkHS5y9Hrh4Pcf6", "T8z2WWRR6DKqemKXY"]
        },
        "WCXkQ5TzE6qPSKryQ": {
          "WCXkQ5TzE6qPSKryQ": true,
          "NqkcGpr3JTx8gTTJT": true,
          "yfqw6LKZaKq5Y8FFj": true,
          "kyQcCSPJi5xEgWXT8": true,
          "s8ncqEtj34fftiqwY": true,
          "4w5mvv6oibkeHPgoL": true,
          "KjJ7qYj7FN8ynAd9i": true,
          "nx4cNEZwqFpmAZmWm": true,
          "6FXSzkmhThtrAbwwn": true,
          "72FSNr4aQKwh8c3eE": true,
          "52Xh6BF3YDsmBznE8": true,
          "GPGXQwLJBMr6Qjcpz": true,
          "eotSTffnJYXJYYJ3A": true,
          "aGT3eBHh7fQc9ZwLn": true,
          "tYLcrJGcF5LsvL7Fy": true,
          "ox2YNskm6rE3h3psu": true,
          "NuGviKmzkfh9ifCW9": true,
          "MEzYCQ4FzBcPJvnvF": true,
          "B3QHBLXGCGoaNPzgb": true,
          "TzzT8EXN4WuD3dhDc": ["3TQMSZyxbqtTWs92u"],
          "3TQMSZyxbqtTWs92u": true,
          "K3vz7upYobF3P5r5c": true,
          "gXGP2YBWu68Ja4Hfk": true,
          "jvPnQoPgZpThBLRCt": true,
          "4qamjALsZKpiBfDNN": true,
          "kvq9e6oMxrrEjJJHr": true,
          "BcdehjbCKQhenFAQG": true,
          "HtaLH6mFXSbDm4ueY": true,
          "PL4yb3GPdNt6upbnJ": true,
          "Y5oQys34sLywYnsXR": true,
          "hhkfvpyCs6rQLtoZs": true,
          "44RsBLDKFkm2eqnur": true,
          "WGZkuJipAT39MAmiy": true,
          "f7NehYewBKyzBA7RD": true,
          "9jfe6AkLGAh7TYYHd": true,
          "qF836QYxMB7EFE3xL": true,
          "eDsqqMrtBmH8YNnmo": true,
          "zS3vHS6wNJYt676fa": true,
          "n7jCLeqTeqq8hvLCm": true,
          "5zB4arcYNCTzyatcZ": true,
          "PWq8ZPXG37zhRZqcu": true,
          "QyECy6aG8rvyDwMBK": true,
          "jmJJCFGkByWxfKjXP": true,
          "vnE6ZfEXzQjwqAgK6": true,
          "krXW9QYqFWRvnBCy9": true,
          "FNxCMi2D3P5yEYSr5": true,
          "WXBwRcNYvCKXBAqsY": true,
          "dD6jJivsPzzZmZhgM": true,
          "htbb3G7KupQ49jGms": ["gYgt8pzLDWKPErA2y"],
          "6dmZNbExuG9FBqXMG": true,
          "6CDQaqsCtABnLg4zr": true,
          "vRoHCXpMF3JWxftHX": true,
          "5StrDWr4SDtet7Zn5": true,
          "YpJs3fcdz43uqqRNS": true,
          "ZzkLa4ovArQv8cyuG": true,
          "N6wP2PYwkBS8siY48": true
        },
        "EXDFzkJY9KKjgo8nP": {
          "EXDFzkJY9KKjgo8nP": true,
          "AC3YW4hmYBW9qijdY": [
            "ebAHEF42RLtpBvaqi",
            "7T4ryuLH96XvrpjJ6",
            "pPzRGjw57RYoGviha",
            "kZYaYhP9Bnxfdpx7i"
          ],
          "yZ8mmMr7rSkQFXLAk": ["mzCp2WEfNvT4gcTrA"],
          "mzCp2WEfNvT4gcTrA": true,
          "pPzRGjw57RYoGviha": [
            "BqmkXyRQJshiEauTc",
            "ACENW9YgWQT7jNSvW",
            "3XFAhwbqkTEvdPhgX",
            "ZmTXkLEDbNujBB3ob",
            "QgEPxXWi2tCxtXpDM",
            "tubN4ijPbX7735Rgb",
            "us2xnTZSaSGHw5MvL",
            "NvMM44bne5vKM3E4j",
            "dyboJK3zQz2ep98Fb",
            "CauHwL6ZyKrq5QBGQ",
            "jwLBfmGeR78TdPsrz",
            "WFdoW6xAo7zDZGPQE",
            "fXnZQKov2o9iFETrP",
            "dRKZRFCYgQiKo39ai",
            "wzmgbLuoAZQiPr5Zz",
            "8F9xszz6GDgefyzi5",
            "wZo89QkS2QrMtzChy",
            "dFRm3DjeirucDoTR8",
            "go4YduQF8DgG5z35Q",
            "4pntpz9KstsL4Pctm",
            "apeYzZEo6fdqbjaxx",
            "AQTaxAeCqFPugyjMS",
            "6pg7mGwZqhYmNy2ti",
            "ChxL2zhrTgEbpg5bX",
            "5cWG6JRjZtaS3hZmP",
            "MJuqeoisdhnDX7npT",
            "4H9DvFW4t9vP3Q64m",
            "mwz4L8rnbQeLzYgFC",
            "4qDZhQrXN4SjAnuQz",
            "jngRX4Pvj9AowfXe5",
            "ixhqQYgvxvWnnD7ai",
            "jEaDw4JK3YC2MGPmF",
            "rSzq4gx6cCGD8qtz7",
            "GQMDerPgRtEeewPiM",
            "K7ZJ7oYWkcur7bmR2",
            "qJmWfawyLf72vXaWa",
            "7ffbGY3tYdEXJSStf",
            "YEHY5TtDhEYHhDvG8",
            "NhgnC4iiCSxd8xMGy",
            "HfSG4z7aK7HcYNTqB",
            "WajnQhdTqMnAhaEri",
            "YRXq2eY6Ry84KpZ8K",
            "erJJAMcnh8GCG3s8o",
            "GqamJxArZXiPB5eYg",
            "yGryLXQxqt4yeneZ4",
            "QZTobuqxAqwnTPrkn",
            "8eKaiZCJCQFuLCxZ2"
          ],
          "BBiCAKmkn5dwhMM6L": [
            "Y7TEgngSCnWkRQX5f",
            "wTTrPqMvZzPSBzTXj",
            "ccJfPyujgvE9iWMmS",
            "ARcP66Dba83MuSuoc"
          ],
          "Y7TEgngSCnWkRQX5f": true,
          "AA5JcFYRcoZiH9rWt": true,
          "sKeoJm5qWaEYCqaHE": true,
          "LcLyaBigeZJa53GEr": ["i9KTYrZEGdYNtorki"],
          "9GBzHp5E7BuYStrXR": true,
          "ccJfPyujgvE9iWMmS": true,
          "wn9RiQCC2brr7usQE": [
            "XELXzxvcGfQfQva3Z",
            "TNR8hPWmGMc3aNFNm",
            "kYA8xZSYNRJ9LimmJ",
            "eGWfnymFXdmrSHtCa",
            "un9av5jLsJMYXvBEM",
            "yzfgnBkwYbx6yMBoK",
            "jQGbHdf4PXceDz4vd",
            "AGCfAKDj2d66Mp97R",
            "tXNJPSKfB2f8HYRer"
          ],
          "eGWfnymFXdmrSHtCa": true,
          "un9av5jLsJMYXvBEM": true,
          "hyHsBbfC6c8o4a7S3": true,
          "yzfgnBkwYbx6yMBoK": true,
          "9DWWQcAyGLsufQ7FG": true,
          "3SnBg7CkRxkn5rAJH": true,
          "raL6ngv62CAWtsv94": true,
          "LJPJpDxvu7cq4b8re": true,
          "FuCmP9yR7JmYvhdvb": true,
          "4eph8zW3X64ytnQJd": true,
          "YZCv2Lbje24tL6vgX": true,
          "6r4ZLjGCqqhckhB2P": true,
          "6qijXnmkfGtEMksTW": true,
          "BzwmNQGpjsWheA9dw": true,
          "NWby4FtSFJg8XkqsT": true,
          "FXuHd9q2FHry7miqJ": true,
          "RvyPipbqcowPTLFN7": true
        },
        "L3fxzinnarFQu8iuM": {
          "L3fxzinnarFQu8iuM": ["reKuXsKAanDdnfjmv", "uyHDC55EZGeMB6v9B"],
          "uyHDC55EZGeMB6v9B": true
        },
        "AWzpCxK8fL3J5LZyv": {
          "AWzpCxK8fL3J5LZyv": ["LyZwDz44vWuECkTrc", "YRC89ewZpv8FNwW25"],
          "LyZwDz44vWuECkTrc": true,
          "jqiDGujQe6syP2se7": true,
          "gakdonSRP9MjvXxSR": true,
          "adHHPnQcxtmGF9CJw": true,
          "5ePJucgfJYQjZTjD9": true,
          "94bWbA4kEX6dB7KPa": true,
          "3xQYEeEcQKDD65FTT": true,
          "Z2wH4LvRz8W32MBZ2": true,
          "GwNwztadqr6y4vWmw": true,
          "7z3Zp9NFuWhoXstSo": true,
          "TT46cJa6TCzWR82cZ": true,
          "Geuj97jgkwfJyaP3T": true,
          "8NxHA7Qx5h37wa387": true,
          "oPA9kWXFrZuo2Aj8F": true,
          "crAuJnXtXq7Tjywhp": true,
          "GZCKvq4GaHwb9GCqY": ["QMbG7pisRtdGfjma6", "7fGdnWz5sRncKQh7E"],
          "QMbG7pisRtdGfjma6": true,
          "bX2HXrc53C646m6ma": true,
          "JDfJrm4AJoiYFdR8d": true,
          "WNiimPrcdBEocvzmY": true,
          "5L6MjW4Pej7cKF5cX": true,
          "sDxMERQt6HJpxLfSQ": true,
          "HkR6MasQen4LoW62K": true,
          "La47ciFabA8psvyf4": true,
          "9R9e6uFC3B45WzXwE": true,
          "Y3LcKy8euXpBrY7FP": ["zZP7g3zPC4mkzcmCR", "igvpvbZdbEhqtdzKt"],
          "zZP7g3zPC4mkzcmCR": true,
          "az8XMW5TBuJTokgNu": true,
          "LdtNrJmAg2Kpw22TT": true,
          "Q3vH2GdHCiF9Yefh8": true,
          "tCdzRTzGvjdoFrhBt": true,
          "Tbe6osLC7KCDyyyBc": ["Lnhh7cEvNarc5zHXp"],
          "y4pn9geTP4FLzgGba": true,
          "hXR5haj9MsSMNjqzD": true,
          "QsEww3PYySjjTBuL2": true,
          "6mspwAbAdwpRRJqju": ["2ZnRt3jBfwghNWoLt"],
          "yvxtKeeCMvuJJgtPe": true,
          "ptfY7WaXrPNgwajTA": true
        },
        "5qSBgeW226SkEEiCw": {
          "5qSBgeW226SkEEiCw": true,
          "y6pJo2pczdsNXBtRF": true
        },
        "DwmJB95RLJtwKESmm": {
          "DwmJB95RLJtwKESmm": true,
          "FpRXJNSPx4oC3o8bq": true,
          "NQw3sHPGKau2JLwJb": true,
          "ZdQWNXKjhJKgxEzYS": true,
          "rBCtJLZMknq8WhsYa": true,
          "aRcGpfgogeWdHphBZ": true,
          "TBhuTxy2NvmvhcMFy": true,
          "7dZYSzXrYhFzzwwnj": ["jHjpTrmERpcRwryhS", "SNeiFxCqXWEabL2bx"],
          "jHjpTrmERpcRwryhS": true,
          "fSxpEwyECRHMJmT2K": true,
          "6J7RLXd6aqg24kTZ3": true,
          "dmEgko6ihW5aKjhwR": true,
          "3Mf9eXh6ErWRgeZic": ["FviSChYFFHj9HdmZM", "ifLvP4wwQL48QQRoP"],
          "ZmbTvnprnwFsq6cri": true,
          "7uEh4bhnCMsbfBH2c": true,
          "umPczLmXgRWDXNJDM": true,
          "yenvNQbk4MMEn8ttL": true,
          "SNeiFxCqXWEabL2bx": true,
          "EqFWMEGZtsDdd5NTt": true,
          "dusgGeNugrhXbrJwX": true,
          "TXka2RhuNZNsnKd4J": true,
          "Wejbuqy8HDC4rzEgf": true,
          "t97vQywqqyXEGqzey": true,
          "eeMzeYjFoXsbm6bt3": true,
          "DjvAzjH9g3bpzrLu3": true,
          "ePLyLvPNJ6PKTXBMu": true,
          "rTvjH6ZYtkwpHmZqz": ["63Pmh2hu8fbecHDGy", "rvg6Q9cGtNKYauojk"],
          "ZGmeNKvvdjNDFC2fK": true,
          "u5F2djgq7NwRNWwQ5": true,
          "kq758BfDWaoEhKfNp": true,
          "nYcYpYZEdybMR6P7i": true,
          "xnrbnThCmQYivishu": true
        },
        "oidzEbLZr5n3Kfpht": {
          "oidzEbLZr5n3Kfpht": true,
          "vEcD6D5gMznkhWXtu": true,
          "KSSavTeLn7dyJe7ey": true,
          "KebJhWjLfYNjey7Ru": true,
          "uZWWzzBMYdBbZ5vsu": true,
          "c7WZ9H2tkDrChRRoH": true,
          "bdbrByuGJ23dbEiA2": true,
          "ronP4ys9kFZZmcvA2": true,
          "bYtBoLtoEgkGon5ja": true,
          "eFAvtebhMwh783Mwe": true,
          "hYLZxWLTesFk3HiMB": true,
          "7cHXsY9mySzFrfzq4": true,
          "zXEykruSuCARWwLSz": true,
          "i4haBJarh3XXhZYMS": true,
          "DKv4vXGbKsemi3Cfv": true,
          "wrb8SCEh7dnFCSW5k": true,
          "Pu33SugD3JBjkCRoa": true,
          "y4QNdKHgTRSabk8At": true,
          "gg3rhu4ijSJ6ozk3Z": true,
          "bQAn8T4NYmnP9piRk": true,
          "9xeCsvy8427S7dfSk": true,
          "BJJ2iZz4QdhvYQxAW": true,
          "7db65fGyLEJBjDd4q": true,
          "nsvxKv6wagrPWCEKy": true,
          "29c9WNFanQ6HpAaSE": true,
          "fmYgPGCK6nvg8dkbc": true,
          "zmE2WLPNLp7xPSpks": true,
          "QeHRsAfJXFj6X6LYN": true,
          "ExJr4Q6qqaQXRiAYu": true,
          "DM8fC2RHPStAaCLg6": true,
          "9RZAyEoAK7qt38TEA": true,
          "uC6sPYiofESP8r3TW": true,
          "BSCugZKQQTJpZZZpv": true
        },
        "JDfJrm4AJoiYFdR8d": {
          "JDfJrm4AJoiYFdR8d": true,
          "WNiimPrcdBEocvzmY": true,
          "5L6MjW4Pej7cKF5cX": true,
          "sDxMERQt6HJpxLfSQ": true,
          "HkR6MasQen4LoW62K": true,
          "La47ciFabA8psvyf4": true,
          "9R9e6uFC3B45WzXwE": true,
          "Y3LcKy8euXpBrY7FP": ["zZP7g3zPC4mkzcmCR", "igvpvbZdbEhqtdzKt"],
          "zZP7g3zPC4mkzcmCR": true,
          "az8XMW5TBuJTokgNu": true,
          "LdtNrJmAg2Kpw22TT": true,
          "Q3vH2GdHCiF9Yefh8": true,
          "tCdzRTzGvjdoFrhBt": true,
          "Tbe6osLC7KCDyyyBc": true,
          "Lnhh7cEvNarc5zHXp": true,
          "y4pn9geTP4FLzgGba": true,
          "hXR5haj9MsSMNjqzD": true,
          "QsEww3PYySjjTBuL2": true,
          "6mspwAbAdwpRRJqju": ["2ZnRt3jBfwghNWoLt"],
          "yvxtKeeCMvuJJgtPe": true,
          "ptfY7WaXrPNgwajTA": true
        },
        "gakdonSRP9MjvXxSR": {
          "gakdonSRP9MjvXxSR": true,
          "adHHPnQcxtmGF9CJw": true,
          "94bWbA4kEX6dB7KPa": true,
          "Z2wH4LvRz8W32MBZ2": true,
          "TT46cJa6TCzWR82cZ": true
        },
        "oPA9kWXFrZuo2Aj8F": {
          "oPA9kWXFrZuo2Aj8F": true,
          "crAuJnXtXq7Tjywhp": true,
          "GZCKvq4GaHwb9GCqY": true,
          "mZGN6ABvNNyNQTqXh": true,
          "NgwNjvxpbQNm2t97o": true
        },
        "2BGNyGtv9NKJQzqHK": {
          "2BGNyGtv9NKJQzqHK": [
            "J6eJiA2kesMe3T6XH",
            "EeKk8icEyLmPDZe8Z",
            "PrWSsDxhoAk2kL7M7",
            "SQTe8fQutXw8qqTRt",
            "AMR2Wvn2iX8ix7TgY"
          ],
          "EeKk8icEyLmPDZe8Z": true,
          "PrWSsDxhoAk2kL7M7": true,
          "SwE9TgKW6XAGQZ648": true,
          "SQTe8fQutXw8qqTRt": true,
          "537YHugWNjc42yKkf": true,
          "9xeq3PdsgQ4Ffybri": true,
          "3tXQga9S2bjmTFSLF": true,
          "e7jdZ2ty5bag372q8": true,
          "mYe56wDf6wPY2A7aR": true,
          "vsxMg35RaEq5Q8Zf4": true,
          "MygDyqqAHkCfTi82R": true,
          "i6Dq3bCkjgLuE9Ajc": true,
          "AMR2Wvn2iX8ix7TgY": true,
          "kjCAesh3mpi5afvEz": true,
          "zCFG6zfoPQfxngLHS": true,
          "5RZydTzy2swAFHTSp": ["ZfnsMKfqZ83Wn77iM"],
          "jK9e2eQ7vXuqPdnwf": ["eQZva237Pi9zn4Put"],
          "eQZva237Pi9zn4Put": true,
          "vB8GxyswkYRWJedsw": true,
          "dSWB7C69PMqA5eP7c": true,
          "iHP6a95oaPeoCdzT4": true,
          "MRkNJTArQrAXgR2Bq": true,
          "odSnwWbMM7J4pj8To": true,
          "oZSwhDtfav4HEhxni": true,
          "Bd9uB2wCDZeK4Ph3n": ["ysAoKN2EwNrnyR6cS"]
        },
        "pje3ZkbcR5YPaBuFW": {
          "pje3ZkbcR5YPaBuFW": true,
          "AWzpCxK8fL3J5LZyv": true,
          "kqRECQPSByNdxq5Hv": true,
          "2GtgSthFPr9CSuWqh": true,
          "Zbubp4u75zmwqQHru": true,
          "M8HJBeEXC9QgcTCEm": true,
          "CwTQ8JHCCRG65N97Y": true,
          "2Sz5bgyozjSyHp2ve": true,
          "jqiDGujQe6syP2se7": true,
          "xBvti4kLFyQz5M3xy": true,
          "BoPAfW7Zxoqgduyaf": true,
          "T7j27XTakQmXqQfCg": true,
          "XqNzcRHh543GcGQjH": true,
          "u8da9QHhNuonP5Muy": true,
          "tZme3ivBgoxdyGcCL": true,
          "y2AyGEq5Y3eKSEwGJ": true,
          "k722hG3kYBX2kqtyo": true
        },
        "Wjbm4ffactEqpdkHE": {
          "Wjbm4ffactEqpdkHE": true,
          "6CexCG2iqE2PMEtRW": true
        },
        "psgaNefTk3AzLZrQy": {
          "psgaNefTk3AzLZrQy": true,
          "QQBeF4Hrv6JE3cyt8": true,
          "JpBYeW7WTJWpttijM": true,
          "MBHovruoRjF7HQgGg": true,
          "zFFRp8gWsiCS5gaDp": true,
          "y8dxcLrd9j9T5HPmG": true
        },
        "h8o3FGjAeEzwtvFhA": {
          "h8o3FGjAeEzwtvFhA": true,
          "ELXKbjaKHC8MWqDZs": true
        },
        "hNs9nQFJrbpWBwuyA": {
          "hNs9nQFJrbpWBwuyA": true,
          "jvikZRjYYZhv7m6b7": true,
          "uiDjhksTCEcAiWSZs": true,
          "X5FxbYQBWPezPeSZ5": true,
          "AvRegPziRikrQM6W3": true,
          "8eBemG5YK38sRHXhm": true,
          "75xKAaowdWab6fKqQ": true,
          "GSbn6Csu443qFg93G": true,
          "zew47cEQeqMMB2bcJ": true,
          "b98sw6z38LXEak6TN": true,
          "DoYERnZEvRAwb5K7k": true,
          "yqfozrp7TDCks8qEz": true,
          "WqmRL5QfKbLgJnBcG": true,
          "WsQjmeDDt8ChMJhu7": true,
          "ns7wKhGrZGhDw2wKy": true,
          "tRBqZXZATRvrTaxY3": true,
          "rHfgzbConxaQcfxjv": true,
          "pXpZyDoDFCGMJtkmv": true,
          "6krNgoRRtYJZxbTRS": true,
          "ZkMjtphcZgheT2Ays": true,
          "ybT3hqA2rkw8vqLTJ": true,
          "9PMeYGeP4rXtkQXqD": true,
          "zbmotHXyYvGJ4Nhg6": true,
          "C5emsHWFBbRb4o3WY": true,
          "5HudRr9oZNqyLTE4i": true,
          "xiryow92gLRtuJuQs": true,
          "fPDhZZF9rQgMpwMWq": true,
          "QQCehTPkKkfMRM85s": true,
          "H9jgQEkdwEWJeTdJ6": true,
          "SZsgMvL9S95ANacGA": true,
          "wWAKJnJXfbLYvwqLy": true,
          "SmTJmvQ25AN3iLqBQ": true,
          "jW99FHofLoe9D6dHo": true,
          "zd699pEnQAEQzvS8R": true,
          "Dg7XJmdzpiWFPqyYT": true,
          "9GHNA4SnSNuXcKRTY": true,
          "nRf4LHpkgxywboefS": true
        },
        "tpyMbpMtWjvh8HApd": { "tpyMbpMtWjvh8HApd": true },
        "gX7R4wHk8GYnnDhrC": {
          "gX7R4wHk8GYnnDhrC": true,
          "qL6brqJs3mMQkGSGF": true
        },
        "F8ZNnM5A6Yxo28RgK": {
          "F8ZNnM5A6Yxo28RgK": true,
          "xPEc8Rh42yG2r7wk5": true,
          "aRGApsNwDzJ44sGCT": true,
          "HM9mzKWjzc2mJNEL7": [
            "oDWdDBNxPJjAjTd5p",
            "ek4E935LvX7uiyp7q",
            "Fx5bsKqT9C9rGzdJ2",
            "9LHBFNcW4JZ4JHC7A"
          ],
          "ek4E935LvX7uiyp7q": true,
          "w9LKRsHTNBXJhdYet": true,
          "6DBr2aoJLYujaNNTM": true,
          "L39NH3vhzpvDafHf5": true,
          "TdrTKRauvnbuNfXcW": true,
          "KP9k5saBRyk3cCxMW": true,
          "7ufW4fqL7bPsvNNMs": true,
          "r8RDGKQWALecSTa2F": true,
          "M7TvdiZt4vxCZd6h4": true,
          "tYNxq2jHo5PZ48beL": true,
          "HdoGzZgMiZTjDoERG": true,
          "PAqWc4r6FWpvcjq5B": true,
          "acEG95Bh3YwpjmNTv": true,
          "P3BgDNwwnZ9RBLc3c": true,
          "HR3LefzCsg3FFhebG": true,
          "fojqsLYMSe5rZpkEP": true,
          "i3KtddA2oiJaCmNBD": true,
          "BpyW26zNkwvgpfYxw": true,
          "y6XQLpciT6goJCL6S": true,
          "Lpx4uquvtAmYwp78P": true,
          "u6yDScWEDgF83jz2A": true,
          "cCPSKR6nWHEaavvo5": true,
          "Nn9AXTjZYdRtg4Rog": true,
          "gPNdCWEXMDq8GsdmQ": true,
          "NZKZHd8jieSABfJ24": true,
          "abhS5tZX46ycZuANF": true,
          "ZkpF7z7yL83TnoWbN": true,
          "9CywnoBTFiggFncik": true,
          "wzhn2iXscBNbeXiYt": true,
          "WNPrSXyiZBGWSjdwb": true,
          "NPFhgtaTKCPJasAKr": true,
          "qYvugJPiTnc6mpz3C": true,
          "BozdjhSL9rbEM7Cto": true,
          "xf7CAgnFBhxjwBtQ6": true,
          "rBYQXzSAx9zDXCDJX": true
        },
        "agKyrqMR64cSLKXXr": { "agKyrqMR64cSLKXXr": true },
        "zAp4fcga82T4orWa2": {
          "zAp4fcga82T4orWa2": true,
          "hQ5pXjuFokWCobwvK": true,
          "q2YiZo9Py3mPK7woF": true,
          "GHQgwFfyRFrcYwCEF": true
        },
        "jDtnTgaw99Y7FY79k": {
          "jDtnTgaw99Y7FY79k": true,
          "5BmBZd6sNdBZ9xc4E": true,
          "7a5E2WGRbh9JgQDp7": true,
          "cJ3HngnNHsBZF2CAZ": true,
          "3escXxPda58naXahx": true,
          "JLp2HiGFnJS3YbLuZ": true,
          "2btdLhD34RcQDnkHt": true,
          "eHExya79z4dYxH43z": true,
          "7sWLozdd5TxucRTXM": true
        },
        "MEBY2sbTnthiaNEAe": {
          "MEBY2sbTnthiaNEAe": true,
          "ML4hDKbunhHztnWFs": true,
          "eEqh4XjkaoEfJdm9h": true,
          "trji2AvQZLa7ZEAJa": true,
          "KszD5iXyWbdQA3vaw": true,
          "PpfmaWzWs7XooJtwm": true,
          "BjHu6wu66fj3gSzcw": true,
          "fELqsWd8WLEjzbAxu": true,
          "39mADuRqj8TSpakSG": true,
          "376Mx76egT55kyN3N": true,
          "ingmkuhhmegmyjvta": true,
          "ZtyMfHjFXnwkEqNct": true,
          "cGf9z7FHivJcvK6yA": true,
          "a4Dh7ahQaYoTo4NSS": true,
          "wvFob5bqx7kDnEAXF": true,
          "j9F8JYAk5T7YZCXPn": true,
          "pMXNdpBF24tHNcoFQ": true,
          "kZKgGTaBEBbs97mTp": true,
          "Qczzut92dK9w8x5cu": true,
          "eh2sz5LgWwuqiCpES": true,
          "7mhqZYBpDFKPeTxxC": true,
          "NLuErg8PejLxo5xH3": true,
          "C3t8j4C9YfWxLpwbt": true,
          "Zi8gFfq6DPA6QHf42": true,
          "hX7h4TbFgafPM4bbW": true
        },
        "tHfhuqv5dNkgLMQHb": {
          "tHfhuqv5dNkgLMQHb": true,
          "NFXN34CguJWxsNqW7": true,
          "ADPH2CdnXdGFkuHWG": true,
          "KSMpcMMgGpKWgjQZz": true,
          "Dx2crDr6LhJr7Sjds": true,
          "w3JLd2m5NkNnWL44S": true,
          "DwcSLGCGQ2apgvRHy": true
        },
        "dNEM5sn8hef5Xoe69": {
          "dNEM5sn8hef5Xoe69": true,
          "cEEjaLjf9ugvpGKAv": true
        },
        "F9FhyEMvzuuknEEok": {
          "F9FhyEMvzuuknEEok": true,
          "Qt6STW9sGHeiLqbNg": ["8xjWKf9Ktn8HzgTmR", "4f3bFFwFoj8BMyg73"],
          "8xjWKf9Ktn8HzgTmR": true,
          "2Z5MRWMTqCfTkpNbg": true,
          "4f3bFFwFoj8BMyg73": true,
          "TFLGxXmJLmZW5ZkjB": true,
          "orJLdgJcXMtsjWKyu": true,
          "ugzcCe2jPt33zERp5": true
        },
        "2RNFkgXk8f4JbAxNu": {
          "2RNFkgXk8f4JbAxNu": [
            "oFSRJtmjp3Z8wG48m",
            "nD3c5P5HzwscYxnb5",
            "rrsK9ZXo8it7fTiyK",
            "eC83eabc5kYEyi6Xy",
            "QYqtL3FiriNAhRGhr",
            "zb9ykLXYYEBmtmirX",
            "5cZxhW766fBHXQ43z",
            "K8t4cnBKqkq8NJb6X"
          ],
          "oFSRJtmjp3Z8wG48m": true,
          "ErWGzv3FkCcCpYhmG": true,
          "q5nLhBTkJsNnnHw2z": true,
          "nD3c5P5HzwscYxnb5": true
        },
        "75v84fDTbFEPcH92z": { "75v84fDTbFEPcH92z": true },
        "3ymEgABu45QHdfG8a": { "3ymEgABu45QHdfG8a": true },
        "FGrRLxyeqZkpFDAJv": {
          "FGrRLxyeqZkpFDAJv": true,
          "9jjYDttkJFbPMZW4j": true,
          "FKamckX7bhvsxKvZo": true,
          "JYpjzjDx8FuhbfgH5": true,
          "z76994aM4WtjjhjZL": true,
          "dFFpdTL7NthMGhz5o": true,
          "4nSepckWNEPm6Sq4d": true,
          "h8YNHPLEDiznoZ4u8": true
        },
        "mjTCbhpeijxbWPdJP": { "mjTCbhpeijxbWPdJP": true },
        "MF6bs2nYaNLcvF4RF": {
          "MF6bs2nYaNLcvF4RF": true,
          "mMhBxSMm7cMmqjSRi": true,
          "F4GbqxR8wWEuFK2Z3": true,
          "Qsdg5xR2n4LZ8bM9o": true,
          "pWo3krcaLcAn6PaGu": true,
          "f7njHSMZJCZdHHfbR": true,
          "cPg2SXsZtYmFvQ3kX": true,
          "a7J299o4GiEute9zK": true,
          "xepiKGmSLFRAaEoGM": true,
          "e6QcLN54YLarZC8jw": true,
          "EpjG56Xot8fTMzMzB": true,
          "eQz4cgiuGd8GL4kcu": true,
          "TXni2K5RAdvMrpPpw": true
        },
        "4pMWeYaxpRBNHcemT": { "4pMWeYaxpRBNHcemT": true },
        "jFhuGQDdZz8kFj8Py": {
          "jFhuGQDdZz8kFj8Py": true,
          "AFA7phR8QdbJCn9aS": true,
          "nzXA4dEqcX5oNJoGB": true
        },
        "4WPsueJxuKWjWbqNA": { "4WPsueJxuKWjWbqNA": true },
        "uZcioW7e4J4qdBuaE": { "uZcioW7e4J4qdBuaE": true },
        "74FiXib3nYwk7d8pP": {
          "74FiXib3nYwk7d8pP": [
            "brDtCddgH7WYYk2J3",
            "cLHiE3kDp7bozgivW",
            "R2LiBozW8cFjfK9xA",
            "MEBY2sbTnthiaNEAe"
          ],
          "eEqh4XjkaoEfJdm9h": ["hTdb96tYGMXfY3S4C"]
        },
        "AQiuxgtkvzyaZZmuF": {
          "AQiuxgtkvzyaZZmuF": true,
          "hmt3mj6aTnZhiBcRb": true
        },
        "NRMW2X2SAKWp7P48r": { "NRMW2X2SAKWp7P48r": true },
        "dBFsugkdwHiJA4HQh": {
          "dBFsugkdwHiJA4HQh": true,
          "rk2bqPWpXG8CBQh7w": true
        },
        "ifjJBfgrrH6weFYhG": {
          "ifjJBfgrrH6weFYhG": true,
          "DeugfY8jXaRHNmwzG": true,
          "Jeg6LbMhmuy7efJ8Y": true,
          "HyEJkxagwivyAcxGk": true,
          "fihL4K4YQJi7xoZZ9": true,
          "4p7ZKAkuxyNjxmg6Z": true,
          "JrKtoxJpb2oYpGTyL": true
        },
        "7NNKB5BnpGSZJMzvD": {
          "7NNKB5BnpGSZJMzvD": true,
          "M6G3ZkwZWANnxKqGd": true,
          "kty5fazsuhgdExc2B": true,
          "Ro9uX62v8N2BDgcyq": true,
          "TPyHnbgQxQGGDtZNW": true,
          "jxHPJPXFy6dGdvvW8": true,
          "ZFKJz37wXg86zbCvw": true,
          "fShxGMtCHrdDiFPwY": true,
          "p3RAXwWmkApr28N8w": true
        },
        "4xjiseZD72yPdeArX": {
          "4xjiseZD72yPdeArX": true,
          "aEw8TScbff56HSbJd": true,
          "B26SMDEcmh483nbqw": true,
          "s4dv5sg3p9sxvco2f": true,
          "pPDrpcJjTJyxtTncp": true,
          "b6pBhmqk83uP7Xs8X": true,
          "AJ9RNgucqvPhe9nWT": true,
          "HD7AQhEBiPizkA5sa": true
        },
        "H5esqxiqR3MkD2QuC": {
          "H5esqxiqR3MkD2QuC": true,
          "FgLCeAqGz6bJ3TrSy": true,
          "yiPDBD6FDvQrYtpNM": true,
          "MCR98AgduANTAFehA": true,
          "PtucH4LAFfBCDjhd3": true,
          "Scvhtt7iptMXxhPoK": true,
          "RRpGuaFzkjKzJGy8b": true
        },
        "fj2R77uvGLjHrxkyq": {
          "fj2R77uvGLjHrxkyq": true,
          "JBF9WFChuvXJgtMyZ": true,
          "D3PqY2qouMefKgFuY": true,
          "X3AtwbQ8BJJnRCexd": true,
          "w57PnwjmdPTxqg5LG": true,
          "DpySaX5ikn3eAr53Z": true,
          "o2XYBuqaFk5CoFKqX": true,
          "5iEZeuJK8XaCogSu9": true,
          "ZuKPQ8qLcDKRMahiB": true,
          "zvGtZWCqNrPhvMkLt": true
        },
        "ryrJfNS5X6pdtAp8Y": {
          "ryrJfNS5X6pdtAp8Y": true,
          "YtvH5zwuD6mdG2jQb": true,
          "BAGoSxu3u8WN5anT3": true,
          "cu4wF3sGKdQwjJZ5T": true,
          "Cmg2qJjz5NbQ2eHAi": true,
          "k7WqQPJtgnHQxz4aw": ["Z8XR8DmkrjhweEKZM"],
          "Z8XR8DmkrjhweEKZM": true,
          "g4QtAdnvjTry6qpL2": true,
          "dcfSWDQYBhvheS4PE": true,
          "mMPaCP4T3wePvJSNb": true
        },
        "3uzZLMpijF4Hz2tHP": {
          "3uzZLMpijF4Hz2tHP": true,
          "2J6Wzikn9qbitTZL2": true,
          "26e6AnXBqpqAGvtw2": true,
          "adGdL5BkMgbJL83nh": true,
          "GTfckx2dZh8DX2vKR": true,
          "qNdgwGZFCTesSFQYw": true
        },
        "GKCaHWkD7gBz3dv4W": {
          "GKCaHWkD7gBz3dv4W": true,
          "xWBLm4swENwByKruJ": true,
          "XYAt2ctuL3E3cE25o": true
        },
        "ubpqzZMJqAR9wbMaP": {
          "ubpqzZMJqAR9wbMaP": true,
          "yvNnNK8KmZnyiLRc4": true,
          "8cj3Zh5aeL7tGxfam": ["po2DnYzTYeuJH2Nqs"],
          "vFLQbbpvMSSnacmjh": true,
          "Z7wEN7L6hPy3BK5XX": true,
          "8jw4QL6eYr5Wyewm3": true,
          "kNSQQyfrbMkYNmRYa": true,
          "E8CuFCqJwnr6mNQte": true,
          "xw9NYRFFX8Hnxv4PC": true,
          "Biq4r3BJhASuN5s6y": true,
          "m7RkWesfQnfmAbdM9": true,
          "ei69XXbFhkZ3KM4sM": true
        },
        "5XCEc2DB4WNvKiSPk": {
          "5XCEc2DB4WNvKiSPk": true,
          "BKFRGyeCFNYCawKHm": true,
          "yBpMBeiJCysfhKcng": true
        },
        "to3nwxqbbKyFLuDbb": { "to3nwxqbbKyFLuDbb": true },
        "C6fgeBd99SMNCruuh": {
          "C6fgeBd99SMNCruuh": true,
          "PAxNj5bePSrvQQAuZ": true,
          "Nwc2yRgWWN8Xn6Cyv": true,
          "ZjszquFwMsqwAuAht": true
        },
        "Y3Ec8YJbD2d25G5ne": {
          "Y3Ec8YJbD2d25G5ne": true,
          "RrQMKFQLtxptpCoB7": true,
          "vagy3PNTPfCaqpGkT": true,
          "KtRbcQezaQkeNCfZF": true,
          "cvakxwb5ikEKY6Mpk": true
        },
        "bdJPpw8AWaWW9crT9": {},
        "kFHMP3aJ7imL2rCpm": {
          "kFHMP3aJ7imL2rCpm": true,
          "AMoz4SWYJW9fWRfSY": true,
          "aPW29vtDJhHHkR92p": true,
          "cqxw2be8DCWDxQMfh": true,
          "ztpcmJD9GxNDnsaRr": true
        },
        "b5wX66hCeuSxdsn2G": {
          "b5wX66hCeuSxdsn2G": true,
          "NToFYthkFPrFwPiSX": true,
          "w89RtXtfJDcGdgc7m": true,
          "XPFmPNvsQWaPQnS62": true,
          "gn6P2Ep9q4aFZmePE": true
        },
        "tLWwcAGswZXwh83AA": {
          "tLWwcAGswZXwh83AA": true,
          "EnvvaDqaGToPixqgD": true,
          "JBzH6B5dPcKf5BAc9": true,
          "hoMsMw3o8atsjP2uX": true,
          "5FBnfau4noA2t8zzh": true,
          "gHMS7btYTiZNurcs3": true,
          "22qzFYW4Lx6uHxkxr": true,
          "PWAGtC675hZ6JC7no": true
        },
        "NFz5AfLYTu8x8GjZt": {
          "NFz5AfLYTu8x8GjZt": true,
          "fB7WvBzWnT3jxYMPR": true,
          "4E3F6RMyx3JGdiLN4": true
        },
        "5wSWjRA4Gtqcju8CS": {
          "5wSWjRA4Gtqcju8CS": true,
          "isNFg8wtjrzF53KyR": true,
          "zxjZZqQ7DEc5oq2jA": true
        },
        "YKCab9gTesKppmX7a": {
          "YKCab9gTesKppmX7a": true,
          "2bnX8hrsqQ8sAcBpw": true,
          "ea82FBxqGLA7GTkpf": true,
          "QHisqTqxp8gpX28TL": true,
          "kx9C9fpwjvDPsJYcB": true,
          "vep7nwpCBa5kaLCoh": true,
          "utoxDbpcoW5tcBnhZ": true,
          "krhJZhhGoSrFuxsyd": true,
          "enXGAcvn5G3kmPYr3": true,
          "vJtTJ7e53nTJD8Ngd": true,
          "QanBiToRNTu5tKToY": true,
          "LybjnJgnsXYRDpfcQ": true,
          "YWLjoGFyT2zrcyguF": true
        },
        "Ds3veYLZtZsuFvFac": {
          "Ds3veYLZtZsuFvFac": true,
          "rxekRFhoTFXWFyCLL": true,
          "n6og9thzG7si8mqtH": true
        },
        "8tzd6cjyGSfD9JAxA": {
          "8tzd6cjyGSfD9JAxA": true,
          "WABREwqQDdRfF8XJr": true,
          "mTwPpiMdAu2ohQJqD": true
        },
        "4stKzzK5eWpfDE2wZ": {
          "4stKzzK5eWpfDE2wZ": true,
          "iKDu5n4sq7eGrRcYz": true
        },
        "9A7emnhEDCZb6uAhg": { "9A7emnhEDCZb6uAhg": true },
        "fsWSGYWCtxdiQcD2T": {
          "fsWSGYWCtxdiQcD2T": true,
          "Pqbjmo2wdYfmSrXHZ": ["zmPcrwo8F748BpA5i", "FjDkgwiGaMPGmu3ju"],
          "XRGSkYYosTaNawans": true,
          "m5YwpkGE9tqGgqQNY": true,
          "rw5ZvzzJGvMK95ezJ": true,
          "npFQ5Mwq4e7dkxb6j": true
        },
        "G887bqycfCYCmncMh": {
          "G887bqycfCYCmncMh": true,
          "pFCETDs5vSbPinDYv": true,
          "7abKTKbXsYZ7d5Fyo": true,
          "daM2ABZwEYf7PWHCP": true,
          "JNu2cE9XfKcDL7wvp": true,
          "4bsKKWEYnbcGDs7tR": true,
          "2XjsFnGsxuNYnrZst": true,
          "wjBLSPMKh7qjourFp": true,
          "SgRf7itswpQTcj6dn": true
        },
        "ADocZFsPRzLJojXyK": { "ADocZFsPRzLJojXyK": true },
        "v22cCgLz9udvPcmnD": {
          "v22cCgLz9udvPcmnD": [
            "L39NH3vhzpvDafHf5",
            "acEG95Bh3YwpjmNTv",
            "Lpx4uquvtAmYwp78P"
          ],
          "L39NH3vhzpvDafHf5": true,
          "TdrTKRauvnbuNfXcW": true,
          "KP9k5saBRyk3cCxMW": true,
          "7ufW4fqL7bPsvNNMs": true,
          "r8RDGKQWALecSTa2F": ["PFH6TizvWX32XwZ3f", "ionGAqdoAreBi5kYy"],
          "M7TvdiZt4vxCZd6h4": true,
          "tYNxq2jHo5PZ48beL": true,
          "HdoGzZgMiZTjDoERG": true,
          "PAqWc4r6FWpvcjq5B": true,
          "acEG95Bh3YwpjmNTv": true,
          "P3BgDNwwnZ9RBLc3c": true,
          "HR3LefzCsg3FFhebG": true,
          "fojqsLYMSe5rZpkEP": true,
          "i3KtddA2oiJaCmNBD": true,
          "BpyW26zNkwvgpfYxw": true,
          "y6XQLpciT6goJCL6S": true,
          "Lpx4uquvtAmYwp78P": true,
          "u6yDScWEDgF83jz2A": true,
          "cCPSKR6nWHEaavvo5": true,
          "Nn9AXTjZYdRtg4Rog": true,
          "gPNdCWEXMDq8GsdmQ": true,
          "NZKZHd8jieSABfJ24": true,
          "abhS5tZX46ycZuANF": true
        },
        "nzbPNgbhQpEXmKBX8": { "nzbPNgbhQpEXmKBX8": true },
        "5tsrundP6Jdv9s3MM": {
          "5tsrundP6Jdv9s3MM": true,
          "PnzEqr2EcwK37Xpad": true,
          "iHqGZj8FX5e8CBw7j": true,
          "tnRXJYdZetvKWgPGP": true,
          "ZqXXcteaiqvnzJKtS": true
        },
        "89QJJw6Kuzoj2XzB9": { "89QJJw6Kuzoj2XzB9": true },
        "mzepyt42Zah84Dqbn": {
          "mzepyt42Zah84Dqbn": true,
          "L9j5FE6yjPyzFvPQN": true
        },
        "sjyH4kZjpqSoGHfZv": {
          "sjyH4kZjpqSoGHfZv": true,
          "eRAZr72wLYjdnuJjp": true
        },
        "pH7dPsot5A475ze5G": {
          "pH7dPsot5A475ze5G": true,
          "v2NXwnxhNQrER2mWz": true,
          "BsZz2BS2ZMFMxuWxo": true,
          "TB8qTSJ6FZasvgzoP": true,
          "Z3iL2NSdtBHxCjJd7": true
        },
        "Exc4NBcHsfv2Cfobh": {
          "Exc4NBcHsfv2Cfobh": true,
          "uRwSCoarQcjs4JwEX": true
        },
        "wR4tC9t5Bu55jb93Q": {
          "wR4tC9t5Bu55jb93Q": ["w4zj9kNBbG3nF8PJn"],
          "H2v9zgzyw9oSqtbBQ": true
        },
        "PEBfXrMQyzjAaDSWp": {
          "PEBfXrMQyzjAaDSWp": true,
          "NLTPKCPeCLRkz3wX9": true,
          "QngBPk9kwoTGt7GGo": true,
          "hnmkWuiY7rJW3bSev": true,
          "jTxYrzNaKRuyXWt9j": true
        },
        "GRZhZA3s4apLEPzyQ": {
          "GRZhZA3s4apLEPzyQ": true,
          "hkMAgN75E7b4Xn4Sr": ["CrSpzxieQgGKTtB4d", "3ShduFtxm5nEBf7Yf"]
        },
        "LijnXivBHBgZdaWMp": {
          "LijnXivBHBgZdaWMp": true,
          "tPsgwN7zyzdD7neLG": true,
          "rb39ap2KdJMD6MYqA": true,
          "uQ3n92vmhyB3aci24": true
        },
        "ESWXujh6YB7Rv8eL5": {
          "ESWXujh6YB7Rv8eL5": true,
          "BEQgN9EfEnBHJnx6S": true,
          "zZfDvkqAgLjRrgqAN": true,
          "YaQ3Mbh5EFGj5TGCr": true,
          "ebEm5Xc6uF4tnCZKL": true,
          "72o55GoE7N9FfThxo": true,
          "AM7DDuHyhqcsAZZHJ": true
        },
        "rrxfsKjKjwv6E2N22": { "rrxfsKjKjwv6E2N22": true },
        "Br9oJFZ3eaAyPRGrW": {
          "Br9oJFZ3eaAyPRGrW": true,
          "7kFdiPK29gu4QuSBf": true
        },
        "rinuEhRrkx4xwJAXx": {
          "rinuEhRrkx4xwJAXx": true,
          "ZLaRJbchd2ZTG3hmn": true
        },
        "mWGAe9sELNZswg4TC": {
          "mWGAe9sELNZswg4TC": true,
          "HmJfHo4gcbuEkNPrx": true,
          "yt3fo7q3cbzxreynK": true,
          "3oKSqXeorXYWiYmbr": true,
          "BmfJLsPDSkj8Qpopj": true,
          "9Nzd32AW6kiybHRyn": true
        },
        "dxsXhFpCBaAm6FFYv": {
          "dxsXhFpCBaAm6FFYv": true,
          "TGd9Sb86vG94x2tS6": true,
          "ptrBP5fC6veBoJSMd": true
        },
        "pexPF84p9K3tWTPTS": { "pexPF84p9K3tWTPTS": true },
        "Mt24pzAC7RBxsvB4H": {
          "Mt24pzAC7RBxsvB4H": true,
          "32X3xsnMSX9xHMz9x": true,
          "igywq4hFBbtvnPPWN": true
        },
        "Wzm6aRb6r82BZS8hf": { "Wzm6aRb6r82BZS8hf": true },
        "7KCdeAgQyNXsdSHjg": {
          "7KCdeAgQyNXsdSHjg": true,
          "6veuKACqfoNCfYygc": true
        },
        "NkNhb3mZxJDkvtNo8": { "NkNhb3mZxJDkvtNo8": true },
        "Qd6BFH3SvrJzLhjmW": {
          "Qd6BFH3SvrJzLhjmW": true,
          "LPQG6qPLzffe74pmF": true
        },
        "bXGaCWqZvygcT6jgb": { "bXGaCWqZvygcT6jgb": true },
        "SCTBe7XHEAGakcCp6": {
          "SCTBe7XHEAGakcCp6": true,
          "pmytEPYiTRGZB9Shw": true,
          "R3WKdSPErMbSbT84H": true,
          "Jyx35a4AbcGTgGn6Q": true,
          "3oLvakhFaZT7WJHEH": true,
          "6NXCJJjn9kdEtgeSo": true,
          "PxizrjQy4E9dBEGcy": true
        },
        "KaR9Sy58RczmHTjzK": { "KaR9Sy58RczmHTjzK": true },
        "t64QrpM7YG6YF8xmW": {
          "t64QrpM7YG6YF8xmW": true,
          "GYnkhyX7HqmhEynEv": true,
          "e2ftLRqbHNBe9u59Z": true,
          "xzGXimJETSm5NEYPF": true,
          "8dNMe6mXKaEP9Ned6": true
        },
        "mSfa7Z4qP3SLPkwLu": { "mSfa7Z4qP3SLPkwLu": true },
        "JTCN8tBPirpy9BK37": { "JTCN8tBPirpy9BK37": true },
        "Y3WDTznHvYnqe6Ff3": { "Y3WDTznHvYnqe6Ff3": true },
        "NicHBbdxbZeToL8oX": { "NicHBbdxbZeToL8oX": true },
        "wGTefqmncJi64Cvjq": {
          "wGTefqmncJi64Cvjq": true,
          "S2vZ298WX9qKFNg3T": true
        },
        "hbbx66DZ3mQ7SZTWj": {
          "hbbx66DZ3mQ7SZTWj": true,
          "e784otvkfxiQG7WBQ": true
        },
        "CkmLcDySECqmNE5bY": { "CkmLcDySECqmNE5bY": true },
        "XShm5takGDyvkas27": {
          "XShm5takGDyvkas27": true,
          "LN4zLGTqkhPDmjEHH": true,
          "JNZ4qxh2MShLJkZoa": true,
          "dkhdxb2Zk2Y4sZrJM": true,
          "qxY2RHfT5QTpiw9WE": true,
          "Yis7djEwH3S4yf5MH": true,
          "5Rz73KJmRTqGe4bDv": true
        },
        "4G4jMXnuTF9tgMuH3": { "4G4jMXnuTF9tgMuH3": true },
        "omCRXahioMTuX69kd": {
          "omCRXahioMTuX69kd": true,
          "e92R4WcyJewkNpJmu": ["t64QrpM7YG6YF8xmW"],
          "SCTBe7XHEAGakcCp6": ["Qd6BFH3SvrJzLhjmW"],
          "AKPM6huhtjscg3pKT": ["JHFMponJrdL2DhcZJ"]
        },
        "rWcAt5WgKtpziPuDc": {
          "rWcAt5WgKtpziPuDc": true,
          "qdnz8hmyFrPL9nNP5": true
        },
        "z2wXbdvdZpGF9rouZ": {
          "z2wXbdvdZpGF9rouZ": true,
          "v3mYbgv6qemssGDWA": true,
          "q2zJiiKCMmjdzkp3a": true,
          "qZRZpEeKKZMvCPZtw": true,
          "KLf4iQBQBJ34eCCjZ": true
        },
        "9LFtb56ZygeCRiSJ6": {
          "9LFtb56ZygeCRiSJ6": true,
          "wR4tC9t5Bu55jb93Q": ["w4zj9kNBbG3nF8PJn"]
        },
        "mDkEPZJF7KYAHZLje": {
          "mDkEPZJF7KYAHZLje": true,
          "f8HSnzHhJAHApZkFA": true,
          "Bibe9KmuSfMkKK68E": true,
          "uLD7BZwjqfDateSpv": true,
          "jp7v7BwjYsaPxJACZ": true,
          "y5hFD38xf2fcXxRup": true,
          "H5Cmy6FwRRqez2G9h": true,
          "8beEDK3gMvivxf4m5": true,
          "2Th3Qvp64zAFRbFsF": true,
          "PnQWKcku7YrZmJ3Sf": true,
          "zcr3ZfFY9Nsgj9ZLx": true,
          "a46qSZRYZYQuDeLkM": true,
          "tWPRJ6aFh9zbkyGdr": true,
          "3PP7jeT7aCmDX2NpM": true,
          "KXwWbFaBrRKGEvXKA": true,
          "MAGWM9upGer4ka8MW": true,
          "u7KY5Zu5zpFDmLnwt": true,
          "F46ayoC5CmYX3tLoq": true,
          "mHGY2TCDo2JSaiG89": true,
          "KJkP9DXBcNTu4tTD3": true,
          "aY9wcaszWBxEPokGx": true,
          "WyStTjbaM6ZkZFrC5": true,
          "zmRWhwPjSbEteLfgF": true,
          "K9b2aH72iSgoiof8X": true,
          "GXTRxo8zvCFWRkJXZ": true,
          "8NbSBtLCdLqGEaoQR": true,
          "dycP6BXD87KTTsf3q": true,
          "r6sg9s97HJy4hYCBZ": true,
          "thGiuWcXaYqvCtJ2u": true,
          "xwA92J7jodKDK8wF6": true,
          "QAc7Q5uzRCbf84YNZ": true,
          "PCMb9ChupWnj842Qu": true,
          "biumHMpfXMgxnenX5": true,
          "7e6aYvr29ubb8CWRF": true,
          "bq2JfWq4EqnjXrDXb": true,
          "RcDD7ptiymK7xT5Qs": true
        },
        "ieNmyLyjJ3vphWttz": {
          "ieNmyLyjJ3vphWttz": true,
          "zv95xQiRxFtddM4dg": true,
          "KPSho2oHAx2Lhb9mX": true
        },
        "ymFsaCddsw8bRGns3": {
          "ymFsaCddsw8bRGns3": true,
          "qc4GnuaNX4QXX6T4k": true,
          "38uafNBYyKPd7rpNS": true
        },
        "gfoaDXrJa2a2qzjzp": {
          "gfoaDXrJa2a2qzjzp": [
            "gihXdeuiBkAzTWJeQ",
            "4wJDAZSfgssqayEJ2",
            "HgrkCayiekKWpLgoh",
            "EuXc7hhcptkbdKjfz",
            "b5wX66hCeuSxdsn2G",
            "u7TfSzuW3XFSNZuDv",
            "3we9d4DfhE6RFzQDn",
            "ymFsaCddsw8bRGns3",
            "bdJPpw8AWaWW9crT9",
            "3h346Yny9LWHPJuL2",
            "Y3Ec8YJbD2d25G5ne",
            "uofeehYpTDLYTipFS"
          ],
          "gihXdeuiBkAzTWJeQ": true,
          "ivHzMmNiQXPyySbKx": true,
          "XLRbm42WHEv45xoJC": true,
          "8pA65wQ6fEYfKEA92": true,
          "CiPPZf2K6Q8TRTJTp": true,
          "HgrkCayiekKWpLgoh": true,
          "EuXc7hhcptkbdKjfz": true
        },
        "i7RyjJ9m94LgRhPuh": {
          "i7RyjJ9m94LgRhPuh": true,
          "FTWuGycTrwJ2L3boz": true,
          "rGhFcpaeA2ogcatwz": true,
          "Wrvk5nHCJQtPZnMqh": true,
          "pGn866uPXNRSyQryi": true,
          "QEA56Gyq3xqXojA5y": true,
          "hw2rFSj3xXsMMdzwj": true,
          "PMLt5JrD67RnLJnrN": true,
          "cWFSKHBrqioPGG5oA": true,
          "YAAD6nfQ8SwnQmMTs": true,
          "jwEg4fsX2z22QufLf": true,
          "vy8Npo7D3SfXYL9zA": true,
          "at2N5AEa9Dt2cJS7J": true,
          "kAJpYPHqGgJNxR5MR": ["tuDTHPAfAsdd53o2S"]
        },
        "Bd3nky2oGJnNK4xLz": {
          "omCRXahioMTuX69kd": ["SCTBe7XHEAGakcCp6"],
          "SCTBe7XHEAGakcCp6": ["7KCdeAgQyNXsdSHjg"]
        },
        "PR6QXQ7XD2g3PmTaF": {
          "PR6QXQ7XD2g3PmTaF": ["6sZ3Ptv8fnfRWsFhc", "EZbR6AeZ7hiiJjqQS"],
          "6sZ3Ptv8fnfRWsFhc": ["w3MANuj8P9aC4tGAC"],
          "w3MANuj8P9aC4tGAC": [
            "dPa3bM4zAjTr8p7WH",
            "bdoZ3sprp8AtB97p8",
            "HJTTWX5zPjGHY9RR9",
            "HiTNz89FD94BrHop7"
          ],
          "dPa3bM4zAjTr8p7WH": true,
          "HiTNz89FD94BrHop7": ["TWGKpQ8B4qihNRR2w"],
          "TWGKpQ8B4qihNRR2w": true,
          "rdRvbWb3ejQk3QaYP": ["idRv5chf7fgwh4K7Z", "2NZEd97o6JwB3LBgX"],
          "idRv5chf7fgwh4K7Z": true,
          "g6P4AFJ8CMzg2pZNH": true,
          "Wu5f3mxgoyDWQxXq4": ["HztCWwXP4SuCGMYRo"],
          "LjTSppuoGQ5BttKSP": true,
          "emRwwMmkAutYnpRwJ": true,
          "hwyLbFJoN6oqydNWw": true,
          "CMM3zE4dKKQJZizzs": true,
          "u6KrcLjLfRmS57ZpC": ["FqnBvgZGDyBFhgPSp", "Z5fn8494eQXKcyGY4"],
          "Z5fn8494eQXKcyGY4": true,
          "ntDKKcKNQGMmTs8wG": true,
          "7MdGQmbFoh9xpCPTy": [
            "ygphzmh7qYAjMwdE2",
            "vXruBR4r3Cw3jJfgH",
            "eDDSxHaNGSgjmzCTy"
          ],
          "Yue4shz8R3jWQzhBK": ["jR7tnRj4aTG5ScBNS", "agaGKMWRMxM8qn8RF"],
          "aSKkbvSGsQcfZpvhY": true,
          "7wBQoWFxRhAx8ovo8": ["fPj45Cfa993i58rzh"],
          "NpG87XDBM7SDNbfEF": ["8uh7anmAu7Lg7gPzt", "7DpYgXv6P5n3rchSb"],
          "8uh7anmAu7Lg7gPzt": ["bDz8xKuaMZohGbjtd"],
          "ygphzmh7qYAjMwdE2": ["BkuRQ2NJ4nQPqckv3", "iMm5X2tPWmMSqamor"],
          "BkuRQ2NJ4nQPqckv3": ["tTpvtFHKFFBc2LeMH"],
          "tTpvtFHKFFBc2LeMH": true,
          "h7BwxH3n7u7uhWctj": true,
          "5ZKat6Xq3mL9uwfMK": true,
          "5Sd9ERjGXPgb2Bjph": true,
          "vXruBR4r3Cw3jJfgH": true,
          "eSHKKN2apXy6YbvzF": true,
          "KCzyfwkzPGwqq7H5K": true,
          "f9edb4LZPm4N573vP": true,
          "3xzDv2xQw43Eq28MD": true,
          "crBGrEpjS3G64S6Cs": true,
          "Gv2WvgWopnxkySAPd": true,
          "nL2TZpt6tgeTLexha": true,
          "QhwXuTGe6X9DuWMYd": true,
          "Fmp7EydF2zBfWhy4t": true,
          "AqwAz2zMrcNai4GMN": true,
          "TMvGz2X8aN6CwwH4c": true,
          "gbcghcsyDSCoNHMrz": true,
          "rcKHGtGBuax5dTHR7": true,
          "2NZ6un7MEF22ZzRHu": true,
          "Bh8uWYvX6mYh6T6xH": true,
          "M7La8Wc9QKAhGLWg6": true,
          "8iBW5TDoqtsA9Sm7a": true,
          "rNtHPnpfRoMGTLSom": true,
          "9WAfGK9NTqAzJkrcv": true,
          "KsaKPzo67xE9JZhwA": true,
          "2wHGnX9Cw3eHG8hbN": true,
          "4DnwiTZ7huE2PeWmm": true,
          "gnAA9nZNG3qDb3Jw6": true,
          "2AekE58ZRYnGjhNDH": [
            "GPEtb55Co63Bnm4K3",
            "hup7zH4jDYfY4TdCN",
            "AubGR9gvmG2sf8p3e"
          ],
          "GPEtb55Co63Bnm4K3": true,
          "zPjysLjjRcaRedLHj": true,
          "3TzGWnaM2vHmoLZx4": true,
          "AqijG8PYurM5uM3mH": true,
          "aWHFs6C35yQ4hLHkv": ["Mqc2KewyeF5XDyWSd", "ofu8QsRXSy2FHayZi"],
          "igdcs2QERow5jmMYr": true,
          "wTuRzLsTvMvCEA9eW": true,
          "hbtavw6AZ7RSymRQM": true,
          "eDDSxHaNGSgjmzCTy": true,
          "6Rfd9AeNFeC36SXsf": true,
          "ChEYvzcMLnTHztLkq": ["AacHcWQdJmT6sw8Nu"]
        },
        "L39NH3vhzpvDafHf5": {},
        "ogZoRz4PHaMJ6C6AX": {
          "ogZoRz4PHaMJ6C6AX": true,
          "5moKBZuWn5E5kadkb": true,
          "mfZtwKcQJhKfXjymA": true,
          "jnurDSTMfNYL99NGZ": true
        },
        "6ERdmyzDi2vQobG6F": {
          "6ERdmyzDi2vQobG6F": true,
          "9nTJNzTgJNEKELjh4": ["oigNHZq4f4ccihiXh"]
        },
        "kmQtPPr4TsRwXcKsn": {
          "kmQtPPr4TsRwXcKsn": true,
          "jp7v7BwjYsaPxJACZ": true
        },
        "7G4isDLaTAkt3fxyH": {
          "7G4isDLaTAkt3fxyH": true,
          "4Ehtbj6gXdkxPKSdu": true,
          "bZFSffoWWBcG4b4z7": true,
          "JuAhxjjRWyMMtp8WZ": true
        },
        "Z39RDuJCMzaWFn7Si": {
          "Z39RDuJCMzaWFn7Si": true,
          "tdpktXBGdvstMQZgh": ["QngBPk9kwoTGt7GGo"]
        }
      },
      "enableBackSR": true,
      "efc": false,
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
      "typeParents": ["JKCnZKdQJbwFwWRfP"],
      "excludedTypeParents": [],
      "rsp": ["4LMrSh26z3n56XmTT", "YdakJ8sdsQrNdCQh3"],
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
      "key": ["Computer Science"],
      "owner": "local-iKhHKzSKkJiQy2yNb",
      "children": [
        "vura2EvrbTBkFpmCZ",
        "hv8jAcEzeo7S3XYiR",
        "R7NhtdZvtzrNu758p",
        "BsZdDi99oMDRntube",
        "4KemvP8XBWfD9EZRG",
        "v8gQTKg8EzfY5Em7G",
        "zcfDANo3FjTKzWEjG"
      ],
      "subBlocks": [
        "RFyRibLFDiGD7WfBB",
        "vura2EvrbTBkFpmCZ",
        "zcfDANo3FjTKzWEjG",
        "4KemvP8XBWfD9EZRG",
        "hv8jAcEzeo7S3XYiR",
        "v8gQTKg8EzfY5Em7G",
        "BsZdDi99oMDRntube",
        "mQZfSZEooySezTRLx",
        "tcA5czGzKYf8CrZjK"
      ],
      "portalsIn": [
        "xKtzB6n8qH75MCdvG",
        "ArQjAYDjZnCXA5Gg8",
        "3jHkp7DWKjPcfJgaH",
        "NDDe8abzjQDEh4Mfh",
        "4R5mGydANF24fWYBR",
        "icZ68ojpLue2g8YPa",
        "D5ncRhCCtX96nhdGJ",
        "L5m6eAGGjcXBAgigq",
        "JPCmoLY4xgRMH7nWq"
      ],
      "createdAt": 1657109974880,
      "n": 1,
      "u": 1686079953478,
      "_id": "bcxqhqezdr3iRjhNq",
      "srcRemId": "pnp5e7Fpax6xph8PQ",
      "srcRemC": "a/fakeImportArticle0.4068383445247259",
      "docUpdated": 1686078418436,
      "subBlocks,prev": [],
      "children,prev": [],
      "portalsIn,prev": [],
      "typeParents,prev": [],
      "excludedTypeParents,prev": [],
      "folderOpen": false,
      "csb": {
        "QCirBCPnouanFyga2": {
          "QCirBCPnouanFyga2": true,
          "hz92hFBhyrGyB2uSj": true,
          "XCcBae7Mpw4QbPkci": true,
          "rJ3viaSb58no6mmTv": true,
          "Y4zFDa6JTEPQhHdBz": true,
          "KcLvQ94fHmw4AbtTZ": true,
          "Liujav2ohEJAZktMT": true,
          "dsba5crGEzsYSxFmS": true,
          "go7smrMcQuLMkheMP": true
        },
        "TC7CLESZKB8CFx8Z6": { "TC7CLESZKB8CFx8Z6": true },
        "Z7aDcfpgYHtWKauig": { "Z7aDcfpgYHtWKauig": true },
        "xuvxCTia82xQi8HR3": { "xuvxCTia82xQi8HR3": true },
        "9fcQJ7DpKgjYNjjNZ": { "9fcQJ7DpKgjYNjjNZ": true },
        "aibX4WjKnFM8cGr5v": {
          "aibX4WjKnFM8cGr5v": true,
          "Q6kBLH7B2PqttREEw": true,
          "WSigeKBvcfs48E73R": true,
          "CZ7dRjqzBRn5jc2s7": true
        },
        "a3FgYycudoxKzrsBd": { "a3FgYycudoxKzrsBd": true },
        "v7DwhbNJZcwFYvSjr": {
          "v7DwhbNJZcwFYvSjr": true,
          "fTQtRwmSyoL6io4ZL": true
        },
        "E87ywxPfLtRZbCv7h": { "E87ywxPfLtRZbCv7h": true },
        "EWC8dAd5uDT4nzqgn": { "EWC8dAd5uDT4nzqgn": true },
        "7yR7Sv4bx9yH5aero": { "7yR7Sv4bx9yH5aero": true },
        "9i74HqGTJjH3GaNAR": {
          "9i74HqGTJjH3GaNAR": true,
          "WjzLWzCkPNwZGpgDq": true,
          "h3YomwNCxziGPMonJ": true
        },
        "EdA9dPC27cqqgXRDb": { "EdA9dPC27cqqgXRDb": true },
        "Z5kuYBHkEihbsxubo": {
          "Z5kuYBHkEihbsxubo": true,
          "pLyjbADudJsjqpPkN": true,
          "75phNqCmTuog29hZG": true,
          "r2TNoy6ZrN9ipac7u": true
        },
        "25avbMQmzAS4qppLf": {
          "25avbMQmzAS4qppLf": true,
          "KB2eWKppcPGB7SRrw": true,
          "yDNvnfGTqaGqBdCw9": true
        },
        "kwgsaN7RyFDJjABtS": {
          "kwgsaN7RyFDJjABtS": ["gB8xqhqmuzKPCNPHL"],
          "gB8xqhqmuzKPCNPHL": true
        },
        "kkryowGjr82iupM58": {
          "kkryowGjr82iupM58": ["rqH6EtGoh23cvhLgs", "XxbxkgFnp47rnPBke"],
          "rqH6EtGoh23cvhLgs": true
        },
        "qFk2KuZZn37Aw5cCX": {
          "qFk2KuZZn37Aw5cCX": true,
          "KavZfm4DzeiWKaMBe": ["kkryowGjr82iupM58", "kwgsaN7RyFDJjABtS"]
        },
        "PeH65ie4nro3mctZM": { "PeH65ie4nro3mctZM": true },
        "fDXDyTi8yN8zTDsrK": {
          "fDXDyTi8yN8zTDsrK": true,
          "aKWhco9gDCH9fAurG": true,
          "MLounD8XiS4qXdGMK": true,
          "wiNY8cR738sB8k8sL": true,
          "Z56fqdLGumEDJD6wX": true,
          "kRsnwEGarS9HTfWgq": true,
          "eFTifzMHhbeSvukGR": true,
          "j3rnwsPoQxfoo8GJM": true,
          "XtXpWgJovXWNHHakg": true,
          "YttybSNggeQWQ2WpX": true,
          "v8gZdk6sDR5KnnXWh": true,
          "bxmDm42kPmx2YrByH": true
        },
        "fTQtRwmSyoL6io4ZL": {
          "fTQtRwmSyoL6io4ZL": ["K9i2DB6h95CHiKB4b", "YJD8ApcQ6fXbXJL9i"]
        },
        "3S588RsyimkkXPMWZ": {
          "3S588RsyimkkXPMWZ": true,
          "WWiBRrB3F75qGZiGv": true,
          "TMpsYjWMDv47D9W6j": true,
          "yrkN2AtpmYzK4tjDP": true
        },
        "bYZcHAH9XkvBXL6Af": {
          "bYZcHAH9XkvBXL6Af": [
            "zBmBL77voRENFvjkN",
            "SFR3GkrZw2mf92SDW",
            "KMPNHCZnSZXyA3o5a",
            "7EiBpTevKANtPuSbH"
          ]
        },
        "YttybSNggeQWQ2WpX": {},
        "TSkJrdvSq2wi7JjkE": {},
        "ezKntaJopxedeLgsL": {
          "ezKntaJopxedeLgsL": [
            "NHGgNSjy3jSXDNR5W",
            "ntnFsddum4iBwxx2y",
            "ESMuG3ZJw8fBwY2uX",
            "LscqtA5xBgjPKWDwX"
          ]
        },
        "XzyiLiSathrgKzo5h": {
          "XzyiLiSathrgKzo5h": true,
          "qw5w3artipMXm3rTz": true
        },
        "v8gQTKg8EzfY5Em7G": {
          "v8gQTKg8EzfY5Em7G": true,
          "GwTenckbvRJAzxEHh": ["MDSCGA9jqmd4YWmmq", "WJJSkNbYhiQFicZ6H"],
          "9wG5Yb6g7CzEg2SYJ": true,
          "mHe2NnkXJ3xoG8yku": ["juhLoLuGjGLRikuX7", "A2H2uFbLFxkLvM7f5"]
        },
        "AF6athdDQy8t3DyiG": {
          "AF6athdDQy8t3DyiG": ["w9TJhceZxJd35TWwB", "jxzQxJeucs7zDmcud"]
        },
        "8CBhDmyLtoaADtm4s": { "8CBhDmyLtoaADtm4s": true },
        "mQZfSZEooySezTRLx": {},
        "8bMCKnhzXAq84fY4T": {
          "8bMCKnhzXAq84fY4T": true,
          "yvqEXQJ9sTyBuv4nv": true,
          "Sd7yMyZaYFSTFsAZj": true,
          "pNNbcAqo8W5rcNR3B": true,
          "WvRKicL4MtbTZDTwj": true
        },
        "tPaLdd7yfKcT7JtnR": {
          "tPaLdd7yfKcT7JtnR": true,
          "5XEwqFRiZtCo8PFYc": true,
          "2AuCzxjfoT8u8LGTn": true,
          "pzdjbu5xdBEqiHLdw": true
        },
        "eyFyFmgqDkpchdfKA": { "eyFyFmgqDkpchdfKA": true },
        "yLTat3WmoPgNKLuXk": {
          "yLTat3WmoPgNKLuXk": [
            "XNmhqYerrCyT6Tqkr",
            "SuosHWDKtj3xNW3cq",
            "CiPPZf2K6Q8TRTJTp"
          ],
          "XNmhqYerrCyT6Tqkr": true,
          "WdoJn6xzShCCbwE5r": true,
          "u6m3RDkjKRGreBS2r": true,
          "x7ZMtzJRv4dEEsfxn": true,
          "FBTPDuodCd3rCjhgW": true
        },
        "YuD3zQ3XKgrRWYW56": { "YuD3zQ3XKgrRWYW56": true },
        "pJjtQHbtCuCXmJGTX": {
          "pJjtQHbtCuCXmJGTX": [
            "AF6athdDQy8t3DyiG",
            "DQsH3ET8nmxdihCvu",
            "EttAnJ6nCyjhFQp5T",
            "W3aTakgPrrQjv4y3X"
          ],
          "W3aTakgPrrQjv4y3X": ["jZr4EJzrHXNSDPRTq"]
        },
        "xCbp2HN7Jb86TowP4": {
          "xCbp2HN7Jb86TowP4": true,
          "tj2pbpzvEtPPMS33h": true,
          "qAiuH5uN9e6hpaCXM": true,
          "kh2PxeZYNB9QYPJB9": true
        },
        "Ft2KwcCZbZyLSvMS3": {
          "Ft2KwcCZbZyLSvMS3": [
            "jJzB73TjtwRMybJBo",
            "bjm9mAQWSLB4WdxBJ",
            "yKtj9YaJPLL8BkCSp",
            "bttjLSHckvyjX3PiT",
            "e6zhe32BtdTTmuRYf",
            "CqDxLxDdeyqr3PRQC",
            "rkka5Y5qqwiHq6qXg",
            "tPaLdd7yfKcT7JtnR"
          ]
        },
        "hv8jAcEzeo7S3XYiR": {
          "hv8jAcEzeo7S3XYiR": [
            "xCbp2HN7Jb86TowP4",
            "Ft2KwcCZbZyLSvMS3",
            "dng9Xx7kijoC9JFvS",
            "8CBhDmyLtoaADtm4s",
            "fDNPDezEKLWjQifMg"
          ],
          "xSstF5KviS3MB6sLw": ["pJjtQHbtCuCXmJGTX"],
          "fDNPDezEKLWjQifMg": true,
          "3cyZqe6sXfEGKi754": true
        },
        "BsZdDi99oMDRntube": {
          "BsZdDi99oMDRntube": ["FKFDntB464TNg69YL", "CkmLcDySECqmNE5bY"],
          "FKFDntB464TNg69YL": ["fTQtRwmSyoL6io4ZL"],
          "CkmLcDySECqmNE5bY": ["uSoYCNELY7NcX3mnw", "faHxiesjq8EJaFqFd"]
        },
        "4KemvP8XBWfD9EZRG": {
          "4KemvP8XBWfD9EZRG": [
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
          "w89RtXtfJDcGdgc7m": ["nkKpfb6u67YkHwphx", "JfxEL2EXGgs8T6X4c"],
          "nkKpfb6u67YkHwphx": true,
          "o3B2jWnjmRDxh4yw8": true,
          "s7cpCtq9gkj3c9duk": true,
          "aKWhco9gDCH9fAurG": ["YttybSNggeQWQ2WpX"],
          "JWWjFYD6dKzSR63Ch": ["49jnda5bKv2hwynKY"],
          "49jnda5bKv2hwynKY": true,
          "Rzwm8rMts4dRSmRmz": [
            "k7yxqS7ruNLnZDKKR",
            "BkxCQPQCmBPNZeD4Q",
            "bpHyFd7aWtqReP6ye",
            "nRbZG6rtAW9z4cqkd",
            "ibrsypi8KDd4zDZS6",
            "qSZcWo4TePaEmqsC2",
            "eYCgKWRyQABTs4bjH",
            "oBx2rsYmWKESTuCsT",
            "LqB4YgfZGfbwXcvfv",
            "kD5Kt8YjspRvLMuAj",
            "fRAn3hprvrA76ae4b",
            "afe2E2W4g4EDHds85",
            "FG3PZ2kuDfpD7BFWe"
          ],
          "k7yxqS7ruNLnZDKKR": true,
          "bpHyFd7aWtqReP6ye": true,
          "LnYy2kqokFEXpWxxX": true,
          "iqiumMvndMZQ6yof9": true,
          "2ZoDcCw9P3kM3wAnc": true,
          "NZCZj3bukQHQQzxJb": true,
          "FG3PZ2kuDfpD7BFWe": true
        }
      },
      "lastPracticed": 1662555114952,
      "typeParents": ["JKCnZKdQJbwFwWRfP"],
      "excludedTypeParents": [],
      "selectedInSearch": 58,
      "searchAliases": [{ "r": ["Computer"] }],
      "references": [],
      "references,prev": [],
      "rsp": null,
      "tpam": null,
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
    }
  ]
}`
  )
