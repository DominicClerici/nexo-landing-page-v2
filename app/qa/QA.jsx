const AccordionRow = ({ title, children, last, htmlId }) => {
  return (
    <div className={`border-black/20 py-5 ${!last && "border-b"}`}>
      <input type="checkbox" id={htmlId} className="peer sr-only" />
      <label htmlFor={htmlId} className="flex cursor-pointer items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <svg
          className={`h-6 w-6 text-gray-800`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="max-h-0 overflow-hidden peer-checked:max-h-none">
        <p className="mt-4 text-gray-700">{children}</p>
      </div>
    </div>
  )
}

const QA = () => {
  return (
    <section className="mx-auto my-16 box-content max-w-screen-lg px-12 sm:my-36">
      <h1 className="px-12 text-center text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
        Questions? Answers.
      </h1>
      <AccordionRow htmlId={"costAny"} title="Does Nexo Start cost anything?">
        No, Nexo Start is free to use. We do not and never will charge any fees for using the extension.
      </AccordionRow>
      <AccordionRow htmlId={"installInst"} title="How do I install Nexo Start?">
        Simply download the extension from the Chrome web store or the Firefox web store. Thats it!
      </AccordionRow>
      <AccordionRow htmlId={"browserSup"} last={true} title="What browsers can I use Nexo Start on?">
        Currently Nexo Start supports Google Chrome and Mozilla Firefox.
      </AccordionRow>
    </section>
  )
}

export default QA
