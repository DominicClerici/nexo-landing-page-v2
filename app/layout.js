import { Instrument_Sans } from "next/font/google"
import "./globals.css"
import Header from "./Header"
import Footer from "./Footer"

const instrum = Instrument_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Nexo Start - New Tab",
  description:
    "Nexo Start is a new tab extension that provides a clean and minimalistic interface to help you stay focused and productive.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={instrum.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
