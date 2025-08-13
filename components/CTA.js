'use client'
import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800'></div>
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23ffffff%27%20fill-opacity%3D%270.1%27%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
      
      {/* Floating Elements */}
      <div className='absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl'></div>
      <div className='absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
      <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg'></div>

      <div className='relative z-10'>
        <div className='text-center'>
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='mb-12'
          >
            <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight'>
              Ready to Ship
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300'>
                AI Agents?
              </span>
            </h2>
            <p className='text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4'>
              Transform your business operations with intelligent AI solutions. Book a free consultation and we'll propose a tailored roadmap designed specifically for your needs.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto px-4'
          >
            <div className='text-center'>
              <div className='text-2xl md:text-3xl font-bold text-white mb-2 font-display'>100+</div>
              <div className='text-blue-100 text-sm md:text-base'>Projects Delivered</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl md:text-3xl font-bold text-white mb-2 font-display'>24/7</div>
              <div className='text-blue-100 text-sm md:text-base'>Support Available</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl md:text-3xl font-bold text-white mb-2 font-display'>95%</div>
              <div className='text-blue-100 text-sm md:text-base'>Client Satisfaction</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center px-4'
          >
            <a 
              href='/contact' 
              className='group px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-white/20 transform hover:-translate-y-2 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center'
            >
              <span>Book Free Consultation</span>
              <svg className='w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </a>
            <a 
              href='/demos' 
              className='group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:from-purple-500/30 hover:to-blue-500/30 hover:border-white/40 hover:shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center'
            >
              <span>View Live Demos</span>
              <svg className='w-4 md:w-5 h-4 md:h-5 group-hover:scale-110 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
              </svg>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-12 pt-8 border-t border-white/20 px-4'
          >
            <p className='text-blue-100 text-sm mb-4'>Trusted by industry leaders</p>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 opacity-80'>
              <div className='text-white/60 text-xs font-medium'>✓ No Setup Fees</div>
              <div className='text-white/60 text-xs font-medium'>✓ Free Consultation</div>
              <div className='text-white/60 text-xs font-medium'>✓ 30-Day Guarantee</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
