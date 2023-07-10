import React from 'react'

const About = () => {
  return (
    <div className='bg-white'>
      <div className='container mx-auto px-4 md:px-6 lg:px-0'>
        <div className='flex items-center gap-4 justify-center'>
            <img src='/assets/about.png'/>
            <div className="w-1/2">
              <h1 className='font-normal text-[40px] text-[#2F9DC0]'>
                Tentang Kami
              </h1>
            <p className='font-light text-justify max-w-2xl'>
            D3 Software Solution adalah penyedia layanan jasa pembuatan produk digital. Layanan kami mencakup Website Apps, Mobile Apps, Software, hingga Design. Kami membantu semua kalangan, mulai dari personal hingga Big Company. Bersama dengan kami membuat usaha anda menjadi digital.
            </p>

            </div>
        </div>
      </div>
    </div>
  )
}

export default About