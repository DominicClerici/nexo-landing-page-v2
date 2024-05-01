const SearchBar = () => {
  return (
    <a href="#features" className="xs:px-8 relative z-10 mt-4 w-full px-4 sm:w-80 sm:px-0 md:w-96">
      <input
        type="text"
        readOnly
        placeholder="Search for anything..."
        className={`pointer-events-none relative z-10 w-full rounded-lg bg-white/25 p-2 text-lg`}
      />
      <div className="absolute inset-0 -m-2 box-content cursor-pointer rounded-xl p-2 transition-colors duration-75 hover:bg-white/20"></div>
    </a>
  )
}

export default SearchBar
