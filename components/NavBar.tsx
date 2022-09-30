import { 
    Flex,
    Heading,
    Link
} from "@chakra-ui/react";
import type { NextComponentType } from "next";
import NextLink from "next/link"
import { useEffect, useState } from "react";


const NavBar : NextComponentType = () => {
    return (
        <NavDesktop />
    )
}


const NavDesktop : NextComponentType = () => {

    const [ getNavBG, setNavBG] = useState("transparent")

    useEffect(() => {

        document.body.onscroll = (e) => {
            if(window.scrollY > 85)
                setNavBG("#181818")
            else
                setNavBG("transparent")
        }

    }, [])

    return (
        <Flex
        id="nav-bar"
        w={"full"}
        h="42px"
        py={30}
        position="fixed"
        display={["none", "none", "flex", "flex"]}
        justifyContent="space-between"
        alignItems={"center"}
        px={14}
        zIndex={10}
        backgroundColor={getNavBG}
        transition="all 200ms">

            <Heading
            fontSize={"3xl"}
            lineHeight="39px"
            fontWeight={800}
            fontFamily="Inter"
            fontStyle={"normal"} >On Purpose</Heading>

            <Flex 
            gap={6}
            alignItems="center">
                <NextLink href={"#"}>
                    <Link h={"min-content"}>Home</Link>
                </NextLink>
                <NextLink href={"#"}>
                    <Link h={"min-content"}>Get Motivated</Link>
                </NextLink>
                <NextLink href={"#"}>
                    <Link h={"min-content"}>About Us</Link>
                </NextLink>
                <NextLink href={"#"}>
                    <Link h={"min-content"}>Help</Link>
                </NextLink>
            </Flex>

            <NextLink href={"#"}>
                <Link h={"min-content"}>Sign Up &rarr; </Link>
            </NextLink>

      </Flex>
    )
}

export default NavBar