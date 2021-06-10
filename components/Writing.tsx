import styled from 'styled-components';

import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import { IconSm } from './styledComponents/Icon';

const WritingBox = styled.div`
  width: 250px;
  padding: 1rem 0.25rem;
  strong {
    margin-bottom: 4rem;
  }
  span {
    font-size: 2rem;
  }
`;

const WritingItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1ch;
  border-radius: 8px;
  ${IconSm} {
    border-radius: 50%;
    background: var(--color-background);
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
  }
  img {
    background: var(--foreground);
  }
`;

function Writing() {
  return (
    <NavItem label="✍ writing">
      <DropdownMenu>
        <WritingBox>
          <strong>
            <span role="image" aria-label="coming soon">
              🎉
            </span>{' '}
            Coming Soon!!
          </strong>
          <WritingItem>
            <IconSm src="/js.svg" />
            Functions: Do I have to be Pure?
          </WritingItem>
          <WritingItem>
            <IconSm src="/graphql.svg" />
            GraphQL architectural patterns
          </WritingItem>
        </WritingBox>
      </DropdownMenu>
    </NavItem>
  );
}

export default Writing;
