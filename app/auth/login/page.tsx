"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

import { useActionState } from "react";
import login from "./login";

export default function Login(){
    const [state, formAction] = useActionState(login, { error: ""})

    return (<form action={formAction} className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Stack spacing={2} className="w-full max-w-sx">
            <TextField name="email" type="email" placeholder="Email" required helperText={state.error} error={!!state.error}/>
            <TextField name="password" type="password" placeholder="Password" required  helperText={state.error} error={!!state.error} />
            <Button type="submit" variant="contained">Login</Button>
            <Link component={NextLink} href="/" className="self-center">
                Signup
            </Link>
        </Stack>
    </form>);
}