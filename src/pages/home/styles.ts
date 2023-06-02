import styled from 'styled-components'

export const HomeContainer = styled.div`
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

export const HomeInfo = styled.div`
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 65px;

    color: ${(props) => props.theme['gray-900']};
  }

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 33px;

    margin-top: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 28.25rem;

    margin-top: 3rem;

    button {
      width: 12rem;
      height: 3rem;

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      text-align: center;

      :hover {
        background-color: ${(props) => props.theme['green-300']};
      }

      :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-300']};
      }
    }

    .buttonForUserPersonPage {
      background: ${(props) => props.theme['green-500']};
      border: 2px solid ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }

    .buttonForProfessionalPage {
      background-color: #ffffff;
      border: 2px solid ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme['green-500']};

      :hover {
        color: ${(props) => props.theme.white};
      }
    }
  }

  @media (max-width: 36rem) {
    .buttons {
      flex-direction: column;
      gap: 1rem;

      button {
        width: 100%;
      }
    }
  }
`
