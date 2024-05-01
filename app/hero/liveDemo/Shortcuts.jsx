import Image from "next/image"

const ShortcutItem = ({ url, color, name, newTab, customImage }) => {
  return (
    <a
      target={newTab ? "_blank" : "_self"}
      href={url}
      className="flex w-16 flex-col items-center gap-1 rounded-lg p-2 transition-all duration-75 hover:bg-white/10 hover:!opacity-100 group-hover/hov:opacity-50 md:w-24 md:gap-2"
    >
      <div style={{ backgroundColor: color }} className="g flex h-14 w-14 items-center justify-center rounded">
        <Image
          width={32}
          height={32}
          className="h-6 w-6 rounded md:h-8 md:w-8"
          src={customImage ? customImage : `https://www.google.com/s2/favicons?domain=${url}&sz=32`}
          alt={`${name}'s Icon`}
        />
      </div>
      <p className="line-clamp-2 hyphens-auto text-center text-sm text-white/80 group-hover:text-white">{name}</p>
    </a>
  )
}

const Shortcuts = () => {
  return (
    <div className="group/hov mx-8 mt-4 flex items-start justify-center gap-4 sm:mt-8">
      <ShortcutItem url="https://www.dominicclerici.com" name={"Creator"} color={"#81c5fe"} newTab />
      <ShortcutItem url="https://chromewebstore.google.com/" name={"Nexo Start"} color={"#8657ff"} newTab />
      <ShortcutItem url="#features" name={"Learn More"} color={"#8657ff"} customImage="/learnMore.png" />
    </div>
  )
}

export default Shortcuts
