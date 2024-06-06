'use client'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Profile = () => {
  const router =useRouter()
  const [data,setData]=useState("nothing")

  const getData=async()=>{
    try {
      const res=await axios.post("/api/users/profile")
      setData(res.data.data._id)
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  const logout=async()=>{
    try {
      await axios.post("/api/users/logout")
      toast.success("Logout Successfully")
      router.push("/login")

    } catch (error:any) {
      toast.error(error.message)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1>Profile Page</h1><hr/>
        {data==='nothing'?'Nothing':<Link href={`/profile/${data}`}>{data}</Link>}<hr/>
        <button className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={logout}>Logout</button>
        <button className='bg-teal-500 mt-4 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded' onClick={getData}>Get User Details</button>
    </div>
  )
}

export default Profile