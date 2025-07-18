'use client'

import { ThemeProvider } from "./theme-provider"

export function providers({children}: {children:React.ReactNode}) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange>
        {children}

    </ThemeProvider>
  )
}

