import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  NavbarTitle,
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledNavItem,
  BurgerMenuButton,
} from "./Header";
import logo from "../../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="Projeto Latido" />
      </Link>

      <NavbarTitle>Projeto Latido</NavbarTitle>

      <BurgerMenuButton
        id="BurgerButtonMenu"
        open={isOpen}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenuButton>

      <StyledNavbar open={isOpen}>
        <StyledNavItem as={NavLink} to="/" exact onClick={handleNavItemClick}>
          Home
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/adote"
          alt="Adote"
          aria-label="Adote"
          onClick={handleNavItemClick}
        >
          Adote
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/quero-ajudar"
          alt="Quero Ajudar"
          aria-label="Quero Ajudar"
          onClick={handleNavItemClick}
        >
          Quero Ajudar
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/duvidas"
          alt="Dúvidas Frequentes"
          aria-label="Dúvidas Frequentes"
          onClick={handleNavItemClick}
        >
          Dúvidas
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/sobre"
          alt="Sobre Nós"
          aria-label="Sobre Nós"
          onClick={handleNavItemClick}
        >
          Sobre Nós
        </StyledNavItem>

        <StyledNavItem
          as={NavLink}
          to="/contato"
          alt="Contatos"
          aria-label="Contatos"
          onClick={handleNavItemClick}
        >
          Contatos
        </StyledNavItem>

        <StyledNavItem></StyledNavItem>
      </StyledNavbar>
    </StyledHeader>
  );
}

export default Header;
