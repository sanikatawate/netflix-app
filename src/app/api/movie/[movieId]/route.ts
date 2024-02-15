import serverAuth from "../../../../../lib/serverAuth";
import prismadb from "../../../../../lib/prismadb"
import { NextResponse } from "next/server";

export async function GET(req:Request, {params}:{params:{movieId:string}}){
    try {
        // console.log("woorkrkrkrkrkrkrkkr")
        await serverAuth()
        const existsMovie = await prismadb.movie.findFirst({
            where:{
                id:params.movieId
            }
        })
        if(!existsMovie){
            throw new Error("Movie does not exits")
        }
        return NextResponse.json(existsMovie, {status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"Get req to movie id failed"}, {status:400})
    }
    

}