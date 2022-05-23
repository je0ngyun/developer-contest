import styled from 'styled-components'

export const StCard = styled.section`
  z-index: -1;
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 6px 6px 18px #d9d9d9, -6px -6px 18px #ffffff;
`
