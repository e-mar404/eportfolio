import './globals.css'
import Hamburger from './Hamburger'
import Navbar from './Navbar'
import { Mulish } from "next/font/google"

export const metadata = {
  title: 'eportfolio',
  description: 'Portfolio by Emilio Marin',
}

const mulish = Mulish(
  {
    subsets: ['latin'],
    weight: '400',
    style: 'normal' 
  }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Navbar />
        <Hamburger />
        {children}
      </body>
    </html>
  )
}
