import React from "react"
import Link from "next/link"

import { importAll } from "../../utils"
import Page from "../../components/page"
import SEO from "../../components/seo"

const postList = importAll(require.context(".", true, /.mdx?$/))

export default function BlogListing() {
  return (
    <Page className="pb-10">
      <SEO title="Blog — The Small Things" />
      <div className="mx-auto max-w-line-length">
        <ul>
          {postList.map(({ meta }, index) => (
            <Link href={meta.slug} key={index}>
              <a>
                <li className="mt-10 text-xl">
                  <time className="text-sm">{meta.date}</time>
                  <h2 className="text-xl font-bold leading-tight tablet:text-2xl desktop:text-4xl hover:text-primary">
                    {meta.title}
                  </h2>
                  <p className="mt-1 text-base tablet:text-lg desktop:text-xl">
                    {meta.description}
                  </p>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </Page>
  )
}
