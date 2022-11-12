import { Flex, Image, Text} from '@chakra-ui/react';
import React from 'react'; 
import { ColorModeSwitcher } from "../ColorModeSwitcher" 


const Navbar:React.FC = () => {
    return (  
    <Flex height='44px' padding='6px 12px'> 
        <Flex align='center'>   
            <Image src="withoutbg-dogmatchlogo.png" alt="Petmatch logo without background" height='50px' />   
            <Text fontSize='xl' fontWeight='bold' display={{base: 'none', md: 'unset'}}>PetMatch</Text>  
            <ColorModeSwitcher/> 
        </Flex>
    </Flex>
    )
}
export default Navbar;