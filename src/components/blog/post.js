import dynamic from "next/dynamic"
import { MDXProvider } from "@mdx-js/react"
import { postTranstion } from "config"
import SEO from "components/seo"
import components from "./mdx-components"

const Page = dynamic(() => import("components/page"))

export default function Post({ metadata, children }) {
  return (
    <MDXProvider components={components}>
      <Page variants={postTranstion} className="my-8">
        <article>
          <SEO {...metadata} />
          {metadata.date && (
            <time className="block text-sm font-semibold desktop:text-base text-dark-gray">
              {metadata.date}
            </time>
          )}
          {children}
        </article>
      </Page>
    </MDXProvider>
  )
}
