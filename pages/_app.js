import '../styles/globals.css'
import '../node_modules/normalize.css/normalize.css'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import useDarkMode from 'use-dark-mode'

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: { background: '#ffff' }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: { background: '#000000' }
  }
})

function MyApp({ Component, pageProps }) {
  const darkMode = useDarkMode(false)
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
