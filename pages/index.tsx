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

function Home(){
  return (
    <Container>
      <Navbar>
        <NavItem icon="📰 All Posts">
          <DropdownMenu>
            <DropdownMenuItem rightIcon="😶" to={<p>Hello</p>}>
                GraphQL
            </DropdownMenuItem>
            <DropdownMenuItem >React</DropdownMenuItem>
            <DropdownMenuItem >Node</DropdownMenuItem>
          </DropdownMenu>
        </NavItem>
        <NavItem icon="🤩 List" />
        <NavItem icon="😎 Me" />
      </Navbar>
    </Container>
  )
}


export default Home;