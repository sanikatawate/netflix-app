import { NextRequest, NextResponse } from "next/server";
import prismadb from "../../../../../lib/prismadb";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
	const body = await request.json();
	const { username, email, password } = body;

	if (!username || !email || !password) {
		return new NextResponse("Missing Fields", { status: 400 });
	}

	const exist = await prismadb.user.findUnique({
		where: {
			email,
		},
	});

	if (exist) {
		return NextResponse.json({ code: "user-exists" });
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await prismadb.user.create({
		data: {
			username,
			email,
			hashedPassword,
		},
	});

	return NextResponse.json(user);
}
