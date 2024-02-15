import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "./prismadb";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			id: "credentials",
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "text" },
			},
			async authorize(credentials) {
				// console.log("***Credentials***", credentials);
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Email and password required");
				}
				const user = await prismadb.user.findUnique({
					where: { email: credentials.email },
				});

				if (!user || !user.hashedPassword) {
					throw new Error("Invalid Email or Password");
				}

				const isCorrectPassword = bcrypt.compareSync(credentials.password, user.hashedPassword);

				if (!isCorrectPassword) {
					throw new Error("Invalid Email or Password");
				}
				return user;
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, session }) {
			// console.log("Token: ", token)
			return token;
		},
		async session({ session, token, user }) {
			// console.log("Session: ", session)
			return session;
		},
	},
	pages: {
		signIn: "/sign-in",
	},
	debug: process.env.NODE_ENV === "development",
	adapter: PrismaAdapter(prismadb),
	session: {
		strategy: "jwt",
	},
	// jwt: {
	// 	secret: process.env.NEXTAUTH_JWT_SECRET,
	// },
	secret: process.env.NEXTAUTH_SECRET,
};