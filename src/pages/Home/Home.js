import styled, { keyframes } from "styled-components";
// import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import backgroundImg from "../../components/assets/logo.png";

export const HomePage = styled.div`
  text-align: center;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;

  vertical-align: middle;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DivOpacity = styled.div`
  width: 80vw;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-bottom: 3rem;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.75);
  height: auto;
  border-radius: 20px;
`;

export const WelcomeParagraph = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.25rem;
  color: var(--light-orange);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeH2 = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--light-orange);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

export const CallToAction = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: #f2f2f2;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const CallToActionText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StyledALink = styled.a`
  text-decoration: none;
`;

export const CallToActionLink = styled.button`
  vertical-align: middle;
  color: white;
  background-color: green;
  padding: 1rem 2rem;
  border-radius: 2rem;
  font-weight: bold;

  transition: background-color 1s ease-in-out, 1s ease-out;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    color: var(--light-orange);
    background-color: var(--dark-orange);
    border: 2px solid var(--light-orange);

    box-shadow: 0px 0px 6px 6px var(--light-orange);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const WhatsAppIcon = styled(FaWhatsapp)`
  &:hover {
    background-color: var(--dark-orange);
    color: var(--dark-orange);
  }
`;

export const DogsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding-top: 2rem;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 769px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const DogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 5px solid var(--blue);
  padding-top: 1rem;
  height: 100%;
  background-color: var(--light-orange);

  cursor: pointer;
  transition: background-color 1s ease-in-out, 1s ease-out;

  &:hover {
    background-color: var(--dark-orange);
    color: var(--white);
    border: 5px solid var(--brown);
    box-shadow: 0px 0px 10px 10px var(--light-orange);
  }
`;

export const DogContent = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    padding: 1rem;
    color: var(--blue);

    ${DogCard}:hover & {
      color: var(--white);
    }
  }

  p {
    padding: 1rem;
    font-size: 1rem;
    color: #f2f2f2;

    @media (max-width: 480px) {
      padding-bottom: 1rem;
    }
    @media (min-width: 1201px) {
      font-size: 1.25rem;
    }
  }
`;

export const Icon = styled.i`
  font-size: 48px;
  color: #f2f2f2;
  padding: 1rem;

  ${DogCard}:hover & {
    color: var(--light-orange);
  }
`;
