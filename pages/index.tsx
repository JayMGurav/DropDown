import styled from 'styled-components';

// components
import Navbar from '@/components/Navbar';
import NavItem from '@/components/NavItem';
import DropdownMenu from '@/components/DropdownMenu';
import DropdownMenuItem from '@/components/DropdownMenuItem';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
` 

const ComingSoon = styled.div`
  height: 100px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
`; 



function Home(){
  return (
    <Container>
      <Navbar>
        <NavItem icon="📰 All Posts">
          <DropdownMenu>
            <DropdownMenuItem rightIcon="😶" label={"GraphQL"}>
              <ComingSoon>
                <h1>🎉</h1>
                Coming Soon!
              </ComingSoon>
            </DropdownMenuItem>
            <DropdownMenuItem label={"React"} />
            <DropdownMenuItem label={"Node"} />
          </DropdownMenu>
        </NavItem>
        <NavItem icon="🤩 List" />
        <NavItem icon="😎 Me" />
      </Navbar>
    </Container>
  );
}


export default Home;