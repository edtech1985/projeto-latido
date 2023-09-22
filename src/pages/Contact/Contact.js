import styled from "styled-components";
import backgroundImg from "../../assets/ajudar.jpg";

export const Container = styled.div`
  text-align: center;
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;

  @media only screen and (max-width: 768px) {
    background-size: contain;
  }
`;

export const DivOpacity = styled.div`
  width: 70vw;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  
  @media only screen and (max-width: 768px) {
    width: 80vw;
  }
`;

export const Titulo = styled.h1`
  font-size: 2.5rem;
  color: var(--light-orange);
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--white);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const IconesContato = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ItemContato = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 16rem;
  transition: transform 0.2s;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--light-orange);
    font-size: 1.5rem;
    transition: color 0.2s;

    &:hover {
      color: var(--white);
    }
  }

  span {
    margin-top: 0.5rem;
  }
`;
