import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(request:Request, { params }: { params:{id:string}}){
    if(parseInt(params.id)>comments.length){
        redirect("/comments")
    }
    const comment = comments.find(i => i.id=== parseInt(params.id))
    return Response.json(comment);
}

export async function PATCH(request:Request, {params}:{params:{id:string}}){
    const data = await request.json()
    const {text} = data
    const index = comments.findIndex(i=> i.id===parseInt(params.id))
    comments[index].text = text
    return Response.json(comments[index])
}

export async function DELETE(request:Request, {params}:{params:{id:string}}){
    const index = comments.findIndex(i=> i.id===parseInt(params.id))
    const deletedComment = comments[index]
    comments.splice(index, 1)
    return Response.json(deletedComment)
}