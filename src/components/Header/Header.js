import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vw;
  background: var(--light-orange);
  width: 100vw;
  max-height: 12vh;
  height: 12vh;
  box-sizing: border-box;
  position: relative;
  border-bottom: 1px solid var(--brown);
  box-shadow: 1px 3px 10px rgba(191, 156, 90, 0.5);

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    /* padding-right: 30rem; */
  }
`;

export const StyledLogo = styled.img`
  width: auto;
  height: 12vh;
  min-width: 48px;
  min-height: 48px;
  transition: filter 0.5s ease-in-out;

  &:hover {
    filter: brightness(1.5);
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--dark-orange); //fundo bruger menu down
    width: 100%;
    height: 100vh;
    padding-top: 0;
    z-index: 999;
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2.5rem;
    z-index: 999;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 3rem;
      height: 0.3rem;
      margin-bottom: 0.75rem;
      position: relative;
      background-color: var(--blue);
      border-radius: 15px;
      transform-origin: center;
      transition: transform 1.25s ease-out, opacity 1.25s ease-out;

      &:focus {
        outline: none;
      }

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const NavbarTitle = styled.h2`
  font-size: 2rem;
  color: var(--blue); //verificar
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover {
    text-shadow: -8px 8px 8px rgba(0, 0, 255, 0.75);
    color: white;
    transition: background-position 1s ease-in-out, color 1s ease-in-out;
  }

  @media only screen and (min-width: 600px) and (max-width: 992px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 401px) and (max-width: 600px) {
    font-size: 1.75rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (min-width: 340px) and (max-width: 420px) {
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 340px) {
    font-size: 1.25rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledNavItem = styled(NavLink)`
  display: block;
  padding: 1vw;
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
  position: relative;

  &:hover {
    color: var(--yellow);
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(77%);
    height: 2px;
    bottom: 0px;
    left: 12%;
    background-color: var(--yellow);
    opacity: 0;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
    transform-origin: center;
  }

  &.active {
    color: var(--blue);
    font-weight: bold;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
