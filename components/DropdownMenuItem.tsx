import { ChildProcessWithoutNullStreams } from "child_process"
import styled from "styled-components"


const MenuItem = styled.li`
  margin: 0.25rem 0;
  padding: 0.5rem;
  min-width: 150px;
  display: flex;
  align-items: center;
  gap: 1ch;
  border-radius: 8px;
  span:last-of-type{
    margin-left: auto;
  }
  :hover {
    background-color: var(--foreground);
  }
`

function DropdownMenuItem({leftIcon, children, rightIcon, to, activateMenu}){  
  // const activateMenu = (component) => {
  //   return setIsMenuActive(() => {
  //     setActiveMenu(component);
  //     return true;
  //   })
  // }

  return (
    <MenuItem onClick={() => activateMenu(DummyComp)}>
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </MenuItem>
  )
}



function DummyComp(props) {
  console.log(props)
  // const deActivateMenu = (e) => {
  //   return setIsMenuActive(() => {
  //     setActiveMenu(null)
  //     return false;
  //   })
  // }

  return (
    <div>
    <div>
      <button>Back</button>
      Hello world
    </div>
    </div>
  )
}

export default DropdownMenuItem;