import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavItemBox = styled(motion.div)<{ isOpen: boolean }>`
  cursor: pointer;
  padding: 0.5rem;
  width: 100%;
  background-color: var(--color-gray2);
  color: var(--color-text);
  border-radius: 10px;
  filter: ${({ isOpen }) =>
    !isOpen ? 'brightness(0.8) grayscale(100%)' : 'brightness(1) grayscale(0)'};
  :hover {
    filter: brightness(1) grayscale(0);
    background-color: var(--color-gray3);
  }
`;

const Li = styled.li<{ isOpen: () => boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function NavItem({
  label,
  children,
}: {
  label: ReactNode;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toOpen = () =>
    setIsOpen((isOpen) => {
      if (children) {
        return !isOpen;
      } else {
        return false;
      }
    });
  return (
    <Li isOpen={isOpen}>
      <NavItemBox
        onClick={toOpen}
        isOpen={isOpen}
        // whileHover={{ scale: 1.08 }}
        // whileTap={{ scale: 0.98 }}
      >
        {label}
      </NavItemBox>
      {isOpen && children}
    </Li>
  );
}

export default NavItem;
