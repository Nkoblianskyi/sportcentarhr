"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Kako odabrati najbolju kladionicu u Hrvatskoj?",
    answer:
      "Pri odabiru najbolje kladionice potrebno je obratiti pažnju na nekoliko ključnih faktora: sigurnost i licence, širinu ponude sportova i tržišta, konkurentnost kvota, bonus ponude, kvalitetu korisničke podrške te brzinu isplata. Naš tim stručnjaka detaljno testira sve ove aspekte kako bi vam pružio objektivne recenzije i preporuke.",
  },
  {
    question: "Jesu li online kladionice u Hrvatskoj legalne?",
    answer:
      "Da, online klađenje u Hrvatskoj je potpuno legalno i regulirano. Sve kladionice koje preporučujemo posjeduju važeće licence i dozvole za rad u Hrvatskoj. Držimo se strogih kriterija sigurnosti i samo preporučujemo provjerene i pouzdane operatore koji poštuju sve zakonske propise.",
  },
  {
    question: "Kako funkcioniraju bonusi dobrodošlice?",
    answer:
      "Bonusi dobrodošlice su promocije koje kladionice nude novim korisnicima. Najčešće se radi o bonusima na prvi depozit, besplatnim okładима ili kombinaciji oboje. Važno je pročitati uvjete bonusa, uključujući zahtjeve za promet (wagering requirements) prije aktivacije. Naši pregledи detaljno objašnjavaju sve uvjete svakog bonusa.",
  },
  {
    question: "Koliko brzo mogu podići dobitak?",
    answer:
      "Brzina isplate ovisi o kladionici i izabranoj metodi plaćanja. E-novčanici (Skrill, Neteller) obično omogućuju najbrže isplate (24-48 sati), dok bankovni transferi mogu trajati 3-5 radnih dana. Sve preporučene kladionice nude sigurne i provjerene metode plaćanja s transparentnim rokovima isplate.",
  },
  {
    question: "Mogu li kladiti se putem mobilnog uređaja?",
    answer:
      "Da, sve moderne kladionice nude mobilne verzije svojih platformi. Većina ima optimizirane web stranice za mobilne uređaje, a mnoge nude i native aplikacije za iOS i Android. Mobilno klađenje omogućava pristup svim funkcijama, uključujući live klađenje, u svakom trenutku.",
  },
  {
    question: "Što je live klađenje?",
    answer:
      "Live klađenje (klađenje uživo) omogućava vam da se kladite na sportske događaje dok su u tijeku. Kvote se dinamički mijenjaju ovisno o situaciji u utakmici. Ova vrsta klađenja dodaje dodatnu razinu uzbuđenja i omogućava iskorištavanje momentum utakmice.",
  },
  {
    question: "Kako SportCentar.HR zarađuje?",
    answer:
      "SportCentar.HR zarađuje kroz partnerske programe s kladionicama koje preporučujemo. Kada se registrirate putem naših linkova, primamo proviziju bez ikakvih dodatnih troškova za vas. Ovo nam omogućava da pružamo besplatne i nepristrane recenzije, a istovremeno održavamo kvalitetu naših usluga.",
  },
  {
    question: "Jesu li vaše recenzije objektivne?",
    answer:
      "Da, naše recenzije su potpuno objektivne i temeljene na detaljnom testiranju. Naš tim stručnjaka koristi iste kriterije za sve kladionice i recenzira ih nepristrano. Bez obzira na partnerstva, uvijek ćemo istaknuti prednosti i nedostatke svake platforme kako biste mogli donijeti informiranu odluku.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Često Postavljana Pitanja</h2>
          <p className="text-slate-600 text-lg">Odgovori na najčešća pitanja o online klađenju u Hrvatskoj</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-slate-50"
              >
                <span className="font-semibold text-slate-900 pr-4 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-slate-700 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Imate dodatna pitanja?</p>
          <a
            href="mailto:podrska@sportcentarhr.com"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Kontaktirajte nas
          </a>
        </div>
      </div>
    </section>
  )
}
