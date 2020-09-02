import React from "react"
import { MDXProvider } from "@mdx-js/react"

import SEO from "components/seo"
import Page from "components/page"
import { postTranstion } from "config"
import components from "./mdx-components"

export default function Post(meta = {}) {
  return ({ children }) => {
    return (
      <MDXProvider components={components}>
        <Page variants={postTranstion} className="my-8">
          <article>
            <SEO {...meta} />
            {meta.date && (
              <time className="block tracking-wide">{meta.date}</time>
            )}
            {children}
          </article>
        </Page>
      </MDXProvider>
    )
  }
}
