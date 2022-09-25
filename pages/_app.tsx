import { 
  ChakraProvider,
  CSSReset
} from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { ReactNode } from 'react'

function MyApp({ Component, pageProps } : AppProps) : ReactNode{
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp