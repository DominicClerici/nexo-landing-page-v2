import { poppins } from "../font"
import BackgroundMesh from "./BackgroundMesh"
import LiveDemoElement from "./liveDemo/LiveDemoElement"

const Hero = () => {
  return (
    <section className="xs:px-8 relative overflow-hidden px-4 sm:px-12 md:px-20 lg:px-28 xl:px-40">
      {/* <div className="absolute w-screen h-[85vh] left-0 top-0 -z-10 shadow-xl shadow-black/20">
        <BackgroundMesh />
      </div> */}
      <BackgroundMesh />
      <div className="mx-auto max-w-screen-xl">
        <div className="flex min-h-[75vh] flex-col items-center">
          <div>
            <h1
              className={`mx-auto mt-32 mb-24 px-8 text-center text-3xl !leading-snug text-white sm:text-4xl lg:w-2/3 md:px-0 md:text-5xl xl:text-6xl ${poppins.className}`}
            >
              The organized, lightweight, and beautiful new tab.
            </h1>
            <LiveDemoElement />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
