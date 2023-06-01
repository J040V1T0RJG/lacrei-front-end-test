import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  background-color: ${(props) => props.theme['gray-100']};

  padding: 0.5rem 4rem;

  > a {
    all: unset;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 44px;

    color: ${(props) => props.theme['green-500']};

    :hover {
      color: ${(props) => props.theme['green-300']};
    }
  }

  .menu {
    display: flex;
    gap: 2.5rem;

    a {
      all: unset;
      cursor: pointer;

      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 22px;

      color: ${(props) => props.theme['gray-900']};

      :hover {
        color: ${(props) => props.theme['green-300']};
      }
    }

    .homeRouter,
    .userPersonRouter,
    .professionalRouter {
      color: ${(props) => props.theme['green-500']};
    }
  }

  @media (max-width: 50rem) {
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 30rem) {
      align-items: flex-start;
      padding: 0.5rem 2rem;

      .menu {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`
