import "lazysizes"
import "lazysizes/plugins/attrchange/ls.attrchange"
import { StrictMode } from "react"
import dynamic from "next/dynamic"

import "styles/index.css"
import { menus } from "config"
import SEO from "components/seo"

const Header = dynamic(() => import("components/header"))
const Nprogress = dynamic(() => import("components/nprogress"))
const BottomNavigation = dynamic(() => import("components/bottom-navigation"))

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
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
    </StrictMode>
  )
}
