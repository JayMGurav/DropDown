import styled from "styled-components";

// components
import Navbar from "@/components/Navbar";

import Me from "@/components/Me";
import RecentPosts from "@/components/RecentPosts";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: start;
  margin-top: 4rem;
  justify-content: center;
`;

function Home() {
  return (
    <Container>
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
