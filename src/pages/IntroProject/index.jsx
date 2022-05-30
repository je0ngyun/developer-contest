import React from 'react'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import { StPageContainer, StPageMain } from './style'
import Card from '@components/Card'

const IntroProject = () => {
  useRegisterSlideKey() //Register key events for slides on this page

  const handleOpenLinks = (targets) => {
    targets.forEach((tgt) => {
      window.open(tgt, '_blank')
    })
  }

  return (
    <StPageContainer>
      <Title>과거 프로젝트 소개</Title>
      <StPageMain>
        <Card
          dataAos="fade-up"
          dataDelay="600"
          width={350}
          height={250}
          hoverScale
          onClick={() => {
            handleOpenLinks([
              'https://je0ngyun.netlify.app/',
              'https://github.com/je0ngyun/gatsby-starter-oasis',
            ])
          }}
        >
          <div className="content">
            <h1>Oasis</h1>
            <div className="stack">
              <div>React</div>
              <div>Gatsby</div>
              <div>Sass</div>
            </div>
            <div className="desc">
              간단한 설정으로 바로 사용할 수 있는 개발자용 블로그 템플릿
            </div>
          </div>
        </Card>
        <Card
          dataAos="fade-up"
          dataDelay="600"
          width={350}
          height={250}
          hoverScale
          onClick={() => {
            handleOpenLinks([
              'https://www.je0ngyun.kro.kr/cardme/api/v1/card?userId=je0ngyun&cardName=mycard1',
              'https://github.com/je0ngyun/cardmeBE',
            ])
          }}
        >
          <div className="content">
            <h1>CardMe</h1>
            <div className="stack">
              <div>SpringBoot</div>
              <div>JPA</div>
              <div>SVG</div>
            </div>
            <div className="desc">
              깃허브, 블로그 등에 자신을 간단히 소개할 수 있는 카드 Svg를
              <br /> 제공하는 서비스
            </div>
          </div>
        </Card>
        <Card
          dataAos="fade-up"
          dataDelay="600"
          width={350}
          height={250}
          hoverScale
          onClick={() => {
            handleOpenLinks([
              'https://github.com/je0ngyun/10PlusServer',
              'https://www.youtube.com/watch?v=D0o0ZypTntc',
              'https://www.youtube.com/watch?v=riuE0mX8QEs',
            ])
          }}
        >
          <div className="content">
            <h1>10Plus</h1>
            <div className="stack">
              <div>Vue</div>
              <div>Express</div>
              <div>MQTT</div>
            </div>
            <div className="desc">
              원격으로 IOT기기를 등록하고 <br />
              전등, 멀티탭 등을 조작할 수 있는 <br />
              서비스
            </div>
          </div>
        </Card>
        <Card
          dataAos="fade-up"
          dataDelay="600"
          width={350}
          height={250}
          hoverScale
          onClick={() => {
            handleOpenLinks([
              'https://jj365-my.sharepoint.com/:v:/g/personal/summer9930_office_jj_ac_kr/EWJPrk6aGINNkaHhjnaV_jgB3Wxg6ldz7K1j-7kAUDHIuQ?e=J92Ubl',
            ])
          }}
        >
          <div className="content">
            <h1>GoTo</h1>
            <div className="stack">
              <div>Android</div>
              <div>NaverMapAPI</div>
            </div>
            <div className="desc">
              네이버 지도 API를 사용한 안드로이드 앱으로 가까운 사람들과 함께
              <br />핫 플레이스를 공유하는 서비스
            </div>
          </div>
        </Card>
        <Card
          dataAos="fade-up"
          dataDelay="600"
          width={350}
          height={250}
          hoverScale
          onClick={() => {
            handleOpenLinks([
              'https://github.com/je0ngyun/WvsGameServer',
              'https://jj365-my.sharepoint.com/:v:/g/personal/summer9930_office_jj_ac_kr/EfSLPFPMrctLp8XkAPa6iPwBwO-Xi7eaP6pKCSAXvgkNKA?e=pz9gyw',
            ])
          }}
        >
          <div className="content">
            <h1>WvsGameServer</h1>
            <div className="stack">
              <div>Java</div>
              <div>JavaFx</div>
              <div>TCP</div>
            </div>
            <div className="desc">
              Java, JavaFX를 이용한 게임 <br />
              메이플스토리 클론코딩의 서버부분
            </div>
          </div>
        </Card>
        <Card
          dataAos="fade-up"
          dataDelay="600"
          width={350}
          height={250}
          hoverScale
          onClick={() => {
            handleOpenLinks([
              'https://github.com/je0ngyun/AutoAction',
              'https://jj365-my.sharepoint.com/:u:/g/personal/summer9930_office_jj_ac_kr/EZXtVTvyGtZGpP2OG32xzJYBg5b4hjUdkhIxn7Gz_YMdgg?e=SlcLmT',
            ])
          }}
        >
          <div className="content">
            <h1>AutoAction</h1>
            <div className="stack">
              <div>Java</div>
              <div>JavaSwing</div>
            </div>
            <div className="desc">
              Java, JavaSwing으로 개발한 <br /> 키보드, 마우스 메크로 프로그램
            </div>
          </div>
        </Card>
      </StPageMain>
    </StPageContainer>
  )
}

export default IntroProject
