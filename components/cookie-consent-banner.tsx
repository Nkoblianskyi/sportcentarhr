"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setShowBanner(false)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary border-t-4 border-primary shadow-2xl z-50 p-5 sm:p-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2 font-display">Koristimo Kolačiće (Cookies)</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                SportCentar.HR koristi kolačiće kako bi poboljšao vaše iskustvo na našoj web stranici. Koristimo
                analitičke kolačiće za praćenje statistike posjeta i marketinške kolačiće za personalizaciju sadržaja.
              </p>
              <Link
                href="/cookie-policy"
                className="text-sm text-primary hover:text-primary/80 underline inline-flex items-center gap-1"
              >
                <Settings className="w-3 h-3" />
                Više o našoj politici kolačića
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              onClick={declineCookies}
              className="flex-1 sm:flex-none text-sm px-6 py-3 h-auto border-2 border-white/20 text-white hover:bg-white/10 bg-transparent font-semibold"
            >
              Odbij
            </Button>
            <Button
              onClick={acceptCookies}
              size="lg"
              className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-white text-sm px-6 py-3 h-auto font-bold shadow-lg"
            >
              Prihvati Sve
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBanner(false)}
              className="sm:hidden p-2 h-auto text-white/60 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
