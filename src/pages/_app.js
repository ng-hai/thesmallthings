import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import React from "react"
import Head from "next/head"
import Link from "next/link"
import classcat from "classcat"

import "styles/index.css"
import SEO from "components/seo"
import Nprogress from "components/nprogress"
import ActiveLink from "components/active-link"
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
        <header className="w-full">
          <div className="container flex items-center justify-between h-16">
            <Link href="/">
              <a>
                <svg width="32" height="32">
                  <use
                    href="/assets/icons.svg#logo-light"
                    xlinkHref="/assets/icons.svg#logo-light"
                  />
                </svg>
              </a>
            </Link>

            <nav className="hidden tablet:block">
              <div className="flex items-center">
                {menus.map((item) => {
                  return (
                    <ActiveLink
                      className="ml-8"
                      key={item.path}
                      href={item.path}
                    >
                      {(active) => (
                        <span
                          className={classcat([
                            active ? "text-primary" : "text-black",
                          ])}
                        >
                          {item.title}
                        </span>
                      )}
                    </ActiveLink>
                  )
                })}
              </div>
            </nav>
          </div>
        </header>

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
