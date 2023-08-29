import React from "react";
import {
  AjudarSectionContainer,
  AjudarTitle,
  AjudarSubtitle,
  AjudarParagraph,
  CTAButton,
  CenterDiv,
  AjudarH3,
} from "./Ajudar";

const Ajudar = () => {
  return (
    <AjudarSectionContainer>
      <AjudarTitle>QUERO AJUDAR</AjudarTitle>
      <AjudarSubtitle>
        Precisamos de todo tipo de ajuda para manter e aumentar nosso número de
        resgates e adoções, transformando a vida de centenas de peludos todos os
        anos.
      </AjudarSubtitle>
      <AjudarH3>SENDO VOLUNTÁRIO</AjudarH3>
      <AjudarParagraph>
        Temos eventos em Ibiúna, onde você pode conhecer nossa sede, e também em
        São Paulo, e você poderá ajudar na: - organização das feiras de adoção -
        visita de mutirão no sítio - organização dos bazares
      </AjudarParagraph>
      <AjudarH3>AJUDA FINANCEIRA</AjudarH3>
      <AjudarParagraph>
        Consumimos por volta de uma tonelada de ração por mês, e em nosso
        orçamento temos muitos gastos com veterinários, medicamentos etc,
        portanto qualquer ajuda financeira é bem-vinda.
      </AjudarParagraph>
      <AjudarParagraph>Clique AQUI e saiba como ajudar.</AjudarParagraph>

      <AjudarH3>QUERO APADRINHAR</AjudarH3>
      <AjudarParagraph>
        Tem algum doguinho que você gostou muito aqui do projeto mas não
        consegue adotar no momento? Arrasta pro lado pra conhecer como funciona
        para apadrinhar um cachorrinho do Latido 🧡
      </AjudarParagraph>
      <AjudarParagraph>
        #adoteumamigo #petlovers #viralata #adoteumviralata #projetolatido
        #cachorro #onganimal
      </AjudarParagraph>

      <AjudarH3>LAR TEMPORÁRIO</AjudarH3>
      <AjudarParagraph>
        Abrigue em sua casa um animal de acordo com o perfil e tempo
        determinados por você, ajudando-o a ficar pronto para uma futura adoção.
        Além de nos ajudar a resgatar mais animais, fará toda a diferença no
        processo de adaptação do peludo em um novo lar.
      </AjudarParagraph>
      <AjudarParagraph>
        Entre em contato por e-mail voluntarios@amigosdesaofrancisco.com.br para
        saber mais detalhes.
      </AjudarParagraph>

      <AjudarH3>PARCERIAS</AjudarH3>
      <AjudarParagraph>
        Topa fazer uma parceria com a sua empresa ou instituição que pode nos
        ajudar? Podemos fazer campanhas de doações, divulgar/criar produtos em
        conjunto, realizações dias de voluntariado para sua equipe e muito mais!
      </AjudarParagraph>
      <AjudarParagraph>
        É só enviar um e-mail para parcerias@amigosdesaofrancisco.com.br
      </AjudarParagraph>

      <CenterDiv>
        <CTAButton
          href="https://view.forms.app/Ajudarrs/untitled-form"
          target="_blank"
        >
          Seja um revendedor
        </CTAButton>
      </CenterDiv>
    </AjudarSectionContainer>
  );
};

export default Ajudar;
