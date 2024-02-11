import { NextRequest, NextResponse } from "next/server";
import serverAuth from "../../../../lib/serverAuth";
import { authOptions } from "../auth/[...nextauth]/route";

const handler = async(req:NextRequest)=>{
    // 405 ==> Wrong Method
    try {
        const { user } = await serverAuth()
        return NextResponse.json( user, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({status: 400})
    }
}

export {handler as GET}