// "use client";
// import React, { useCallback, useState } from "react";
// import { Input } from "@nextui-org/input";
// import Link from "next/link";
// import axios from "axios";
// import { signIn } from "next-auth/react";
// import { redirect, useRouter } from "next/navigation";
// import { getServerSession } from "next-auth";
// import { authenticate } from "../../../lib/authenticate";

import Link from "next/link";
import Form from "./Form"

const page = () => {
	// const router = useRouter();
	// const [userData, setUserData] = useState({ username: "", email: "", password: "" });
	// const [error, setError] = useState("");
	// const [pending, setPending] = useState(false);

	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setUserData({ ...userData, [e.currentTarget.id]: e.currentTarget.value });
	// };

	// const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	console.log(userData);
	// 	if (!userData.username || !userData.password || !userData.email) {
	// 		setError("Must Provide all the credentials");
	// 		return null;
	// 	}
	// 	try {
	// 		const res = await axios.post("/api/auth/sign-up", userData);
	// 		const { code = "" } = res.data;
	// 		if (code === "user-exists") {
	// 			router.push("/sign-in");
	// 		}
	// 	} catch (e: any) {}
	// };

	return (
		<div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-center bg-fixed bg-cover'>
			<div className="bg-black w-full h-full bg-opacity-50">
				<nav className="max-w-2xl lg:max-w-5xl mx-auto flex justify-between items-center py-6 font-sans font-semibold text-sm">
					<Link href="/">
						<img src="/images/logo.png" alt="logo" width="150" />
					</Link>
				</nav>

				<section className="flex justify-center">
					<div className="bg-black bg-opacity-60 px-20 py-14 pb-28 w-2/3 lg:w-2/5 lg:max-w-md rounded-md text-white">
						<p className=" font-bold text-4xl mb-8">Sign Up</p>

						{/* <form className="flex-col flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 dark">
							<Input
								type="username"
								variant="bordered"
								label="Username"
								onChange={handleChange}
								value={userData.username}
								id="username"
							/>
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
								disabled={pending}
								onClick={handleSubmit}
								className="bg-red-600 hover:bg-red-400 px-5 py-2 font-semibold rounded-[4px] text-white"
							>
								{pending ? "Creating your acc..." : "Sign Up"}
							</button>
							<button className="hover:underline hover:opacity-80">Forgot password?</button>
							<p className=" text-zinc-400">
								Already have an account?{" "}
								<Link href="/sign-in" className="text-white hover:underline">
									Sign In.
								</Link>
							</p>
							<p className=" text-xs text-zinc-500">
								This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
								<span className=" text-blue-600 hover:underline">Learn more.</span>
							</p>
						</form> */}
						<Form />
					</div>
				</section>
			</div>
		</div>
	);
};

export default page;
