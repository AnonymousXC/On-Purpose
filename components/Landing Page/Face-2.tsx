import type { NextComponentType } from "next";
import {
    Flex,
    Image,
    Heading
} from "@chakra-ui/react"



const Face2 : NextComponentType = () => {
    return (
        <Flex
        position={"relative"}
        h="75vh" 
        w={"100vw"}
        backgroundColor="#eee"
        color={"#000"}
        pt={1}>
            <Image 
            src="/images/pic-1.png" 
            w={450}  
            pl={18}
            alignSelf="center"
            h="auto"/>
            <Flex
            pl={10}
            pt={10}>
                <Heading>Be Cool. Be You. <br /> Be Instant.</Heading>     
            </Flex>
        </Flex>
    )
}

export default Face2