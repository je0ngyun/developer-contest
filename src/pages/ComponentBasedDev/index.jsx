import React from 'react'
import styled from 'styled-components'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 10px solid black;
  position: absolute;
`
const ComponentBasedDev = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <Wrapper>
      <Title>Componet 기반 개발?</Title>
    </Wrapper>
  )
}

export default ComponentBasedDev
