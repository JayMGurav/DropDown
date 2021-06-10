import styled from 'styled-components';

// components
import Navbar from '@/components/Navbar';

import Me from '@/components/Me';
import RecentPosts from '@/components/RecentPosts';
import Skills from '@/components/Skills';
import Writing from '@/components/Writing';
import HeaderSection from '@/components/HeaderSection';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 2ch;
`;

function Home() {
  return (
    <Container>
      <HeaderSection />
      <Navbar>
        <Me />
        <Skills />
        <RecentPosts />
        <Writing />
      </Navbar>
    </Container>
  );
}

export default Home;
