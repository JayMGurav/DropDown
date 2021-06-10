import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import DropdownItemChildPortal from './DropdownItemChildrenPortal';

import ExternalAnchor from './styledComponents/ExternalAnchor';
import MenuItem from './styledComponents/MenuItem';

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
        {rightIcon && <span style={{ marginLeft: 'auto' }}>{rightIcon}</span>}
      </MenuItem>
    );
  } else {
    return (
      <ExternalAnchor href={!Boolean(children) && to ? to : ''} colored={false}>
        <MenuItem>
          {leftIcon && <span>{leftIcon}</span>}
          {label}
          {rightIcon && <span style={{ marginLeft: 'auto' }}>{rightIcon}</span>}
        </MenuItem>
      </ExternalAnchor>
    );
  }
}

export default DropdownMenuItem;
