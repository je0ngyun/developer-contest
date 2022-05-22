import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import GlobalStyle from '@styles/global'
import Main from '@components/Layout/Main'

function App() {
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
