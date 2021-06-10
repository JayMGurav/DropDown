import styled from 'styled-components';

const MenuItem = styled.li`
  cursor: pointer;
  margin: 0.5rem 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1ch;
  border-radius: 8px;
  span:first-of-type {
    border-radius: 50%;
    background: var(--color-background);
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
  }
  :hover {
    background-color: var(--color-gray3);
  }
`;
export default MenuItem;
