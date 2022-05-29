import styled from 'styled-components'
import { StBasePageContainer } from '@styles/shared/page'
import { StBasePageMain } from '@styles/shared/page'

export const StPageContainer = styled(StBasePageContainer)``
export const StPageMain = styled(StBasePageMain)`
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 80px 30px;
  i {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 3em;
      height: 3em;
    }
  }
`
export const StAnswer = styled.div`
  width: 850px;
  position: relative;
  top: 10px;
  display: flex;
  gap: 20px;
  div {
    font-size: 1.7rem;
    line-height: 2.5rem;
    .quote {
      position: relative;
      top: -10px;
    }
  }
`
