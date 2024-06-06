import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { NextRequest } from 'next/server'
const Key=process.env.TOKEN_SECRET!

interface IUser {
    email:String,
    username:String,
    id:mongoose.ObjectId
}

export async function generateToken(payload:IUser){
    console.log(payload)
    return await jwt.sign(payload,Key,{expiresIn:'12h'})
}

export async function verifyT(request:NextRequest){
    try {
        const token = request.cookies.get("token")?.value || ""
        const decoded =jwt.verify(token,Key)
        return decoded.id
    } catch (error:any) {
        throw new Error(error.message)
    }
}