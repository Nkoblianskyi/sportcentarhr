"use client"
import { Award, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onTopOffersClick: () => void
  onAdvertiserInfoClick: () => void
  onAgeRestrictionClick: () => void
}

export function HeroSection({ onTopOffersClick, onAdvertiserInfoClick, onAgeRestrictionClick }: HeroSectionProps) {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString("hr-HR", { month: "long" })} ${currentDate.getFullYear()}`

  return (
    <section className="relative py-8 sm:py-10 md:py-12 text-white overflow-hidden bg-gradient-to-b from-black/70 to-black/50 z-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-primary/30">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Ažurirano {formattedDate}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in-up text-center text-balance leading-tight font-display">
          Najbolje Kladionice
          <br />
          <span className="text-primary">u Hrvatskoj 2025</span>
        </h1>

        <p
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 animate-fade-in-up text-center leading-relaxed"
          style={{ animationDelay: "100ms" }}
        >
          Stručne recenzije, usporedbe bonusa i objektivne ocjene svih licenciranih sportskih kladionica u Hrvatskoj
        </p>

        {/* Feature badges */}
        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Image src="/flag.png" width={20} height={20} alt="Logo" />
            <span className="text-sm font-semibold">100% Licencirane</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">Provjerene Ocjene</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">Ekskluzivni Bonusi</span>
          </div>

          <div className="flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">Najbolji Koeficijenti</span>
          </div>
        </div>

      </div>
    </section>
  )
}
