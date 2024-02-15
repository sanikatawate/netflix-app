"use client"
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import useMovie from '../../../../hooks/useMovie'

const Page = () => {
    const router = useRouter()
    const params = useParams()
    const { data } = useMovie(params.movieId as string)
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon onClick={() => router.push('/user')} className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>
    </div>
  )
}

export default Page
