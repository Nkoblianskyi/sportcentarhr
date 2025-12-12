import Link from "next/link"
import Image from "next/image"


export function SiteFooter() {
  return (
    <footer className="bg-secondary text-slate-300 py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group hover:opacity-80 transition-opacity">
              <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
              <span className="text-3xl font-bold font-display">
                <span className="text-red-600">Sport</span>
                <span className="text-blue-600">CentarHR</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Vaš pouzdani vodič kroz svijet sportskog klađenja u Hrvatskoj. Nepristrane recenzije, detaljne usporedbe i
              najbolji bonusi.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm font-display">NAVIGACIJA</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">
                  O Nama
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-primary transition-colors">
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-slate-400 hover:text-primary transition-colors">
                  Politika Kolačića
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible gambling */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm font-display">ODGOVORNO KLAĐENJE</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Samo za punoljetne osobe (18+)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Kockajte s mjerom</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Licencirane kladionice u RH</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Potražite pomoć ako je potrebno</span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm font-display">O SERVISU</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              SportCentar.HR je nezavisni portal koji pruža kvalitetne informacije o sportskim kladionicama dostupnim u
              Hrvatskoj.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>© 2025 SportCentar.HR</p>
              <p>Sva prava zadržana</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 pb-6">
          <h4 className="font-bold text-white mb-4 text-center text-sm font-display">
            ORGANIZACIJE ZA ODGOVORNO KLAĐENJE
          </h4>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl">
              <Link
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <div className="relative w-20 h-10">
                  <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <div className="relative w-20 h-10">
                  <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.hupis.hr/klok"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <div className="relative w-20 h-10">
                  <Image src="/hupis.png" alt="HUPIS" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gamstop.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <div className="relative w-20 h-10">
                  <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
                </div>
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 bg-white rounded-lg p-2 flex items-center justify-center"
              >
                <div className="relative w-20 h-10">
                  <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500 text-center leading-relaxed max-w-4xl mx-auto">
            <strong className="text-slate-400">Odricanje od odgovornosti:</strong> SportCentar.HR sadrži partnerske
            linkove te možemo primiti naknadu kada korisnici kliknu na linkove kladionica koje recenziramo. Sve
            objavljene informacije imaju isključivo informativnu svrhu. Sportsko klađenje može uzrokovati ovisnost.
            Klađenje je dozvoljeno samo punoljetnim osobama (18+). Kockajte odgovorno i samo onoliko koliko si možete
            priuštiti. Ukoliko imate problema s kockanjem, potražite stručnu pomoć na: HUPIS - Centar za kockanje
            (www.hupis.hr) ili PBS Vinokovščak (www.pbsvi.hr). © 2025 SportCentar.HR - sportcentarhr.com
          </p>
        </div>
      </div>
    </footer>
  )
}
