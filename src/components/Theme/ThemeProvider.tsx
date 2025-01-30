"use client"

import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { PropsWithChildren } from "react";

const theme = createTheme({
  direction: "rtl",
  typography:{
    fontFamily : "Vazir"
  }
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
};
