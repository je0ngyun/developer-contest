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
  gap: 70px 80px;
  li {
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .content {
    height: 100%;
    padding: 20px 40px;
    h1 {
      font-family: 'yangjin';
      font-size: 1.5rem;
    }
    .desc {
      height: 100%;
      padding-top: 30px;
      position: relative;
      display: flex;
      > * {
        &:first-child {
          width: 50%;
        }
      }
    }
    .ssr-desc {
      font-size: 1.1rem;
      .icon-server {
        position: absolute;
        top: 70px;
        width: 6rem;
        height: 6rem;
      }
      .icon-refresh {
        position: absolute;
        top: 50px;
        left: 105px;
        width: 3rem;
        height: 3rem;
      }
      .icon-file {
        position: absolute;
        top: 100px;
        left: 120px;
        width: 5rem;
        height: 5rem;
      }
      .icon-arrow {
        position: absolute;
        top: 80px;
        left: 200px;
        width: 5rem;
        height: 5rem;
      }
      .icon-monitor {
        position: absolute;
        top: 70px;
        left: 300px;
        width: 6rem;
        height: 6rem;
      }
    }
    .csr-desc {
      font-size: 1.1rem;
      .icon-server {
        position: absolute;
        top: 70px;
        width: 6rem;
        height: 6rem;
      }
      .icon-refresh {
        position: absolute;
        top: 50px;
        left: 245px;
        width: 3rem;
        height: 3rem;
      }
      .icon-arrow {
        position: absolute;
        top: 80px;
        left: 110px;
        width: 5rem;
        height: 5rem;
      }
      .icon-monitor {
        position: absolute;
        top: 70px;
        left: 300px;
        width: 6rem;
        height: 6rem;
      }
      .icon-js {
        position: absolute;
        top: 100px;
        left: 200px;
        width: 2.5rem;
        height: 2.5rem;
      }
      .icon-empty {
        position: absolute;
        top: 120px;
        left: 250px;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`
