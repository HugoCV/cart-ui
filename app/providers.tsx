"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./dark.theme";
import { AuthContext } from "./auth/auth-context";

interface ProvidersProps {
  children: React.ReactNode;
  authenticated?: boolean;
}

export default function Providers({ children, authenticated }: ProvidersProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated);
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider
          value={{ isAuthenticated: isAuthenticated || false, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
