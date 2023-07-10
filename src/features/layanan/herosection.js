import React from 'react'

const herosection = () => {
  return (
    <div className='bg-[#EEF7FA] h-[600px]'>
        <div className='container mx-auto flex justify-center text-center px-4'>
            <div>
                <div className='pt-8 flex justify-center'>
                    <img src='/assets/layanan-ilus.png'/>
                </div>
                <h1 className='text-[40px] font-normal pt-4 text-[#2F9DC0]'>
                    Layanan Kami
                </h1>
                <h3 className=' max-w-2xl text-base font-light pt-4'>
                    Layanan terbaik kami yang siap membantu anda dalam menemukan solusi untuk permasalahan digital anda.
                </h3>
            </div>
        </div>
    </div>
  )
}

export default herosection