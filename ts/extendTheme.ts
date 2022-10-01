import { extendTheme } from "@chakra-ui/react";

const ExtendedTheme : any = extendTheme({
    config : {
        initialColorMode: "dark",
        useSystemColorMode: false,
    }
})

export default ExtendedTheme