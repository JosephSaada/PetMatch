import * as React from "react" 
import Layout from "./components/Layout" 

import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

export const App = () => ( 
  <ChakraProvider theme={theme}>  
   <Layout></Layout> 
  </ChakraProvider> 
)
