import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import GlobalStyle from '@styles/global'
import Main from '@components/Layout/Main'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Main>
      </ThemeProvider>
    </>
  )
}

export default App
