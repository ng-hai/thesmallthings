import Post from "components/blog/post"
import { getFileBySlug } from "utils"

export default function Home({ mdxSource, frontMatter }) {
  return (
    <Post metadata={frontMatter}>
      <div dangerouslySetInnerHTML={{ __html: mdxSource.renderedOutput }} />
    </Post>
  )
}

export async function getStaticProps() {
  const post = await getFileBySlug("posts", "home")

  return {
    props: post,
  }
}
