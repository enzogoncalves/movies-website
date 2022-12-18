import styled from "styled-components";

export const Section = styled.section`
  grid-area: movie-content;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'trending-movies upcoming-movies' 'top-rated-movies upcoming-movies'
`