import React from 'react'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import { StPageContainer, StPageMain, StDesc } from './style'
import Card from '@components/Card'

const AboutCSR = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <StPageContainer>
      <Title>CSR의 장점과 단점</Title>
      <StPageMain>
        <Card dataAos="flip-up" dataDelay="600" width={1200} height={90}>
          <StDesc>
            <div className="text-blue">장점 1.</div>
            <div>초기 로딩 이후에 빠른 속도를 보장한다</div>
          </StDesc>
        </Card>
        <Card dataAos="flip-up" dataDelay="800" width={1200} height={90}>
          <StDesc>
            <div className="text-blue">장점 2.</div>
            <div>
              필요한 부분만 요청하고 동적으로 교체하므로 서버 부하가 감소된다
            </div>
          </StDesc>
        </Card>
        <Card dataAos="flip-up" dataDelay="1000" width={1200} height={90}>
          <StDesc>
            <div className="text-blue">장점 3.</div>
            <div>
              페이지 전체를 다시 로드하지 않아 깜박임이 없어 UX가 향상된다
            </div>
          </StDesc>
        </Card>
        <Card dataAos="flip-up" dataDelay="1200" width={1200} height={90}>
          <StDesc>
            <div className="text-red">단점 1.</div>
            <div>
              모든 JS 파일을 불러온 후 렌더링 하기 때문에 초기 로딩속도가 느리다
            </div>
          </StDesc>
        </Card>
        <Card dataAos="flip-up" dataDelay="1400" width={1200} height={90}>
          <StDesc>
            <div className="text-red">단점 2.</div>
            <div>
              JS 파일이 실행되기 전에는 빈 페이지만 존재하므로 SEO가 불리하다
            </div>
          </StDesc>
        </Card>
      </StPageMain>
    </StPageContainer>
  )
}

export default AboutCSR
