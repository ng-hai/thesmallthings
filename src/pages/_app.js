import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import React from "react"
import Head from "next/head"

import "styles/index.css"
import SEO from "components/seo"
import Header from "components/header"
import Nprogress from "components/nprogress"
import BottomNavigation from "components/bottom-navigation"

import { menus } from "config"

export default function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#24292e" />
        <meta name="apple-mobile-web-app-title" content="The Small Things" />
        <meta name="application-name" content="The Small Things" />
        <meta name="msapplication-TileColor" content="#1366E9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <SEO />
      <div className="min-h-full font-sans antialiased text-black bg-light-gray">
        <Header menus={menus} />

        <main className="pb-16">
          <div className="container">
            <Component {...pageProps} />
          </div>
        </main>

        <BottomNavigation
          menus={menus}
          className="fixed bottom-0 left-0 tablet:hidden"
        />
        <Nprogress />
      </div>
    </React.StrictMode>
  )
}
