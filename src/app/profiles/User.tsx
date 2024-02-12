"use client"
import React from 'react'
import useCurrentUser from '../../../hooks/useCurrentUser'
import { useRouter } from 'next/navigation'

const User = () => {
  const router = useRouter()
  const { data } = useCurrentUser()
  return (
    <div onClick={()=> router.push("/")}>
            <div className='group flex flex-row w-44 mx-auto'></div>
              <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent hover:cursor-pointer hover:border-white group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
                <img src="/images/default-blue.png" alt="" />
              </div>
              <div className='mt-4 text-gray-400 text-2xl text-center group-hover:text-white'>
                <div>{data ? data.username : "Loading..."}</div>
              </div>
          </div>
    
  )
}

export default User
