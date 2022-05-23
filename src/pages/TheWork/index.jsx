import React from 'react'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import IconCard from '@components/IconCard'
import { FaReact, FaSass } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiStyledcomponents,
  SiReacttable,
  SiReactos,
} from 'react-icons/si'
import { GiLighthouse } from 'react-icons/gi'
import { DiGoogleAnalytics } from 'react-icons/di'
import { StPageContainer, StPageMain } from './style'

const TheWork = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <StPageContainer>
      <Title>하는일은 무엇인가요?</Title>
      <StPageMain>
        <IconCard
          icons={[FaReact, SiNextdotjs]}
          dataAos="fade-down-right"
          dataDelay="400"
        >
          React, Next를 사용하여 <br /> <strong>SPA 기반의 CSR SSR 웹</strong>을
          <br />
          개발합니다.
        </IconCard>
        <IconCard
          icons={[FaSass, SiStyledcomponents]}
          dataAos="fade-down-left"
          dataDelay="600"
        >
          기존 CSS보다 향상된 Sass, Styled Component 등을 사용하여{' '}
          <strong>퍼블리싱을 진행합니다.</strong>
        </IconCard>
        <IconCard
          icons={[SiReacttable, SiReactos]}
          dataAos="fade-up-right"
          dataDelay="800"
        >
          React-Query, Recoil 등을
          <br /> 사용하여 <strong>API 연동과</strong> 웹상에서의 <br />
          <strong>권한을 관리</strong>합니다.
        </IconCard>
        <IconCard
          icons={[GiLighthouse, DiGoogleAnalytics]}
          dataAos="fade-up-left"
          dataDelay="1000"
        >
          LightHouse 을 사용한 <strong>웹 성능 평가</strong> 및 웹 페이지의
          <strong> 검색엔진 최적화</strong> 작업을 합니다.
        </IconCard>
      </StPageMain>
    </StPageContainer>
  )
}

export default TheWork
