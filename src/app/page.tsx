import HomePage from "@/components/HomePage";
import { getServerSession } from "next-auth";

const page = async() => {
	const session = await getServerSession()
	return (
		<>
			{/* <div className="text-white">
				Server Session Result {session?.user?.email ? <div>{session?.user?.email}</div>: <div>Not Signed In</div>}
			</div> */}
			<HomePage />
		</>
		
	);
}

export default page;
