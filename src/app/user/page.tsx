import MovieList from '@/components/MovieList'
import Billboard from '../../components/Billboard'
import Navbar from '../../components/Navbar'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Movie from '@/components/Movies'
import InfoModal from '@/components/InfoModal'

const page = async() => {
    const session = await getServerSession()
    if(!session?.user){
        redirect("/")
    }
  return (
    <div className='h-full w-full bg-zinc-900'>
      <InfoModal />
      <Navbar />
      <Billboard />
      <Movie />
    </div>
  )
}

export default page
