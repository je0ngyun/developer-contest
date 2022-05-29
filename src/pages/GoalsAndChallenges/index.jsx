import React from 'react'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Title from '@components/Title'
import { StPageContainer, StPageMain, StAnswer } from './style'
import Card from '@components/Card'
import { FaQuoteLeft, FaQuoteRight, FaUserFriends } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'
import { CgSmileMouthOpen } from 'react-icons/cg'

const GoalsAndChallenges = () => {
  useRegisterSlideKey() //Register key events for slides on this page
  return (
    <StPageContainer>
      <Title>목표 및 도전</Title>
      <StPageMain>
        <Card
          dataAos="fade-right"
          dataDelay="500"
          width={120}
          height={120}
          circle
        >
          <i>
            <BsGraphUp />
          </i>
        </Card>
        <StAnswer data-aos="fade-left" data-aos-delay="600">
          <div className="quote">
            <FaQuoteLeft />
          </div>
          <div>
            빠른속도의 개발과 좋은설계 사이의 트레이드오프를 고민하며
            <br /> 유지보수가 가능한 코드를 작성하는 것
          </div>
          <div className="quote">
            <FaQuoteRight />
          </div>
        </StAnswer>
        <Card
          dataAos="fade-right"
          dataDelay="700"
          width={120}
          height={120}
          circle
        >
          <i>
            <CgSmileMouthOpen />
          </i>
        </Card>
        <StAnswer data-aos="fade-left" data-aos-delay="800">
          <div className="quote">
            <FaQuoteLeft />
          </div>
          <div>
            주어진 리소스와 상황에서 좋은 사용자 경험을 뽑아내서
            <br /> 경험좋은 서비스를 만드는 것
          </div>
          <div className="quote">
            <FaQuoteRight />
          </div>
        </StAnswer>
        <Card
          dataAos="fade-right"
          dataDelay="900"
          width={120}
          height={120}
          circle
        >
          <i>
            <FaUserFriends />
          </i>
        </Card>
        <StAnswer data-aos="fade-left" data-aos-delay="1000">
          <div className="quote">
            <FaQuoteLeft />
          </div>
          <div>
            사용자 경험뿐만 아니라 개발자 경험도 중요시하여
            <br /> 동료들에게 도움이되고 같이 성장해나가는 것
          </div>
          <div className="quote">
            <FaQuoteRight />
          </div>
        </StAnswer>
      </StPageMain>
    </StPageContainer>
  )
}

export default GoalsAndChallenges
