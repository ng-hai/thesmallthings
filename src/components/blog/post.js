import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { postTranstion } from "../../constants"
import Page from "../page"
import components from "./mdx-components"
import SEO from "../seo"

export default function Post(meta = {}) {
  return ({ children }) => {
    return (
      <MDXProvider components={components}>
        <Page variants={postTranstion}>
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
