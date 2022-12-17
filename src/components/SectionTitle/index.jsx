import styled from 'styled-components'

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: .75rem;
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