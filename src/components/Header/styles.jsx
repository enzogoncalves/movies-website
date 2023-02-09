import styled from "styled-components";

export const Header = styled.header`
  height: 70px;
  padding: 1rem .5rem;
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
  width: 160px;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: .5rem;
`