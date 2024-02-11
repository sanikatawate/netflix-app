import Link from "next/link";
import Form from "./Form"

const page = () => {
	// const router = useRouter();
	// const [userData, setUserData] = useState({ email: "", password: "" });
	// const [error, setError] = useState("");
	// const [loading, isLoading] = useState(false);

	// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setUserData({ ...userData, [e.currentTarget.id]: e.currentTarget.value });
	// };

	// const session = useSession();

	// useEffect(() => {
	// 	if (session?.status === "authenticated") {
	// 		router.push("/");
	// 	}
	// });

	// const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
	// 	e.preventDefault();
	// 	if (!userData.password || !userData.email) {
	// 		setError("Must Provide all the credentials");
	// 		return null;
	// 	}
	// 	const res = await authenticate(userData);
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
					<div className="bg-black bg-opacity-60 px-20 py-14 pb-6 w-2/3 lg:w-2/5 lg:max-w-md rounded-md text-white">
						<p className=" font-bold text-3xl mb-2">Welcome Back !</p>
						<p className="text-sm mb-6">
							Enter your email, password and you'll be watching in no time.
						</p>
						{/* <form className="flex-col flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 dark">
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
								Sign In
							</button>
							<div className="flex flex-row items-center gap-4 mt-4 justify-center">
								<div className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:opacity-80 transition cursor-pointer">
									<FcGoogle height="10px" />
								</div>
								<div
									onClick={() => signIn("github", { callbackUrl: "/" })}
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
