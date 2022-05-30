import React from 'react'
import styled from 'styled-components'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 10px solid black;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
`

const Landing = () => {
  useRegisterSlideKey()
  return (
    <Wrapper>
      <h1>제 1회 개발 콘테스트</h1>
      <h2>사원 김정윤</h2>
    </Wrapper>
  )
}

export default Landing
