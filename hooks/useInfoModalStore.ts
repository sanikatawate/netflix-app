import React from 'react'
import { create } from "zustand"

export interface ModalStoreInterface {
    movieId?:string;
    isOpen: Boolean;
    openModal: (movieId:string)=> void;
    closeModal: ()=>void;
}

const useInfoModalStore = create<ModalStoreInterface>((set)=>({
    movieId: undefined,
    isOpen:false,
    openModal: (movieId:string)=>set({isOpen:true, movieId:movieId}),
    closeModal: ()=>set({isOpen:false, movieId:undefined})
}));

export default useInfoModalStore

// Global State management library
// State management can be handled by reactContext or redux 
