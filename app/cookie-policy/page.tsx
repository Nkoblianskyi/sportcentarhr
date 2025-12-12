import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Cookie, BarChart, Cog, Target, Mail, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Politika Kolačića | SportCentar HR",
  description: "Saznajte kako SportCentar.HR koristi kolačiće za poboljšanje vašeg iskustva i zaštitu vaših podataka.",
}

export default function CookiePage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero */}
        <div className="bg-gradient-to-br from-secondary via-secondary to-black text-white py-12 sm:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-primary/30">
                <Cookie className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-slate-300 font-semibold">PRAVNI DOKUMENTI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-4 font-display">Politika Kolačića</h1>
            <p className="text-slate-300 text-lg">
              Posljednje ažuriranje: <strong className="text-white">Siječanj 2025</strong>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Intro */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <h2 className="text-2xl font-black text-foreground mb-4 font-display">Što su Kolačići?</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Kolačići (cookies) su male tekstualne datoteke koje se pohranjuju na vaš uređaj (računalo, mobitel,
                tablet) kada posjetite našu web stranicu <strong className="text-foreground">SportCentar.HR</strong>.
                Omogućuju nam da vas prepoznamo pri ponovnim posjetima i poboljšamo vaše iskustvo pregledavanja,
                pružajući personalizirane funkcionalnosti i osiguravajući optimalan rad stranice.
              </p>
            </section>

            {/* Cookie types */}
            <section>
              <h2 className="text-2xl font-black text-foreground mb-6 font-display">Vrste Kolačića Koje Koristimo</h2>
              <div className="space-y-5">
                <div className="bg-card rounded-2xl p-6 border-2 border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Cog className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-black text-foreground text-lg">1. Nužni Kolačići</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ovi kolačići su neophodni za osnovno funkcioniranje web stranice. Bez njih stranica ne bi mogla
                    raditi ispravno. Uključuju sigurnosne funkcionalnosti, obaveznu provjeru dobi (18+) za pristup
                    sadržaju o sportskom klađenju i pamćenje vaših postavki kolačića.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border-2 border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-black text-foreground text-lg">2. Analitički Kolačići</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Pomažu nam razumjeti kako posjetitelji koriste našu stranicu - koje sportove najčešće pretražujete,
                    koje kladionice vas zanimaju i koliko vremena provodite na pojedinim stranicama. Ovi podaci nam
                    omogućuju kontinuirano poboljšanje naših usluga i sadržaja.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border-2 border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-black text-foreground text-lg">3. Funkcionalni Kolačići</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Omogućuju našoj stranici da zapamti vaše osobne preferencije poput omiljenih timova, sportova koje
                    pratite, jezičnih postavki i prilagođenih filtera za prikaz sadržaja. Tako vam pružamo
                    personalizirano iskustvo pri svakoj posjeti.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border-2 border-border">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-black text-foreground text-lg">4. Marketinški Kolačići</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Koriste se za prikazivanje personaliziranih bonusa i promocija od licenciranih kladionica u
                    Hrvatskoj koje su relevantne za vaše interese. Pomažu nam da vam predstavimo najbolje ponude koje
                    odgovaraju vašim sportskim preferencijama.
                  </p>
                </div>
              </div>
            </section>

            {/* How we use */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <h2 className="text-2xl font-black text-foreground mb-6 font-display">Kako Koristimo Kolačiće</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Održavanje vaše sesije aktivnom i sigurnom tijekom pregledavanja</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Pamćenje vaših preferencija i omiljenih sportova za personalizaciju sadržaja</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Analiza performansi stranice i kontinuirano poboljšanje korisničkog iskustva</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Personaliziranje relevantnih bonusa i promocija prema vašim interesima</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Osiguranje usklađenosti s hrvatskim regulativama i zaštita maloljetnika</span>
                </li>
                <li className="flex items-start gap-3 text-base">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Prikupljanje statistike o posjećenosti i popularnosti sadržaja</span>
                </li>
              </ul>
            </section>

            {/* Management */}
            <section className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
              <h2 className="text-xl font-black text-foreground mb-4 font-display">Upravljanje Kolačićima</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Imate potpunu kontrolu nad kolačićima. Možete ih upravljati ili onemogućiti putem postavki vašeg web
                preglednika (Chrome, Firefox, Safari, Edge).
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <strong className="text-foreground">Napomena:</strong> Onemogućavanje određenih kolačića može utjecati
                na funkcionalnost stranice i vaše korisničko iskustvo. Nužni kolačići ne mogu biti onemogućeni jer su
                potrebni za osnovno funkcioniranje stranice.
              </p>
            </section>

            {/* Third party */}
            <section className="bg-card rounded-2xl p-8 border-2 border-border">
              <h2 className="text-2xl font-black text-foreground mb-4 font-display">Kolačići Trećih Strana</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Osim naših vlastitih kolačića, SportCentar.HR može koristiti kolačiće partnera i trećih strana:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Google Analytics</strong> - Za analitiku i statistiku
                    posjećenosti
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Partnerske kladionice</strong> - Za praćenje preporuka i bonusa
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-foreground">Društvene mreže</strong> - Za integraciju i dijeljenje sadržaja
                  </span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <Mail className="w-7 h-7 text-white" />
                <h2 className="text-2xl font-black font-display">Kontakt za Pitanja</h2>
              </div>
              <p className="mb-6 text-white/90">
                Za sva pitanja o našoj Politici Kolačića ili ako želite ostvariti svoja prava, kontaktirajte nas:
              </p>
              <div className="space-y-2">
                <p className="font-semibold">
                  <strong>Email:</strong> info@sportcentarhr.com
                </p>
                <p className="font-semibold">
                  <strong>Zaštita podataka:</strong> privatnost@sportcentarhr.com
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-muted rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Ova Politika Kolačića može biti povremeno ažurirana. Posljednja izmjena izvršena je{" "}
                <strong className="text-foreground">Siječanj 2025</strong>. Preporučujemo redovnu provjeru ove stranice
                kako biste bili informirani o bilo kakvim promjenama.
              </p>
            </section>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
