import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Die zentrale Plattform für{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                modernes Centermanagement
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Alle Tools, Daten und Services – intuitiv bedienbar, KI-gestützt, redaktionell begleitet.
            </p>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Demo anfragen
              </Link>
              <Link 
                href="#pricing"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
              >
                Pakete vergleichen
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">Vertraut von führenden Centern</p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
                {/* Placeholder Logos */}
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Laptop Mockup */}
              <div className="relative">
                <div className="bg-gray-800 rounded-t-xl p-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-white rounded-b-xl shadow-2xl overflow-hidden">
                  {/* Dashboard Placeholder */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-8 w-32 bg-blue-600 rounded"></div>
                      <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                        <div className="h-6 w-12 bg-blue-600 rounded"></div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                        <div className="h-6 w-12 bg-cyan-600 rounded"></div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="h-4 w-16 bg-gray-300 rounded mb-2"></div>
                        <div className="h-6 w-12 bg-orange-500 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Chart Placeholder */}
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="h-4 w-24 bg-gray-300 rounded mb-4"></div>
                      <div className="h-32 bg-gradient-to-t from-blue-100 to-blue-50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Smartphone Mockup */}
              <div className="absolute -bottom-8 -right-8 w-32">
                <div className="bg-gray-800 rounded-2xl p-1">
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="p-3">
                      <div className="h-2 w-16 bg-gray-300 rounded mb-3 mx-auto"></div>
                      <div className="space-y-2">
                        <div className="h-3 w-full bg-blue-600 rounded"></div>
                        <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                        <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
