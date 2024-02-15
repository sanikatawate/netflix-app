import prismadb from "./prismadb"
import { getServerSession } from "next-auth/next";

const serverAuth = async() => {
    const session = await getServerSession()
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