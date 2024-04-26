import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from "next"
import './globals.css'
import { Navbar } from "@/components/Navbar"
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Radix",
  description: "A collection of high-quality React components.",
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning  className={GeistSans.className}>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
