import { ReactNode } from 'react';

import ExternalAnchor from './styledComponents/ExternalAnchor';
import MenuItem from './styledComponents/MenuItem';

interface DropdownMenuItemProps {
  leftIcon?: ReactNode;
  children?: ReactNode;
  rightIcon?: ReactNode;
  label: string;
  to?: string;
  activateMenu?: (children: ReactNode) => void;
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
      <ExternalAnchor
        href={!Boolean(children) && to ? to : 'javascript:void(0);'}
        colored={false}>
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
