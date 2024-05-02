import { poppins } from "../font"
import BackgroundMesh from "../hero/BackgroundMesh"

const className = {
  h3: "text-black/90 text-xl my-4",
  p: "text-black/75 my-2",
}
const page = () => {
  return (
    <section className="xs:px-8 relative mb-12 overflow-hidden px-4 pt-28 sm:px-12 md:px-20 lg:px-28 xl:px-40">
      <BackgroundMesh />
      <h1 className={`text-4xl text-white/90 ${poppins.className}`}>Privacy Policy</h1>
      <h2 className={`mb-32 mt-4 text-xl text-white/90 ${poppins.className}`}>tldr: No data is collected</h2>
      <p className={className.p}>
        This Privacy Policy governs the manner in which Nexo Start manages the privacy of users (each, a
        &quot;User&quot;) of the Nexo Start website (&quot;Website&quot;). This privacy policy applies to the Website
        and all products and services offered by Nexo Start.
      </p>

      <h3 className={className.h3}>What is personal data?</h3>
      <p className={className.p}>
        For the purposes of this Privacy Policy, &quot;personal data&quot; is considered any information relating to an
        identified or identifiable living individual. However, it&apos;s important to note that Nexo Start does not
        collect or process any personal data as we prioritize our Users&apos; privacy and data protection above all.
      </p>

      <h3 className={className.h3}>Personal and Non-personal identification information</h3>
      <p className={className.p}>
        Nexo Start does not collect personal or non-personal identification information from Users. Our policy ensures
        that Users can visit our Website without any obligation to provide personal identification information.
        Similarly, we do not collect non-personal identification information about Users.
      </p>

      <h3 className={className.h3}>Data you provide to us directly:</h3>
      <p className={className.p}>Nexo Start does not request or collect any data directly from Users.</p>

      <h3 className={className.h3}>Web browser cookies</h3>
      <p className={className.p}>
        Our Website does not use &quot;cookies&quot; to enhance User experience, as no data collection occurs through
        our platform.
      </p>

      <h3 className={className.h3}>How we use collected information</h3>
      <p className={className.p}>
        Since Nexo Start does not collect information from Users, there is no usage of personal information for
        improving the Website, sending periodic emails, or any other purpose.
      </p>

      <h3 className={className.h3}>Payment Processing</h3>
      <p className={className.p}>
        Nexo Start does not collect, process, or use any billing information as no data is collected from our Users.
      </p>

      <h3 className={className.h3}>How we protect your information</h3>
      <p className={className.p}>
        Given that Nexo Start does not collect or store any User data, the question of data protection in the
        traditional sense does not apply.
      </p>

      <h3 className={className.h3}>Sharing your personal information</h3>
      <p className={className.p}>
        Nexo Start does not sell, trade, or rent Users&apos; personal identification information to others as no such
        information is collected.
      </p>

      <h3 className={className.h3}>COPPA</h3>
      <p className={className.p}>
        The Children&apos;s Online Privacy Protection Act (“COPPA”) aims to give parents control over the information
        collected from their children online. Nexo Start adheres to the principles of COPPA, emphasizing that no
        information from children under the age of 13 is collected, as we do not collect any User data.
      </p>

      <h3 className={className.h3}>Changes to this privacy policy</h3>
      <p className={className.p}>
        Nexo Start reserves the right to update this privacy policy at any time. Such changes will be made public on our
        Website without direct notification to Users, as no personal data is collected. We encourage Users to review
        this policy periodically to stay informed.
      </p>

      <h3 className={className.h3}>Your acceptance of these terms</h3>
      <p className={className.p}>
        By using this Website, you acknowledge and accept this privacy policy. Your continued use of the Website will be
        deemed your acceptance of any adjustments to this policy, reflecting our steadfast commitment to not collecting
        or processing User data.
      </p>
    </section>
  )
}

export default page
