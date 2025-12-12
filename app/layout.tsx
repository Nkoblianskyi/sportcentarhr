import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import CookieConsentBanner from "@/components/cookie-consent-banner"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "SportCentar HR | Vodič za Sportsko Klađenje u Hrvatskoj",
  description:
    "SportCentar HR - Vaš pouzdani vodič za najbolje sportske kladionice u Hrvatskoj. Ekskluzivni bonusi, detaljne recenzije i savjeti za odgovorno klađenje.",
  metadataBase: new URL("https://sportcentarhr.com"),
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr" className={`${inter.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieConsentBanner />
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
