"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import { useActionState, useContext, useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../auth-context";
import login from "./login";

export default function Login(){
    const router = useRouter();
    const { setIsAuthenticated } = useContext(AuthContext);
    const [state, formAction, isPending] = useActionState(login, { error: ""});

    useEffect(() => {
        if (state.success) {
            // 1. Actualiza el estado del cliente para que el header cambie al instante.
            setIsAuthenticated(true);
            // 2. Redirige al usuario a la página de inicio de forma suave.
            router.push('/');
        }
    }, [state, router, setIsAuthenticated]);

    return (<form action={formAction} className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Stack spacing={2} className="w-full max-w-sx">
            <TextField name="email" type="email" placeholder="Email" required helperText={state.error} error={!!state.error}/>
            <TextField name="password" type="password" placeholder="Password" required  helperText={state.error} error={!!state.error} />
            <Button type="submit" variant="contained" disabled={isPending}>
                {isPending ? "Iniciando sesión..." : "Login"}
            </Button>
            <Link component={NextLink} href="/" className="self-center">
                Signup
            </Link>
        </Stack>
    </form>);
}