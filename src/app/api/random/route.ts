import { NextRequest, NextResponse } from "next/server"
import prismadb from "../../../../lib/prismadb"
import serverAuth from "../../../../lib/serverAuth"

export const dynamic = "force-dynamic"

export async function GET(req:Request){
    try {
        await serverAuth()
        const movieCount = await prismadb.movie.count()
        const randomIndex = Math.floor(Math.random()*movieCount)
        
        const randomMovies = await prismadb.movie.findMany({
            take:1,
            skip: randomIndex
        })

        return NextResponse.json(randomMovies[0], {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Error Accessing Movie Database"})
    }
}