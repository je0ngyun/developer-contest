import styled, { css } from 'styled-components'

export const StCard = styled.section`
  position: relative;
  z-index: 1;
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 6px 6px 18px #d9d9d9, -6px -6px 18px #ffffff;
  overflow: hidden;

  ${({ hoverScale }) =>
    hoverScale &&
    css`
      &:hover {
        transform: scale(1.1) !important;
      }
    `}

  ${({ circle }) =>
    circle &&
    css`
      border-radius: 50%;
    `}
`
