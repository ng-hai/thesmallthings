import React from "react"
import Link from "next/link"
import dynamic from "next/dynamic"

import { importAll } from "utils"

const Page = dynamic(() => import("components/page"), { ssr: false })
const SEO = dynamic(() => import("components/seo"), { ssr: false })

const postList = importAll(require.context(".", true, /.mdx?$/))

export default function BlogListing() {
  return (
    <Page className="pb-10">
      <SEO title="Blog — The Small Things" />
      <div className="mx-auto max-w-line-length">
        {postList.map(({ meta }, index) => (
          <Link passHref href={meta.slug} key={index}>
            <a className="block mt-10 text-xl hover:cursor-pointer group">
              <time className="text-sm tracking-wide">{meta.date}</time>
              <h2 className="text-xl font-bold leading-tight tablet:text-2xl desktop:text-4xl group-hover:text-primary">
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
