import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams
    const query  = searchParams.get("query")
    const filteredComments = query ? comments.filter(i=> i.text.includes(query)) : comments
    return Response.json(filteredComments)
}

export async function POST(request:Request){
    const data = await request.json()
    const newComment = {
        id: comments.length+1,
        text: data.text
    }
    comments.push(newComment)
    return new Response(JSON.stringify(comments),{
        headers:{
            "Content-Type" : "application/json",
        },
        status: 201
    })
}