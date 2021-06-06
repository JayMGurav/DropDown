import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

// components

import {
  activeMenuEnterAnimation,
  activeMenuLeaveAnimation,
} from "@/styles/menuAnimation";

const DropdownItemPortalDiv = styled.div`
  padding: 0.5rem 0;
`;
const ContentDiv = styled.div`
  padding: 0.25rem;
`;

const BackButton = styled.div`
  width: 28px;
  height: 28px;
  margin-bottom: 0.75rem;
  background: var(--foreground);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PORTAL_MOUNTPOINT_ID = "dropdownPortal";

function DropdownItemChildPortal({ children, deactivateMenu }) {
  const [mountElement, setMountElement] = useState(null);

  useEffect(() => {
    const mountpoint = document.getElementById(PORTAL_MOUNTPOINT_ID);
    const div = document.createElement("div");
    mountpoint.appendChild(div);
    setMountElement(div);
    return () => void mountpoint.removeChild(div);
  }, []);

  return mountElement
    ? createPortal(
        <DropdownItemPortalDiv>
          <BackButton onClick={() => deactivateMenu()}>‹</BackButton>
          <ContentDiv>{children}</ContentDiv>
        </DropdownItemPortalDiv>,

        mountElement
      )
    : null;
}

export default DropdownItemChildPortal;
