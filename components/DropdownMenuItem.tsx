import { ReactNode, useState } from "react";
import styled from "styled-components";
import DropdownItemChildPortal from "./DropdownItemChildrenPortal";

import ExternalAnchor from "./styledComponents/ExternalAnchor";

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
    background: var(--background);
    filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
  }
  :hover {
    background-color: var(--foreground);
  }
`;

interface DropdownMenuItemProps {
  leftIcon?: ReactNode;
  children?: ReactNode;
  rightIcon?: ReactNode;
  label: string;
  to?: string;
  activateMenu?: (toActivateMenu: boolean) => void;
  deactivateMenu?: () => void;
  render?: boolean;
}

function DropdownMenuItem({
  leftIcon,
  children,
  rightIcon,
  label,
  to,
  activateMenu,
}: DropdownMenuItemProps) {
  if (children && !to) {
    return (
      <MenuItem onClick={() => activateMenu(children)}>
        {leftIcon && <span>{leftIcon}</span>}
        {label}
        {rightIcon && <span style={{ marginLeft: "auto" }}>{rightIcon}</span>}
      </MenuItem>
    );
  } else {
    return (
      <ExternalAnchor href={!Boolean(children) && to ? to : ""} colored={false}>
        <MenuItem>
          {leftIcon && <span>{leftIcon}</span>}
          {label}
          {rightIcon && <span style={{ marginLeft: "auto" }}>{rightIcon}</span>}
        </MenuItem>
      </ExternalAnchor>
    );
  }
}

export default DropdownMenuItem;
