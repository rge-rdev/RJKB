export interface Rem_DB {
  knowledgebaseid?: Owner_ID
  name?: string
  exportDate?: string
  exportVersion?: number
  docs: (Rem_obj & deleted_rem & portal_rem)[] //Array<Rem_obj>;
}

/**
 * type = 1 | 2 | 6 | null
 * 1 | null = concept flashcard
 */

export interface Rem_obj {
  key: RemData[] | []
  owner?: Owner_ID // local-iKhHKzSKkJiQy2yNb
  children: RemID[] | [] // direct children?
  subBlocks?: RemID[] | []
  portalsIn?: RemID[]
  createdAt?: timestamp
  u?: timestamp // date modified? last flashcard test??
  _id: RemID | string

  srcRemId?: RemID
  srcRemC?:
    | "a/fakeImportArticle0.8504256628454507"
    | "a/fakeImportArticle0.4068383445247259"
  parent?: RemID // always one direct parent
  "portalsIn,prev"?: RemID[] | []
  type?: 1 | 2 | 6 | null // null if deleted?
  enableBackSR?: boolean
  efc?: null | boolean
  value?: Array<RemData>
  // forget?: true; /// boolean;
  preMigrationPortalsIn?: RemID[]
  typeChildren?: RemID[] | [] // tagged children?
  typeParents?: RemID[] | []
  excludedTypeParents?: [] // always empty?
  "typeParents,prev"?: [] // always empty?
  "excludedTypeParents,prev"?: [] // always empty?
  "subBlocks,prev"?: []
  "children,prev"?: [] // always empty?
  selectedInSearch?: number | null
  searchAliases?: [] | null
  references?: { q: RemID; f: "key" | "value" }[] | null // {}[]
  "references,prev"?: [] // always empty array?
  csb?: CSB_obj<RemID>
  crt?: { b?: { u?: { s?: string } } } | null
  n?: 1 // n = 1 means root level
  forget?: null | boolean
}

export interface deleted_rem extends Rem_obj {
  dpas: number
  deletionReason: deletionReason
  ddi: RemID[] | []
  deletedAt: timestamp
}

export interface portal_rem extends Rem_obj {
  portalType: 4 | null
  spo: 1 | null
  embeddedSearchId: 1 | 2 | 3 | 4 | null
  searchResults: RemID[] | []
  "searchResults,prev": RemID[] | []
}

/**
 * Flashcard Q&A split to "key" & "value"
 *   RemData[] concatenates to sentence
 *     RemData includes links, markdown, CSS styles
 *
 * @param r -
 * @param enableBackSR - enable backwards spaced repetition
 */

export interface flashcard_rem extends Rem_obj {
  r?: null
  crt?: {
    a?: {}
    b?: { u?: { s?: string } }
    e?: {}
    x?: {}
    i?: {}
    w?: {}
    z?: {}
    r?: {
      s: {
        _id: RemID
        s: string
        v: RemID[]
      }
    }
    o?: {
      s: {
        _id: RemID
        s: "Draft"
      }
      v: RemRef[]
    }
    os?: {
      os: {
        _id: RemID
        s: string
        v: RemID[]
      }
    }
  } | null
  /**
   * @property enableBackSR - Enable Backwards Space Repetition
   */
  enableBackSR: null | boolean // allow backwards flashcard testing
  efc: null | boolean
}

type RemID = `${string | number}` // .*[A-z0-9]

type CardID = `${number}`

type Owner_ID = `local-${string | number}`

type timestamp = number

/**
 * i = ?? inline style?
 *
 * m = markdown?
 * o = ?? code-block style
 * q = ?? link
 */

// type RemData = RemRef & CodeBlock;

/**
 * @param language Programming Language for Code Editor
 * @param q md style as quote
 * @param b md style as bold
 * @param cId Cloze Card ID
 * @asd asdasd
 * @field url wasd
 */

type RemData = {
  i?: "i" | "m" | "o" | "q"
  _id?: string
  language?: PLanguage // language for code editor to display
  q?: true // md quote (or codeblock?)
  b?: true // md bold
  u?: true // md underline
  l?: true // md italic. L for Larry
  cId?: string // Cloze card ID
  url: string // href
  height?: number // img height px
  width?: number // img height px
  percent?: number // % scaling for h/w. Sometimes omitted = 100%?
  loading?: boolean // false for finished loading?
  textOfDeletedRem?: RemData[]
} & string
// | string
// | RemRef
// | CodeBlock
// | md_q_obj
// | md_b_obj
// | cloze_obj
// | CSS; //| md_CSS

type RemRef = {
  _id: RemID | string
  i: "q"
}

type md_CSS = md_q_obj | md_b_obj | cloze_obj

interface CSS {
  text: string
  i: "m" | "o" | "q"
}

/**
 * @deprecated q & b are optional attributes for many other sub types
 */

interface md_q_obj extends CSS {
  text: string
  q: true // markdown quote
}

interface md_b_obj extends CSS {
  b: true
}

/**
 * Card ID
 */
interface cloze_obj extends CSS {
  text: string
  cId: CardID // Card ID
  b?: true
  q?: true
  i: "m" | "q"
  _id?: RemID
}

interface CodeBlock extends CSS {
  i: "o"
  language: PLanguage
  text: string
}

interface Img {
  i: "i"
  url: string
  width: number
  height: number
  percent?: number
  loading?: false //boolean;
}

type PLanguage =
  | "javascript"
  | "typescript"
  | "css"
  | "html"
  | "bash"
  | "powershell"

type deletionReason =
  | "actionRequired.doneEditing"
  | "deletePortal"
  | "duplicateCrt"
  | "editorRemove"
  | "editorRemove.recurse2"
  | "emptySearchPortalOnMount"
  | "merge.merged"
  | "replacePortal"
  | "transient"

interface CSB_obj<T> {
  T?:
    | {
        T: true | string[] | RemID[] // RemID[] not same as RemID in T:
      }
    | {}
}

/**
 * [45]
 * key = Bundled [JavaScript] makes [AJAX] [XHR] [b:Requests]
 * [_TERM] = RemRef
 * [b:_TERM] = md_b_obj
 */

/**
 *  [13]
 *  key = { text: "\\b", q: true, i: "m"}
 *   "\b" regexp required extra character escape
 *  value =
 */

/**
 * [9878]
 * Autoboxing ↔ Link via [Wrapper Object] from primitive to primitive object
 * csb: {} with 7 properties
 *  7 concept flashcards nested
 *    not including embedded cloze terms?
 */

/**
 * Flashcard metadata stored in cards.json
 *
 */

interface cardjson_obj {
  _id: RemID
  a: timestamp
  c: "b" | "f" | `${timestamp}` // string of numbers
  createdAt: timestamp
  d: timestamp
  e: timestamp
  h: History_obj[]
  i: timestamp
  n: timestamp
  owner: Owner_ID
  rId: RemID
  t?: 1
  u: timestamp
}

interface History_obj {
  date: timestamp
  isCram: boolean
  lazyLoad: boolean
  metadata: {
    cardsInSession: number
    cardsToday: number
    mobile: null
    remainingCards: number
    showBadge: boolean
  }
  responseTime: number
  revealTime: number
  scheduled: timestamp
  scheduler: number
  schedulerMetadata: {
    clusterType: "extra"
    extraCard: boolean
    extraCardLeftover: boolean
    howChoseLastCluster: boolean
  }
  score: 0 | 0.01 | 0.5 | 1 | 1.5
  subQueueId: RemID
}
