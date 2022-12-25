import React from 'react';
import {Homeparent,Information,Hometitle,Homeinfo,Homedesc,Span,Homebtn} from'./style.js'

const Home =()=> {
  

  return (
    <Homeparent>
        <div className="container">
            <Information>
                <Hometitle>mustafa abohashem</Hometitle>
                <Homeinfo>Creative Director</Homeinfo>
                <Homedesc>
                    Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                </Homedesc>
                <Homebtn className="home-btn">Let's Begin</Homebtn>
            </Information>
        </div>
    </Homeparent>
  );
}


export default Home;
