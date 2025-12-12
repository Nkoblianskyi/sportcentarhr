import { Shield, TrendingUp, Smartphone, Wallet, Clock, Award } from "lucide-react"

export function InfoSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Stručni Vodič</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
              Sigurno Klađenje u Hrvatskoj
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Otkrijte najbolje licencirane platforme i kladite se s povjerenjem uz naše detaljne recenzije
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Licencirane Kladionice</h3>
              <p className="text-slate-600 leading-relaxed">
                Sve preporučene platforme posjeduju službene licence Ministarstva financija RH i nude 100% siguran način
                klađenja s SSL enkripcijom.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vrhunski Koeficijenti</h3>
              <p className="text-slate-600 leading-relaxed">
                Analiziramo i uspoređujemo kvote na najpopularnije sportove - od nogometa i košarke do tenisa i
                e-sportova za najbolje isplate.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Brze Isplate</h3>
              <p className="text-slate-600 leading-relaxed">
                Testiramo brzinu isplata na svim platformama. Najbolje kladionice obrađuju povlačenja u roku od 24-48
                sati bez dodatnih naknada.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Atraktivni Bonusi</h3>
              <p className="text-slate-600 leading-relaxed">
                Od bonusa dobrodošlice do loyalty programa - otkrijte najpovoljnije promocije s transparentnim uvjetima
                i realnim zahtjevima za klađenje.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mobilno Klađenje</h3>
              <p className="text-slate-600 leading-relaxed">
                Sve top kladionice nude native aplikacije za iOS i Android s potpunom funkcionalnošću uključujući live
                streaming i klađenje uživo.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Odgovorno Klađenje</h3>
              <p className="text-slate-600 leading-relaxed">
                Sve platforme nude alate za samoisključenje, limite depozita i razdoblja hlađenja za sigurno i odgovorno
                iskustvo klađenja.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 sm:p-10 text-white text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">Započnite Pametno Klađenje</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              Odaberite jednu od naših provjerenih platformi i iskoristite ekskluzivne bonuse dobrodošlice. Sve
              kladionice su testirane i preporučene od stručnog tima.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Sigurno</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Licencirano</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Brze Isplate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
