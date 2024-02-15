import { without } from "lodash";
import prismadb from "../../../../lib/prismadb"
import { NextResponse } from "next/server";
import serverAuth from "../../../../lib/serverAuth";

export async function POST(req: Request){
    try {
        const { user } = await serverAuth();
        const { movieId } = await req.json();
        const existsMovie = await prismadb.movie.findUnique({
            where :{
                id: movieId,
            }
        });

        if(!existsMovie){
            throw new Error("Invalid Movie Id")
        }

        const updated_user = await prismadb.user.update({
            where:{
                email: user.email || ""
            },
            data:{
                favoriteIds:{
                    push:movieId
                }
            }
        })

        // console.log(updated_user)
        return NextResponse.json(updated_user, {status:200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Post to favourite Movie Failed"}, {status:400})
    }
}



export async function DELETE(req:Request){
    try {
        const { user } = await serverAuth()
        const { movieId } = await req.json()
        const existsMovie = await prismadb.movie.findUnique({
            where:{
                id:movieId
            },
        })
        if(!existsMovie){
            throw new Error("Invalid Movie Id")
        }
        const updatedFavoriteIds = without(user.favoriteIds, movieId)
        const updated_user = await prismadb.user.update({
            where:{
                email:user.email || ""
            },
            data:{
                favoriteIds:updatedFavoriteIds
            }
        })
        return NextResponse.json(updated_user, {status:200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "DELETE to favourite Movie Failed"}, {status:400})
    }
}

export async function GET(req:Request){
    try {
        const { user } = await serverAuth();
        const favoriteMovies = await prismadb.movie.findMany({
            where:{
                id:{
                    in: user?.favoriteIds
                }
            }
        })
        return NextResponse.json(favoriteMovies, {status:200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "GET request failed"}, {status:400})
    }
}