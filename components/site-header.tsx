"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-center h-20 px-4">
        <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <span className="text-3xl font-bold font-display">
            <span className="text-red-600">Sport</span>
            <span className="text-blue-600">CentarHR</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 p-2">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Početna
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              O Nama
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privatnost
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kolačići
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
