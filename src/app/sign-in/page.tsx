import Link from "next/link";
import Form from "./Form"

const page = () => {

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
						<p className=" font-bold text-3xl mb-2">Welcome Back!</p>
						<p className="text-sm mb-6">
							Enter your email, password and you will be watching in no time.
						</p>
						<Form />
					</div>
				</section>
			</div>
		</div>
	);
};

export default page;
