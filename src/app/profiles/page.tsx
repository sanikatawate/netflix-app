import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import User from './User'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
 
type session = {
  user: {
    name: string,
    email: string,
    image: string,
  }
}
const page = async() => {
  const session = await getServerSession()
  if(!session?.user){
    redirect("/")
  }

  return (
    <div className='h-full'>
      <Navbar />
      <div className='flex items-center h-full justify-center bg-black'>
      <div className='flex flex-col'> 
        <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
        <div className='flex items-center justify-center gap-8 mt-10'>
          <User />
        </div>
      </div>
       
    </div>
    </div>
    
  )
}

export default page
