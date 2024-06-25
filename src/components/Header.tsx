"use client"

import axios from 'axios'
import Link from 'next/link'
import { usePathname, useRouter} from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Header = () => {
    const path=usePathname()
    const router = useRouter()
    const [data, setData] = useState("")

    const logout=async()=>{
        try {
          await axios.post("/api/users/logout")
          toast.success("Logout Successfully")
          router.push("/login")
    
        } catch (error:any) {
          toast.error(error.message)
        }
      }

    const handler=async()=>{
        if(data){
           logout()
           return
        }
    }

    async function checkAuthStatus() {
        try {
          const response = await fetch('/api/users/getdetails');
          const result = await response.json();
          
          if (result.authenticated) {
            setData(result.authenticated)
          } else {
            setData("")
          }
        } catch (error) {
          toast.error("Failed To Get User Detail")
        }
      }

      useEffect(() => {
        checkAuthStatus()
      }, [path])

    return (
        
        <header className='w-full h-[30px] mb-4 sm:mb-8'>
            <div className='w-full flex justify-between
        items-center px-4 sm:px-32 py-4'>
                <h2 className='text-xl sm:text-2xl flex gap-2 items-center '>
                    Next Auth App
                    <span className='hidden sm:block text-4xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M24 43.5c12.764-5.885 14.86-15.67 14.86-21.982V16.91S33.43 14.286 24 14.286S9.14 16.909 9.14 16.909v4.61c0 6.31 2.096 16.096 14.86 21.981"></path>
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M32.013 14.96v-2.447a8.013 8.013 0 0 0-16.026 0v2.448m9.837 12.109a3.79 3.79 0 1 0-3.648 0a5.671 5.671 0 0 0-3.849 5.368h11.346a5.671 5.671 0 0 0-3.849-5.367"></path>
                        </svg>
                    </span>
                </h2>
                <div>
                    <ul className='flex gap-2 sm:gap-16'>
                        <li className={`${path==='/'&&' text-blue-600 border-b-2 border-blue-400 pb-2'} hover:text-blue-400 text-sm sm:text-md`}><Link href="/">Home</Link></li>
                        <li className={`${path==='/profile'||'/signup'&&' text-blue-600 border-b-2 border-blue-400 pb-2'} hover:text-blue-400 text-sm sm:text-md`}><Link href={data?"/profile":"/signup"}>{data?`Profile`:"Sign Up"}</Link></li>
                        <li className={`${path==='/login'||'/logout'&&'border-b-2 border-blue-400'} hover:text-blue-400 text-sm sm:text-md`}><Link href={data?"#":"/login"} onClick={handler}>{data?`Logout`:"Login"}</Link></li>

                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header