'use client'

const packages = [
  {
    name: "CenterOS Starter",
    subtitle: "Ihre Basis für Sichtbarkeit & Kommunikation – powered by CenterOS",
    description: "Ideal für Center, die digital sichtbar und redaktionell betreut starten möchten.",
    features: [
      "Professionelle Website mit eigenem CMS (Mallcockpit)",
      "Social Media-Redaktion für Posts, Aktionen & Ads",
      "Basic Reportings über Ihre Web- & Social Media-KPIs",
      "Direkte Kommunikation mit unserer Redaktion (z. B. per Foto-Upload)",
      "Integrierter KI-Chatbot für Besucherfragen"
    ],
    popular: false,
    color: "blue"
  },
  {
    name: "CenterOS Active",
    subtitle: "Ihr Center lebt – vernetzt, interaktiv, datengestützt",
    description: "Für Center, die aktiv mit Kunden, Mietern und Besuchern kommunizieren möchten.",
    features: [
      "Interaktive MediaStelen mit Welcome Deals & Couponing",
      "Dashboard mit Besucherzahlen, Social Media Insights & Web-KPIs",
      "QR-Mängelmelder für Kundenfeedback direkt an die Haustechnik",
      "Monatsumsatzmeldung durch Ihre Mieter – direkt im System",
      "KI-basierte Auswertung & Prozessautomatisierung im Hintergrund"
    ],
    popular: true,
    color: "cyan"
  },
  {
    name: "CenterOS Master",
    subtitle: "Alle Daten, alle Tools, alle Touchpoints – zentral gesteuert",
    description: "Die Komplettlösung für Betreiber mit höchsten Ansprüchen an Effizienz, Daten und Skalierbarkeit.",
    features: [
      "Vollständiges Analyse- & Reporting-Dashboard inkl. API-Anbindung",
      "Steuerung sämtlicher Inhalte, Displays & Touchpoints",
      "Schnittstellen zu Besucherfrequenzmessung, Parksystem, CRM u. v. m.",
      "Verwaltung mehrerer Center über das Property-Cockpit",
      "KI als technologische Grundlage für Steuerung & Automatisierung"
    ],
    popular: false,
    color: "purple"
  }
]

export default function PricingTable() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welches Paket passt zu Ihrem Center?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ob kleines Center oder Betreiber mit Portfolio – PropertyOS passt sich an Ihre Anforderungen an.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white/95 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-cyan-500 lg:scale-105' : ''
              } ${pkg.popular ? 'pt-6' : ''}`}
              style={{
                boxShadow: pkg.popular
                  ? '0 25px 50px rgba(6, 182, 212, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)'
                  : '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = pkg.popular
                  ? '0 35px 70px rgba(6, 182, 212, 0.2), 0 15px 35px rgba(0, 0, 0, 0.15), 0 6px 16px rgba(0, 0, 0, 0.08)'
                  : '0 30px 60px rgba(0, 0, 0, 0.12), 0 12px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = pkg.popular
                  ? '0 25px 50px rgba(6, 182, 212, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)'
                  : '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap">
                    Beliebtestes Paket
                  </div>
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    pkg.color === 'blue' ? 'text-blue-600' :
                    pkg.color === 'cyan' ? 'text-cyan-600' :
                    pkg.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Top Features:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          pkg.color === 'blue' ? 'bg-blue-100' :
                          pkg.color === 'cyan' ? 'bg-cyan-100' :
                          pkg.color === 'purple' ? 'bg-purple-100' : 'bg-gray-100'
                        }`}>
                          <span className={`text-xs font-bold ${
                            pkg.color === 'blue' ? 'text-blue-600' :
                            pkg.color === 'cyan' ? 'text-cyan-600' :
                            pkg.color === 'purple' ? 'text-purple-600' : 'text-gray-600'
                          }`}>✓</span>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Description */}
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm italic">
                    {pkg.description}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
                      : pkg.color === 'blue'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : pkg.color === 'purple'
                          ? 'bg-purple-600 hover:bg-purple-700 text-white'
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
                  }`}
                  style={{
                    boxShadow: pkg.popular
                      ? '0 8px 25px rgba(6, 182, 212, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)'
                      : pkg.color === 'blue'
                        ? '0 6px 20px rgba(37, 99, 235, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1)'
                        : pkg.color === 'purple'
                          ? '0 6px 20px rgba(147, 51, 234, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1)'
                          : '0 6px 20px rgba(75, 85, 99, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = pkg.popular
                      ? '0 12px 35px rgba(6, 182, 212, 0.4), 0 6px 16px rgba(0, 0, 0, 0.2)'
                      : pkg.color === 'blue'
                        ? '0 8px 30px rgba(37, 99, 235, 0.4), 0 4px 15px rgba(0, 0, 0, 0.15)'
                        : pkg.color === 'purple'
                          ? '0 8px 30px rgba(147, 51, 234, 0.4), 0 4px 15px rgba(0, 0, 0, 0.15)'
                          : '0 8px 30px rgba(75, 85, 99, 0.4), 0 4px 15px rgba(0, 0, 0, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = pkg.popular
                      ? '0 8px 25px rgba(6, 182, 212, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)'
                      : pkg.color === 'blue'
                        ? '0 6px 20px rgba(37, 99, 235, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1)'
                        : pkg.color === 'purple'
                          ? '0 6px 20px rgba(147, 51, 234, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1)'
                          : '0 6px 20px rgba(75, 85, 99, 0.3), 0 3px 10px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  Paket wählen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Alle Funktionen als PDF herunterladen
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Jetzt unverbindlich beraten lassen
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
