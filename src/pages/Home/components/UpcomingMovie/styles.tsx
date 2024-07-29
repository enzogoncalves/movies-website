import styled from "styled-components";

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: 270px;
  grid-area: upcoming-movies;
  margin-bottom: 1rem;
`

export const MoviePoster = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  border-radius: 12px;
`

export const MovieTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: .25rem;
  word-spacing: 2px;
`

export const MovieDesc = styled.p`
  font-size: .9rem;
  color: #ccc;
`