import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import mongoose from "mongoose";
import { NextRequest,NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {token}=reqBody;
        if(!token){
            return NextResponse.json({error:"Token Not Found"},{status:500})

        }
        let user=await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
        
        if(!user){
            return NextResponse.json({error:"Invalid Token"},{status:500})
        }
        user.isVerified=true;
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save()
        return NextResponse.json({message:"User Verified Successfully",success:true},{status:200})

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}