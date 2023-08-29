import React from "react";
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
} from "./Ajudar";

const Ajudar = () => {
  return (
    <Container>
      <TopSection>
        <AjudarTitle>QUERO AJUDAR</AjudarTitle>
        <AjudarSubtitle>
          Precisamos de todo tipo de ajuda para manter e aumentar nosso número
          de resgates e adoções, transformando a vida de centenas de peludos
          todos os anos.
        </AjudarSubtitle>
      </TopSection>
      <DivTextImg>
        <DivText>
          <AjudarH3>SENDO VOLUNTÁRIO</AjudarH3>
          <AjudarParagraph>
            Temos eventos em Ibiúna, onde você pode conhecer nossa sede, e
            também em São Paulo, e você poderá ajudar na: - organização das
            feiras de adoção - visita de mutirão no sítio - organização dos
            bazares
          </AjudarParagraph>
          <AjudarH3>AJUDA FINANCEIRA</AjudarH3>
          <AjudarParagraph>
            Consumimos por volta de uma tonelada de ração por mês, e em nosso
            orçamento temos muitos gastos com veterinários, medicamentos etc,
            portanto qualquer ajuda financeira é bem-vinda.
          </AjudarParagraph>
          <AjudarParagraph>
            Clique{" "}
            <a
              href="https://apoia.se/projetolatido"
              target="_blank"
              rel="noreferrer"
              alt="Ajudar Projeto Latido"
              aria-label="Ajudar Projeto Latido"
            >
              AQUI
            </a>{" "}
            e saiba como ajudar.
          </AjudarParagraph>

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
            Entre em contato por e-mail voluntarios@amigosdesaofrancisco.com.br
            para saber mais detalhes.
          </AjudarParagraph>
        </DivText>
        <DivBgImg></DivBgImg>
      </DivTextImg>
      <CenterDiv>
        <CTAButton href="https://apoia.se/projetolatido" target="_blank">
          QUERO AJUDAR
        </CTAButton>
      </CenterDiv>
    </Container>
  );
};

export default Ajudar;
