import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  Users,
  Target,
  Award,
  Shield,
  Mail,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Smartphone,
  Zap,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "O Nama | SportCentar HR",
  description:
    "Upoznajte naš tim stručnjaka za sportsko klađenje i saznajte više o SportCentar HR - vodećoj platformi za usporedbu kladionica u Hrvatskoj.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-secondary via-secondary to-black text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/croatian-sports-celebration-stadium.jpg')] opacity-10 bg-cover bg-center" />
          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-sm font-bold rounded-full mb-6 border border-primary/30">
              O NAMA
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-balance font-display">
              SportCentar<span className="text-primary">.HR</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Vaš pouzdani vodič kroz svijet sportskog klađenja u Hrvatskoj
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Mission */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-black text-foreground mb-4 font-display">Naša Misija</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  <strong className="text-foreground">SportCentar.HR</strong> osnovan je s ciljem pružanja potpuno
                  objektivnih, detaljnih i transparentnih informacija o svim licenciranim kladionicama u Hrvatskoj.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Vjerujemo u potpunu neovisnost naših recenzija, promicanje odgovornog klađenja i zaštitu prava igrača.
                  Naš tim radi 24/7 kako bi vam donio najnovije informacije o bonusima, koeficijentima i promocijama.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">100% Objektivne Recenzije</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">Samo Licencirane Kladionice</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">Dnevno Ažurirane Informacije</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">Ekskluzivni Bonusi</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">Promocija Odgovornog Klađenja</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="bg-card rounded-2xl p-8 sm:p-10 border-2 border-border shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-black text-foreground font-display">Naš Stručni Tim</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                SportCentar.HR tim čine iskusni profesionalci s dugogodišnjim iskustvom u industriji sportskog klađenja.
                Naši analitičari testiraju svaku kladionicu prema strogim kriterijima prije nego što je preporučimo
                našim korisnicima.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                S preko <strong className="text-primary">15 godina kombiniranog iskustva</strong> u online klađenju,
                posjedujemo ekspertizu potrebnu za pružanje pouzdanih preporuka prilagođenih hrvatskom tržištu i
                hrvatskim igračima.
              </p>
            </section>

            {/* Stats */}
            <section className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white text-center">
                <div className="text-5xl font-black mb-2">50+</div>
                <div className="text-sm font-semibold opacity-90">Recenziranih Kladionica</div>
              </div>
              <div className="bg-gradient-to-br from-secondary to-black rounded-xl p-6 text-white text-center">
                <div className="text-5xl font-black mb-2">10K+</div>
                <div className="text-sm font-semibold opacity-90">Zadovoljnih Korisnika</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-white text-center">
                <div className="text-5xl font-black mb-2">24/7</div>
                <div className="text-sm font-semibold opacity-90">Podrška i Ažuriranja</div>
              </div>
            </section>

            {/* Evaluation criteria */}
            <section>
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-black text-foreground mb-3 font-display">Kako Ocjenjujemo Kladionice</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Svaka kladionica se evaluira prema rigoroznim kriterijima kako bismo osigurali najbolje preporuke
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Sigurnost & Licenca</h3>
                  <p className="text-sm text-muted-foreground">
                    Provjera licenciranja kod Ministarstva financija RH i međunarodnih regulatora
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Koeficijenti</h3>
                  <p className="text-sm text-muted-foreground">
                    Analiza konkurentnosti kvota i margina za sve popularne sportove
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Bonusi & Promocije</h3>
                  <p className="text-sm text-muted-foreground">
                    Evaluacija uvjeta bonusa i realnosti uvjeta za isplatu
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Mobilno Iskustvo</h3>
                  <p className="text-sm text-muted-foreground">
                    Testiranje mobilnih aplikacija i responzivnosti web stranice
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Brzina Isplata</h3>
                  <p className="text-sm text-muted-foreground">Testiranje brzine i pouzdanosti isplata dobitaka</p>
                </div>
                <div className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Korisnička Podrška</h3>
                  <p className="text-sm text-muted-foreground">
                    Evaluacija dostupnosti i kvalitete customer support tima
                  </p>
                </div>
              </div>
            </section>

            {/* Responsible gambling */}
            <section className="bg-gradient-to-br from-secondary via-secondary to-black text-white rounded-2xl p-8 sm:p-10">
              <h2 className="text-3xl font-black mb-6 font-display">Odgovorno Klađenje</h2>
              <p className="text-slate-200 leading-relaxed text-lg mb-6">
                SportCentar.HR aktivno promovira odgovorno klađenje kao temelj zdravog odnosa prema sportskim igrama na
                sreću. Sve kladionice koje preporučujemo licencirane su prema hrvatskim zakonima i nude alate za
                samoograničavanje.
              </p>
              <p className="text-slate-200 leading-relaxed text-lg mb-6">
                Potičemo sve korisnike da postave osobne limite depozita, gubitaka i vremena provedenog na klađenju. Ako
                primijetite znakove problematičnog ponašanja, odmah tražite stručnu pomoć.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <p className="text-white font-bold mb-2">Besplatna linija za pomoć:</p>
                <p className="text-2xl font-black text-primary">0800 400 008</p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-muted rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black text-foreground font-display">Kontaktirajte Nas</h2>
              </div>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Imate pitanja ili prijedloge? Naš tim je tu za vas!
              </p>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">
                  <strong>Email:</strong> info@sportcentarhr.com
                </p>
                <p className="text-foreground font-semibold">
                  <strong>Poslovni upiti:</strong> poslovno@sportcentarhr.com
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
