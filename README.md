# Website

JSON to Static MDX generator + Docusaurus 2.4.0

## For code demo only

This public repo is intended to showcase the code for static MDX-based documentation site generator only - and not for deployment of website. Therefore, key data such as the raw JSON data, MDX files & build output will not be published. In addition, a number of key sensitive ENV variables have been omitted for security, which are required for the node.js scripts & to ensure docker container deployment for the site-scraper & typesense server.

### Installation

```
$ yarn
```

### To generate initial docs

```
$ yarn id
```

This command generates static mdx & tsx to /docs & /static/preview.

### Build

```
$ yarn db
```

This command combines `docusaurus build` with initial Node heap size check, datetime log & node_modules patch - ending with build serve to localhost.
