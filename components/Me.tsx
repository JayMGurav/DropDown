import styled from 'styled-components';

import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';
import { IconSm } from './styledComponents/Icon';
import ProfileTab from './ProfileTab';

const AboutMeDetails = styled.div`
  min-width: 200px;
  padding: 0.25rem;
  text-align: center;
`;

const ConnectDiv = styled.div`
  width: 200px;
`;

function Me() {
  return (
    <NavItem label="😎 Me">
      <DropdownMenu>
        <AboutMeDetails>
          <ProfileTab />
        </AboutMeDetails>
        <DropdownMenuItem label="Connect">
          <ConnectDiv>
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
          </ConnectDiv>
        </DropdownMenuItem>
      </DropdownMenu>
    </NavItem>
  );
}

export default Me;

{
  /* <MenuItem
              leftIcon={<IconSm src="github.svg" />}
              label="Github"
              to="https://github.com/jaymgurav"
            />
            <MenuItem
              leftIcon={<IconSm src="linkedin.svg" />}
              label="LinkedIn"
              to="https://linkedin.com/in/jaymgurav"
            /> */
}
