import Chrome from "./svgs/Chrome"

const InstallButton = ({ dark }) => {
  return (
    <a
      className={`flex items-center gap-1 font-medium transition-colors ${
        dark ? "bg-black text-white" : "bg-white text-black"
      } rounded px-3 py-2`}
    >
      <Chrome className={"h-6 w-6"} />
      Add to Chrome 
    </a>
  )
}

export default InstallButton
