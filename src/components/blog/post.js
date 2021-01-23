import { MDXProvider } from "@mdx-js/react"
import SEO from "components/seo"
import components from "./mdx-components"

export default function Post({ metadata, children }) {
  return (
    <MDXProvider components={components}>
      <article className="py-8">
        <SEO {...metadata} />
        {metadata.date && (
          <time className="block text-sm font-semibold desktop:text-base text-dark-gray">
            {metadata.date}
          </time>
        )}
        {children}
      </article>
    </MDXProvider>
  )
}
