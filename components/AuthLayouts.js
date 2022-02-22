import React from 'react'
import WalletLogo from '../public/WalletLogo.png'
import Image from 'next/image'

export default function DashboardLayout({ title, description, descripStyle, children }) {
  return (
    <div className='bg-gray-300 min-h-screen'>
      <div className='px-5 md:px-10 xl:px-32 lg:pt-20 pt-8'>
        <Image
          src={WalletLogo}
          alt='wallet logo'
        />  
        <div className='grid gap-6 md:grid-cols-2 grid-cols-1 md:pt-20'>
          <div className="">
            <p className='lg:text-5xl text-3xl font-semibold	text-gray-150 lg:mt-16 mt-12'>{title}</p>
            <p className={`xl:text-2xl lg:text-xl text-lg text-gray-200 mt-1 ${descripStyle}`}>{description}</p>
          </div>
          <div>
            <main>{children}</main>
          </div>
        </div> 
      </div>
    </div>
  )
}