import styled from "styled-components";

export const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: .5rem;
  color: ${props => props.active ? '#efefef' : '#999'};
  padding-left: .75rem;
  border-left: 2px solid ${props => props.active ? '#6680C0' : 'transparent'};
  `

export const ListLink = styled.a`
  font-weight: 500;
  padding: .5rem .5rem .5rem 0;
`