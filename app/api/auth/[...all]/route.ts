import { toNextJsHandler } from "better-auth/next-js";
import { NextRequest } from "next/server";
import { auth } from "@/lib/auth"; // path to your auth file

// export const { POST, GET } = toNextJsHandler(auth);


export const { GET } = toNextJsHandler(auth);

export const POST = async (req: NextRequest) => {
	const res = await auth.handler(req);
	return res;
};