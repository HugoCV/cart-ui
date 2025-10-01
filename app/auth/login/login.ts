"use server";

import { FormError } from '@/app/common/form-error.interface';
import { API_URL } from '@/app/common/constants/api';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { AUTHENTICATION_COOKIE } from '../auth-cookie';
import { getErrorMessage } from '@/app/common/utils/errors';

export default async function login(_prevState: FormError, formData: FormData): Promise<FormError> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  await setAuthCookie(res);
  return { success: true };
}


interface JwtPayload {
  exp: number;
}

const setAuthCookie = async (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");
  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    const decodedToken = jwtDecode<JwtPayload>(token);
    (await cookies()).set({
        name: AUTHENTICATION_COOKIE,
        value: token,
        httpOnly: true, 
        expires: new Date(decodedToken.exp * 1000)
    });
  }
}