"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Container } from "@mui/material";
import darkTheme from "./dark.theme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg">{children}</Container>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
