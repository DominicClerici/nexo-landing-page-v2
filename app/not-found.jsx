import Link from "next/link"

const page = () => {
  return (
    <main className="xs:px-6 pm:px-24 relative mx-auto mt-16 max-w-screen-xl px-4 text-white sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="my-4 lg:my-12">Oops, you seem to have made your way to something I haven't built (yet, maybe).</p>
      <Link className="group relative inline-block w-fit" href="/">
        <span className="absolute rounded md:inset-0"></span>
        <span className="mmax:hover:border-teal-400 mmax:hover:text-teal-400 flex w-fit items-center gap-2 rounded border border-white/20 px-2 py-1 text-lg font-medium text-slate-200 transition-colors duration-75 ">
          <h3>Go back</h3>
          <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </Link>
    </main>
  )
}

export default page
