import styled from "styled-components";

// components
import Navbar from "@/components/Navbar";
import NavItem from "@/components/NavItem";
import DropdownMenu from "@/components/DropdownMenu";
import DropdownMenuItem from "@/components/DropdownMenuItem";
import Icon from "@/components/styledComponents/Icon";
import ComingSoon from "@/components/styledComponents/BriefDiv";
import ProfileTab from "@/components/ProfileTab";

import Me from "@/components/Me";
import RecentPosts from "@/components/RecentPosts";

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
        <RecentPosts />
        <NavItem label="🤩 List" />
        <Me />
      </Navbar>
    </Container>
  );
}

export default Home;

{
  /* <NavItem label="📰 All Posts">
          <DropdownMenu>
            <DropdownMenuItem
              leftIcon={<Icon src="graphql.svg" />}
              rightIcon={<Icon src="arrow.svg" />}
              label={"GraphQL"}>
              <ComingSoon>
                <h1>🎉</h1>
                Coming Soon!
              </ComingSoon>
            </DropdownMenuItem>
            <DropdownMenuItem
              leftIcon={<Icon src="reactlogo.svg" />}
              label="ReactJs"
              to="https://reactjs.org/"
            />
            <DropdownMenuItem
              leftIcon={<Icon src="nodejs.svg" />}
              label="NodeJs"
              to="https://nodejs.org/en/"
            />
          </DropdownMenu>
        </NavItem> */
}

{
  /* <NavItem label="😎 Me">
          <DropdownMenu>
            <ProfileTab />
            <DropdownMenuItem
              // leftIcon={"😎"}
              // rightIcon={<Icon src="arrow.svg" />}
              label="About Me">
              <h1>🎉</h1>
            </DropdownMenuItem>
            <DropdownMenuItem
              leftIcon={<Icon src="twitter.svg" />}
              label="Twitter"
              to="https://twitter.com/jaymgurav"
            />
            <DropdownMenuItem
              leftIcon={<Icon src="github.svg" />}
              label="Github"
              to="https://github.com/jaymgurav"
            />
            <DropdownMenuItem
              leftIcon={<Icon src="linkedin.svg" />}
              label="LinkedIn"
              to="https://linkedin.com/in/jaymgurav"
            />
          </DropdownMenu>
        </NavItem> */
}
