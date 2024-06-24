'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const onSignup = async () => {
        if(password.length<6){
            toast.error("Password must be greater than or equal to 6 character.")
            return;
            }
        try {
            setLoading(true)
            let response = await axios.post(`/api/users/signup`, {
                username, email, password
            })
            setLoading(false)
            if(response.data.message==="User Registered Successfully"){
                toast.success("You Are Registered Successfully")
                setTimeout(()=>{
                    router.push('/login')
                },2000)
            }
            else if(response.data.error==="User Already Exists"){
                toast.success("User Already Exists")
            }
            else{
                toast.error(response.data.error)
            }

        } catch (error:any) {
            setLoading(false)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if (username.length > 0 && email.length > 0 && password.length > 0) {
            setDisabled(true)
        }
        else setDisabled(false)
    }, [email, username, password])

    return (
        <div className='w-full flex flex-col justify-center items-center py-16 sm:py-0 '>
            <div className='my-4 sm:my-8 sm:mt-16 '>
                <h1 className='text-4xl'>{loading ? "Processing" : "Sign Up"}</h1>
            </div>
            <div className='border rounded-xl px-12 sm:px-20 py-10'>
                <div className='mb-2 text-center'>
                    <p className='text-sm sm:text-xl'>Please fill the following details to sign up.</p>
                </div>
                <div className='my-5 sm:text-right'>
                    <label className='mr-3 text-md sm:text-xl'>User Name : </label>
                    <input className='rounded text-black px-2 py-1' type="text" value={username} onChange={e => setUsername(e.target.value)} id="username" />
                </div>
                <div className='my-5 sm:text-right'>
                    <label className='mr-3 text-md sm:text-xl'>Email : </label>
                    <input className='rounded text-black px-2 py-1' type="text" value={email} onChange={e => setEmail(e.target.value)} id="email" />
                </div>
                <div className='my-5 sm:text-right'>
                    <label className='mr-3 text-md sm:text-xl'>Password : </label>
                    <input className='rounded text-black px-2 py-1' type="text" value={password} onChange={e => setPassword(e.target.value)} id="password" />
                </div>
                <div className='my-5 text-center'>
                    <button className=' bg-white border-blue-400 border-2 text-md sm:text-lg  text-black rounded px-2 py-1' onClick={onSignup} disabled={disabled ? false : true}>{loading ? "Processing" : "Sign Up"}</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Signup