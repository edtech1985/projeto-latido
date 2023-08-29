import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: linear-gradient(
    to left,
    var(--yellow) 0%,
    var(--light-orange) 60%,
    var(--dark-orange) 95%,
    var(--brown) 100%
  );
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  max-height: 12vh;
  border-top: 1px solid var(--blue);
  box-shadow: 0px 0px 5px rgba(191, 156, 90, 0.5);

  @media only screen and (max-width: 600px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    justify-content: center;
    flex-direction: column;
    max-height: 20vh;
    height: 20vh;
  }
`;

export const StyledIconList = styled.ul`
  display: flex;
  margin-top: 1.5rem;
  padding: 0;
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
    justify-content: center; /* Centraliza horizontalmente */
    flex-wrap: wrap; /* Quebra para várias linhas */
  }
`;

export const StyledIconItem = styled.li`
  min-height: 48px;
  min-width: 48px;
  margin-left: 1vw;
  list-style-type: none;
  font-size: 1.75rem;
  color: var(--white);
  cursor: pointer;
  &:hover {
    color: var(--blue);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    justify-content: center;
  }
`;

export const StyledRightsReserved = styled.p`
  font-size: 1.25vw;
  margin-bottom: 0.25vw;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--white);

    &:hover {
      color: var(--dark-orange);
    }
  }
  span {
    font-weight: bold;
    color: var(--blue);
    &:hover {
      color: var(--dark-orange);
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.75rem;
    margin-bottom: 5px;
  }
`;

export const StyledDevelopedBy = styled.p`
  margin-right: 1rem;
  font-size: 1.25vw;
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--blue);

    &:hover {
      color: var(--dark-orange);
    }
  }
  span {
    color: var(--blue);

    &:hover {
      color: var(--dark-orange);
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }
`;

export const StyledDiv = styled.div`
  text-align: center;
  vertical-align: center;
  justify-content: center;
`;
