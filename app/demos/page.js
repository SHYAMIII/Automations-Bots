'use client'
import { motion } from 'framer-motion'

export default function Demos() {
  const services = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot for Website',
      description: 'Intelligent, context-aware chatbots that engage visitors, qualify leads, and provide instant support on your website. Built with advanced NLP for natural conversations.',
      features: ['24/7 customer support', 'Lead qualification', 'FAQ handling', 'Seamless integration'],
      demoVideo: '/demos/chatbot-demo.mp4',
      icon: '🤖'
    },
    {
      id: 'ai-sdr',
      title: 'AI SDR - Outbound to Leads',
      description: 'Automated outbound calling system that reaches prospects, qualifies leads, and schedules meetings. Features voice TTS and intelligent conversation flows.',
      features: ['Automated calling', 'Lead qualification', 'Meeting scheduling', 'Voice TTS'],
      demoVideo: '/demos/sdr-demo.mp4',
      icon: '📞'
    },
    {
      id: 'ai-receptionist',
      title: 'AI Receptionist - Inbound Calls',
      description: 'Smart receptionist that answers incoming calls, handles inquiries, and routes calls appropriately. Never miss a call with intelligent call management.',
      features: ['Call answering', 'Inquiry handling', 'Call routing', '24/7 availability'],
      demoVideo: '/demos/receptionist-demo.mp4',
      icon: '👩‍💼'
    },
    {
      id: 'custom-integration',
      title: 'Custom AI Integration',
      description: 'Tailored AI solutions that integrate with your existing CRM, databases, and tools. Custom-built workflows for your specific business needs.',
      features: ['CRM integration', 'Database connectivity', 'Custom workflows', 'API development'],
      demoVideo: '/demos/integration-demo.mp4',
      icon: '🔗'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{opacity: 0, y: 20}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 0.6}}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-heading"
          >
            See Our AI Services in Action
          </motion.h1>
          <motion.p 
            initial={{opacity: 0, y: 20}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 0.6, delay: 0.1}}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-body"
          >
            Explore how our AI-powered solutions can transform your business operations. 
            Watch real demos and discover the perfect fit for your needs.
          </motion.p>
        </div>
      </section>

      {/* Services Demo Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{service.icon}</span>
                    <h2 className="text-3xl font-bold text-gray-900 font-heading">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed font-body">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 font-heading">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-600 font-body">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Demo Video */}
                <div className="flex-1">
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">🎥</div>
                        <p className="text-lg font-semibold mb-2">Demo Video</p>
                        <p className="text-gray-300 text-sm">Click to play</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className="text-3xl font-bold text-gray-900 mb-6 font-heading"
          >
            Ready to See More?
          </motion.h2>
          <motion.p 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{duration: 0.6, delay: 0.1}}
            viewport={{once: true}}
            className="text-lg text-gray-600 mb-8 font-body"
          >
            Book a personalized demo session and see how our AI solutions can work for your specific use case.
          </motion.p>
          <motion.div 
            initial={{opacity: 0, y: 20}} 
            whileInView={{opacity: 1, y: 0}} 
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book a service
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
