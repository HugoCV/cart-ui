import { NextRequest } from "next/server";

const unauthorizedRoutes = ["/auth/login", "/auth/signup"];

export function middleware(request: NextRequest) {
    const auth = request.cookies.get("Authentication")?.value;
    console.log(auth);
    if (!auth && !unauthorizedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
        return Response.redirect(new URL("/auth/login", request.url));
    }

}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};