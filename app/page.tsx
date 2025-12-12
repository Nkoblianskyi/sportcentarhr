"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { InfoSection } from "@/components/info-section"
import HowWeRank from "@/components/how-we-rank"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import TopOffersModal from "@/components/top-offers-modal"
import { FirstBettingSitesList } from "@/components/first-betting-sites-list"
import { OurChoiceSection } from "@/components/our-choice-section"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTopOffersModalOpen, setIsTopOffersModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopOffersModalOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/croatian-football-stadium-atmosphere-with-red-and-.jpg"
            alt="Croatian Football Stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <HeroSection
          onTopOffersClick={() => setIsTopOffersModalOpen(true)}
          onAdvertiserInfoClick={() => setIsAdvertiserModalOpen(true)}
          onAgeRestrictionClick={() => setIsAgeModalOpen(true)}
        />

        <FirstBettingSitesList />
      </div>

      {/* Main content */}
      <div className="flex-1 bg-background">
        <InfoSection />
        <HowWeRank />
        <OurChoiceSection />
        <FaqSection />
      </div>

      <TopOffersModal isOpen={isTopOffersModalOpen} onClose={() => setIsTopOffersModalOpen(false)} />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
