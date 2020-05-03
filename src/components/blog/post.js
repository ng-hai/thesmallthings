import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { postTranstion } from "../../constants"
import Page from "../page"
import SEO from "../seo"
import components from "./mdx-components"

export default function Post(meta = {}) {
  return ({ children }) => {
    return (
      <MDXProvider components={components}>
        <Page variants={postTranstion} className="pb-8">
          <article>
            <SEO {...meta} />
            <h1>{meta.title}</h1>
            {meta.date && <time className="block mt-1">{meta.date}</time>}
            {children}
          </article>
        </Page>
      </MDXProvider>
    )
  }
}
