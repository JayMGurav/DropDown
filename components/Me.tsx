import styled from "styled-components";

import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "./DropdownMenuItem";
import { IconSm } from "./styledComponents/Icon";
import ProfileTab from "./ProfileTab";

const AboutMeDetails = styled.div`
  min-width: 200px;
  padding: 0.25rem;
  text-align: center;
  text {
    display: block;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

function Me() {
  return (
    <NavItem label="😎 Me">
      <DropdownMenu>
        <AboutMeDetails>
          <ProfileTab />
        </AboutMeDetails>
        <DropdownMenuItem
          leftIcon={<IconSm src="twitter.svg" />}
          label="Twitter"
          to="https://twitter.com/jaymgurav"
        />
        <DropdownMenuItem
          leftIcon={<IconSm src="github.svg" />}
          label="Github"
          to="https://github.com/jaymgurav"
        />
        <DropdownMenuItem
          leftIcon={<IconSm src="linkedin.svg" />}
          label="LinkedIn"
          to="https://linkedin.com/in/jaymgurav"
        />
      </DropdownMenu>
    </NavItem>
  );
}

export default Me;
