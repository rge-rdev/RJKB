---
id: treebeard
title: Tree beard
---

```tsx
import {Render_Docs_BFS} from "../src/components/App"
import {root_main_topics} from "../src/data/"

<Render_Docs_BFS db_chunk={root_main_topics},
set_db_chunk={null},
setPath={["root"]},
mode={"tree"},
mdx={true},
debug={false}/>
```

<!-- <Hello /> -->

```tsx live
import { Render_Docs_BFS } from "../src/components/App"
Render_Docs_BFS(
  db_chunk,
  set_db_chunk,
  undefined,
  undefined,
  setPath,
  mode,
  mdx,
  debug
)
```

Results in follow error:

```
SyntaxError: Unexpected token (1:15)
1 : return (import { Render_Docs_BFS } from "../src/components/App"
```

<!-- <Test/> -->

### Takeaway Points

1. MDX/Docusaurus CAN import .ts & .tsx & .jsx files
2. Sometimes restarting is necessary for things to work?!
3. need to add extra `import React from "react"` due to Docusaurus using older version of React?
4. Semicolons are still optional for MDX (thankfully)
