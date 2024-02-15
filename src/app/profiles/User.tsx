"use client"
import React from 'react'
import useCurrentUser from '../../../hooks/useCurrentUser'
import { useRouter } from 'next/navigation'
import { getSession, useSession } from 'next-auth/react'
import Link from 'next/link'

const User = () => {
  const router = useRouter()
  const { data:user } = useCurrentUser()

  return (
    <div onClick={()=> router.push("/")}>
      
            <div className='group flex flex-row w-44 mx-auto'></div>
              <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent hover:cursor-pointer hover:border-white group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
              <Link href="/user"><img src="/images/default-blue.png" alt="" /></Link> 
              </div>
              <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
                <div>{user? user.user.username : "Loading..."}</div>
              </div>
          </div>
    
  )
}

export default User
