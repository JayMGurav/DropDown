import { useState } from "react"
import styled from "styled-components"

const NavItemBox = styled.div`
  border: none;
  outline: none;
  color: inherit;
  text-decoration: none;
`

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position:relative;
  ${NavItemBox} { 
    padding: 0.5rem;
    width:100%;
    background-color: var(--foreground);
    border-radius: 10px;
    transition: filter 100ms;
    filter: brightness(0.8) grayscale(100%);
    transition: filter 300ms;
    :hover {
      filter: brightness(1) grayscale(0);
    }
  }
`

function NavItem({icon, children}){
  const [isOpen, setIsOpen] = useState(false);

  const toOpen = () => (
    setIsOpen((isOpen) => {
      if(children){
        return !isOpen;
      }else{
        return false;
      }
    })
  )
  return (
      <Li>
        <NavItemBox onClick={toOpen}>
          {icon}
        </NavItemBox>
        {isOpen && children}
      </Li>
  )
}


export default NavItem;