import styled from "styled-components";

const StyledExternalAnchor = styled.a<{ colored: boolean }>`
  text-decoration: none;
  color: ${({ colored }) => (colored ? "#99e2ff" : "inherit")};
`;

function ExternalAnchor({ children, colored, href }) {
  return (
    <StyledExternalAnchor
      rel="noopener noreferrer"
      target="_blank"
      colored={colored}
      href={href}>
      {children}
    </StyledExternalAnchor>
  );
}

export default ExternalAnchor;
