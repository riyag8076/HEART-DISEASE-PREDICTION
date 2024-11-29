import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Heart Disease Risk Detector',
  description: 'A AI& SOCIETY Project  tool to assess your risk of heart disease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold text-red-600">Heart Disease Risk Detector</h1>
            </div>
          </header>
          {children}
          <footer className="bg-gray-100 mt-12">
            <div className="container mx-auto px-4 py-6 text-center text-gray-600">
              <p>&copy;Heart Disease Risk Detector. For educational purposes only.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

