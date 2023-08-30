import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

* {
    margin: 0;
    padding: 0;
    font-family: 'Luckiest Guy', 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    height: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: var(--light-orange);
    
    @media only screen and (max-width: 600px) {
      width: 100vw;
      height: auto;
      max-height: 100vh;
    }
  }

:root {
  --brown: #8C4303;
  --dark-orange: #8B4300;
  --light-orange: #E7870E;
  --beige: #F2C48D;
  --white: #F2F2F2;
  --blue: #264C8B;
  --yellow: #EFC932;
  --pink: #F25774;
}
  
`;

export default GlobalStyle;
