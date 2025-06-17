const features = [
  {
    name: "Website mit eigenem CMS (Mallcockpit)",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "Social Media-Redaktion inkl. Ads",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "Direkte Content-Übermittlung an Redaktion",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "QR-Mängelmelder zur Haustechnik",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "KI-Chatbot",
    starter: true,
    active: true,
    master: true
  },
  {
    name: "MediaStele mit Welcome Deals & Couponing",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Mieter-Umsatzmeldung",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Dashboard mit Web-, Social- & Besucher-KPIs",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Steuerung von Touchpoints & digitalen Inhalten",
    starter: false,
    active: true,
    master: true
  },
  {
    name: "Schnittstellen zu externen Systemen (z. B. Parkhaus)",
    starter: false,
    active: false,
    master: true
  },
  {
    name: "Property-Cockpit für mehrere Standorte",
    starter: false,
    active: false,
    master: true
  },
  {
    name: "Hardwareintegration (Displays, Sensoren etc.)",
    starter: false,
    active: false,
    master: true
  }
]

export default function FeatureComparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detaillierter Feature-Vergleich
          </h2>
          <p className="text-xl text-gray-600">
            Alle Funktionen und Module im Überblick
          </p>
        </div>
        
        {/* Mobile Cards View */}
        <div className="lg:hidden space-y-6">
          {['Starter', 'Active', 'Master'].map((plan, planIndex) => (
            <div key={plan} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`p-6 text-center ${
                planIndex === 0 ? 'bg-blue-600' :
                planIndex === 1 ? 'bg-cyan-600' : 'bg-purple-600'
              } text-white`}>
                <h3 className="text-2xl font-bold">CenterOS {plan}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {features.map((feature, index) => {
                    const hasFeature = planIndex === 0 ? feature.starter :
                                     planIndex === 1 ? feature.active : feature.master
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          hasFeature ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          <span className={`text-sm font-bold ${
                            hasFeature ? 'text-green-600' : 'text-gray-400'
                          }`}>
                            {hasFeature ? '✓' : '—'}
                          </span>
                        </div>
                        <span className={`text-sm ${hasFeature ? 'text-gray-900' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">
                  Modul / Funktion
                </th>
                <th className="px-8 py-6 text-center text-lg font-bold text-blue-600">
                  Starter
                </th>
                <th className="px-8 py-6 text-center text-lg font-bold text-cyan-600">
                  Active
                </th>
                <th className="px-8 py-6 text-center text-lg font-bold text-purple-600">
                  Master
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <td className="px-8 py-4 text-gray-900 font-medium">
                    {feature.name}
                  </td>
                  <td className="px-8 py-4 text-center">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      feature.starter ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <span className={`text-lg font-bold ${
                        feature.starter ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {feature.starter ? '✓' : '—'}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      feature.active ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <span className={`text-lg font-bold ${
                        feature.active ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {feature.active ? '✓' : '—'}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-center">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      feature.master ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <span className={`text-lg font-bold ${
                        feature.master ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {feature.master ? '✓' : '—'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Bottom CTAs */}
        <div className="text-center mt-12">
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
