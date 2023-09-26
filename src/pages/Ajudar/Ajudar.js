import styled from "styled-components";
import backgroundImage from "../../assets/ajudar.jpg";
import backgroundImg from "../../assets/ajudar.jpg";

export const AjudarBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  opacity: 0.6;
  z-index: -1;
`;

export const Container = styled.section`
  display: block;
  padding: 1rem;
`;

export const TopSection = styled.div`
  text-align: center;
  padding: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const DivTextImg = styled.div`
  display: flex;
`;

export const DivText = styled.div`
  width: 100%;
  display: block;
  align-self: center;
  text-align: center;
  margin: 1rem;

  @media (max-width: 768px) {
    width: 100vw;
    margin: 1rem;
    margin-bottom: 0;
  }
`;

export const DivBgImg = styled.div`
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: repeat;
  background-position: center right;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 768px) {
  display: none;
  }
`;

export const PixImg = styled.img`
  width: 100%;
  max-width: 30vw;
  margin: 1rem;
  `;


export const ImgMobile = styled.img`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

export const AjudarTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--brown);

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const AjudarSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--brown);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const AjudarH3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--blue);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const AjudarParagraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--white);

  a {
    color: var(--brown);
    font-weight: bold;
    text-decoration: none;
    transition: color 0.5s ease;

    &:hover {
      color: var(--blue);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AjudarHash = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--brown);

  &:hover {
    color: var(--blue);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const CTAButton = styled.a`
  display: block;
  text-align: center;
  background: var(--blue);
  color: white;
  padding: 1rem 2rem;
  border-radius: 20px;
  margin-top: 1rem;
  text-decoration: none;
  transition: background-color 1s ease-in-out, 1s ease-out;
  border: 3px solid transparent;
  width: 40%;

  &:hover {
    color: var(--yellow);
    background-color: var(--brown);
    border: 3px solid var(--yellow);

    box-shadow: 0px 0px 12px 12px var(--yellow);
  }
`;
