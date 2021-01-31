import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  const config = {
    initialColorMode: 'dark',
    // useSystemColorMode: true,
  }
  return (
    <ChakraProvider theme={extendTheme({ config })}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
