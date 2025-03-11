import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createSession } from "./lib/sessions";
import { AUTH_BASE_URL } from "./config.server";

// 1. Specify protected and public routes
const protectedRoutes = "/dashboard";
const publicRoutes = "/";
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = path.startsWith(publicRoutes);

  // 3. Decrypt the session from the cookie
  const accessToken = (await cookies()).get("accessToken")?.value;
  const refreshToken = (await cookies()).get("refreshToken")?.value;
  const isLogin = accessToken && refreshToken;
  const isLogout = !accessToken && !refreshToken;
  const needToRefresh = !accessToken && refreshToken;

  if (needToRefresh) {
    try {
      const newResult = await fetch(`${AUTH_BASE_URL}/auth/refresh`, {
        method: "post",
        body: JSON.stringify({ refreshToken: refreshToken }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const newData = await newResult.json();
      if (newResult.ok) {
        await createSession({
          accessToken: newData.accessToken,
          refreshToken: newData.refreshToken,
        });
      }
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    } catch (error) {
      console.log(error);
    }
  }

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && isLogout) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && !isProtectedRoute && isLogin) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
