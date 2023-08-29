import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: Arial, sans-serif;
`;

export const Section = styled.section`
  padding: 2.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
    display: block;
  }
`;

export const TextContainer = styled.div`
  margin: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.25;
  color: var(--white);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  line-height: 1.4;
  color: #f2f2f2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const Subtitle2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  color: var(--brown);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const Text = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  color: #f2f2f2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const ImageContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 768px) {
    display: none;
    margin: 0.5rem 0;
  }
`;

export const ImageContainerMobile2 = styled.div`
  display: none;
  justify-content: center;
  margin: 1rem 0;

  @media (max-width: 768px) {
    display: flex;
    margin: 0.5rem 0;
  }
`;

export const MainImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 15px;
`;

export const SecondaryImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

export const GridSection = styled.section`
  text-align: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 15px;
  transition: background-color 1s ease-in-out, 1s ease-out;

  &:hover {
    border: 2px solid var(--light-orange);
    box-shadow: 0px 0px 12px 12px var(--light-orange);
  }
`;

export const GridImage = styled.img`
  width: 100%;
  max-width: 20vw;

  border-radius: 15px;

  @media (max-width: 768px) {
    max-width: 50vw;
  }
`;

export const GridDescription = styled.div`
  margin-top: 0.5rem;
`;

export const GridTitle = styled.h3`
  font-size: 1.25rem;
  color: #f2f2f2;
  margin-bottom: 0.25rem;
`;
