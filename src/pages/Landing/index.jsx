import React from 'react'
import styled from 'styled-components'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 10px solid black;
  position: absolute;
`

const Landing = () => {
  useRegisterSlideKey()
  return (
    <Wrapper>
      <div>랜딩 페이지</div>
    </Wrapper>
  )
}

export default Landing
