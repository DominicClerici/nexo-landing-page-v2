import Image from "next/image"

const Weather = () => {
  return (
    <div className="relative z-10 flex items-center gap-4">
      <Image width={32} height={32} alt="Sun icon" src={`/WeatherDemo.png`} priority quality={100} />
      <h2 className="xs:text-2xl flex items-start text-xl text-white/90">
        72&deg;
        <span className="mt-[2px] text-sm font-semibold">F</span>
      </h2>
      <span className="xs:text-xl text-lg text-white/90">Sunny</span>
    </div>
  )
}

export default Weather
