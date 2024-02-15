"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Input } from "@nextui-org/input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { authenticate } from "../../../lib/authenticate";

const Form = () => {
    const router = useRouter();
	const [userData, setUserData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.currentTarget.id]: e.currentTarget.value });
	};

	const session = useSession();

	// useEffect(() => {
	// 	if (session?.status === "authenticated") {
	// 		router.push("/");
	// 	}
	// });

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!userData.password || !userData.email) {
			setError("Must Provide all the credentials");
			return null;
		}
		setIsLoading(true)
		try{
			const res = await authenticate(userData);
		}catch(e:any){
			console.log(e)
		}finally{
			setIsLoading(false)
		}

	};
  return (
    <form className="flex-col flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 dark">
		<Input
			type="email"
			variant="bordered"
			label="Email"
			onChange={handleChange}
			value={userData.email}
			id="email"
		/>
		<Input
			type="password"
			variant="bordered"
			label="Password"
			onChange={handleChange}
			value={userData.password}
			id="password"
		/>
		{error && <span className="text-sm text-red-700">{error}</span>}
		<button
			onClick={handleSubmit}
			className="bg-red-600 px-5 py-2 font-semibold rounded-[3px] text-white transition"
		>
			{isLoading?"Signing In...":"Sign In"}
		</button>
		<div className="flex flex-row items-center gap-4 mt-4 justify-center">
			<div className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:opacity-80 transition cursor-pointer">
				<FcGoogle height="10px" />
			</div>
			<div
				onClick={() => signIn("github", { callbackUrl: "/profiles" })}
				className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:opacity-80 transition cursor-pointer"
			>
				<FaGithub height="50px" color="black" />
			</div>
		</div>
		<button className="hover:underline hover:opacity-80">Forgot password?</button>
		<p className=" text-zinc-400">
			New to Netflix?{" "}
			<Link href="/sign-up" className="text-white hover:underline">
				Sign up now.
			</Link>
		</p>
		<p className="text-xs text-zinc-500">
			This page is protected by Google reCAPTCHA to ensure you are not a bot
			<span className=" text-blue-600 hover:underline">Learn more.</span>
		</p>
	</form>
  )
}

export default Form
