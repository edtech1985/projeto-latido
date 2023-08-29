import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import backgroundImg from "../../components/assets/ajudar.jpg";

export const AboutUsContainer = styled.div`
  text-align: center;
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (max-width: 768px) {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
`;

export const DivText = styled.div`
  width: 100%;
  display: block;
  align-self: center;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 100vw;
    margin: 1rem;
    margin-bottom: 0;
  }
`;

export const WelcomeParagraph = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin: 0.5rem;
  color: var(--blue);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const WelcomeH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin: 1rem;
  color: var(--blue);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

export const CallToAction = styled.div`
  text-align: center;
  margin: 1rem;
  color: #f2f2f2;

  @media (max-width: 768px) {
    margin-top: 0.75rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const StyledALink = styled.a`
  text-decoration: none;
`;

export const CallToActionLink = styled.button`
  vertical-align: middle;
  color: white;
  background-color: #c51d5d;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: 3px solid var(--white);
  font-weight: bold;
  transition: background-color 0.75s ease-in-out;
  cursor: pointer;

  &:hover {
    color: var(--blue);
    background-color: var(--light-orange);
    border: 3px solid var(--blue);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 14px;
  }
`;

export const IGIcon = styled(FaInstagram)`
  &:hover {
    background-color: var(--brown);
    color: var(--blue);
  }
`;

export const DivBgImg = styled.div`
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;
  width: 100vw;

  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
    background-size: contain;
    background-position: center center;
  }
`;
