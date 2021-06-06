import styled from "styled-components";
import DropdownItemChildPortal from "./DropdownItemChildrenPortal";

const MenuItem = styled.li`
  cursor: pointer;
  margin: 0.25rem 0;
  padding: 0.5rem;
  min-width: 150px;
  display: flex;
  align-items: center;
  gap: 1ch;
  border-radius: 8px;
  span:last-of-type {
    margin-left: auto;
  }
  :hover {
    background-color: var(--foreground);
  }
`;

function DropdownMenuItem({
  leftIcon,
  children,
  rightIcon,
  label,
  activateMenu,
  deactivateMenu,
  isMenuActive,
}) {

  return (
    isMenuActive && Boolean(children) ? 
    <DropdownItemChildPortal deactivateMenu={deactivateMenu}>{children}</DropdownItemChildPortal> :
    (
      <MenuItem onClick={() => activateMenu(Boolean(children))}>
        {leftIcon && <span>{leftIcon}</span>}
        {label}
        {rightIcon && <span>{rightIcon}</span>}
      </MenuItem>
    )
  );
}

export default DropdownMenuItem;
