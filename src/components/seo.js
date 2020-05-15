import Head from "next/head"

const config = {
  author: "Hai Nguyen",
  url: "https://thesmallthings.dev",
  title: "The Small Things — Personal website by Hai Nguyen",
  description: "I write about front-end development stuffs.",
  image: "/assets/images/cover.png",
}

export default function SEO({
  title = config.title,
  description = config.description,
  image = config.image,
  slug = "/",
}) {
  const url = `${config.url}${slug}`
  const previewImage = `${config.url}${image}`
  return (
    <Head>
      {/* General tags */}
      <title>{title}</title>
      <meta key="title" name="title" content={title} />
      <meta key="description" name="description" content={description} />
      <meta key="image" name="image" content={previewImage} />

      {/* OpenGraph tags */}
      <meta key="og:url" property="og:url" content={url} />
      <meta
        key="og:type"
        property="og:type"
        content={slug ? "article" : "website"}
      />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:image" property="og:image" content={previewImage} />

      {/* Twitter Card tags */}
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={config.author}
      />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={previewImage} />
    </Head>
  )
}
