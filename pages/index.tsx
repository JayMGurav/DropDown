import styled from 'styled-components';

// components
import Navbar from '@/components/Navbar';

import Me from '@/components/Me';
import RecentPosts from '@/components/RecentPosts';
import Skills from '@/components/Skills';
import Writing from '@/components/Writing';
import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext';
const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 2ch;
`;

const Div = styled.div`
  padding: 1rem;
  margin: 10px;
`;

function Home() {
  const { colorMode, changeColorMode } = useContext(ThemeContext);
  return (
    <Container>
      <Navbar>
        <Me />
        <Skills />
        <RecentPosts />
        <Writing />
      </Navbar>

      <h1>{colorMode.toUpperCase()}</h1>
      <button
        onClick={() =>
          changeColorMode(colorMode === 'dark' ? 'light' : 'dark')
        }>
        change
      </button>
    </Container>
  );
}

export default Home;
