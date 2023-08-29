import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Luckiest Guy', cursive, 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    height: auto;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: var(--dark-orange);
    
    @media only screen and (max-width: 600px) {
      width: 100vw;
      height: auto;
      max-height: 100vh;
    }
  }

:root {
  --brown: #731D0A;
  --dark-orange: #F27405;
  --light-orange: #F28705;
  --beige: #F2C48D;
  --white: #F2F2F2;
  --blue: #27538C;
  --yellow: #F2C335;
  --pink: #F25774;
}
  
`;

export default GlobalStyle;
