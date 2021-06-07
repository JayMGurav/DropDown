import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

// components
const DropdownItemPortalDiv = styled.div`
  padding: 0.5rem 0;
`;
const ContentDiv = styled.div`
  padding: 0.25rem;
  width: 100%;
  border-top: 1px solid var(--foreground);
`;

const BackButton = styled.button`
  height: 24px;
  width: 24px;
  margin: 0.25rem 0.5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-bottom: 1rem;
  background: var(--foreground);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  img {
    padding: 0.25rem;
    transform: rotate(180deg);
  }
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
          <BackButton onClick={() => deactivateMenu()}>
            <img src="arrow.svg" />
          </BackButton>
          <ContentDiv>{children}</ContentDiv>
        </DropdownItemPortalDiv>,

        mountElement
      )
    : null;
}

export default DropdownItemChildPortal;
