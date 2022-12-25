import React ,{useState ,useEffect} from 'react';
import axios from 'axios';
import {Portfoliosection,Portfoliotitle,Span,Portfoliolist,Portfolioitem,Boxdiv,Image,Overlay,Overlayspan}from './style.js'

const Portfolio =()=> {
  const[images ,setimages]=useState([])
  useEffect(()=>{
axios.get('js/data.json').then(res=> {setimages(res.data.portfolio)})
  },[])
const portofolioimages= images.map((image)=>{
  return(
<Boxdiv key={image.id}>
                <Image src={image.image} alt="" />
                <Overlay>
                    <Overlayspan>
                        Show Image
                    </Overlayspan>
                </Overlay>
            </Boxdiv>  
  )
})
  return (
  
    <Portfoliosection>
        <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
        <Portfoliolist>
            <Portfolioitem active >All</Portfolioitem>
            <Portfolioitem>HTML      </Portfolioitem>
            <Portfolioitem>Photoshop </Portfolioitem>
            <Portfolioitem>Wordpress </Portfolioitem>
            <Portfolioitem>Mobile    </Portfolioitem>
        </Portfoliolist>
        
        <div className="box">  
             {portofolioimages}
        </div>
    </Portfoliosection>
    
  );
}


export default Portfolio;
