import React from 'react'

const aboutsection = () => {
  return (
    <div className='bg-[#EEF7FA] h-[560px]'>
        <div className='container mx-auto px-4 md:px-6 lg:px-6'>
            <div className='flex items-center gap-4 justify-between'>
                <img src='/assets/about.png'/>
                <div className="w-1/2">
                    <h1 className='text-[40px] font-normal text-[#2F9DC0]'>
                        Tentang Kami
                    </h1>
                    <p className='pt-4 text-justify max-w-xl'>
                         D3 Software Solution adalah penyedia layanan jasa pembuatan produk digital. Layanan kami mencakup Website Apps, Mobile Apps, Software, hingga Design. Kami membantu semua kalangan, mulai dari personal hingga Big Company. Bersama dengan kami membuat usaha anda menjadi digital..
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default aboutsection