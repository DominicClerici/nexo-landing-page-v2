import Clock from "./Clock"
import Weather from "./Weather"
import SearchBar from "./SearchBar"
import Shortcuts from "./Shortcuts"

const LiveDemoElement = () => {
  return (
    <div className="relative mx-auto flex max-w-screen-md flex-col items-center rounded-2xl border-4 bg-slate-800 py-8">
      <Clock />
      <Weather />
      <SearchBar />
      <Shortcuts />
    </div>
  )
}

export default LiveDemoElement
