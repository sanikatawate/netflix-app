"use client"
import React from 'react'
import { isEmpty } from 'lodash'
import useMovieList from '../../hooks/useMovieList'
import MovieCard from './MovieCard'

export type movieType = {
    id?:string,
    title?:string,
    description?:string,
    videoUrl?:string,
    thumbnailUrl?:string,
    genre?:string,
    duration?:string,
}

const MovieList = ({title, data}:{title:string, data:movieType[]}) => {
    if(isEmpty(data)){
        return null
    }
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
        <div>
            <p className='text-white text-base md:text-xl lg:text-2xl font-semibold mb-4'>
                {title}
            </p>
            <div className='grid grid-cols-4 gap-2'>
                {data?.map((movie:movieType)=><MovieCard key={movie.id} data={movie} />)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
