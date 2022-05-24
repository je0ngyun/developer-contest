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
  gap: 50px 120px;
`

export const StDesc = styled.div`
  display: flex;
  padding: 30px 20px;
  font-size: 2rem;
  font-weight: 600;
  div {
    &:first-child {
      width: 12%;
    }
    &:last-child {
      display: flex;
      align-items: center;
      font-size: 1.85rem;
      padding-left: 15px;
    }
  }
`
