import React from 'react';
import Navbar from './Navbar';

//PropsWithChildren type is omitted from the props type of a FunctionalComponent after React 18 
//so I had to include the children prop myself 
interface Props { 
    children?: React.ReactNode 
}

//returing a react functional component
const Layout:React.FC<Props> = ({children}) => {
    return ( 
        <>  
        <Navbar />
        <main>{children}</main>
        </>
    )
}
export default Layout;
