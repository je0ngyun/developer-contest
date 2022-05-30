import styled from 'styled-components'
import { StBasePageContainer } from '@styles/shared/page'
import { StBasePageMain } from '@styles/shared/page'

export const StPageContainer = styled(StBasePageContainer)``
export const StPageMain = styled(StBasePageMain)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 45px 45px;

  .content {
    cursor: pointer;
    padding: 25px;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      div {
        font-size: 0.9rem;
        border-radius: 5px;
        border: 1px solid black;
        padding: 5px 10px;
      }
    }
    .desc {
      margin-top: 20px;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
`
