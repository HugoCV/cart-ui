import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "./auth-cookie";

export default async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTHENTICATION_COOKIE)?.value;
  return !!token;
}