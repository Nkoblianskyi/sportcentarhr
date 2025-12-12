import { Shield, Target, Smartphone, CreditCard, Headphones, FileCheck, CheckCircle } from "lucide-react"

const rankingCriteria = [
  {
    id: 1,
    title: "Sigurnost i Licence",
    description: "Provjera službenih licenci Ministarstva financija RH, SSL enkripcije i zaštite korisničkih podataka",
    icon: Shield,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Kvaliteta Kvota",
    description: "Detaljna analiza i usporedba koeficijenata na najpopularnije sportove i lige",
    icon: Target,
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Mobilno Iskustvo",
    description: "Testiranje iOS/Android aplikacija, responzivnosti i funkcionalnosti klađenja uživo",
    icon: Smartphone,
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    id: 4,
    title: "Metode Plaćanja",
    description: "Provjera brzine transakcija, naknade i dostupnosti lokalnih metoda plaćanja",
    icon: CreditCard,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    title: "Korisnička Podrška",
    description: "Testiranje dostupnosti 24/7, kvalitete odgovora i podrške na hrvatskom jeziku",
    icon: Headphones,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: 6,
    title: "Bonus Uvjeti",
    description: "Analiza transparentnosti bonusa, realnosti uvjeta klađenja i dodatnih promocija",
    icon: FileCheck,
    gradient: "from-green-500 to-emerald-600",
  },
]

export default function HowWeRank() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Naša Metodologija</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Kako Testiramo Kladionice</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tim stručnjaka provodi sveobuhvatnu analizu svake platforme prema šest ključnih faktora
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rankingCriteria.map((criterion, index) => (
              <div
                key={criterion.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${criterion.gradient} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <criterion.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{criterion.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{criterion.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 sm:p-10 border border-slate-200">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Proces Detaljne Evaluacije</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Registracija i Verifikacija</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Otvaramo stvarne račune i prolazimo kroz proces verifikacije kako bismo testirali jednostavnost i
                      brzinu onboardinga.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Testiranje Depozita</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Uplaćujemo sredstva putem različitih metoda plaćanja i provjeravamo brzinu obrade, naknade i
                      sigurnost transakcija.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Klađenje i Analiza</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Postavljamo tikete na različite sportove, testiramo klađenje uživo, uspoređujemo kvote i
                      provjeravamo brzinu ažuriranja.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Isplate i Podrška</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Testiramo brzinu isplata, kontaktiramo podršku s različitim upitima i provjeravamo profesionalnost
                      odgovora.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-primary/20">
                <p className="text-slate-700 text-center leading-relaxed">
                  <strong className="text-primary">Važno:</strong> Naše ocjene se redovito ažuriraju. Platforme koje ne
                  održavaju standarde kvalitete automatski gube preporuke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
