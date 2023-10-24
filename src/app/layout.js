import { Montserrat } from 'next/font/google'
import './globals.css'

const monse = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommetrica',
  description:"E-commerce consulting with a team of digital experts in marketing and tech dev-ops, assembled, especially for B2B and B2C"  ,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monse.className}>{children}</body>
    </html>
  )
}
