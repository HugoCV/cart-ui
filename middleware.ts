import { NextRequest } from "next/server";
import { AUTHENTICATION_COOKIE } from "./app/auth/auth-cookie";
import { unauthorizedRoutes } from "./app/common/constants/routes";

export function middleware(request: NextRequest) {
    const auth = request.cookies.get(AUTHENTICATION_COOKIE)?.value;
    console.log(auth);
    if (!auth && !unauthorizedRoutes.some(route => request.nextUrl.pathname.startsWith(route.path))) {
        return Response.redirect(new URL("/auth/login", request.url));
    }

}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};