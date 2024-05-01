"use client"
import { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState(null)
  // for colon that blinks with seconds in clock
  const [active, setActive] = useState(false)
  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date()
      let rawHours = currentTime.getHours() % 12
      const rawMinutes = currentTime.getMinutes()
      setTime({
        hours: String(rawHours ? rawHours : 12),
        minutes: rawMinutes < 10 ? `0${rawMinutes}` : String(rawMinutes),
        ampm: currentTime.toLocaleTimeString("en-US", { hour12: true }).slice(-2),
      })
    }
    updateClock()
    const interval = setInterval(() => {
      setActive((prev) => !prev)
      updateClock()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (time) {
    return (
      <h1 className="xs:text-5xl relative z-10 select-none text-4xl font-semibold text-white/90 lg:text-6xl">
        {time?.hours}
        <span className={`transition-opacity ${active ? "" : "opacity-25"}`}>:</span>
        {time?.minutes}
        <span className="text-xl font-light text-white/60">{time?.ampm}</span>
      </h1>
    )
  } else {
    return <></>
  }
}

export default Clock
