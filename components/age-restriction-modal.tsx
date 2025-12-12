"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, Globe, X, Shield } from "lucide-react"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-gradient-to-b from-white to-primary/5 relative border border-border shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all shadow-md border border-border"
        >
          <X className="w-5 h-5" />
        </button>

        <DialogHeader
          className="relative h-32 -mx-6 -mt-6 mb-6 flex items-center justify-center"
          style={{
            backgroundImage: "url('/croatian-football-stadium-crowd-atmosphere.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60"></div>
          <DialogTitle className="text-center text-3xl font-black text-white relative z-10 font-display">
            Samo 18+ Godina
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center space-y-3">
            <p className="text-xl font-bold text-foreground">Sportsko Klađenje - Samo za Punoljetne</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Korištenjem ove stranice potvrđujete da imate{" "}
              <strong className="text-foreground">18 godina ili više</strong> u skladu s hrvatskim zakonodavstvom i
              regulativom o igrama na sreću.
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-bold text-foreground mb-2">Odgovorno Klađenje</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kockanje može izazvati ovisnost i financijske probleme. Igrajte odgovorno, postavite osobna ograničenja
                i nikada ne kockajte više nego što si možete priuštiti izgubiti.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-5 space-y-3 border border-primary/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <p className="font-bold text-foreground">Pomoć i Podrška</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Besplatna linija za pomoć:</p>
                <p className="text-lg font-bold text-primary">0800 400 008</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Globe className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Online podrška:</p>
                <p className="text-primary font-semibold">kockanje-pomoc.hr</p>
              </div>
            </div>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 font-bold text-base shadow-lg"
          >
            Potvrđujem da imam 18+ godina
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
