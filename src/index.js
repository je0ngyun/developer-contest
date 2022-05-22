import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecoilRoot } from 'recoil'

//import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

//reportWebVitals(console.log)
