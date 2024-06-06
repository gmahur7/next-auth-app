'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Page = ({params}:any) => {
  const router=useRouter()
  const [data,setData]=useState({username:"Loading...",email:"Loading..."})

  const getData=async()=>{
    try {
      const res=await axios.post("/api/users/profile")
      if(res.data.data._id===params.id) setData(res.data.data)
      else {
        toast.error("Invalid User")
        router.push("/profile")
    }
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Profile Page</h1> 
        <h2 className='p-3 bg-orange-300 rounded text-black'>{params.id}</h2>
        <p className='p-3 bg-teal-300 rounded text-black mt-5'>Username : {data.username||"Loading..."}</p>
        <p className='p-3 bg-green-300 rounded text-black mt-5'>Email : {data.email||"Loading..."}</p>
    </div>
  )
}

export default Page