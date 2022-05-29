import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${reset};
  //${normalize};
  * {
  box-sizing: border-box;
  }
  html,
  body {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  body {
    font-family: 'nexonLv1', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background_color};
    color: ${({ theme }) => theme.colors.text_color};
    padding: 15px;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  strong{
    font-weight: 600;
  }
  .transition-group {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }
  .pageleft-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    z-index: 1;
  }
  .pageleft-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 500ms linear, opacity 400ms linear
  }
  .pageleft-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .pageleft-exit-active {
    opacity: 0;
    transform: translate3d(200%, 0, 0);
    transition: transform 930ms linear, opacity 400ms linear
  }
  .pageright-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    z-index: 1;
  }
  .pageright-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform 500ms linear, opacity 400ms linear
  }
  .pageright-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .pageright-exit-active {
    opacity: 0;
    transform: translate3d(-200%, 0, 0);
    transition: transform 930ms linear, opacity 400ms linear
  }

  .text-blue{
    color: #0896c9;
  }

  .text-red{
    color: #c908a9;
  }

  @font-face { 
    font-family: 'yangjin'; 
    src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') 
    format('woff'); 
    font-weight: normal; 
    font-style: normal; 
  }
  @font-face {
    font-family: 'nexonLv1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') 
    format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Fira Code';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/firacode/v18/uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJV77MOzlojwUKaJO.woff) format('woff');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }  
`

export default GlobalStyle
