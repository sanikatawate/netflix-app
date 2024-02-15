import Navbar from "../components/Navbar";
import HomePage from "../components/home";
import { getServerSession } from "next-auth";

const page = async() => {
	const session = await getServerSession()
	return (
		<div>
			<div className="text-white">
				Server Session Result {session?.user?.email ? <div>{session?.user?.email}</div>: <div>Not Signed In</div>}
			</div>
			<HomePage />
		</div>
		
	);
}

export default page;
