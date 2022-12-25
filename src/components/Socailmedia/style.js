
import styled from 'styled-components'
export const Socialmedia =styled.div
` 
 width:100%;
 height: auto;
  overflow: hidden;
  `
  export const Socialsec=styled.div 
`  position:relative;
width: 33.33%;
   float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background:${props=>props.Number===1?'#4A6BB1':
               props.Number===2?'#4ab1b1':'#b14a4a'};
  `
export const Linke= styled.a
`
width: 99%;
display: block;
height: 100%;
background: #f000;
position: absolute;
left: 0;
bottom: 0px;
`
  export const Icon =styled.i
  `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 28px;
    border-radius: 14px;

`
export const Socialp =styled.p
`  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
`

export const Pspan =styled.span
`  display: block;
  margin-bottom: 8px;
`
export const Pspan2 =styled.span
`   font-weight: normal;
`


