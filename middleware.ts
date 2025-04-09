import { getSessionCookie } from "better-auth/cookies";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const cookies = getSessionCookie(request, {
		cookieName: "session_token",
		cookiePrefix: "better-auth",
	});

	// if (!cookies) {
	// 	return NextResponse.redirect(new URL("/auth/login", request.url));
	// } else if (cookies) {
	// 	if (request.nextUrl.pathname.startsWith("/auth")) {
	// 		return NextResponse.redirect(new URL("/dashboard", request.url));
	// 	} else {
	// 		return NextResponse.redirect(new URL("/dashboard", request.url))
	// 	}
  // }

	console.log(`request.nextUrl.pathname: ${request.nextUrl.pathname}`);

	if (!cookies) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	} else {
		if (request.nextUrl.pathname.startsWith("/auth")) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		} else {
			return NextResponse.next();
		}
	}
}

export const config = {
	// runtime: "nodejs",
	matcher: [
		// "/auth/:path*",
		// "/dashboard/:path*",
		// "/auth/:path",
		// "/dashboard/:path",
		"/dashboard",
		// "/"
		// "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",

		// {
    //   source:
    //     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    //   missing: [
    //     { type: 'header', key: 'next-router-prefetch' },
    //     { type: 'header', key: 'purpose', value: 'prefetch' },
    //   ],
    // },
    // {
    //   source:
    //     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    //   has: [
    //     { type: 'header', key: 'next-router-prefetch' },
    //     { type: 'header', key: 'purpose', value: 'prefetch' },
    //   ],
    // },
    // {
    //   source:
    //     '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    //   has: [{ type: 'header', key: 'x-present' }],
    //   missing: [{ type: 'header', key: 'x-missing', value: 'prefetch' }],
    // },
	],
};