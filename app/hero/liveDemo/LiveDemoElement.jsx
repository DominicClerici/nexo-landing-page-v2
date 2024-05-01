import Clock from "./Clock"
import Weather from "./Weather"
import SearchBar from "./SearchBar"
import Shortcuts from "./Shortcuts"

const LiveDemoElement = () => {
  return (
    <div className="relative flex flex-col items-center border-4 rounded-2xl max-w-screen-md mx-auto bg-slate-800 py-8">
      <Clock />
      <Weather />
      <SearchBar />
      <Shortcuts />
    </div>
  )
}

export default LiveDemoElement
