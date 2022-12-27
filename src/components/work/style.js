
import styled from 'styled-components';

export const Movingcover =styled.div
`display: flex;
width: 480%;
transition:3s;

margin-left: ${(props) => (props.active === "p1" ? "0%" : "")};
margin-left: ${(props) => (props.active === "p2" ? "-80%" : "")};
margin-left: ${(props) => (props.active === "p3" ? "-160%" : "")};
margin-left: ${(props) => (props.active === "p4" ? "-240%" : "")};
margin-left: ${(props) => (props.active === "p5" ? "-320%" : "")};
margin-left: ${(props) => (props.active === "p6" ? "-400%" : "")};

`

export const Workcomp =styled.div
`  height: auto;
  padding: 50px 0;
  overflow: hidden;
  background: #fff
 `
export const Worktitle =styled.h2
`  font-size: 60px; 
 `

export const Span =styled.span
 ` font-weight: normal
 `

export const Part =styled.div
`  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  text-align: center;
  margin-left: 5%;
  background: #cfcfcf;
  @media (max-width: 1100px) {
    height: 333px;
    padding: 7px 0;
  };


  
 `
export const Icon =styled.i
`  color: #888;
  margin-bottom: 20px
  @media (max-width: 1100px) {
    margin-bottom: 0px;
  };
  
 `

export const Parttitle =styled.h4
`  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 1100px) {
    margin-top: 5px;
  };
 `

export const Line =styled.hr
`  width: 60%;
  margin: auto;
  margin-bottom: 20px
  @media (max-width: 1100px) {
    margin-bottom: -23px;
  };
  `
export const Partdesc =styled.p
`  font-size: 14px;
  color: #888;
  padding: 20px
`
export const Link =styled.a
`  background: #eb5424;
display: block;
width: 30%;
height: 24px;
text-decoration: none;
border-radius: 10px;
margin: 60px auto;
color: #fff;
@media (max-width: 1100px) {
  margin: 24px auto;
};

`;

export const  Moveleft = styled.span`
  width: 10px;
  border: 2px solid;
  border-color: #eb5424  #eb5424  transparent transparent;
  background: transparent;
  height: 9px;
  transform: rotate(42deg) translate(18px);
  margin-top: 10px;
  cursor: pointer;
  z-index: 100;
  position: absolute;
  top: 150%;
   left: 95%;
   @media (max-width: 1100px) {
    top: 127%;
    left: 61%;
  };
`;
export const Moveright = styled.span`
  width: 10px;
  border: 2px solid;
  border-color: transparent transparent #eb5424 #eb5424;
  background: transparent;
  height: 9px;
  transform: rotate(42deg);
  cursor: pointer;
  position: absolute;
  top: 153%;
  left: 5%;
  z-index: 100;
  @media (max-width: 1100px) {
    top: 130.1%;
    left: 38%;
  };
`;