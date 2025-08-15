'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero(){
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { number: '500+', label: 'Leads Qualified' },
    { number: '24/7', label: 'Support Available' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '3x', label: 'Faster Response Time' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className='hero-shell relative pb-24 overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl'></div>
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-30 blur-3xl'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 pt-24 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium'
            >
              <span className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></span>
              AI-Powered Solutions for Modern Businesses
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-5xl lg:text-7xl font-bold leading-tight font-heading'
            >
              <span className='text-gray-900'>AI-powered agents for</span>
              <br />
              <span style={{color:'var(--accent)'}} className='relative'>
                revenue
                <motion.div
                  className='absolute -bottom-2 left-0 w-full h-[0.2rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              <br />
              <span className='text-black'>and </span>
              <span style={{color:'var(--accent)'}}> support</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-xl text-gray-600 max-w-2xl font-body leading-relaxed'
            >
              Build intelligent voice and chat agents that qualify leads, schedule meetings, and handle support — 
              production-ready with cutting-edge AI technology and seamless integrations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <a 
                href='/contact' 
                className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2'
              >
                <span>Summon an Agent</span>
                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </a>
              <a 
                href='/demos' 
                className='px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2'
              >
                <span>View Demos</span>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                </svg>
              </a>
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8'
            >
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <motion.div 
                    className='text-2xl font-bold text-gray-900 font-heading'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className='text-sm text-gray-600 font-body'>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='pt-8 border-t border-gray-200'
            >
              <div className='flex items-center gap-6'>
                <div className='text-sm text-gray-500 font-medium'>Trusted by leading companies</div>
                <div className='flex items-center gap-6 opacity-60'>
                  <img src='/clients/client1.svg' className='h-8 hover:opacity-100 transition-opacity' alt='Client 1' />
                  <img src='/clients/client2.svg' className='h-8 hover:opacity-100 transition-opacity' alt='Client 2' />
                  <img src='/clients/client3.svg' className='h-8 hover:opacity-100 transition-opacity' alt='Client 3' />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - AI Agent Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative -mt-32'
          >
            {/* Main AI Agent Interface */}
            <div className='bg-white rounded-3xl p-6 shadow-2xl border border-gray-200 relative overflow-hidden'>
              {/* Animated Connection Lines */}
              <div className='absolute inset-0 opacity-20'>
                <svg className='w-full h-full' viewBox='0 0 400 400'>
                  <path d='M50 100 Q200 50 350 100' stroke='#3B82F6' strokeWidth='2' fill='none' className='animate-pulse'/>
                  <path d='M50 200 Q200 150 350 200' stroke='#8B5CF6' strokeWidth='2' fill='none' className='animate-pulse' style={{animationDelay: '0.5s'}}/>
                  <path d='M50 300 Q200 250 350 300' stroke='#06B6D4' strokeWidth='2' fill='none' className='animate-pulse' style={{animationDelay: '1s'}}/>
                </svg>
              </div>
              
              {/* AI SDR Agent Avatar */}
              <div className='text-center mb-6'>
                <div className='w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto flex items-center justify-center mb-4 relative'>
                  <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                  <div className='absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center'>
                    <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                  </div>
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>AI SDR Active</h3>
                <p className='text-sm text-gray-600'>Making calls & qualifying leads 24/7</p>
              </div>

              {/* Live Call Activity */}
              <div className='space-y-3 mb-6'>
                <div className='flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200'>
                  <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold text-green-800'>Call in Progress</div>
                    <div className='text-xs text-green-600'>Qualifying prospect: John Smith</div>
                  </div>
                  <div className='text-xs text-green-600 font-mono'>03:24</div>
                </div>
                
                <div className='flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200'>
                  <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <div className='text-sm font-semibold text-blue-800'>Lead Qualified</div>
                    <div className='text-xs text-blue-600'>Meeting scheduled for tomorrow</div>
                  </div>
                  <div className='w-3 h-3 bg-blue-500 rounded-full animate-pulse'></div>
                </div>
              </div>

              {/* SDR Metrics */}
              <div className='grid grid-cols-3 gap-3'>
                <div className='text-center p-3 bg-blue-50 rounded-xl border border-blue-200'>
                  <div className='w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 flex items-center justify-center'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                    </div>
                  <div className='text-xs font-semibold text-blue-800'>100+</div>
                  <div className='text-xs text-blue-600'>Calls/Day</div>
                  </div>
                
                <div className='text-center p-3 bg-purple-50 rounded-xl border border-purple-200'>
                  <div className='w-8 h-8 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center'>
                      <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                  <div className='text-xs font-semibold text-purple-800'>85%</div>
                  <div className='text-xs text-purple-600'>Success Rate</div>
                    </div>
                
                <div className='text-center p-3 bg-cyan-50 rounded-xl border border-cyan-200'>
                  <div className='w-8 h-8 bg-cyan-500 rounded-lg mx-auto mb-2 flex items-center justify-center'>
                    <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div className='text-xs font-semibold text-cyan-800'>24/7</div>
                  <div className='text-xs text-cyan-600'>Availability</div>
                </div>
              </div>
            </div>

            {/* Floating Call Stats */}
            <motion.div
              className='absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-200'
              whileHover={{ scale: 1.05 }}
            >
              <div className='text-center'>
                <div className='text-2xl font-bold text-green-600'>15</div>
                <div className='text-xs text-gray-600'>Active Calls</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
