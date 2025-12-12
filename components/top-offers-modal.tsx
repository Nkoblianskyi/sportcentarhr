"use client"
import { X, Star, ExternalLink, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { firstListSites } from "@/data/betting-sites"
import { useEffect } from "react"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  useEffect(() => {
    if (isOpen && typeof window.updateLinkParams === "function") {
      window.updateLinkParams!()
    }
  }, [isOpen])

  if (!isOpen) return null

  const topSite = firstListSites[0]

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-white via-amber-50 to-white rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400 animate-scale-in">
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 bg-white hover:bg-amber-50 text-foreground z-10 w-10 h-10 p-0 rounded-full transition-all shadow-xl border-2 border-amber-300"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="relative h-32 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/golden-trophy-celebration-winner-podium.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/90 via-yellow-500/90 to-amber-500/90" />
          <div className="relative h-full flex flex-col items-center justify-center gap-2">
            <h2 className="text-3xl font-black text-white tracking-tight font-display">TOP PONUDA</h2>
            <p className="text-white/95 text-base font-semibold">Ekskluzivni Bonus za Vas</p>
          </div>
        </div>

        {/* Logo section */}
        <div className="bg-white mx-6 -mt-6 rounded-xl p-6 flex justify-center shadow-2xl relative z-10 border-2 border-amber-200">
          <img src={topSite.logo || "/placeholder.svg"} alt={topSite.name} className="h-16 w-auto object-contain" />
        </div>

        {/* Content */}
        <div className="p-6 pt-4">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 text-sm font-black px-4 py-2 rounded-full mb-3 border-2 border-amber-300">
              <Award className="w-4 h-4" />
              EKSKLUZIVNI BONUS
            </div>
            <div className="text-4xl font-black text-foreground mb-2 font-display">{topSite.bonus}</div>
            {topSite.dopBonus && <p className="text-base text-muted-foreground font-semibold">{topSite.dopBonus}</p>}
          </div>

          {/* Rating */}
          <div className="mb-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-5 border border-primary/20">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-muted-foreground mb-2 font-semibold">REJTING PLATFORME</p>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => {
                      const starRating = topSite.rating / 2
                      const fillPercentage = Math.max(0, Math.min(100, (starRating - i) * 100))

                      return (
                        <div key={i} className="relative">
                          <Star className="w-5 h-5 text-slate-300" />
                          <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
                            <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <span className="text-2xl font-black text-foreground">{topSite.rating}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-2 font-semibold">RECENZIJE</p>
                <p className="text-2xl font-black text-foreground">{topSite.reviews.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <Button
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-7 px-8 rounded-xl w-full mb-6 flex items-center justify-center gap-3 text-lg shadow-2xl shadow-emerald-600/40 transition-all hover:scale-[1.02] border-2 border-emerald-500/50"
            onClick={() => window.open(topSite.url, "_blank")}
          >
            Preuzmi Bonus Sada
            <ExternalLink className="w-6 h-6" />
          </Button>

          {/* Footer */}
          <div className="flex items-center justify-center gap-5 text-xs text-muted-foreground pt-5 border-t border-border">
            <span className="flex items-center gap-2 font-semibold">
              <CheckCircle className="w-5 h-5 text-emerald-600" /> 18+ Licencirano
            </span>
            <span className="flex items-center gap-2 font-semibold">
              <CheckCircle className="w-5 h-5 text-emerald-600" /> Sigurno
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopOffersModal
