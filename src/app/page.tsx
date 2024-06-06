'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router =useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="bg-red-400 px-10 py-5 rounded mb-5">
        <h2 className="text-3xl">Welcome To Code Arceus</h2>
      <div className="flex justify-between">
        <button className="bg-teal-300 text-black px-5 py-3 mx-4 my-5 rounded hover:bg-teal-600" onClick={()=>router.push('/login')}>Login</button>
        <button className="bg-teal-300 text-black px-5 py-3 mx-4 my-5 rounded hover:bg-teal-600" onClick={()=>router.push('/signup')}>Sign Up</button>
      </div>
      </div>
      <div className="bg-blue-400 px-8 py-5 max-w-lg rounded">
        <p className="text-xl">Code Arceus Auth App is a robust authentication application built on the Next.js framework, designed to provide seamless user authentication experiences. With Code Arceus Auth App, users can effortlessly sign up, log in, verify their email addresses, and manage their profiles, all within a secure and intuitive interface.</p>
      </div>
    </main>
  );
}
