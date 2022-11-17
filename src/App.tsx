import * as React from "react" 
import Layout from "./components/Layout"   
import { GetRequest } from "./GetRequest"

import {
  ChakraProvider,
  theme, 
  // Image,   
  // Center,
} from "@chakra-ui/react"

export const App = () => (      
  <ChakraProvider theme={theme}>      
   <Layout></Layout>     
   <GetRequest /> 
   {/* <Center>      
   <Image src="doggies.jpg" height="500px" justifyContent="center"/> 
    </Center> */}
  </ChakraProvider> 
)
