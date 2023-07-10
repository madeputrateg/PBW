import React from 'react'

const herosection = () => {
  return (
    <div className='bg-white h-[656px]'>
        <div className='container mx-auto px-4 md:px-6 lg:px-6'>
            <div className='flex items-center gap-4 justify-between'>
                <div className="w-1/2 max-w-xl">
                    <h1 className='text-[40px] font-normal text-[#2F9DC0]'>
                        Digitalkan Bisnis Anda Bersama Kami
                    </h1>
                    <p className='pt-4'>
                        D3 Software Solution siap melayani kebutuhan digital untuk start up hingga bisnis perusahaan anda.
                    </p>
                    <div className=' space-x-4 pt-6'>
                        <button className='bg-[#2F9DC0] text-white text-lg rounded-lg px-10 py-3 mt-4'>
                            Layanan Kami
                        </button>
                        <button className='bg-transparent text-[#2F9DC0] border-[1px] border-[#2F9DC0] text-lg rounded-lg px-10 py-3 mt-4'>
                            Tentang Kita
                        </button>
                    </div>
                </div>
                <img src='/assets/homehero.svg'/>
            </div>
        </div>
    </div>
  )
}

export default herosection