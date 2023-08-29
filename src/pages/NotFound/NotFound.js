import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: var(--dark);
`;

export const BackDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BackButton = styled.button`
  background: var(--light-red);
  color: #f2f2f2;
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem;
  margin: 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  width: 15rem;
  align-content: center;
  align-items: center;

  &:hover {
    background: var(--dark);
    transition: 1s ease-in-out;
    color: var(--light-red);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: fill;
`;
