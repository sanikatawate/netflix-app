import React from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const useMovie = (movieId?:string) => {
  console.log(movieId)
    const { data, error, isLoading, mutate } = useSWR(movieId?`/api/movie/${movieId}`:null, fetcher, {
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })
  return { data, error, isLoading, mutate }
}

export default useMovie
