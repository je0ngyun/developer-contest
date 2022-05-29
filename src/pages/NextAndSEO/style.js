import styled from 'styled-components'

import { StBasePageContainer } from '@styles/shared/page'
import { StBasePageMain } from '@styles/shared/page'

export const StPageContainer = styled(StBasePageContainer)``
export const StPageMain = styled(StBasePageMain)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 70px 72px;
  .content {
    padding: 25px 40px;
    width: 100%;
    height: 100%;
    .img-box {
      height: 83%;
      img {
        object-fit: fill;
        height: 100%;
        width: 100%;
      }
    }
    h1 {
      font-size: 1.5rem;
      font-family: 'yangjin';
    }
    > div {
      &:first-child {
        display: flex;
        align-items: center;
        font-size: 2.5rem;
        font-family: 'yangjin';
        gap: 20px;
        svg {
          width: 1.5em;
          height: 1.5em;
          position: relative;
          top: 3px;
        }
      }
      &:last-child {
        line-height: 2.6rem;
        font-size: 1.2rem;
        margin-top: 25px;
      }
    }
  }
`
