import styled from "styled-components";

const Icon = styled.img`
  /* height: 20px;
  width: 20px; */
  padding: 0.25rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const IconSm = styled(Icon)`
  height: 20px;
  width: 20px;
`;

export const IconMd = styled(Icon)`
  height: 26px;
  width: 26px;
`;

export const SkillsIcon = styled(IconMd)`
  background: var(--foreground);
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
  transition: all 150ms ease;
  :hover {
    transform: scale(1.2);
  }
`;

export default Icon;
