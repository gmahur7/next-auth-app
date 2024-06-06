'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const VerifyEmail = () => {

  const [token,setToken]=useState("")
  const [verified,setVerified]=useState(false)
  const [error,setError]=useState(false)

  const verifyuserEmail=async()=>{
    try {
      let resp=await axios.post("/api/users/verifyemail",{token})
      if(resp.data.message==="User Verified Successfully") setVerified(true)
      else setError(false)
    } catch (error:any) {
      setError(true)
      setVerified(false)
    }
  }

  useEffect(() => {
    setError(false)
    const urlToken=window.location.search.split("=")[1]
    setToken(urlToken||"")
    
    // const {query}=router;
    // const urlToken=query.token
    // setToken(urlToken || "")
    
  }, [])
  
  useEffect(() => {
    setError(false)
      if(token.length>0) verifyuserEmail()
  }, [token])
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl'>Verify E-mail</h1>
      <h2 className='p-2 bg-orange-500 text-black'>{token?token:"No Token"}</h2>
      {
        verified&&(
          <div>
            <h2>Verified</h2>
            <Link href={'/login'}>Log-In</Link>
          </div>
        )
      }
      {
        error&&(
          <div>
            <h2>Error</h2> 
          </div>
        )
      }
    </div>
  )
}

export default VerifyEmail