import styled from "styled-components";
import backgroundImage from "../../components/assets/ajudar.jpg";

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

export const AjudarSectionContainer = styled.section`
  text-align: center;
  padding: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
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
  margin-bottom: 1rem;
  color: var(--brown);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const AjudarH3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--blue);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const AjudarParagraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #f2f2f2;

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
  border-radius: 15px;
  margin-top: 1rem;
  text-decoration: none;
  transition: background-color 1s ease-in-out, 1s ease-out;
  border: 2px solid transparent;
  width: 50%;

  &:hover {
    color: var(--blue);
    background-color: var(--brown);
    border: 2px solid var(--light-orange);

    box-shadow: 0px 0px 6px 6px var(--light-orange);
  }
`;
