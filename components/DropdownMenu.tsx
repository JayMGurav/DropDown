import React, { Children, cloneElement, useState, useEffect } from "react";
import styled, { css } from "styled-components";

// animation
import {
  menuEnterAnimation,
  menuLeaveAnimation,
  activeMenuEnterAnimation,
  activeMenuLeaveAnimation,
} from "@/styles/menuAnimation";

// styled-components
const DropdownDiv = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: var(--background);
  border-radius: 16px;
  height: fit-content;
  overflow-x: hidden;
  transition: height 500ms;
`;

const DropdownList = styled.ul<{
  isMenuActive: boolean;
  mountUnmount: boolean;
}>`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  top: 0;
  display: ${({ mountUnmount }) => (mountUnmount ? "none" : "block")};
  animation: ${({ isMenuActive }) =>
    !isMenuActive
      ? css`
          ${menuEnterAnimation} 200ms ease-in-out
        `
      : css`
          ${menuLeaveAnimation} 200ms ease-in-out
        `};
  transition: display 200ms ease-in-out;
`;

const ActiveMenuDiv = styled.div<{
  isMenuActive: boolean;
}>`
  margin: 0;
  padding: 0;
  position: relative;
  top: 0;
  animation: ${({ isMenuActive }) =>
    isMenuActive
      ? css`
          ${activeMenuEnterAnimation} 200ms ease-in-out
        `
      : css`
          ${activeMenuLeaveAnimation} 200ms ease-in-out
        `};
  transition: display 200ms ease-in-out;
`;

const Div = styled.div`
  position: relative;
`;

function DropdownMenu({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [mountUnmount, setMountUnmount] = useState(isMenuActive);

  useEffect(() => {
    if (isMenuActive) setMountUnmount(true);
  }, [isMenuActive]);

  const activateMenu = (toActivateMenu) => {
    if (toActivateMenu) {
      return setIsMenuActive(() => {
        // setMountUnmount(true);
        return true;
      });
    }
  };

  const deactivateMenu = () => {
    return setIsMenuActive(false);
  };

  const onAnimationEnd = () => {
    if (!isMenuActive) return setMountUnmount(false);
  };

  return (
    <DropdownDiv>
      <Div>
        <DropdownList
          isMenuActive={isMenuActive}
          mountUnmount={mountUnmount}
          onAnimationEnd={onAnimationEnd}>
          {Children.map(children, (child) =>
            cloneElement(child, {
              activateMenu,
              deactivateMenu,
              mountUnmount,
            })
          )}
        </DropdownList>
        <ActiveMenuDiv
          isMenuActive={isMenuActive}
          id="dropdownPortal"
          onAnimationEnd={onAnimationEnd}
        />
      </Div>
    </DropdownDiv>
  );
}

export default DropdownMenu;
