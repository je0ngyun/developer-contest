import React from 'react'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import { StPageContainer, StPageMain } from './style'
import Card from '@components/Card'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const htmlString = `// Nomal html

<div class="depth-tree-container>
  <span>
    <span>홈</span>
    <span> > </span>
    <span>대시보드</span>
    <span> > </span>
    <span>마이페이지</span>
    ....
  </span>
</div>
`

const jsxString = `<DepthTree 
  items={[홈,대시보드,마이페이지]} 
/>  

<StDepthTree>
  {items.map((word, idx) => (
    <span key={idx}>
      {idx ? <span>{' > '}</span> : ""}
      <span>{word}</span>
    </span>
  ))}
</StDepthTree>
`

const ComponentBasedDev = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <StPageContainer>
      <Title>기존 마크업과의 비교</Title>
      <StPageMain>
        <Card dataAos="fade-down" dataDelay="400" width={1050} height={80}>
          <div className="example-result">
            <div>Example UI</div>
            {['홈', '대시보드', '마이페이지'].map((v, i) => {
              return (
                <span key={i}>
                  {i ? <div>{'>'}</div> : ''}
                  <div>{v}</div>
                </span>
              )
            })}
          </div>
        </Card>
        <Card dataAos="fade-up-right" dataDelay="650" width={500} height={500}>
          <div className="code-block">
            <SyntaxHighlighter language="html" style={vs2015}>
              {htmlString}
            </SyntaxHighlighter>
          </div>
        </Card>
        <Card dataAos="fade-up-left" dataDelay="850" width={500} height={500}>
          <div className="code-block">
            <SyntaxHighlighter language="jsx" style={vs2015}>
              {jsxString}
            </SyntaxHighlighter>
          </div>
        </Card>
      </StPageMain>
    </StPageContainer>
  )
}

export default ComponentBasedDev
