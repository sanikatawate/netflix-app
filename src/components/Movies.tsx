"use client"
import React from 'react'
import useMovieList from '../../hooks/useMovieList'
import useFavorites from '../../hooks/useFavorites'
import MovieList from './MovieList'

const Movie = () => {
  const {data:movies=[]} = useMovieList()
  const {data:favoriteMovies=[]} = useFavorites()
  return (
    <div className='bg-zinc-900 h-full w-full m-0 pt-4'>
    <MovieList title="Trending now" data={movies}/>
    <MovieList title="My List" data={favoriteMovies} />
    </div>
  )
}

export default Movie
