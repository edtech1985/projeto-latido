import React, { useEffect } from "react";
import {
  AjudarTitle,
  AjudarSubtitle,
  AjudarParagraph,
  CTAButton,
  CenterDiv,
  AjudarH3,
  DivText,
  DivBgImg,
  Container,
  TopSection,
  DivTextImg,
  AjudarHash,
  ImgMobile,
  PixImg,
} from "./Ajudar";

import mobileImg from "../../assets/ajudar.jpg";
import PixImgQR from "../../assets/img/qrcode.png";

import AOS from "aos";
import "aos/dist/aos.css";
import CopyPhoneNumber from "./CopyPhoneNumber";

const Ajudar = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <Container>
      <div className="animation" data-aos="zoom-in">
        <TopSection>
          <AjudarTitle>QUERO AJUDAR</AjudarTitle>
          <AjudarSubtitle>
            Precisamos de todo tipo de ajuda para manter e aumentar nosso número
            de resgates e adoções, transformando a vida de centenas de peludos
            todos os anos.
          </AjudarSubtitle>
        </TopSection>
      </div>

      <div className="animation" data-aos="fade-up">
        <DivTextImg>
          <DivText>
            <AjudarH3>SENDO VOLUNTÁRIO</AjudarH3>
            <AjudarParagraph>
              Temos eventos em Presidente Prudente-SP, onde você pode conhecer
              nossa sede, e também em São Paulo, e você poderá ajudar na: -
              organização das feiras de adoção - visita de mutirão no sítio -
              organização dos bazares
            </AjudarParagraph>
            <AjudarH3>AJUDA FINANCEIRA</AjudarH3>
            <AjudarParagraph>
              Consumimos por volta de uma tonelada de ração por mês, e em nosso
              orçamento temos muitos gastos com veterinários, medicamentos etc,
              portanto qualquer ajuda financeira é bem-vinda.
            <CopyPhoneNumber />
            </AjudarParagraph>

            <AjudarParagraph>
              Aponte sua camera para o qrcode abaixo e ajude o projeto latido.
            </AjudarParagraph>

            <PixImg src={PixImgQR} />

            <AjudarH3>QUERO APADRINHAR</AjudarH3>
            <AjudarParagraph>
              Tem algum doguinho que você gostou muito aqui do projeto mas não
              consegue adotar no momento? Arrasta pro lado pra conhecer como
              funciona para apadrinhar um cachorrinho do Latido 🧡
            </AjudarParagraph>
            <AjudarHash>
              #adoteumamigo #petlovers #viralata #adoteumviralata #projetolatido
              #cachorro #onganimal
            </AjudarHash>

            <AjudarH3>LAR TEMPORÁRIO</AjudarH3>
            <AjudarParagraph>
              Abrigue em sua casa um animal de acordo com o perfil e tempo
              determinados por você, ajudando-o a ficar pronto para uma futura
              adoção. Além de nos ajudar a resgatar mais animais, fará toda a
              diferença no processo de adaptação do peludo em um novo lar.
            </AjudarParagraph>
            <AjudarParagraph>
              Entre em contato (18)99694-8407 para saber mais detalhes.
            </AjudarParagraph>
          </DivText>

          <DivBgImg></DivBgImg>
        </DivTextImg>
        <CenterDiv>
          <CTAButton
            href="https://api.whatsapp.com/send?phone=5518996948407&text=Ol%C3%A1%20Projeto%20Latido,%20quero%20ajudar!"
            target="_blank"
            rel="noreferrer"
            alt="Ajudar Projeto Latido"
            aria-label="Ajudar o Projeto Latido"
          >
            QUERO AJUDAR
          </CTAButton>
        </CenterDiv>
      </div>

      <ImgMobile src={mobileImg} />
    </Container>
  );
};

export default Ajudar;
