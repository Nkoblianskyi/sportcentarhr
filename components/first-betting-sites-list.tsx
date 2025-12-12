"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ExternalLink, CheckCircle } from "lucide-react"
import { firstListSites, type BettingSite } from "@/data/betting-sites"

export function FirstBettingSitesList() {
  const [sites, setSites] = useState<BettingSite[]>([])

  useEffect(() => {
    setSites(firstListSites)
  }, [])

  const renderStars = (rating: number, className = "w-4 h-4") => {
    const starRating = rating / 2

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

      if (fillPercentage >= 100) {
        return <Star key={i} className={`${className} fill-primary text-primary`} />
      } else if (fillPercentage > 0) {
        return (
          <div key={i} className={`relative ${className}`}>
            <Star className={`${className} text-slate-300 absolute`} />
            <div className="overflow-hidden absolute" style={{ width: `${fillPercentage}%` }}>
              <Star className={`${className} fill-primary text-primary`} />
            </div>
          </div>
        )
      } else {
        return <Star key={i} className={`${className} text-slate-300`} />
      }
    })
  }

  const getBadgeConfig = (index: number) => {
    const badges = [
      { text: "TOP IZBOR", bg: "bg-gradient-to-r from-amber-400 to-yellow-500", textColor: "text-black" },
      { text: "NAJPOPULARNIJI", bg: "bg-primary", textColor: "text-white" },
      { text: "NAJBOLJI BONUSI", bg: "bg-primary/90", textColor: "text-white" },
      { text: "PREMIUM", bg: "bg-primary/80", textColor: "text-white" },
    ]
    return badges[index] || null
  }

  return (
    <section
      id="first-rankings"
      className="py-10 sm:py-14 w-full bg-gradient-to-b from-primary/5 to-transparent relative z-10"
    >
      <div className="w-full max-w-[1080px] mx-auto px-4">

        <div className="space-y-4">
          {sites.map((site, index) => {
            const badge = getBadgeConfig(index)

            return (
              <Card
                key={site.id}
                className={`overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-fadeIn bg-white ${
                  index === 0
                    ? "ring-2 ring-amber-500 shadow-lg shadow-amber-500/20"
                    : "border border-border hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {badge && (
                  <div className={`w-full py-2 text-center font-bold text-sm ${badge.bg} ${badge.textColor}`}>
                    {badge.text}
                  </div>
                )}

                <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent className="p-0">
                    {/* Mobile Layout */}
                    <div className="flex flex-col md:hidden">
                      <div className="grid grid-cols-2">
                        <div className="bg-muted p-4 flex flex-col items-center justify-center space-y-3">
                          <div className="p-3 rounded-lg bg-black border border-border">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              width={140}
                              height={80}
                              className="h-10 max-w-full object-contain"
                            />
                          </div>

                          <div className="text-center">
                            <div className="text-xs text-muted-foreground mb-1">{site.reviews} recenzija</div>
                            <div className="flex items-center justify-center gap-1">
                              {renderStars(site.rating, "w-3 h-3")}
                              <span className="ml-1 text-sm font-bold text-foreground">{site.rating.toFixed(1)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-card p-4 flex flex-col items-center justify-center space-y-3">
                          <div className="text-center w-full">
                            <div className="text-primary mb-1 font-semibold text-sm">Bonus Dobrodošlice</div>
                            <div className="text-xl font-bold text-foreground">{site.bonus}</div>
                            {site.dopBonus && (
                              <div className="text-muted-foreground text-xs mt-0.5">{site.dopBonus}</div>
                            )}
                          </div>

                          <Button className="px-5 py-2 rounded font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg">
                            Preuzmi Bonus
                          </Button>

                          <div className="text-xs font-semibold text-foreground">{site.name}</div>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex flex-col">
                      <div className="flex items-center">
                        <div className="w-20 h-full flex items-center justify-center bg-muted border-r border-border">
                          <span
                            className={`text-3xl font-black font-display ${index === 0 ? "text-amber-500" : "text-primary"}`}
                          >
                            #{index + 1}
                          </span>
                        </div>

                        <div className="bg-black p-5 flex items-center justify-center min-w-[180px] border-r border-border">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={160}
                            height={80}
                            className="h-16 max-w-full object-contain"
                          />
                        </div>

                        <div className="flex-1 p-6 bg-card">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 text-center">
                              <div className="text-primary text-sm font-bold mb-1">BONUS DOBRODOŠLICE</div>
                              <div className="font-black text-foreground text-2xl font-display">{site.bonus}</div>
                              {site.dopBonus && (
                                <div className="text-muted-foreground text-sm mt-1">{site.dopBonus}</div>
                              )}
                            </div>

                            <div className="text-center px-8 border-l border-r border-border">
                              <span
                                className={`text-4xl font-black font-display ${index === 0 ? "text-amber-500" : "text-primary"}`}
                              >
                                {site.rating.toFixed(1)}
                              </span>
                              <div className="text-xs text-muted-foreground mt-1">{site.reviews} recenzija</div>
                              <div className="flex items-center gap-0.5 mt-2 justify-center">
                                {renderStars(site.rating, "w-4 h-4")}
                              </div>
                            </div>

                            <div className="flex flex-col items-center gap-3 pl-8">
                              <Button className="px-8 py-6 rounded font-bold text-base flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30">
                                Preuzmi Bonus
                                <ExternalLink className="w-5 h-5" />
                              </Button>
                              <span className="text-sm font-bold text-foreground">{site.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full bg-muted py-2.5 px-4 flex items-center justify-center gap-6 text-xs text-muted-foreground border-t border-border">
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle className="w-4 h-4 text-primary" /> 18+ Licencirano
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle className="w-4 h-4 text-primary" /> Sigurne Uplate
                        </span>
                        <span className="flex items-center gap-1.5 font-medium">
                          <CheckCircle className="w-4 h-4 text-primary" /> Brze Isplate
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
