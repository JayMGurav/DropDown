import { keyframes } from "styled-components";

// dropdownList
export const menuEnterAnimation = keyframes`
  0% {
    /* opacity: 0; */
    /* display: none; */
    /* left: -120%; */
  }
  100% {
    /* opacity: 1; */
    /* display: block; */
    /* left: 0px; */
  }
`;

export const menuLeaveAnimation = keyframes`
  0% {
    /* opacity: 1; */
    /* display: block; */
    /* left: 0%; */
  }
  100% {
    /* opacity: 0; */
    /* display: none; */
    /* left: -120%; */
  }
`;

// ActiveMenuDiv
export const activeMenuEnterAnimation = keyframes`
  0% {
    opacity: 0;
    display: none;
    left: 120%;
  }
  100% {
    opacity: 1;
    display:blocks;
    left: 0px;
  }
`;

export const activeMenuLeaveAnimation = keyframes`
  0% {
    opacity: 1;
    /* display: block; */
    left: 0%;
  }
  100% {
    opacity: 0;
    /* display: none; */
    left: 120%;
  }
`;
