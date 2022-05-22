import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { directionState } from '@stores/direction'
import { appRoutes } from '@routes/Router'

const getCurrentPageIdx = (path) => {
  return appRoutes.findIndex((routeObj) => routeObj.path === path)
}

const useRegisterSlideKey = () => {
  const navigation = useNavigate()
  const setDirection = useSetRecoilState(directionState)

  const handleKeyDown = ({ key }) => {
    if (key === 'ArrowLeft' || key === 'Escape') {
      const pidx = getCurrentPageIdx(window.location.pathname)
      setDirection('left')
      if (pidx > 0) {
        setTimeout(() => {
          navigation(appRoutes[pidx - 1].path)
        }, 0)
      }
    }
    if (key === 'ArrowRight' || key === 'Enter') {
      const pidx = getCurrentPageIdx(window.location.pathname)
      setDirection('right')
      if (pidx < appRoutes.length - 1) {
        setTimeout(() => {
          navigation(appRoutes[pidx + 1].path)
        }, 0)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return null
}

export default useRegisterSlideKey
