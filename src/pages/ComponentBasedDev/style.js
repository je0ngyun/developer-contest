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
    line-height: 2.5rem;
    li {
      margin-bottom: 25px;
      list-style-position: inside;
      text-indent: -30px;
      padding-left: 20px;
    }
  }
  .code-block {
    font-weight: 600;
    padding: 20px;
    font-size: 1.5rem;
    line-height: 2.2rem;
    font-family: 'Fira Code' nexonLv1;
    height: 100%;
    > pre {
      height: 100%;
      border-radius: 5px;
    }
  }
  .example-result {
    width: 100%;
    height: 100%;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    .category-name {
      margin-right: 15px;
    }
    .required-mark {
      font-size: 1.7rem;
      color: red;
      margin-right: 15px;
    }
    .tip-box {
      font-size: 0.95rem;
      background-color: #c9c9c9;
      padding: 7px 10px;
      border-radius: 4px;
      margin-right: 45px;
    }
    input {
      width: 400px;
      height: 95%;
      border: 2px solid #c9c9c9;
      margin-right: 15px;
    }
    button {
      height: 95%;
      background-color: transparent;
      border: 2px solid black;
      padding: 0 15px;
      font-size: 1.2rem;
    }
    .max-len {
      font-size: 1.1rem;
      height: 100%;
      display: flex;
      align-items: flex-end;
      margin-right: 15px;
    }
  }
`
