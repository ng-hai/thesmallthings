import Link from "next/link"
import dynamic from "next/dynamic"
import classcat from "classcat"

const ActiveLink = dynamic(() => import("./active-link"))

export default function Header({ menus }) {
  return (
    <header className="w-full">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" passHref>
          <a aria-label="Go to Homepage">
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
                <ActiveLink className="ml-8" key={item.path} href={item.path}>
                  {(active) => (
                    <span
                      className={classcat([
                        "tracking-wide",
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
  )
}
