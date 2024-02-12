import MovieList from '@/components/MovieList'
import Billboard from '../../components/Billboard'
import Navbar from '../../components/Navbar'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
    const session = await getServerSession()
    if(!session?.user){
        redirect("/")
    }
  return (
    <div>
      <Navbar />
      <Billboard />
      <MovieList title='Trending Now' />
    </div>
  )
}

export default page
