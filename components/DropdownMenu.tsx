import React, { Children, cloneElement, useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

// animation
import {
  menuEnterAnimation,
  menuLeaveAnimation,
  activeMenuEnterAnimation,
  activeMenuLeaveAnimation,
} from "@/styles/menuAnimation";

const DropdownDiv = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  padding: 0.25rem;
  width: max-content;
  margin-top: 1rem;
  background-color: var(--background);
  border-radius: 16px;
  overflow: hidden;
  transition: all 300ms;
`;

const DropdownList = styled.ul<{
  isMenuActive: boolean;
  render: boolean;
}>`
  list-style: none;
  margin: 0;
  position: relative;
  top: 0;
  padding: 0.25rem;
  animation: ${({ render }) =>
    !render
      ? css`
          ${menuEnterAnimation} 250ms ease-in-out
        `
      : css`
          ${menuLeaveAnimation} 250ms ease-in-out
        `};
`;

const ActiveMenuDiv = styled.div<{
  isMenuActive: boolean;
  render: boolean;
}>`
  margin: 0;
  padding: 0;
  position: relative;
  top: 0;
  animation: ${({ isMenuActive }) =>
    isMenuActive
      ? css`
          ${activeMenuEnterAnimation} 250ms ease-in-out
        `
      : css`
          ${activeMenuLeaveAnimation} 250ms ease-in-out
        `};
`;

// const Div = styled.div`
//   position: relative;
// `;

function DropdownMenu({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [render, setRender] = useState(isMenuActive);

  useEffect(() => {
    if (isMenuActive) setRender(true);
  }, [isMenuActive]);

  const activateMenu = (toActivateMenu) => {
    if (toActivateMenu) {
      setIsMenuActive(() => {
        return true;
      });
    }
  };

  const deactivateMenu = () => {
    setIsMenuActive(false);
  };

  const onAnimationEnd = () => {
    // if (isMenuActive) return setRender(true);
    if (!isMenuActive) return setRender(false);
  };

  return (
    <DropdownDiv>
      <DropdownList
        isMenuActive={isMenuActive}
        render={render}
        onAnimationEnd={onAnimationEnd}>
        {/* <div style={{ padding: 10 }}> */}
        {Children.map(children, (child) =>
          cloneElement(child, {
            activateMenu,
            deactivateMenu,
            render,
          })
        )}
        {/* </div> */}
      </DropdownList>
      <ActiveMenuDiv
        render={render}
        isMenuActive={isMenuActive}
        id="dropdownPortal"
        onAnimationEnd={onAnimationEnd}
      />
    </DropdownDiv>
  );
}
// {/* <Div> */}

// {/* </Div> */}

export default DropdownMenu;
