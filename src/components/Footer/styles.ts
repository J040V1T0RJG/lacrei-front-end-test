import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;

  gap: 1.75rem;
  margin-top: auto;
  padding: 2rem 4rem 0.5rem;

  .menu {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;

    border-top: 1px solid ${(props) => props.theme['green-100']};
    padding-top: 2rem;

    a {
      all: unset;
      cursor: pointer;

      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 22px;

      :hover {
        color: ${(props) => props.theme['green-300']};
      }

      :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-300']};
      }
    }

    .homeRouter,
    .userPersonRouter,
    .professionalRouter {
      font-weight: 700;
    }
  }

  .socialMedia {
    display: flex;
    flex-direction: row;
    gap: 2.25rem;

    svg {
      cursor: pointer;
      color: ${(props) => props.theme['green-500']};

      :hover {
        color: ${(props) => props.theme['green-300']};
      }
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 16px;

    color: ${(props) => props.theme['gray-300']};
  }
`
