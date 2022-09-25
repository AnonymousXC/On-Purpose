import type { NextPage } from "next/types"
import { 
  ChakraProvider,
  Heading,
  Button,
} from "@chakra-ui/react"


const Home : NextPage = () => {
  return (
    <ChakraProvider>
      <Heading>Hello World</Heading>
      <Button>sfdsf </Button>
    </ChakraProvider>
  )
}

export default Home