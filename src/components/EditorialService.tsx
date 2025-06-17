const services = [
  "Social Posts inkl. Ad-Schaltung (Meta, Google)",
  "Eventkommunikation für Website & Touchpoints",
  "Erstellung passender Inhalte auf Basis Ihrer Info",
  "KPI-Auswertung & regelmäßige Berichte"
]

const workflowSteps = [
  {
    step: "Input",
    title: "Sie senden uns Ihr Foto",
    description: "Ein einfaches Foto oder eine kurze Info reicht",
    icon: "📸"
  },
  {
    step: "Redaktion",
    title: "Unser Team arbeitet",
    description: "Professionelle Aufbereitung für alle Kanäle",
    icon: "✏️"
  },
  {
    step: "Output",
    title: "Fertige Kommunikation",
    description: "Website, Social Media, MediaStelen – alles ready",
    icon: "🚀"
  }
]

export default function EditorialService() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sie senden ein Foto – wir machen Kommunikation daraus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unser Redaktionsteam kümmert sich um alles: Website-News, Social Media, Aktionen,
            Chatbot-Content und MediaStelen-Inhalte. Schnell. Professionell. Zielgruppengerecht.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Services List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Unsere Leistungen:</h3>
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">{service}</span>
                </li>
              ))}
            </ul>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Warum unser Redaktionsservice?</h4>
              <p className="text-blue-800 text-sm">
                Sparen Sie Zeit und Ressourcen. Unser erfahrenes Team sorgt für konsistente,
                professionelle Kommunikation über alle Kanäle hinweg.
              </p>
            </div>
          </div>

          {/* Workflow Infographic */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">So läuft&apos;s ab:</h3>
            <div className="space-y-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-1">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-8 mt-20 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Example Results */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Beispiele unserer Arbeit
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Example 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-blue-200">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-blue-600 font-medium">Social Media Post</p>
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Social Media Kampagne</h4>
              <p className="text-gray-600 text-sm">
                Aus einem Foto wird eine komplette Social Media Kampagne mit Posts, Stories und Ads.
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-48 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-orange-200">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌐</div>
                  <p className="text-orange-600 font-medium">Website News</p>
                </div>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Website Integration</h4>
              <p className="text-gray-600 text-sm">
                Automatische Erstellung von Website-News und MediaStelen-Content.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Redaktionsservice testen
          </button>
        </div>
      </div>
    </section>
  )
}
