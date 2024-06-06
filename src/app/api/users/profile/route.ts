import { connect } from "@/dbConfig/dbConfig";
import { verifyT } from "@/helpers/JWT";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
connect();

export async function POST(request:NextRequest){
    try {
        const userId=await verifyT(request)
        const user =await User.findOne({_id:userId}).select("-password")
        if(!user){
            return NextResponse.json({error:"User Not Found"},{status:400})
        }
        return NextResponse.json({message:"User Found",data:user},{status:200})

    } catch (error:any) {
        return NextResponse.json({error:error.message,status:500})
    }
}