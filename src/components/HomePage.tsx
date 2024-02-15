"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function HomePage() {
  const router = useRouter()
  const session = useSession();
  useEffect(()=>{
    if(session?.status==="authenticated"){
        router.push("/user")
      }
  },[router, session])
  
  return (
    <main className='h-full w-full bg-[url("/images/hero.jpg")] bg-center bg-fixed bg-cover dark'>
			<div className=" bg-black w-full h-full bg-opacity-60">
					<nav className="max-w-xl lg:max-w-5xl mx-auto flex justify-between items-center py-6 font-sans font-semibold text-sm">
						<img src="/images/logo.png" alt="logo" width="150" />

						<section className="flex space-x-8">
                            <Link href="/sign-in">
								<button className="bg-red-600 px-5 py-2 rounded-[3px] text-white hover:bg-red-800">Sign In</button>
							</Link>
						</section>
					</nav>
					<section className="text-white flex flex-col items-center gap-4 mt-48">
						<h1 className="font-bold text-5xl">Unlimited movies, TV shows and more</h1>
						<h1 className="text-xl font-semibold">Watch anywhere. Cancel anytime.</h1>
						<h1 className="text-xl font-semibold">
							Ready to watch? Enter your email to create or restart your membership.
						</h1>
						<div className="flex flex-row items-center space-x-4 text-white max-w-full">
							{/* <Input label="Email address" variant="bordered" /> */}
							<Link href="/sign-up">
								<button className="bg-red-600 px-5 py-2 rounded-[4px] text-white font-semibold text-2xl min-w-56">
									Get Started{" "}
								</button>
							</Link>
							{/* <div>{JSON.stringify(data)}</div> */}
						</div>
					</section>
			</div>
		</main>
  )
}

export default HomePage