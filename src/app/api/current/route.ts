import { NextRequest, NextResponse } from "next/server";
import serverAuth from "../../../../lib/serverAuth";

export const dynamic = "force-dynamic"

export async function GET(req:NextRequest){
    // 405 ==> Wrong Method
    try {
        const user = await serverAuth()
        // console.log(user, "Current working fine")
        return NextResponse.json(user)
    } catch (error) {
        console.log(error)
        return NextResponse.json({status: 400})
    }
    
}