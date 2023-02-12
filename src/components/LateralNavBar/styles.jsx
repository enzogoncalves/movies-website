import styled from "styled-components";

export const ListSpan = styled.span`
  display: none;
  margin-left: 1rem;
`

export const NavBar = styled.nav`
  padding: 2rem .5rem;
  position: fixed;
  left: 0;
  top: 70px;
  bottom: 0;
  z-index: 99;
  width: 85px;
  overflow: hidden; 
  transition: width .1s;
  box-shadow: 0 0 6px rgba(0, 0, 0, .6);
  background-color: #1A161F;
  display: block;

  :hover {
    width: 13rem;

    ${ListSpan} {
      display: block;
    }
  }

  @media (max-width: 1189px) {
    display: none;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`
export const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  `
