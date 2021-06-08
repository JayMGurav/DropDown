import React, { Children, cloneElement, useState, ReactNode } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { IconSm } from './styledComponents/Icon';

const DropdownDiv = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 100%;
  padding: 0.25rem;
  width: max-content;
  margin-top: 1.5rem;
  background-color: var(--color-background);
  border-radius: 16px;
  overflow: hidden;
`;

const DropdownList = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0.5rem;
`;

const ActiveMenuDiv = styled(motion.div)`
  margin: 0;
  padding: 1rem;
`;

const BackButton = styled.button`
  border: none;
  padding: 0;
  background: inherit;
  ${IconSm} {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--foreground);
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    transform: rotate(180deg);
  }
`;

function DropdownMenu({ children }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const activateMenu = (child: ReactNode) => {
    if (Boolean(child)) {
      setIsMenuActive(() => {
        setActiveMenu(child);
        return true;
      });
    }
  };

  const deactivateMenu = () => {
    setIsMenuActive(() => {
      setActiveMenu(null);
      return false;
    });
  };

  const animate = {
    opacity: 1,
    x: 0,
  };

  return (
    <DropdownDiv
      layout
      transition={{
        duration: 0.1,
      }}>
      <AnimatePresence exitBeforeEnter>
        {!isMenuActive && (
          <DropdownList
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={animate}
            key="dropdownList">
            {Children.map(children, (child) =>
              cloneElement(child, {
                activateMenu,
                deactivateMenu,
              })
            )}
          </DropdownList>
        )}
        {isMenuActive && (
          <ActiveMenuDiv
            key="activeMenu"
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={animate}>
            <BackButton onClick={deactivateMenu}>
              <IconSm src="/arrow.svg" />
            </BackButton>
            {activeMenu}
          </ActiveMenuDiv>
        )}
      </AnimatePresence>
    </DropdownDiv>
  );
}
export default DropdownMenu;
