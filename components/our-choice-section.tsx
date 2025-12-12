"use client"

import { firstListSites } from "@/data/betting-sites"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Star, Trophy, ExternalLink, CheckCircle, Award } from "lucide-react"

export function OurChoiceSection() {
  const topSite = firstListSites[0]

  const renderStars = (rating: number, className = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

      if (fillPercentage >= 100) {
        return <Star key={i} className={`${className} fill-amber-400 text-amber-400`} />
      } else if (fillPercentage > 0) {
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-slate-300 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-amber-400 text-amber-400`} />
            </div>
          </div>
        )
      } else {
        return <Star key={i} className={`${className} text-slate-300`} />
      }
    })
  }

  return (
    <section className="py-16 sm:py-20 w-full bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-[1080px] mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-full mb-4">
            <Trophy className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-bold text-amber-700">Izbor Uredništva 2025</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Naša #1 Preporuka</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nakon opsežnog testiranja i analize svih kriterija, ova platforma se izdvaja kao najbolji izbor za hrvatske
            igrače
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-2 border-amber-400/50 bg-white relative">
          {/* Premium badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Najbolji Izbor</span>
            </div>
          </div>

          <Link href={topSite.url} target="_blank" rel="noopener noreferrer" className="block group">
            <CardContent className="p-0">
              {/* Mobile Layout */}
              <div className="flex flex-col md:hidden">
                <div className="bg-gradient-to-r from-primary to-accent text-white py-3 text-center font-bold text-sm flex items-center justify-center gap-2">
                  <Trophy className="w-4 h-4" /> TOP KLADIONICA 2025
                </div>
                <div className="grid grid-cols-2">
                  <div className="bg-slate-50 p-5 flex flex-col items-center justify-center space-y-3">
                    <div className="p-4 rounded-xl bg-slate-900 shadow-lg">
                      <Image
                        src={topSite.logo || "/placeholder.svg"}
                        alt={topSite.name}
                        width={140}
                        height={80}
                        className="h-10 max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-1">{topSite.reviews} recenzija</div>
                      <div className="flex items-center justify-center gap-1">
                        {renderStars(topSite.rating, "w-3 h-3")}
                        <span className="ml-1 text-sm font-bold text-slate-800">{topSite.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-5 flex flex-col items-center justify-center space-y-3">
                    <div className="text-center">
                      <div className="text-primary mb-1 font-bold text-sm">Bonus Dobrodošlice</div>
                      <div className="text-xl font-bold text-slate-900">{topSite.bonus}</div>
                      {topSite.dopBonus && <div className="text-slate-600 text-xs mt-1">{topSite.dopBonus}</div>}
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-lg">
                      Preuzmi Bonus
                    </Button>
                    <div className="text-xs font-semibold text-slate-700">{topSite.name}</div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-col">
                <div className="bg-gradient-to-r from-primary to-accent text-white py-3 text-center font-bold text-base flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5" /> NAJBOLJA KLADIONICA 2025
                </div>
                <div className="flex items-stretch">
                  <div className="bg-slate-900 p-8 flex items-center justify-center min-w-[200px]">
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      width={180}
                      height={100}
                      className="h-24 max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 p-8 bg-white">
                    <div className="flex items-center justify-between h-full">
                      <div className="flex-1">
                        <div className="text-primary text-base font-bold mb-2 uppercase tracking-wide">
                          Ekskluzivni Bonus
                        </div>
                        <div className="font-bold text-slate-900 text-3xl mb-2">{topSite.bonus}</div>
                        {topSite.dopBonus && <div className="text-slate-600 font-medium">{topSite.dopBonus}</div>}
                      </div>
                      <div className="text-center px-8 border-x border-slate-200">
                        <div className="text-4xl font-bold bg-gradient-to-br from-amber-500 to-amber-600 bg-clip-text text-transparent">
                          {topSite.rating.toFixed(1)}
                        </div>
                        <div className="flex items-center gap-0.5 mt-2 justify-center">
                          {renderStars(topSite.rating, "w-4 h-4")}
                        </div>
                        <div className="text-xs text-slate-500 mt-2">{topSite.reviews} recenzija</div>
                      </div>
                      <div className="flex flex-col items-center gap-3 pl-8">
                        <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 rounded-xl font-bold text-lg shadow-xl group-hover:scale-105 transition-transform flex items-center gap-2">
                          Preuzmi Bonus
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                        <span className="text-base font-bold text-slate-800">{topSite.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-slate-50 py-3 px-6 flex items-center justify-center gap-6 text-sm text-slate-600 border-t border-slate-200">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-600" /> 18+ Odgovorno Klađenje
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-600" /> Licencirano u RH
                  </span>
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-600" /> 100% Sigurno
                  </span>
                </div>
              </div>
            </CardContent>
          </Link>
        </Card>

        <p className="text-center mt-6 text-xs text-slate-500 leading-relaxed max-w-3xl mx-auto">{topSite.terms}</p>
      </div>
    </section>
  )
}
