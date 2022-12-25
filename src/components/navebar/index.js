import React from 'react';
import {Navebar,Logo,Logotext,Listitem,Liitem,Link} from "./style.js"


const Navbar =()=> {
  return (
    <Navebar>
        <div className="container">  
            <Logo>
                <Logotext>Ultra Profile</Logotext>
            </Logo>
            <Listitem>
                <Liitem className="list-item"><Link href="/">Home</Link></Liitem>
                <Liitem className="list-item"><Link href="#">Work</Link></Liitem>
                <Liitem className="list-item"><Link href="#">Portfolio</Link></Liitem>
                <Liitem className="list-item"><Link href="#">Resume</Link></Liitem>
                <Liitem className="list-item"><Link href="#">About</Link></Liitem>
                <Liitem className="list-item"><Link href="/contact">Contact</Link></Liitem>
            </Listitem>
            
        </div>
        
    </Navebar>
    
  );
}
export default Navbar;
