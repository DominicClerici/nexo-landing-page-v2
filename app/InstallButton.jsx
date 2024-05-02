"use client"

import { useEffect, useState } from "react"
import Firefox from "./svgs/Firefox"
import Chrome from "./svgs/Chrome"

const InstallButton = ({ dark }) => {
  const [isFirefox, setIsFirefox] = useState(null)
  useEffect(() => {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
      setIsFirefox(true)
    } else {
      setIsFirefox(false)
    }
  }, [])

  if (isFirefox === null) return <></>
  return (
    <a
      className={`flex items-center gap-1 font-medium transition-colors ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } rounded px-3 py-2`}
    >
      {isFirefox ? <Firefox className={"h-6 w-6"} /> : <Chrome className={"h-6 w-6"} />}
      Add to {isFirefox ? "Firefox" : "Chrome"}
    </a>
  )
}

export default InstallButton
