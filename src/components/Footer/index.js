import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  StyledDevelopedBy,
  StyledDiv,
  StyledFooter,
  StyledIconItem,
  StyledIconList,
  StyledRightsReserved,
} from "./Footer";

function Footer() {
  return (
    <StyledFooter>
      <StyledIconList>
        <StyledIconItem>
          <a
            href="https://www.instagram.com/projeto_latido/"
            target="_blank"
            rel="noreferrer"
            alt="Instagram Projeto Latido"
            aria-label="Instagram Projeto Latido"
          >
            <FaInstagram />
          </a>
        </StyledIconItem>
        <StyledIconItem>
          <a
            href="https://www.facebook.com/projetolatidopp/"
            target="_blank"
            rel="noreferrer"
            alt="Facebook Projeto Latido"
            aria-label="Facebook Projeto Latido"
          >
            <FaFacebook />
          </a>
        </StyledIconItem>

        <StyledIconItem>
          <a
            href="https://api.whatsapp.com/send?phone=5551992002595&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%E2%80%A6"
            target="_blank"
            rel="noreferrer"
            alt="WhatsApp  Projeto Latido"
            aria-label="WhatsApp  Projeto Latido"
          >
            <FaWhatsapp />
          </a>
        </StyledIconItem>
      </StyledIconList>
      <StyledDiv>
        <StyledRightsReserved>
          Horário de Atendimento: <br></br>Segunda-feira a Sábado, das 8h às 20h
        </StyledRightsReserved>
        <StyledRightsReserved>
          © 2023 Direitos Reservados |{" "}
          <a
            href="https://edtech1985.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir para o Projeto Latido"
          >
            <span>Projeto Latido</span>
          </a>
        </StyledRightsReserved>
      </StyledDiv>
      <StyledDevelopedBy>
        Desenvolvido por{" "}
        <a
          href="https://www.edtech1985.com.br/projetos"
          target="_blank"
          rel="noreferrer"
          alt="Desenvolvedor Web edtech1985"
          aria-label="Criação de Websites edtech1985"
        >
          <span>
            <strong>edtech1985</strong>
          </span>
        </a>
      </StyledDevelopedBy>
    </StyledFooter>
  );
}

export default Footer;
