import styled from "styled-components";

export const Header = styled.header`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1A161F;
  z-index: 999;
  box-shadow: 0 0 2px #6166947f;
`
export const Div = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
  }
`

export const Logo = styled.h1`
  font-size: 1rem;
  font-weight: 700;

  @media (min-width: 350px) {
    font-size: 1.25rem;
  }

  @media (min-width: 400px) {
    font-size: 1.5rem;
  }
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: .5rem;
`
