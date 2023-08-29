import styled from "styled-components";
// import backgroundImage from "./backgroundImage";

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--dark);

  @media only screen and (max-width: 600px) {
    height: fit-content;
    min-height: 100vh;
  }
`;
