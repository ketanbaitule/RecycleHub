'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme( withDefaultColorScheme({ colorScheme: 'green' }));

theme.colors["brand"] = "#00FF00";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}