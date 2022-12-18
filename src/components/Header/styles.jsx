import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;
  height: 70px;
  padding: 1rem .5rem;
  grid-area: header;
  padding-left: 2rem;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1A161F;
  z-index: 999;
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 5rem;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const HeaderListItem = styled.li`
  width: max-content;
`

export const HeaderListItemLink = styled.a`
  padding: .75rem .5rem;
  font-weight: 500;
  color: ${props => props.active ? '#efefef' : '#999'};
`
