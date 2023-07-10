import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white mt-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
            <div className='grid grid-cols-4 gap-4 md:gap-20'>
                <div className="">
                    <img className="" src="/assets/LogoNavbar.svg" alt="Logo" />
                    <p className='pt-5 text-justify'>Kami membantu bisnis dari semua ukuran meningkatkan jangkauan ke pelanggan potensial mereka dengan membuat keputusan yang lebih cerdas tentang bagaimana mereka mempromosikan bisnis mereka secara online.</p>
                </div>
                <div>
                    <h1 className='font-normal text-lg'>Layanan</h1>
                    <ul className='pt-5 space-y-2'>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Website App</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Mobile App</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Software</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Design</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-normal text-lg'>Tautan</h1>
                    <ul className='pt-5 space-y-2'>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Home</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Layanan Kami</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Tentang Kami</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-normal text-lg'>Hubungi Kami</h1>
                    <ul className='pt-5 space-y-2'>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Email</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Whatsapp</a>
                        </li>
                        <li>
                            <a href='#' className='text-gray-500 hover:text-gray-900'>Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="border-t my-9"></div>
        <div className='flex justify-center pb-10'>
            <p>
            Copyright ® 2023 Kelompok 1 All rights Reserved
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer