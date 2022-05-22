import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { directionState } from '@stores/direction'
import { useRecoilValue } from 'recoil'
import useRegisterSlideKey from '@hooks/useRegisterSlideKey'
import Landing from '@pages/Landing'
import TheWork from '@pages/TheWork'
import IntroSpaCsrSsr from '@pages/IntroSpaCsrSsr'
import AboutCSR from '@pages/AboutCSR'
import NextAndSEO from '@pages/NextAndSEO'
import ComponentBasedDev from '@pages/ComponentBasedDev'
import CompRegularMarkup from '@pages/CompRegularMarkup'
import GoalsAndChallenges from '@pages/GoalsAndChallenges'
import QnA from '@pages/QnA'

// Routing info
export const appRoutes = [
  { path: '/', Component: Landing },
  { path: '/the-work', Component: TheWork },
  { path: '/intro-SPA-CSR-SSR', Component: IntroSpaCsrSsr },
  { path: '/about-CSR', Component: AboutCSR },
  { path: '/nextjs-and-SEO', Component: NextAndSEO },
  { path: '/component-based-dev', Component: ComponentBasedDev },
  { path: '/comp-regular-markup', Component: CompRegularMarkup },
  { path: '/goals-and-challenges', Component: GoalsAndChallenges },
  { path: '/qna', Component: QnA },
]

const Router = () => {
  useRegisterSlideKey()
  const location = useLocation()
  const timeout = { enter: 500, exit: 500 }
  const direction = useRecoilValue(directionState)

  return (
    <>
      <Suspense fallback={<></>}>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.pathname}
            classNames={`page${direction}`}
            mountOnEnter={false}
            unmountOnExit={false}
            timeout={timeout}
          >
            <Routes location={location}>
              {appRoutes.map(({ path, Component }, idx) => (
                <Route key={idx} path={path} element={<Component />} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </>
  )
}

export default Router
