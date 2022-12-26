import styled from 'styled-components';
export const Navebar=styled.div 
`    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`
export const Logo=styled.div 
`    width: 50%;
    float: left;
    `
export const Logotext=styled.h2
`    font-size: 30px;
    font-weight: bold
`
export const Listitem=styled.ul
`    width: 50%;
    float: left; 
    li-style: none;
    padding: 0 ;
    text-align: end;
`

export const Liitem =styled.li
`    display: inline-block;
`

export const Link =styled.a
`    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
    color: #eb5424
    }
`

