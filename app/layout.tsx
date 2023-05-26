import Navbar from './Navbar'
import './globals.css'

export const metadata = {
  title: 'eportfolio',
  description: 'Portfolio by Emilio Marin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
