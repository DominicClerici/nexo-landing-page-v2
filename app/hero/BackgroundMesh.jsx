const GradientComponent = ({ gradient }) => {
  const random = Math.floor(Math.random() * 5)
  return (
    <div
      style={{
        backgroundImage: gradient,
        animation: `topFadeInOut 5s ${random}s ease-in-out infinite`,
      }}
      className={`absolute inset-0 h-full w-full`}
    ></div>
  )
}

const BackgroundMesh = () => {
  return (
    <div className="animate-simple-fade-in-delayed absolute left-0 top-0 -z-10 h-screen w-screen">
      <GradientComponent gradient="radial-gradient(ellipse 30% 90% at 0% -25%, #428fc7 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 70% at 10% -25%, #8d48db 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 80% at 20% -25%, #ca48db 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 75% at 30% -25%, #db48cc 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 65% at 40% -25%, #ca48db 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 90% at 50% -25%, #5c48db 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 80% at 60% -25%, #4a48db 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 76% at 70% -25%, #48b9db 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 50% at 80% -25%, #48dba0 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 70% at 90% -25%, #ca48db 0%, transparent 100%)" />
      <GradientComponent gradient="radial-gradient(ellipse 30% 50% at 100% -25%, #48bedb 0%, transparent 100%)" />
    </div>
  )
}

export default BackgroundMesh
