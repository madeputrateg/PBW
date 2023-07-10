import React from 'react'

const Hubungi = () => {
  return (
    <div className=' bg-[#2F9DC0] h-[485px]'>
        <div className='container mx-auto px-4 md:px-6'>

            
            <div className='flex justify-center text-center'>
                <div className=''>
                    <h1 className=' font-normal text-4xl text-white mt-20'>
                        Memiliki Pertanyaan?
                    </h1>
                    <h3 className=' pt-4 font-light text-2xl text-white'>
                        Hubungi Kami
                    </h3>
                </div>
            </div>

            <div className='flex justify-center grid-cols-4 gap-8 mt-10'>
                <div className='bg-white w-72 h-40 rounded-lg shadow-xl flex justify-center text-center'>
                    <div className=' pt-4'>
                        <div className='flex justify-center'>
                            <img src='/assets/mail.png'/>
                        </div>    
                        <h1 className=' font-light text-[#2F9DC0]'>
                            Email
                        </h1>
                        <h1 className='text-sm pt-4'>
                            d3softwaresolution@bisnis.co.id
                        </h1>
                        <h3 className='text-sm pt-6 text-slate-400'>
                            Send message
                        </h3>
                    </div>
                </div>
                <div className='bg-white w-72 h-40 rounded-lg shadow-xl flex justify-center text-center'>
                    <div className=' pt-4'>
                        <div className='flex justify-center'>
                            <img src='/assets/whatsapp.png'/>
                        </div>    
                        <h1 className=' font-light text-[#2F9DC0]'>
                            Whatsapp
                        </h1>
                        <h1 className='text-sm pt-4'>
                            +62-815-4742-7721
                        </h1>
                        <h3 className='text-sm pt-6 text-slate-400'>
                            Send message
                        </h3>
                    </div>
                </div>
                <div className='bg-white w-72 h-40 rounded-lg shadow-xl flex justify-center text-center'>
                    <div className=' pt-4'>
                        <div className='flex justify-center'>
                            <img src='/assets/linkedin.png'/>
                        </div>    
                        <h1 className=' font-light text-[#2F9DC0]'>
                            LinkedIn
                        </h1>
                        <h1 className='text-sm pt-4'>
                            D3 Sofware Solution
                        </h1>
                        <h3 className='text-sm pt-6 text-slate-400'>
                            Send message
                        </h3>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hubungi