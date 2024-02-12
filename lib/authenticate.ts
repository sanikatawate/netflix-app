import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

export interface userData {
	username?: string;
	email: string;
	password: string;
}

export async function authenticate(userData: userData) {
	console.log(userData);
	try {
		const res = await signIn("credentials", {
			email: userData.email,
			password: userData.password,
			callbackUrl: "/profiles",
		});
		if (res?.ok) {
			return { success: true, message: "" };
		}
		if (res?.error) {
			console.log(res.error);
		}
	} catch (error: any) {
		console.log(error);
		switch (error.type) {
			case "CredentialsSignin":
				return { success: true, message: "Invalid credentials." };
			default:
				return { success: true, message: "Something went wrong" };
		}
	}
}

// export async function authenticate(userData: userData) {
// 	signIn("credentials", {
// 		email: userData.email,
// 		password: userData.password,
// 		redirect: false,
// 	}).then((callback) => {
// 		if (callback?.error) {
// 			toast.error(callback.error);
// 		}

// 		if (callback?.ok && !callback?.error) {
// 			toast.success("Logged in successfully!");
// 		}
// 	});
// }
