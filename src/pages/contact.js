import hydrate from "next-mdx-remote/hydrate"
import ContactForm from "components/contact-form"
import Post from "components/blog/post"
import { getFileBySlug } from "utils"

export default function Contact({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components: { ContactForm } })
  return <Post metadata={frontMatter}>{content}</Post>
}

export async function getStaticProps() {
  const post = await getFileBySlug("posts", "contact", { ContactForm })

  return {
    props: post,
  }
}
