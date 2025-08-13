import Hero from '../components/Hero'
import Features from '../components/Features'
import Approach from '../components/Approach'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <div>
      <Hero />
      <div className='max-w-6xl mx-auto px-6'>
        <Features />
        <Approach />
        <CTA />
      </div>
    </div>
  )
}
