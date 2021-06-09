import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  background-color: var(--color-gray1);
  padding: 1rem;
  border-radius: 16px;
`;

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2ch;
`;

function Navbar({ children }) {
  return (
    <Nav>
      <UL>{children}</UL>
    </Nav>
  );
}

export default Navbar;
