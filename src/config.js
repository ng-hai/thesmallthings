export const pageTranstion = {
  incoming: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.0, 0.0, 0.2, 1],
      duration: 0.1,
      opacity: { duration: 0.1 },
    },
  },
}

export const postTranstion = {
  incoming: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.0, 0.0, 0.2, 1],
      duration: 0.1,
      opacity: { duration: 0.1 },
    },
  },
}

export const menus = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: "file-text",
  },
  // {
  //   title: "Projects",
  //   path: "/projects",
  //   icon: "box",
  // },
  {
    title: "Contact",
    path: "/contact",
    icon: "message-square",
  },
  {
    title: "GitHub",
    path: "https://github.com/ng-hai/thesmallthings",
    icon: "github",
  },
]
