import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/node-mailer";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import mongoose from "mongoose";
import { NextRequest,NextResponse } from "next/server";
connect();

interface IReqBody {
    username:string
    email:string
    password:string
}

export async function POST(request: NextRequest) {
    try {
        const reqBody =await request.json()
        const { username,email, password } = reqBody as IReqBody;

        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User Already Exists"},{status:400})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        let newUser = new User({
            username,
            email,
            password:hashedPassword
        })
        newUser = await newUser.save()
        
        await sendEmail({email,emailType:'VERIFY',userId:newUser._id})

        return NextResponse.json({message:"User Registered Successfully",status:200,success:true})

    } catch (error:any) {
        return NextResponse.json({error:error.message,status:500})
    }
}