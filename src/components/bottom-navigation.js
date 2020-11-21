import dynamic from "next/dynamic"
import classcat from "classcat"

const ActiveLink = dynamic(() => import("./active-link"))

export default function BottomNavigation({ menus, ...props }) {
  return (
    <nav
      {...props}
      className={classcat([
        "w-full h-16 bg-white border-t border-mid-gray select-none",
        props.className,
      ])}
    >
      <div className="flex justify-between w-full max-w-sm px-2 mx-auto">
        {menus.map((item) => {
          return (
            <ActiveLink key={item.path} href={item.path}>
              {(active) => (
                <div
                  className={classcat([
                    "flex flex-col items-center justify-center w-16 h-16 relative",
                    {
                      "text-black": !active,
                      "text-primary": active,
                    },
                  ])}
                >
                  <svg
                    width="20"
                    height="20"
                    className="fill-current"
                    strokeWidth="1.5"
                  >
                    <use xlinkHref={`/assets/icons.svg#${item.icon}`} />
                  </svg>
                  <span className="mt-1 text-xs font-semibold tracking-wide">
                    {item.title}
                  </span>
                </div>
              )}
            </ActiveLink>
          )
        })}
      </div>
    </nav>
  )
}
