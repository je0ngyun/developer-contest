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
  gap: 50px 50px;
  .desc {
    font-size: 1.7rem;
    padding: 30px 30px;
    line-height: 2.6rem;
    li {
      margin-bottom: 25px;
      list-style-position: inside;
      text-indent: -30px;
      padding-left: 20px;
    }
  }
  .code-block {
    padding: 20px;
    font-size: 1.5rem;
    line-height: 2.2rem;
    font-family: 'Fira Code' nexonLv1;
    font-weight: 600;
    height: 100%;
    > pre {
      height: 100%;
      border-radius: 5px;
    }
  }
  .example-result {
    padding: 0 40px;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    div {
      font-size: 1.3rem;
      &:first-child {
        font-size: 1.5rem;
        margin-right: 20px;
        font-weight: 600;
      }
    }
  }
`
