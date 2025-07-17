import React, { ReactNode } from 'react'
import { ThemeProvider  as NextThemeProvider, ThemeProviderProps } from 'next-themes'
interface Props extends ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({children, ...props}:Props) {
  return (
    <NextThemeProvider
    attribute="class"
    defaultTheme='system'
    enableSystem
    {...props}>
{children}
    </NextThemeProvider>
  )
}
