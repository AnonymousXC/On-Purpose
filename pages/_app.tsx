import { AppProps } from 'next/app'
import { ReactNode } from 'react'
import '../styles/globals.css'
import { 
  ChakraProvider,
} from '@chakra-ui/react'

function MyApp({ Component, pageProps } : AppProps) : ReactNode{
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp