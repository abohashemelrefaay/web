import styled from 'styled-components';
export const Homeparent =styled.div
`  height: 500px;
  background: url('images/home-bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
  @media (max-width: 1100px) {
    background-size: 10000px 913px;
  };

 `
 export const Imageprofil =styled.div
 `
 width: 150px;
 height: 150px;
 background: url('images/myphoto.jpg');
 background-size: cover;
 border-radius: 50%;
 border: 2px solid aliceblue;
 position: absolute;
 left: 40%;
 @media (max-width:500px) {
  left: 27%;
};


 `;

export const Information =styled.div
`  
width: 90%;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
  
 `;

export const Hometitle =styled.h2
` font-size: 35px;
font-weight: bold;
color: #5e5e5e;
margin-top: 150px;
  @media (max-width:1100px) {
    font-size: 15px;
    margin-top: 170px;
  };



`;

export const Homeinfo =styled.h4
`  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    font-size: 18px;
    margin-bottom: 10px;
  };
`;

export const Homedesc =styled.p
`  font-size: 20px;
  line-height: 1.5;
  color: #888;
  margin-bottom: 15px;
  @media (max-width: 1100px) {
    font-size: 15px;
  };
`;

export const  Span =styled.span
`  color: #eb54249e;
font-weight: bold;
`;

export const Homebtn =styled.button
`  background: #eb5424;
  color: #fff;
  font-size: 18px;
  width: 150px;
  border: 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;
  &:hover { background: #fff;
  color: #eb5424}
`;
