"use client"
import React, { useCallback, useMemo } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';
import useFavorites from '../../hooks/useFavorites';
import useCurrentUser from '../../hooks/useCurrentUser';
import axios from 'axios';

const FavoriteButton = ({movieId}:{movieId:string}) => {
  const { mutate:mutateFavorites } = useFavorites()
  const { data:user, mutate} = useCurrentUser()

  const isFavorite = useMemo(()=>{
    const list = user?.user?.favoriteIds || []
    return list.includes(movieId)
  },[user, movieId])

  const toggleFavorite = useCallback(async()=>{
    let res;
    if(isFavorite){
      res = await axios.delete("/api/favorite", {data:{movieId}})
    }
    else{
      res = await axios.post("/api/favorite", {movieId})
    }

    const updatedFavoriteIds = res?.data.favoriteIds;
    mutate({
      ...user, favoriteIds:updatedFavoriteIds
    })
    mutateFavorites()
  },[movieId, user, isFavorite, mutate, mutateFavorites])

    const Icon = isFavorite? CheckIcon: PlusIcon;
  return (
    <div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
        <Icon onClick={toggleFavorite} color='white' width="16" />
      {/* <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" /> */}
    </div>
  )
}

export default FavoriteButton
