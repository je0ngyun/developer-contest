import styled from 'styled-components'

export const StIconCard = styled.section`
  z-index: -1;
  width: 450px;
  height: 320px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 6px 6px 18px #d9d9d9, -6px -6px 18px #ffffff;
  .icon-container {
    background-color: #000000;
    height: 35%;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    svg {
      width: 3em;
      height: 3em;
    }
  }
  .content {
    line-height: 2rem;
    padding: 30px;
    height: 65%;
    font-size: 1.5rem;
  }
`
