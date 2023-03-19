import { createGlobalStyle } from 'styled-components'
import overlayBg from '../image/overlayBg.png'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing : border-box;
    margin : 0;
    padding : 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  .text-decoration-none{
    text-decoration : none
  }
`

export default GlobalStyle
