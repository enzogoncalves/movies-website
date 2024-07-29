import { ReactElement } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: .75rem;
  display: flex;
  align-items: center;

  @media (min-width: 678px){
    font-size: 1.5rem;
  }
`

interface SectionTitleProps {
	sectionTitle: string
	icon: ReactElement
}

export const SectionTitle = ({ sectionTitle, icon }: SectionTitleProps) => {
  return (
    <Title>
      {sectionTitle}
      {icon}
    </Title>
  )
}