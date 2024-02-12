import { NextRequest, NextResponse} from "next/server";
import prismadb from "../../../../lib/prismadb"
import serverAuth from "../../../../lib/serverAuth";

export async function POST(req:Request){
    const data = await req.json()
    const {title, description, videoUrl, thumbnailUrl, genre, duration} = data
    try{
        const movie = await prismadb.movie.create({
            data:{
                title, description, videoUrl, thumbnailUrl, genre, duration,
            },
        });
        return NextResponse.json(movie, {status:201})
    } catch(e:any)
    {
        console.log(e)
        return  NextResponse.json({message: "Unable to Post Movies"})
    }  
}

export async function GET(req:NextRequest, res:NextResponse) {
    try {
        await serverAuth()
        const moviesList = await prismadb.movie.findMany()
        return NextResponse.json(moviesList, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Unable to get movies"}, {status:400})
    }
}