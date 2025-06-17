'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  MicrophoneIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

const aiFeatures = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Sprach- oder Texteingabe",
    description: "Sprechen Sie direkt mit dem System oder tippen Sie Ihre Anfrage"
  },
  {
    icon: SparklesIcon,
    title: "KI sucht, analysiert, erstellt",
    description: "Automatische Datenanalyse und intelligente Vorschläge"
  },
  {
    icon: BoltIcon,
    title: "Direkte Aktionen",
    description: "Keine Menüs oder Klicks – sofortige Ergebnisse"
  }
]

const chatMessages = [
  {
    type: 'user',
    text: 'Fasse mir die Besucherfrequenzen der letzten drei Monate zusammen',
    delay: 0
  },
  {
    type: 'ai',
    text: 'Hier ist Ihre Besucherfrequenz-Analyse für Q1 2024:\n\n📊 Januar: 45.230 Besucher (+12% vs. Vormonat)\n📊 Februar: 52.180 Besucher (+15% vs. Vormonat)\n📊 März: 48.950 Besucher (-6% vs. Vormonat)\n\n💡 Empfehlung: März-Rückgang durch Osterferien. Für April empfehle ich eine Frühlings-Kampagne.',
    delay: 2000
  },
  {
    type: 'user',
    text: 'Welche offenen Mängel wurden zuletzt gemeldet?',
    delay: 6000
  },
  {
    type: 'ai',
    text: '🔧 Aktuelle Mängelmeldungen:\n\n• Defekte Beleuchtung - Parkdeck Ebene 2 (vor 2h)\n• Verstopfter Abfluss - Toilette EG West (vor 4h)\n• Klimaanlage zu warm - Shop 15 (vor 1 Tag)\n\n✅ Alle Meldungen wurden automatisch an die Haustechnik weitergeleitet.',
    delay: 8000
  }
]

export default function AISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [isListening, setIsListening] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length) {
        const currentMessage = chatMessages[currentMessageIndex]
        
        if (currentMessage.type === 'ai') {
          setIsTyping(true)
          let charIndex = 0
          const typingInterval = setInterval(() => {
            if (charIndex < currentMessage.text.length) {
              setDisplayedText(currentMessage.text.slice(0, charIndex + 1))
              charIndex++
            } else {
              setIsTyping(false)
              clearInterval(typingInterval)
              setTimeout(() => {
                setCurrentMessageIndex(prev => prev + 1)
                setDisplayedText('')
              }, 1500)
            }
          }, 30)
        } else {
          setTimeout(() => {
            setCurrentMessageIndex(prev => prev + 1)
          }, 1500)
        }
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentMessageIndex(0)
          setDisplayedText('')
        }, 3000)
      }
    }, chatMessages[currentMessageIndex]?.delay || 0)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, isInView])

  const toggleListening = () => {
    setIsListening(!isListening)
    setTimeout(() => setIsListening(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        
        {/* Floating AI Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              KI im Hintergrund
            </span>
            <br />
            <span className="text-white">– oder im Mittelpunkt, wenn Sie möchten</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PropertyOS ist tiefgreifend KI-gestützt – aber niemals aufdringlich. Unsere künstliche Intelligenz 
            automatisiert Prozesse, schlägt optimale Zeitpunkte für Marketingmaßnahmen vor und liefert präzise 
            Auswertungen. Noch besser: Sie können direkt mit dem System sprechen oder schreiben.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* AI Chat Interface */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Chat Window */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 p-4 flex items-center gap-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <h3 className="text-white font-semibold">PropertyOS AI Assistant</h3>
                </div>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <SparklesIcon className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 md:p-6 h-80 md:h-96 overflow-y-auto space-y-4">
                <AnimatePresence>
                  {chatMessages.slice(0, currentMessageIndex + 1).map((message, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`max-w-xs md:max-w-sm lg:max-w-md px-3 md:px-4 py-2 md:py-3 rounded-2xl text-sm md:text-base ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white/20 text-white border border-white/30'
                      }`}>
                        {message.type === 'ai' && index === currentMessageIndex ? (
                          <div className="whitespace-pre-line">
                            {displayedText}
                            {isTyping && (
                              <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                                className="inline-block w-2 h-5 bg-white ml-1"
                              />
                            )}
                          </div>
                        ) : (
                          <div className="whitespace-pre-line">{message.text}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400">
                    <span className="text-gray-400">Fragen Sie die KI...</span>
                  </div>
                  <motion.button
                    onClick={toggleListening}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isListening 
                        ? 'bg-red-500 shadow-lg shadow-red-500/30' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={isListening ? {
                      boxShadow: [
                        "0 0 0 0 rgba(239, 68, 68, 0.4)",
                        "0 0 0 10px rgba(239, 68, 68, 0)",
                        "0 0 0 0 rgba(239, 68, 68, 0)"
                      ]
                    } : {}}
                    transition={{ duration: 1.5, repeat: isListening ? Infinity : 0 }}
                  >
                    <MicrophoneIcon className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="space-y-8">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Text */}
            <motion.div
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">So sparen Sie Klicks, Zeit und Umwege.</span>
                {' '}Ob &ldquo;Fasse mir die Besucherfrequenzen der letzten drei Monate zusammen&rdquo;,
                &ldquo;Zeige mir die Social Media-Reichweite im März&rdquo; oder &ldquo;Welche offenen Mängel wurden zuletzt gemeldet?&rdquo;
                – die KI versteht Ihre Anfrage und liefert sofort die passenden Daten, Auswertungen oder Systemansichten.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
