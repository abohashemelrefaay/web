import React from 'react';
import {Homeparent,Imageprofil,Information,Hometitle,Homeinfo,Homedesc,Span,Homebtn} from'./style.js'

const Home =()=> {
  

  return (
    <Homeparent>
        <div className="container">
           <Imageprofil name="image"></Imageprofil>
            <Information>
                <Hometitle>mustafa mohamed abohashem</Hometitle>
                <Homeinfo>Front End Developer</Homeinfo>
                <Homedesc>
                Front End Developer I create modern and responsive web designs using  <Span > HTML, CSS, JS </Span> and <Span >react.js</Span> programming languages,And I have other languages ​​like <Span >php , C++</Span> I have good knowledge of  <Span >CCNA</Span>  and video editing programs and Photoshop programs 
                </Homedesc>
                <Homebtn className="home-btn">Let's Begin</Homebtn>
            </Information>
        </div>
    </Homeparent>
  );
}


export default Home;
