'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState(false)

  const login = async () => {
    try {
        setLoading(true)
        let response = await axios.post(`/api/users/login`, {
            username, password
        })
        setLoading(true)
        if(response.data.message==="Logged In Success"){
            router.push('/profile')
            setError(false)
        }
        else {
            toast.error(response.data.error)
            setError(true)
            setLoading(false)
            setTimeout(()=>{
                setError(false)
            },5000)
        }

    } catch (error:any) {
        setLoading(false)
        toast.error("Invalid Id or Password")
    }
}

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
        setDisabled(true)
    }
    else setDisabled(false)
}, [ username, password])

  return (
    <div className='w-full flex flex-col justify-center items-center py-16 sm:py-0 '>
            <div className='my-4 sm:my-8 sm:mt-16 '>
                <h1 className='text-4xl'>{loading ? "Processing" : "Login"}</h1>
            </div>
            <div className='border rounded-xl px-20 sm:px-20 py-10'>
                <div className='mb-2 text-center'>
                    <p className='text-sm sm:text-xl'>Please fill the following details to login.</p>
                </div>
                <div className='my-5 flex flex-col sm:flex-row'>
                    <label className='mr-3 text-xl'>User Name : </label>
                    <input className='rounded text-black px-2 py-1' type="text" value={username} onChange={e => setUsername(e.target.value)} id="username" />
                </div>
                <div className='my-5 flex flex-col sm:flex-row'>
                    <label className='mr-3 text-xl'>Password : </label>
                    <input className='rounded text-black px-2 py-1' type="text" value={password} onChange={e => setPassword(e.target.value)} id="password" />
                </div>
                <div className='my-5 text-center flex justify-between pl-0 sm:pl-50'>
                    <button className='bg-white border-blue-400 border-2 text-black rounded px-4 py-1 sm:ml-[138px]' onClick={login} disabled={disabled ? false : true}>{loading ? "Processing" : "Login"}</button>
                    <Link href="/signup" className='mx-0'>create account</Link>
                </div>
            </div>
            <ToastContainer/>
        </div>
  )
}

export default Login