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
const NextAndSEO = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <Wrapper>
      <Title>NextJS 적용과 SEO</Title>
    </Wrapper>
  )
}

export default NextAndSEO
