"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const path=usePathname()
    return (
        <header className='w-full h-[30px] mb-4 sm:mb-8'>
            <div className='w-full flex justify-between
        items-center px-4 sm:px-32 py-4'>
                <h2 className='text-2xl flex gap-2 items-center '>
                    Next Auth App
                    <span className='hidden sm:block text-4xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M24 43.5c12.764-5.885 14.86-15.67 14.86-21.982V16.91S33.43 14.286 24 14.286S9.14 16.909 9.14 16.909v4.61c0 6.31 2.096 16.096 14.86 21.981"></path>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M32.013 14.96v-2.447a8.013 8.013 0 0 0-16.026 0v2.448m9.837 12.109a3.79 3.79 0 1 0-3.648 0a5.671 5.671 0 0 0-3.849 5.368h11.346a5.671 5.671 0 0 0-3.849-5.367"></path>
                        </svg>
                    </span>
                </h2>
                <div>
                    <ul className='flex gap-4 sm:gap-16'>
                        <li className={`${path==='/'&&' text-blue-600 border-b-2 border-blue-400 pb-2'} hover:text-blue-400`}><Link href="/">Home</Link></li>
                        <li className={`${path==='/profile'&&' text-blue-600 border-b-2 border-blue-400 pb-2'} hover:text-blue-400`}><Link href="/profile">Profile</Link></li>
                        <li className={`${path==='/login'&&'border-b-2 border-blue-400'} hover:text-blue-400`}><Link href="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header