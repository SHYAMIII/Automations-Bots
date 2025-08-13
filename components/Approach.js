'use client'
import { motion } from 'framer-motion'

export default function Approach(){
  const steps = [
    {
      number: '01',
      key: 'Discover',
      description: 'We start by understanding your business goals, current workflows, and specific challenges to design the perfect AI solution.',
      details: ['Business Analysis', 'Requirement Gathering', 'Solution Design', 'Timeline Planning']
    },
    {
      number: '02',
      key: 'Build',
      description: 'Our team develops and ships working prototypes and MVPs, ensuring rapid iteration and feedback integration.',
      details: ['Prototype Development', 'Testing & Validation', 'Feedback Integration', 'Performance Optimization']
    },
    {
      number: '03',
      key: 'Scale',
      description: 'We help you operate the solution at scale and transfer knowledge to your team for long-term success.',
      details: ['Production Deployment', 'Team Training', 'Documentation', 'Ongoing Support']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id='approach' className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading'>
            Our Proven
            <span style={{color: 'var(--accent)'}}> Approach</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto font-body'>
            We follow a systematic, proven methodology that ensures successful AI implementation and maximum business impact.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid md:grid-cols-3 gap-8'
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.key}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className='group relative'
            >
              {/* Step Number */}
              <div className='absolute -top-4 left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg z-10'>
                {step.number}
              </div>

              {/* Main Card */}
              <div className='bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 relative overflow-hidden'>
                {/* Background Pattern */}
                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-300 -translate-y-12 translate-x-12'></div>
                
                {/* Content */}
                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 font-heading group-hover:text-blue-600 transition-colors duration-300'>
                    {step.key}
                  </h3>
                  <p className='text-gray-600 mb-6 leading-relaxed font-body'>
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className='space-y-3'>
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className='flex items-center gap-3 text-sm text-gray-700 font-body'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full flex-shrink-0'></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Border */}
                <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300'></div>
              </div>

              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className='hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 transform -translate-y-1/2 z-0'></div>
              )}
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
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4 font-heading'>
              Ready to start your AI journey?
            </h3>
            <p className='text-gray-600 mb-6 font-body'>
              Let's discuss your project and create a customized roadmap for AI implementation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contact' 
                className='px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'
              >
                Start Free Consultation
              </a>
              <a 
                href='/demos' 
                className='px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300'
              >
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
