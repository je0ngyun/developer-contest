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

const IntroSpaCsrSsr = () => {
  useRegisterSlideKey()
  return (
    <Wrapper>
      <Title>SPA? CSR? SSR?</Title>
    </Wrapper>
  )
}

export default IntroSpaCsrSsr
