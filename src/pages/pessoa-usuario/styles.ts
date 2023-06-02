import styled from 'styled-components'

export const UserPersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 4rem 0;

  @media (max-width: 73rem) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 2rem 0;

    @media (max-width: 36rem) {
      img {
        width: 100%;
        max-width: 26rem;
        object-fit: cover;
      }
    }
  }
`
