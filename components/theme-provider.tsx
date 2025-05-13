"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="slate"
      themes={["root", "blue", "original", "slate"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
