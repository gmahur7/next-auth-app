import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import { NextRequest,NextResponse } from "next/server";
import { generateToken } from "@/helpers/JWT";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {username,password}=reqBody;

        let user=await User.findOne({username})
        
        if(!user){
            return NextResponse.json({error:"User Not Found"},{status:400})
        }

        
        let validPassword=await bcrypt.compare(password,user.password)
        
        if(!validPassword){
            return NextResponse.json({error:"Check Your Credentails"},{status:401})
        }

        const token= await generateToken({id:user._id,email:user.email,username:user.username})
        
        const response= NextResponse.json({
            message:"Logged In Success",
            success:true
        })

        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response;

    } catch (error:any) {
        return NextResponse.json({error:error.message,status:500})
    }
}