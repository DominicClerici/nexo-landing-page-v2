const AccordionRow = ({ title, children, last, htmlId }) => {
  return (
    <div className={`py-5 border-black/20 ${!last && "border-b"}`}>
      <input type="checkbox" id={htmlId} className="sr-only peer" />
      <label htmlFor={htmlId} className="flex items-center justify-between cursor-pointer">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <svg
          className={`w-6 h-6 text-gray-800`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </label>
      <div className="overflow-hidden peer-checked:max-h-none max-h-0">
        <p className="text-gray-700 mt-4">{children}</p>
      </div>
    </div>
  )
}

const QA = () => {
  return (
    <section className="my-16 sm:my-36 max-w-screen-lg mx-auto px-12 box-content">
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 px-12">
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
      <AccordionRow htmlId={"browserSup"} last={true} title="What browsers can I use Nexo Start on?">
        Currently Nexo Start supports Google Chrome and Mozilla Firefox.
      </AccordionRow>
    </section>
  )
}

export default QA
