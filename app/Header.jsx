"use client"
import { useState, useEffect } from "react"
import InstallButton from "./InstallButton"
import NexoIcon from "./svgs/NexoIcon"

const Header = () => {
  const [opacity, setOpacity] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 150) {
        setOpacity(true)
      } else {
        setOpacity(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="xs:px-8 fixed left-0 top-0 z-20 flex w-full items-center justify-between px-2 py-3 sm:px-12 md:px-20 lg:px-28 xl:px-40">
      <div
        className={`absolute inset-0 -z-10 bg-bg/70 backdrop-blur-xl transition-opacity duration-300 ${
          opacity ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <h1 className={`xs:text-xl xs:font-bold text-base font-semibold text-main sm:text-2xl`}>
        <a
          className={`${
            opacity ? "text-black" : "text-white"
          } xs:px-2 xs:gap-2 flex cursor-pointer items-center gap-1 rounded px-3 py-2 transition-colors hover:bg-black/10 sm:gap-4`}
          href="/"
        >
          <NexoIcon className={"xs:h-10 xs:w-10 h-8 w-8"} />
          Nexo Start
        </a>
      </h1>
      <div className="flex items-center gap-8">
        <InstallButton dark={opacity} />
      </div>
    </header>
  )
}

export default Header
