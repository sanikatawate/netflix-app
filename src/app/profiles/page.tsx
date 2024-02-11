import { getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
    // const session = getSession()
    // if(!session){
    //     return redirect('/sign-in')
    // }
  return (
    <div>
      profiles
    </div>
  )
}

export default page
