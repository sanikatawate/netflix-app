import { signIn } from "next-auth/react";

export interface userData {
	username?: string;
	email: string;
	password: string;
}

export async function authenticate(userData: userData) {
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
