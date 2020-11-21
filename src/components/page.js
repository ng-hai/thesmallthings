import dynamic from "next/dynamic"
import { pageTranstion } from "config"

const motion = dynamic(
  () => import("framer-motion").then((mod) => mod.motion),
  { ssr: false },
)

export default function Page(props) {
  return (
    <motion.div
      variants={pageTranstion}
      {...props}
      initial="incoming"
      animate="enter"
    />
  )
}
