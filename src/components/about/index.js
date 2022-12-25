import React from 'react';
import{Creativesection,Creativeinfo,Infotitle,Span,Infodir,Infodesc,Infolink} from './style.js'
const About =()=> {
  

  return (
    <Creativesection>
    <div class="container">
        <Creativeinfo>
            <Infotitle><Span>This is</Span> Me</Infotitle>
            <Infodir>Creative Director</Infodir>
            <Infodesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Infolink href="#">explicabo</Infolink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </Infodesc>
            <Infodesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </ Infodesc>
    </Creativeinfo>
    </div>
</Creativesection>
  );
}


export default About;
