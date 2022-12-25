import React,{useState,useEffect} from 'react';
import axion from 'axios'
import {Socialmedia,Socialsec,Linke,Icon,Socialp,Pspan,Pspan2} from "./style.js"

const Socailmedia =()=> {
  const [social,setsocial]=useState([])
  useEffect(()=>{
  axion.get("js/data.json").then(file=>{setsocial(file.data.social)})
},[])
  const sociallist=social.map((socialitem)=>{
    return(
      <Socialsec key={socialitem.id} Number={socialitem.id}>
        <Linke href={socialitem.link}></Linke>
      <Icon className={socialitem.icon}></Icon>
      <Socialp>
          <Pspan >{socialitem.title}</Pspan>
          <Pspan2>{socialitem.body}</Pspan2>
      </Socialp>
  </Socialsec>
    )
  })

  return (
    <Socialmedia>
    <div className="container">
    {sociallist}
    </div>
    </ Socialmedia>



  );
}
export default Socailmedia;
