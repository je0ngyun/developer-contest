import styled from 'styled-components'
import { backgroudLeftToRight } from '@styles/utils/animation'

export const StTitleContainer = styled.div`
  background-size: 200% 100%;
  background-image: linear-gradient(to left, black 50%, white 50%);
  color: white;
  width: 100%;
  padding: 20px 20px 20px 60px;
  font-family: 'yangjin';
  letter-spacing: 2px;
  h1 {
    font-size: 2.5rem;
  }
  animation-duration: 3s;
  animation-timing-function: ease-out;
  animation-name: ${backgroudLeftToRight};
  animation-delay: 300ms;
  animation-fill-mode: forwards;
`
