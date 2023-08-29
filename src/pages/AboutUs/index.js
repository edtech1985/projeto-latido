import React from "react";
import {
  WelcomeParagraph,
  CallToAction,
  Text,
  WelcomeH2,
  CallToActionLink,
  StyledALink,
  DivBgImg,
  IGIcon,
  DivText,
} from "./AboutUs";
import { AboutUsContainer } from "./AboutUs";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <DivText>
        <WelcomeParagraph>
          🐾 Bem-vindo(a) ao Projeto Latido 🐾
        </WelcomeParagraph>

        <WelcomeH2>
          {" "}
          Somos uma família dedicada ao bem-estar dos nossos queridos cães.
          Nossa paixão por esses animais maravilhosos nos levou a criar um
          espaço onde a excelência genética, a saúde e o amor se encontram.{" "}
        </WelcomeH2>

        <CallToAction>
          <Text>
            🐶 Nossos Cães: Cada cãozinho da nossa criação é tratado com carinho
            e respeito desde os primeiros momentos de vida. Selecionamos
            cuidadosamente as melhores linhagens e pedigrees internacionais,
            garantindo que nossos cães possuam a qualidade que eles merecem.
          </Text>
          <Text>
            💙 Nosso Compromisso: Mais do que apenas animais, oferecemos um
            compromisso de suporte vitalício. Estamos aqui para ajudar em cada
            etapa do caminho, desde a escolha do seu novo amigo de quatro patas
            até orientações sobre cuidados e treinamento.{" "}
          </Text>
          <Text>
            🌍 Conexões Duradouras: Acreditamos na força das conexões entre cães
            e seus donos. Nossa missão é facilitar a formação de laços profundos
            e duradouros que trarão alegria e companheirismo para ambas as
            partes.{" "}
          </Text>
          <Text>
            📞 Entre em Contato: Estamos ansiosos para responder às suas
            perguntas e compartilhar mais sobre a nossa paixão. Entre em contato
            via WhatsApp para saber mais sobre os nossos cães incríveis e como
            você pode fazer parte da família Projeto Latido. Junte-se a nós
            nessa jornada cheia de Latido, amor e alegria! 🐕✨
          </Text>
          <Text>#ProjetoLatido #AmorPelosCães #CãesFelizes #FamíliaLatido</Text>
          <StyledALink
            href="https://www.instagram.com/projeto_latido/"
            target="_blank"
            rel="noreferrer"
            alt="Instagram Projeto Latido"
            aria-label="Instagram Projeto Latido"
          >
            <CallToActionLink>
              <IGIcon />
              &nbsp; Nos acompanhe no Instagram &nbsp;
              <IGIcon />
            </CallToActionLink>
          </StyledALink>
        </CallToAction>
      </DivText>

      <DivBgImg></DivBgImg>
    </AboutUsContainer>
  );
};

export default AboutUs;
