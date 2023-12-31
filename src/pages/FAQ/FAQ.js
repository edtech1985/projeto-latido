import styled from "styled-components";

import backgroundImg from "../../assets/logo.png";

export const FAQSectionContainer = styled.div`
  text-align: center;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 100vh;

  @media only screen and (max-width: 768px) {
    
  }
`;

export const DivOpacity = styled.div`
  width: 80vw;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 1rem auto;
  background-color: rgba(0, 0, 0, 0.75);

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 3rem 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--light-orange);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Question = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: bold;
  color: var(--light-orange);

  &:hover {
    color: var(--dark-orange);
  }
`;

export const Answer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: var(--white);
`;
