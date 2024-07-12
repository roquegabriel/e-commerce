import React from 'react'
import WomanHero from '../assets/images/hero.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section className='bg-sky-50 mt-20'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex items-center'>
            <div className='w-10 bg-red-500 h-[2px] mr-3'></div>New Trend
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1]  font-light mb-4'>Find your true style here</h1>
          <Link to={'/'} className='uppercase font-semibold border-b-2 border-primary self-start'>
          Discover more
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanHero} alt="" className='' />
        </div>
      </div>
    </section>
  )
}

export default Hero