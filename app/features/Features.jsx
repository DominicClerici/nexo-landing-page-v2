import Link from "next/link"
import Arrow from "../svgs/Arrow"

const className = {
  card: "shadow-panel p-4 pb-8 rounded-lg relative",
  tag: "rounded-full  font-semibold px-2 py-0.5",
  header: "font-bold text-2xl my-2",
  text: "mb-2",
  button: "underline absolute bottom-2 group flex items-center gap-1 hover:text-teal-500 transition duration-75",
}

const Features = () => {
  return (
    <section className="my-16 sm:my-36">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 px-12">
        Upgrade your browser right from when you open it
      </h1>
      <div className="flex grid-cols-3 gap-8 max-w-screen-xl mx-auto my-12 px-4 sm:px-12 lg:px-32 md:grid flex-col">
        <div className={className.card}>
          <span className={`bg-green-300 text-green-700 ${className.tag}`}>Faster</span>
          <h2 className={className.header}>Instant Startup</h2>
          <p className={className.text}>
            Some text goes here describing how everything is made to be really fast so that it opens really quickly
          </p>
          <a className={className.button}>
            Feel the speed
            <Arrow />
          </a>
        </div>
        <div className={className.card}>
          <span className={`bg-teal-300 text-teal-700 ${className.tag}`}>Customizable</span>
          <h2 className={className.header}>Modify Everything</h2>
          <p className={className.text}>
            With rich customization options, you can make Nexo Start your own. Nexo start is also fully open source, so
            if you dont like something, you can change it.
          </p>
          <a href="https://github.com/DominicClerici/nexo-start" target="_blank" className={className.button}>
            See the GitHub <Arrow />
          </a>
        </div>
        <div className={className.card}>
          <span className={`bg-violet-300 text-violet-700 ${className.tag}`}>Secure</span>
          <h2 className={className.header}>Everything Local</h2>
          <p className={className.text}>All data is stored locally on your machine. No tracking, no ads.</p>
          <Link href={"/privacy"} className={className.button}>
            Privacy Policy <Arrow />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features
