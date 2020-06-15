import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ActiveLink({ children, className, ...props }) {
  const router = useRouter()

  function isActive() {
    const path = props.href.substring(1, props.href.length)
    const route = router.pathname.substring(1, router.pathname.length)

    if (route.length > 0 && path.length > 0) {
      return route.includes(path)
    }

    return route === path
  }

  function isExternalLink(value) {
    return String(value).startsWith("http")
  }

  if (isExternalLink(props.href)) {
    return (
      <a {...props} className={className} target="_blank">
        {children(false)}
      </a>
    )
  }

  return (
    <Link {...props}>
      <a className={className}>{children(isActive())}</a>
    </Link>
  )
}
