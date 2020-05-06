import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialised;
    transition: .25s ease;
    min-height: 100%;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }


  .route-section {
    min-width: 100%;
    min-height: 100%;
    position: relative;
  }

  .route-transition-enter {
    opacity: 0;
    transform: translateX(-50%);
    transition: ease .5s;
  }
  .route-transition-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: ease .5s;
  }
  .route-transition-exit {
    opacity: 1;
    transform: translateX(0);
    transition: ease .5s;
  }
  .route-transition-exit-active {
    opacity: 0;
    transform: translateX(50%);
    transition: ease .5s;
  }

`;
