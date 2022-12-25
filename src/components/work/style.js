
import styled from 'styled-components';

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
  margin-left:${props=>props.first === 1 || props.first===(4) ||props.first===(7) ||props.first===(10)  ?'0':'3%'}
 `
export const Icon =styled.i
`  color: #888;
  margin-bottom: 20px
 `

export const Parttitle =styled.h4
`  font-size: 25px;
  color: #eb5424;
  margin-bottom: 20px
 `

export const Line =styled.hr
`  width: 60%;
  margin: auto;
  margin-bottom: 20px
  `
export const Partdesc =styled.p
`  font-size: 14px;
  color: #888;
  padding: 20px
`
