import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'B Nandivardhan Reddy | Embedded Systems & IoT',
  description: 'Embedded Systems & IoT Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
