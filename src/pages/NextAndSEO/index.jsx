import React from 'react'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import { StPageContainer, StPageMain } from './style'
import Card from '@components/Card'
import { SiNextdotjs } from 'react-icons/si'

const NextAndSEO = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <StPageContainer>
      <Title>NextJS 적용과 SEO</Title>
      <StPageMain>
        <Card dataAos="zoom-in" dataDelay="400" width={1050} height={300}>
          <div className="content">
            <div>
              <SiNextdotjs /> NextJs = CSR + SSR
            </div>
            <div>
              <ol>
                <li>1. NextJS를 사용하면 CSR과 SSR을 전략적으로 활용가능</li>
                <li>
                  2. 초기에 사용자가 보기에 무리없는 HTML 파일을 응답하고 그
                  이후에는 CSR방식으로 렌더링
                </li>
                <li>
                  3. 굳이 SEO 적용 또는 데이터 pre-rendering이 필요 없다면 CSR
                  방식 (대쉬보드 등)
                </li>
                <li>
                  4. 매 요청마다 달라지는 화면이면서 SEO가 필요한 경우에는 SSR
                  방식 선택가능
                </li>
              </ol>
            </div>
          </div>
        </Card>
        <Card dataAos="zoom-in" dataDelay="600" width={490} height={330}>
          <div className="content">
            <h1>SEO 적용 예시</h1>
            <div className="img-box">
              <img src="/images/seo-search.png" alt="seo-search" />
            </div>
          </div>
        </Card>
        <Card dataAos="zoom-in" dataDelay="800" width={490} height={330}>
          <div className="content">
            <h1>open graph 적용 예시</h1>
            <div className="img-box">
              <img src="/images/seo-metatag.png" alt="seo-metatag" />
            </div>
          </div>
        </Card>
      </StPageMain>
    </StPageContainer>
  )
}

export default NextAndSEO
