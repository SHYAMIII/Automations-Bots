'use client'
import { motion } from 'framer-motion'

export default function Features(){
  const items = [
    {
      icon: '🤖',
      title: 'AI Chatbots',
      description: 'Context-aware bots for websites & messaging platforms that understand user intent and provide intelligent responses.',
      features: ['Natural Language Processing', 'Multi-platform Support', '24/7 Availability', 'Seamless Integration']
    },
    {
      icon: '📞',
      title: 'Call SDR',
      description: 'Automated calling flows with advanced voice TTS technology for outbound lead qualification and follow-ups.',
      features: ['Voice Recognition', 'Call Analytics', 'Lead Scoring']
    },
    {
      icon: '👩‍💼',
      title: 'Reception Assistant',
      description: 'Intelligent call handling, appointment scheduling, and customer service automation for inbound calls.',
      features: ['Call Routing', 'Appointment Booking', 'FAQ Handling', 'Escalation Management']
    },
    {
      icon: '🔗',
      title: 'Custom Integrations',
      description: 'Connect to your existing CRMs, databases, and business tools for seamless workflow automation.',
      features: ['API Integration', 'Webhook Support', 'Data Synchronization', 'Custom Workflows']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id='features' className='py-20'>
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading'>
          Powerful AI Solutions for
          <span style={{color: 'var(--accent)'}}> Every Business Need</span>
        </h2>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto font-body'>
          From intelligent chatbots to automated calling systems, our AI solutions are designed to transform how you interact with customers and prospects.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid lg:grid-cols-2 gap-8'
      >
        {items.map((item, index) => (
          <motion.div 
            key={item.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className='group bg-white rounded-2xl p-8  border border-gray-200 transition-all duration-300 relative overflow-hidden'
          >
            {/* Background Pattern */}
            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300 -translate-y-16 translate-x-16'></div>
            
            {/* Icon */}
            <div className='relative z-10 mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl  group-hover:scale-110 transition-transform duration-300'>
                {item.icon}
              </div>
            </div>

            {/* Content */}
            <div className='relative z-10'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4 font-heading group-hover:text-blue-600 transition-colors duration-300'>
                {item.title}
              </h3>
              <p className='text-gray-600 mb-6 leading-relaxed font-body'>
                {item.description}
              </p>
              
              {/* Feature List */}
              <ul className='space-y-3'>
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center gap-3 text-sm text-gray-700 font-body'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0'></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className='mt-6'>
                <a 
                  href='/demos' 
                  className='inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all duration-300 font-body'
                >
                  Learn more
                  <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300'></div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center mt-16'
      >
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200'>
          <h3 className='text-2xl font-bold text-gray-900 mb-4 font-heading'>
            Ready to explore all features?
          </h3>
          <p className='text-gray-600 mb-6 font-body'>
            See our AI solutions in action with interactive demos and real-world examples.
          </p>
          <a 
            href='/demos' 
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl   transform hover:-translate-y-1 transition-all duration-300'
          >
            <span>View All Demos</span>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
