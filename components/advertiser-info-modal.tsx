"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Info, CheckCircle, AlertCircle, X, Shield } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
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
            backgroundImage: "url('/partners/partnership-handshake.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60"></div>
          <DialogTitle className="text-3xl font-black text-white relative z-10 font-display text-center">
            Informacije o Oglašavanju
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-primary p-5 rounded-r-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-base text-foreground leading-relaxed">
                  <strong className="font-black">SportCentar.HR</strong> je neovisna usporedna platforma za sportske
                  kladionice licencirane u Hrvatskoj. Naša misija je pružiti objektivne informacije i pomoći vam pronaći
                  najbolju kladionicu za vaše potrebe.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              Kako Zarađujemo
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              SportCentar.HR zarađuje proviziju kada se registrirate kod naših partnerskih kladionica putem naših
              preporuka i poveznica. Ova provizija omogućava nam održavanje besplatne usluge, stalno ažuriranje
              informacija i kontinuirano poboljšanje platforme.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Važno:</strong> Provizija koju primamo ne utječe na vaše troškove niti
              na bonus koji primate. Vi dobivate iste uvjete kao i korisnici koji se registriraju direktno na stranici
              kladionice.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-black text-foreground mb-4 font-display">Naša Načela</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-base text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Surađujemo isključivo s licenciranim operatorima u Hrvatskoj</span>
              </li>
              <li className="flex items-center gap-3 text-base text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Ocjene i recenzije su potpuno neovisne i objektivne</span>
              </li>
              <li className="flex items-center gap-3 text-base text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Aktivno promoviramo odgovorno klađenje i zaštitu igrača</span>
              </li>
              <li className="flex items-center gap-3 text-base text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Transparentne i provjerene informacije u svim recenzijama</span>
              </li>
              <li className="flex items-center gap-3 text-base text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Dnevno ažuriranje bonusa i promocija</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 p-5 rounded-xl flex items-start gap-4 border border-amber-200">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm text-foreground leading-relaxed mb-2">
                <strong>Odricanje od odgovornosti:</strong> Sportsko klađenje nosi rizike.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Igrajte odgovorno i samo s novcem koji si možete priuštiti izgubiti. Potražite pomoć ako primijetite
                znakove problematičnog klađenja.
              </p>
            </div>
          </div>

          <Button
            onClick={onClose}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 font-bold text-base shadow-lg"
          >
            Razumijem
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
