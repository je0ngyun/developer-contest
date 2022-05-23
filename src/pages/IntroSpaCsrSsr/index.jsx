import React from 'react'
import styled from 'styled-components'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import { StPageContainer, StPageMain } from './style'
import Card from '@components/Card'
import { FaServer } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'
import { AiOutlineFileText } from 'react-icons/ai'
import { CgArrowRight } from 'react-icons/cg'
import { GrPersonalComputer } from 'react-icons/gr'
import { SiJavascript } from 'react-icons/si'
import { ImFileEmpty } from 'react-icons/im'

const IntroSpaCsrSsr = () => {
  useRegisterSlideKey()
  return (
    <StPageContainer>
      <Title>SPA? CSR? SSR?</Title>
      <StPageMain>
        <Card dataAos="flip-right" dataDelay="600" width={1000} height={300}>
          <div className="content">
            <h1>Server Side Rendering</h1>
            <div className="desc ssr-desc">
              <div>
                <FaServer className="icon-server" />
                <FiRefreshCw className="icon-refresh" />
                <AiOutlineFileText className="icon-file" />
                <CgArrowRight className="icon-arrow" />
                <GrPersonalComputer className="icon-monitor" />
              </div>
              <div>
                <ol>
                  <li>1. 브라우저가 서버에 요청을 한다.</li>
                  <li>
                    2. 서버에서는 HTML 파일을 만들어 클라이언트에 전송한다.
                  </li>
                  <li>
                    3. 클라이언트는 받아온 HTML파일을 통해 페이지를 구성한다.
                  </li>
                  <li>
                    4. 추가 데이터가 있을 경우 HTML 파일 전체를 다시 받아온다.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Card>
        <Card dataAos="flip-left" dataDelay="800" width={1000} height={300}>
          <div className="content">
            <h1>Client Side Rendering</h1>
            <div className="desc csr-desc">
              <div>
                <FaServer className="icon-server" />
                <FiRefreshCw className="icon-refresh" />
                <CgArrowRight className="icon-arrow" />
                <GrPersonalComputer className="icon-monitor" />
                <SiJavascript className="icon-js" />
                <ImFileEmpty className="icon-empty" />
              </div>
              <div>
                <ol>
                  <li>1. 브라우저가 서버에 요청을 한다.</li>
                  <li>2. 서버에서는 JS파일 링크가 있는 빈 HTML을 전송한다.</li>
                  <li>3. 받아온 JS파일로 동적으로 페이지를 구성한다.</li>
                  <li>
                    4. 추가 데이터 요청시 AJAX를 통해 부분적으로 업데이트한다.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </Card>
      </StPageMain>
    </StPageContainer>
  )
}

export default IntroSpaCsrSsr
