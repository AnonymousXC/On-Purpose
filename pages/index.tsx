import type { NextPage } from "next/types"
import Head from "next/head"
import { useEffect } from "react"
import { 
  ChakraProvider,
  useColorMode,
} from "@chakra-ui/react"
import Face1 from "../components/Landing Page/Face-1"
import Face2 from "../components/Landing Page/Face-2"


const Home : NextPage = () => {

  const { setColorMode } = useColorMode()

  useEffect(() => {
    setColorMode("dark")
  }, [])

  return (
    <ChakraProvider>

      <Head>
        <title>On Purpose : Be Unique</title>
      </Head>

      <Face1 />
      <Face2 />

    </ChakraProvider>
  )
}

export default Home