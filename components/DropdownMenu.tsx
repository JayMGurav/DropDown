import React, { Children, cloneElement, createElement, useState } from 'react';
import styled, { StyledFunction } from "styled-components"

// components
// import DropdownMenuItem from './DropdownMenuItem'



// const rotate = keyframes`
//   0% {
//     opacity: 0;
//     left: -100px;
//   }
//   100% {
//     opacity: 1;
//     left: 0px;
//   }
// `;

const DropdownDiv = styled.div`
  position: absolute;
  left:0;
  top: 100%;
  padding:0.75rem ;
  margin-top: 1rem;
  list-style: none;
  background-color:  var(--background);
  border-radius: 16px;
  height: fit-content;
  overflow-x: hidden;
  transition: height 250ms;
`

const DropdownList = styled.ul<{isMenuActive:boolean}>`
  list-style: none;
  margin: 0;
  padding: 0; 
  position: relative; 
  width:100%;
  top: 0;
  left:${({isMenuActive}) => {
   return isMenuActive ? "-120%" : "0%"
  }};
  /* display: ${({isMenuActive}) => isMenuActive ? "none" : "contents"}; */
  /* visibility: ${({isMenuActive}) => isMenuActive ? "hidden" : "visible"}; */
  /* opacity : ${({isMenuActive}) => isMenuActive ? "0" : "1"}; */
  transition:  left 300ms linear;
`;

const ActiveMenuDiv = styled.div<{isMenuActive:boolean}>`
  list-style: none;
  margin: 0;
  padding: 0; 
  position: relative; 
  width:100%;
  background:red;
  height: fit-content;
  top: 0;
  left:${({isMenuActive}) => {
   return isMenuActive ? "0%" : "120%";
  }};
  /* display: ${({isMenuActive}) => !isMenuActive ? "none" : "block"}; */
  /* visibility: ${({isMenuActive}) => isMenuActive ? "visible" : "hidden"}; */
  /* opacity : ${({isMenuActive}) => isMenuActive ? "1" : "0"}; */
  transition: left 300ms linear;
`;

const Div = styled.div`
  position: relative;
`;


function DropdownMenu({children}){

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  
  // console.log({isMenuActive, activeMenu})


  const activateMenu = (component) => {
    return setIsMenuActive(() => {
      setActiveMenu(component);
      return true;
    })
  }

  return (
    <DropdownDiv>
      <Div>
        {!isMenuActive && <DropdownList isMenuActive={isMenuActive}>
        {Children.map(children, (child) => (
          cloneElement(child, {activateMenu})
        ))}
        </DropdownList>}
        {isMenuActive && <ActiveMenuDiv isMenuActive={isMenuActive}>
          {cloneElement(activeMenu, {activateMenu})}
        </ActiveMenuDiv>}
      </Div>
   </DropdownDiv>
  )
}


export default DropdownMenu;