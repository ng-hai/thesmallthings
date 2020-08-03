import React from "react"
import { MDXProvider } from "@mdx-js/react"

import { postTranstion } from "config"
import Page from "components/page"
import SEO from "components/seo"
import components from "./mdx-components"

export default function Post(meta = {}) {
  return ({ children }) => {
    return (
      <MDXProvider components={components}>
        <Page variants={postTranstion} className="mt-8">
          <article>
            <SEO {...meta} />
            {meta.date && <time className="block">{meta.date}</time>}
            {children}
          </article>
        </Page>
      </MDXProvider>
    )
  }
}
