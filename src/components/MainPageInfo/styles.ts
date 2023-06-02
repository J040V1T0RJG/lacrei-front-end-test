import styled from 'styled-components'

export const MainPageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 34.5rem;
  gap: 2rem;

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

    border-left: 5px solid ${(props) => props.theme['green-500']};
    padding-left: 1.5rem;
  }
`
