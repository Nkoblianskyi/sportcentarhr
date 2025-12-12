import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Shield, Eye, Lock, UserCheck, Database, Mail, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Politika Privatnosti | SportCentar HR",
  description:
    "Saznajte kako SportCentar.HR prikuplja, koristi i štiti vaše osobne podatke u skladu s GDPR regulativom.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-secondary via-secondary to-black text-white py-12 sm:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/30">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-slate-300 font-semibold">PRAVNI DOKUMENTI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 font-display">Politika Privatnosti</h1>
            <p className="text-slate-300 text-lg">
              Posljednje ažuriranje: <strong className="text-white">Siječanj 2025</strong>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Intro */}
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
              <p className="text-foreground leading-relaxed text-lg">
                Vaša privatnost i sigurnost podataka su nam na prvom mjestu. Ovaj dokument detaljno objašnjava kako
                platforma <strong>SportCentar.HR</strong> (sportcentarhr.com) prikuplja, koristi, čuva i štiti vaše
                osobne podatke u skladu s Općom uredbom o zaštiti podataka (GDPR) i hrvatskim zakonodavstvom.
              </p>
            </div>

            {/* Section 1 */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-foreground font-display">Koje Podatke Prikupljamo</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Kontakt informacije:</strong> Email adresa pri pretplati na
                    newsletter
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Sportske preferencije:</strong> Odabrani sportovi i kladionice
                    za personalizaciju
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Podaci o pregledavanju:</strong> Stranice koje posjećujete,
                    vrijeme boravka
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Dobna potvrda:</strong> Potvrda da ste stariji od 18 godina
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Tehnički podaci:</strong> IP adresa, tip uređaja, preglednik
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-black text-foreground font-display">Kako Koristimo Vaše Podatke</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Pružanje objektivnih usporedbi i recenzija licenciranih kladionica u Hrvatskoj</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Personaliziranje preporuka i sadržaja prema vašim sportskim interesima</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Slanje obavijesti o ekskluzivnim bonusima i najboljim ponudama kladionica</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Osiguranje usklađenosti s hrvatskom regulativom i zaštita maloljetnika</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Zaštita od prijevara, zlouporabe i neovlaštenog pristupa platformi</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Analiza statistike posjeta i poboljšanje korisničkog iskustva</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-foreground font-display">Sigurnost Vaših Podataka</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                SportCentar.HR implementira najsavremenije sigurnosne mjere kako bi zaštitio vaše osobne podatke od
                neovlaštenog pristupa, izmjene, otkrivanja ili uništenja:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-muted rounded-xl p-4 border-2 border-primary/20">
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-semibold text-center">SSL/TLS Enkripcija</span>
                  </div>
                </div>
                <div className="bg-muted rounded-xl p-4 border-2 border-primary/20">
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-semibold text-center">Sigurni Serveri u EU</span>
                  </div>
                </div>
                <div className="bg-muted rounded-xl p-4 border-2 border-primary/20">
                  <div className="flex items-center justify-center gap-2">
                    <UserCheck className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-semibold text-center">Ograničen Pristup</span>
                  </div>
                </div>
                <div className="bg-muted rounded-xl p-4 border-2 border-primary/20">
                  <div className="flex items-center justify-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-semibold text-center">Redovne Provjere</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-foreground font-display">Vaša GDPR Prava</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-base">
                U skladu s GDPR regulativom, imate sljedeća prava u odnosu na vaše osobne podatke:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-muted rounded-lg p-4">
                  <span className="font-black text-primary text-lg min-w-[160px]">Pravo pristupa</span>
                  <span className="text-muted-foreground">
                    Zatražite kopiju svih osobnih podataka koje čuvamo o vama
                  </span>
                </div>
                <div className="flex items-start gap-4 bg-muted rounded-lg p-4">
                  <span className="font-black text-primary text-lg min-w-[160px]">Pravo na ispravak</span>
                  <span className="text-muted-foreground">Ispravite netočne ili nepotpune informacije</span>
                </div>
                <div className="flex items-start gap-4 bg-muted rounded-lg p-4">
                  <span className="font-black text-primary text-lg min-w-[160px]">Pravo na brisanje</span>
                  <span className="text-muted-foreground">Zatražite brisanje svojih podataka ("Pravo na zaborav")</span>
                </div>
                <div className="flex items-start gap-4 bg-muted rounded-lg p-4">
                  <span className="font-black text-primary text-lg min-w-[160px]">Pravo na prigovor</span>
                  <span className="text-muted-foreground">Usprotivite se obradi svojih podataka</span>
                </div>
                <div className="flex items-start gap-4 bg-muted rounded-lg p-4">
                  <span className="font-black text-primary text-lg min-w-[160px]">Pravo prenosivosti</span>
                  <span className="text-muted-foreground">Zatražite prijenos podataka drugom pružatelju</span>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-black text-foreground font-display">Kolačići (Cookies)</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                SportCentar.HR koristi kolačiće za poboljšanje korisničkog iskustva. Za detaljne informacije o vrsti
                kolačića koje koristimo i kako ih možete kontrolirati, molimo pročitajte našu{" "}
                <a href="/cookie-policy" className="text-primary hover:text-primary/80 underline font-semibold">
                  Politiku Kolačića
                </a>
                .
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-7 h-7 text-white" />
                <h2 className="text-2xl font-black font-display">Kontakt za Privatnost</h2>
              </div>
              <p className="mb-6 text-white/90 text-base">
                Za sva pitanja vezana uz zaštitu privatnosti i korištenje podataka, kontaktirajte nas:
              </p>
              <div className="space-y-3 text-base">
                <p>
                  <strong>Email:</strong> privatnost@sportcentarhr.com
                </p>
                <p>
                  <strong>DPO (Data Protection Officer):</strong> dpo@sportcentarhr.com
                </p>
                <p>
                  <strong>Opći kontakt:</strong> info@sportcentarhr.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
