const problemSolutions = [
  {
    problem: "5 Tools, 10 Mails, 3 Telefonate pro Tag",
    solution: "Ein System für alles"
  },
  {
    problem: "Keine Zeit für Content",
    solution: "Redaktion inklusive"
  },
  {
    problem: "Keine aktuellen Zahlen zur Besucherfrequenz",
    solution: "Live-KPIs & Benchmarks"
  },
  {
    problem: "Mieterkommunikation unübersichtlich",
    solution: "Umsatzmeldungen direkt integriert"
  },
  {
    problem: "Social Media & Website laufen getrennt",
    solution: "Zentrale Verwaltung & Ausspielung"
  }
]

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Weg mit dem Tool-Chaos – rein in die digitale Übersicht
          </h2>
        </div>

        {/* Problem/Solution Comparison */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <div className="bg-red-50 p-8 rounded-xl border border-red-200">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">😤</div>
              <h3 className="text-2xl font-bold text-red-700">Aktuelle Probleme</h3>
            </div>
            <div className="space-y-6">
              {problemSolutions.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-700 text-lg font-bold">✗</span>
                  </div>
                  <span className="text-red-800 font-medium leading-relaxed">{item.problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 p-8 rounded-xl border border-green-200">
            <div className="flex items-center mb-8">
              <div className="text-4xl mr-4">✨</div>
              <h3 className="text-2xl font-bold text-green-700">Lösungen mit PropertyOS</h3>
            </div>
            <div className="space-y-6">
              {problemSolutions.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-700 text-lg font-bold">✓</span>
                  </div>
                  <span className="text-green-800 font-medium leading-relaxed">{item.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table for larger screens */}
        <div className="mt-16 hidden lg:block">
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-8 py-4 text-left text-lg font-bold text-red-700">Problem</th>
                  <th className="px-8 py-4 text-left text-lg font-bold text-green-700">Lösung mit PropertyOS</th>
                </tr>
              </thead>
              <tbody>
                {problemSolutions.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-8 py-6 text-red-800 font-medium">{item.problem}</td>
                    <td className="px-8 py-6 text-green-800 font-medium">{item.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">
            Bereit für den Wechsel zu einem einheitlichen System?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Jetzt Demo anfragen
          </button>
        </div>
      </div>
    </section>
  )
}
