import React from 'react'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import { StPageContainer, StPageMain } from './style'
import Card from '@components/Card'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const codeString = `<CategoryItem 
  title="카테고리" 
  showTip
  require
>
  <BaseInput 
    {...register('category')} 
    width={400} maxLength="15"
  >
    <button>카테고리 검색</button>
  </BaseInput>
</CategoryItem>
`

const ComponentBasedDev = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <StPageContainer>
      <Title>Componet 기반 개발?</Title>
      <StPageMain>
        <Card dataAos="fade-down" dataDelay="400" width={1050} height={80}>
          <div className="example-result">
            <div className="category-name">카테고리</div>
            <div className="required-mark">*</div>
            <div className="tip-box">?</div>
            <input type="text" />
            <div className="max-len">0/15</div>
            <button>카테고리 찾기</button>
          </div>
        </Card>
        <Card dataAos="fade-up-right" dataDelay="650" width={500} height={500}>
          <div className="code-block">
            <SyntaxHighlighter language="jsx" style={vs2015}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </Card>
        <Card dataAos="fade-up-left" dataDelay="850" width={500} height={500}>
          <div className="desc">
            <ul>
              <li>1. 컴포넌트는 데이터를 받아 상태에 따라 출력하는 함수</li>
              <li>2. UI를 재사용 가능한 개별적인 여러 조각으로 나누어 개발</li>
              <li>3. 캡슐화, 재사용성, 확장성 등의 이점</li>
              <li>
                4. 핵심데이터는 표출하고 세부로직은 컴포넌트 내부에 숨기는
                방식으로 적절한 추상화를 통해 클린코드를 작성하고자 노력
              </li>
            </ul>
          </div>
        </Card>
      </StPageMain>
    </StPageContainer>
  )
}

export default ComponentBasedDev
