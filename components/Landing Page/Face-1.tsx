import type { NextComponentType } from "next";
import {
    Box,
    Image,
} from "@chakra-ui/react"
import TypewriterComponent from "typewriter-effect";
import NavBar from "../global/NavBar";



const Face1 : NextComponentType = () => {
    return (
        <>
          <Box 
          position={"relative"}
          h="100vh">

          <Image 
          id="bg-image"
          position={"fixed"}
          src="images/bg-1.jpg"
          w={"full"}
          height="100vh"
          objectFit={"cover"}
          zIndex="-2"
          userSelect={"none"} />

          <NavBar />


          <TypewriterComponent
          options={{
            strings: [
              ' “You do not find the happy life. You make it.” – <span class="quote-poet-name">Camilla Eyring Kimball</span>',
            ' “The most wasted of days is one without laughter.” – <span class="quote-poet-name">E.E. Cummings</span>',
            //  ' “Happiness often sneaks in through a door you didn’t know you left open.” – <span class="quote-poet-name">John Barrymore</span>',
            ' “Life changes very quickly, in a very positive way, if you let it.” – <span class="quote-poet-name">Lindsey Vonn</span>',
            ' “Keep your face to the sunshine and you cannot see a shadow.” – <span class="quote-poet-name">Helen Keller</span>',
            ' “Believe you can and you’re halfway there.” – <span class="quote-poet-name">Theodore Roosevelt</span>',
            ' “Failure is the condiment that gives success its flavor.” – <span class="quote-poet-name">Truman Capote</span>'
            ],
            autoStart: true,
            loop: true,
            cursor: "_"
          }} />

        </Box>
      </>
    )
}

export default Face1