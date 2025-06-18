export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-700 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihr neues digitales Betriebssystem?
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Starten Sie noch heute mit PropertyOS und revolutionieren Sie Ihr Centermanagement
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* CTAs */}
          <div className="space-y-6">
            <button className="w-full bg-white text-gray-700 py-4 px-8 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Jetzt Demo anfragen
            </button>
            <button className="w-full border-2 border-white text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors">
              Paketübersicht als PDF erhalten
            </button>
            <button className="w-full border-2 border-white text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors">
              Kostenloses Beratungsgespräch buchen
            </button>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Kontakt aufnehmen</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input 
                type="text" 
                placeholder="Center" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input 
                type="email" 
                placeholder="E-Mail" 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea 
                placeholder="Nachricht" 
                rows={4}
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
