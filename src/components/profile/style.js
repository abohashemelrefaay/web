import styled from 'styled-components'
export const Profileskills =styled.div
`  padding: 50px 0;
  overflow: hidden;
`
export const Profilesection =styled.div
`  width: 50%;
  float: left;
  @media (max-width: 750px) {
    width: 90%;
    margin-left:20px;
  };
 `

export const Profilelist =styled.ul
`  list-style: none
`

export const Profileitem =styled.li
`  margin-bottom: 25px;

`

export const Span=styled.span
`  display: inline-block;
  width: 100px;
  font-weight: bold
`


export const Skills=styled.div
`  width: 50%;
  float: left;
  @media (max-width: 750px) {
    width: 90%;
    margin-left:20px;
  };
`

export const Skillsdesc =styled.p
`  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px
`

export const Bar =styled.div
`  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px
`

export const Title =styled.span
`  float: left;
 `

export const Perc =styled.span
`  float: right;
  margin-right: 100px
 `
export const Parent =styled.div
`  
height: 2px;
clear: both;
background: #b7b3b2;
position: relative;
top: 5px
 `

export const Parentspan =styled.span
`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width:${props=>props.number===1?'75%':props.number===2?'85%':props.number===3?'85%':props.number===4?'80%':'0%'}
`


export const Profiletitle=styled.h2`
font-size: 40px; 
margin-bottom: 20px
`
export const Skillstitle=styled.h2`
font-size: 40px; 
margin-bottom: 20px
`


export const Profiletitlespan=styled.span`
font-weight: normal;
`
export const Skillstitlespan=styled.span`
font-weight: normal;
`
