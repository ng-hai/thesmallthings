import dynamic from "next/dynamic"
import { MDXProvider } from "@mdx-js/react"
import { postTranstion } from "config"
import components from "./mdx-components"

const SEO = dynamic(() => import("components/seo"), { ssr: false })
const Page = dynamic(() => import("components/page"), { ssr: false })

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
