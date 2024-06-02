import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import LayoutContainer from "./components/ui/layout-container"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Portfolio | Pawan Kanhere",
  description: "Personal portfolio website of Pawan Kanhere - Full Stack Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <LayoutContainer>{children}</LayoutContainer>
      </body>
    </html>
  )
}
