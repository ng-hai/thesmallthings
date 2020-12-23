import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

import SEO from "components/seo"
import { getFrontMatters } from "utils"

const Page = dynamic(() => import("components/page"))

export default function Blog({ posts }) {
  return (
    <Page className="pb-10">
      <SEO title="Blog — The Small Things" />
      <div className="mx-auto max-w-line-length">
        {posts.map((meta) => (
          <Link
            passHref
            href="/blog/[slug]"
            as={`/blog/${meta.slug}`}
            key={meta.slug}
          >
            <a className="block mt-10 text-xl hover:cursor-pointer group">
              <time className="text-sm font-semibold tracking-wide text-dark-gray desktop:text-base">
                {meta.date}
              </time>
              <h2 className="font-serif text-xl leading-tight tablet:text-2xl desktop:text-4xl group-hover:text-primary">
                {meta.title}
              </h2>
              <p className="mt-1 text-base tracking-wide tablet:text-lg desktop:text-xl">
                {meta.description}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </Page>
  )
}

export async function getStaticProps() {
  const frontMatters = await getFrontMatters("posts")
  const isPublished = ({ publish }) => publish !== false

  return {
    props: {
      posts: frontMatters.filter(isPublished),
    },
  }
}
