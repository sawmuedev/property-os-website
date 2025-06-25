import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              PropertyOS
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Die zentrale Plattform für modernes Centermanagement. 
              Alle Tools, Daten und Services – intuitiv bedienbar, KI-gestützt, redaktionell begleitet.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pakete
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pakete als PDF
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Credibility Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* GCSP Technologie-Partner Badge */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                  <img
                    src="/assets/logos/partnerlogo.gif"
                    alt="GCSP Technologie-Partner Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  <div className="text-gray-300 font-medium">GCSP Technologie-Partner</div>
                  <div className="text-gray-500 text-xs">German Council of Shopping Places</div>
                </div>
              </div>

              {/* EHI Partner Badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                  <img
                    src="/assets/logos/ehi.png"
                    alt="EHI Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  <div className="text-gray-300 font-medium">EHI Partner</div>
                  <div className="text-gray-500 text-xs">Retail Institute</div>
                </div>
              </div>

              {/* BCSD Partner Badge */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                  <img
                    src="/assets/logos/bcsd-logo.png"
                    alt="BCSD Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm">
                  <div className="text-gray-300 font-medium">BCSD Partner</div>
                  <div className="text-gray-500 text-xs">Bundesvereinigung City- und Stadtmarketing</div>
                </div>
              </div>

              {/* SSL Badge */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">SSL-verschlüsselt</span>
              </div>

              {/* DSGVO Badge */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">DSGVO-konform</span>
              </div>
            </div>

            {/* Company Credit */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                PropertyOS – entwickelt von{' '}
                <a
                  href="https://sawatzki-muehlenbruch.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 font-medium hover:text-white transition-colors"
                >
                  SawatzkiMühlenbruch
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 PropertyOS. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Made with ❤️ for modern center management
          </p>
        </div>
      </div>
    </footer>
  )
}
