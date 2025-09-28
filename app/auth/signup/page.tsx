"use client";
import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import createUser from "./create-user";
import { useActionState } from "react";

export default function Signup(){
    const [state, formAction] = useActionState(createUser, { error: ""})

    return (<form action={formAction} className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Stack spacing={2} className="w-full max-w-sx">
            <TextField name="email" type="email" placeholder="Email" required helperText={state.error} error={!!state.error}/>
            <TextField name="name" type="text" placeholder="Name" required  helperText={state.error} error={!!state.error} />
            <TextField name="password" type="password" placeholder="Password" required  helperText={state.error} error={!!state.error} />
            <Button type="submit" variant="contained">Sign Up</Button>
            <Link component={NextLink} href="/auth/login" className="self-center">
                Login
            </Link>
        </Stack>
    </form>);
}