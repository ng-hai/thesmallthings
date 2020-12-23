import hydrate from "next-mdx-remote/hydrate"

import Post from "components/blog/post"
import ContactForm from "components/contact-form"
import { Image } from "components/blog/mdx-components"

import { getFileBySlug, getFiles } from "utils"

export default function PostDetail({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: {
      ContactForm,
      Image,
    },
  })
  return <Post metadata={{ ...frontMatter, isBlogPost: true }}>{content}</Post>
}

export async function getStaticPaths() {
  const filenames = await getFiles("posts")
  const excludePaths = (filename) => {
    const slug = filename.replace(/.mdx/, "")
    return ["home", "contact"].includes(slug) === false
  }

  return {
    // Determine which paths will be pre-rendered
    paths: filenames.filter(excludePaths).map((filename) => ({
      params: {
        slug: filename.replace(/.mdx/, ""),
      },
    })),
    // If `fallback` is `false`, then any paths not returned by `getStaticPath`
    // will result in a 404 page
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { mdxSource, frontMatter } = await getFileBySlug("posts", params.slug, {
    ContactForm,
    Image,
  })
  return {
    props: { mdxSource, frontMatter },
    notFound: frontMatter.publish === false,
  }
}
