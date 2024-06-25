'use client'
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState("")

  const logout = async () => {
    try {
      await axios.post("/api/users/logout")
      toast.success("Logout Success")
      router.push("/login")

    } catch (error: any) {
      toast.error(error.message)
    }
  }

  async function checkAuthStatus() {
    try {
      const response = await fetch('/api/users/getdetails');
      const result = await response.json();
      if (result.authenticated) {
        setData(result.user.username)
      } else {
        setData("")
      }
    } catch (error) {
      toast.error("Failed To Get User Detail")
    }
  }

  useEffect(() => {
    checkAuthStatus()
  }, [])

  return (
    
    <main className="flex min-h-screen flex-col items-center p-20 sm:p-24 sm:my-16">
      <div className="w-full flex flex-col gap-4 sm:gap-4 lg:gap-0 items-center sm:flex-row px-4 sm:px-16 py-5 sm:justify-evenly">
        <div className="sm:order-2">
          <Image src='/images/user.png' alt="image" height={100} width={200}  />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Welcome <span className="text-blue-500 font-bold text-2xl sm:text-5xl">{data}</span></h2>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl my-2 mb-8">Basic Next Auth App</h1>
          <div className="flex gap-6">
            <button className="rounded px-8 py-2 bg-blue-500 hover:bg-blue-700" onClick={() => router.push('/profile')}>Profile</button>
            <button className="rounded px-8 py-2 bg-blue-500 hover:bg-blue-700" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </main>
  );
}
