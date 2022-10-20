import type { NextComponentType } from "next";
import NextLink from "next/link"

import { 
    Flex,
    Heading,
    Link,
    Button,
    Box,
    Text
} from "@chakra-ui/react";

import {
    HamburgerIcon
} from "@chakra-ui/icons"

import { 
    useEffect, 
    useState 
} from "react";


declare global {
    interface FuncProps {
        navBG? : string
    }
}


const NavBar : NextComponentType = () => {

    const [ getNavBG, setNavBG] = useState("transparent")

    useEffect(() => {

        document.body.onscroll = (e) => {
            if(window.scrollY > 85)
                setNavBG("#171717")
            else
                setNavBG("transparent")
        }

    }, [])


    return (
        <>
            <NavDesktop navBG={getNavBG} />
            <NavMobile navBG={getNavBG}/>
        </>
    )
}


const NavDesktop : NextComponentType<FuncProps> = (props) => {
    

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
        backgroundColor={props.navBG}
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
                    <Link >Home</Link>
                </NextLink>
                <NextLink href={"#"}>
                    <Link>Get Motivated</Link>
                </NextLink>
                <NextLink href={"#"}>
                    <Link>About Us</Link>
                </NextLink>
                <NextLink href={"#"}>
                    <Link>Help</Link>
                </NextLink>
            </Flex>

            <NextLink href={"#"}>
                <Link>Sign Up &rarr; </Link>
            </NextLink>

      </Flex>
    )
}


const NavMobile : NextComponentType<FuncProps> = (props) => {

    const [ menuLeft, setMenuLeft ] = useState("-200vh")

    return (
        <>
            <Flex
            w={"full"}
            display={["flex", "flex", "none", "none"]}
            alignItems="center"
            justifyContent={["space-between", "space-around"]}
            py={2}
            h={"50px"}
            backgroundColor={props.navBG}
            zIndex={10}
            px={[4, 0]}
            transition="all 200ms"
            id="mobile-nav-bg">
                <Button 
                backgroundColor={"transparent"}
                _hover={{}}
                _active={{}}
                onClick={() => {
                    menuLeft === "-200vh" ? setMenuLeft("0px") : setMenuLeft("-200vh")
                    document.getElementById("mobile-nav-bg")!.style.backgroundColor = "#171717"
                }} > <HamburgerIcon fontSize={25} /> </Button>
                <Heading display={["none", "block", "block", "block"]}>On Purpose</Heading>
                <NextLink href={"#"}>
                    <Link>Sign Up &rarr;</Link>
                </NextLink>
            </Flex>
            <Flex
            pos={"fixed"}
            transition="all 200ms"
            w={"300px"}
            h={"calc(100vh - 50px)"}
            backgroundColor="#202020"
            left={menuLeft}
            top="50px"
            direction={"column"}
            gap={5}
            justify="space-between"
            alignItems={"center"}
            zIndex={10}
            display={["flex", "flex", "none", "none"]}>
                <Flex direction={"column"} gap={6} alignItems="center" pt={10}>
                    <NextLink href={"#"}>
                        <Link>Home</Link>
                    </NextLink>
                    <NextLink href={"#"}>
                        <Link>Get Motivated</Link>
                    </NextLink>
                    <NextLink href={"#"}>
                        <Link>About Us</Link>
                    </NextLink>
                    <NextLink href={"#"}>
                        <Link>Help</Link>
                    </NextLink>
                </Flex>
                <Text pb={2}> Made By @Thearcane </Text>
            </Flex>
        </>

    )
}


export default NavBar