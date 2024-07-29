import styled from 'styled-components'

interface SectionType {
	display?: "grid"
}

export const Section = styled.section<SectionType>`
	position: relative;
  padding-right: .5rem;
  padding-left: .5rem;
  padding-top: 78px;
  padding-bottom: 1rem;
  display: ${props => props.display || 'block'};

  @media (min-width: 640px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`