import { createGlobalStyle } from 'styled-components'
import overlayBg from '../assets/images/overlayBg.png'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
    margin : 0;
    padding : 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: #FFF9EF;
    transition : all .3s ease;
    padding : 1em;
  }
  
  body:before{
    content:'';
    width : 100%;
    height : 100vh;
    position:fixed;
    top : 0;
    left : 0;
    z-index : -1000;
    background: url(${overlayBg}) no-repeat;
    background-attachment : fixed;
    background-size : auto 1000px;
    background-position : center;
  }

  .text-decoration-none{
    text-decoration : none
  }
`

export default GlobalStyle
