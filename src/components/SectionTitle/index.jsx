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

const SectionTitle = ({ sectionTitle, icon }) => {
  return (
    <Title>
      {sectionTitle}
      {icon}
    </Title>
  )
}

export default SectionTitle