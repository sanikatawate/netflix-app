import { authOptions } from "../src/app/api/auth/[...nextauth]/route"
import prismadb from "./prismadb"
import { getServerSession } from "next-auth";

const serverAuth = async()=>{
    const session = await getServerSession(authOptions)
    if(!session?.user?.email){
      throw new Error("Not signed in")
    }
    const user = await prismadb.user.findUnique({
      where: {
        email: session.user.email,
      }
    })
    if(!user){
      throw new Error("Not signed in")
    }
    return { user }
  }

export default serverAuth