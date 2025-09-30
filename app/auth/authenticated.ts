import { cookies } from "next/headers";

export default async function isAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get("Authentication")?.value;
  return !!token;
}