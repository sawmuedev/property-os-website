import {
  PencilSquareIcon,
  PencilIcon,
  ChatBubbleLeftIcon,
  ChartBarSquareIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    number: "01",
    title: "Sie melden ein Event",
    description: "\"Sommerschlussverkauf am 15.8.\" wird via App eingereicht.",
    icon: PencilSquareIcon
  },
  {
    number: "02",
    title: "Unsere Redaktion übernimmt",
    description: "Ein Foto reicht – daraus entstehen Post, Website-Update & MediaStele-Teaser.",
    icon: PencilIcon
  },
  {
    number: "03",
    title: "Besucher stellen Fragen",
    description: "\"Gibt's heute einen Deal?\" – der Chatbot antwortet direkt mit passenden Aktionen.",
    icon: ChatBubbleLeftIcon
  },
  {
    number: "04",
    title: "Auswertung inklusive",
    description: "Besucherzahlen steigen. Sie sehen den Erfolg live im Dashboard.",
    icon: ChartBarSquareIcon
  }
]

export default function ScrollStorytelling() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            So funktioniert&apos;s
          </h2>
          <p className="text-xl text-gray-600">
            Von der Idee bis zur Auswertung – in 4 einfachen Schritten
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Illustration Placeholder */}
              <div className="flex-1">
                <div className="h-80 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-dashed border-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <step.icon className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
                    <div className="w-32 h-32 bg-blue-200 rounded-lg mx-auto mb-4"></div>
                    <p className="text-blue-600 font-medium">Illustration für Schritt {step.number}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
