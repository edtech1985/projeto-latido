import React, { useEffect } from "react";
import {
  WelcomeParagraph,
  CallToAction,
  CallToActionText,
  WelcomeH2,
  CallToActionLink,
  StyledALink,
  WhatsAppIcon,
  DivOpacity,
  DogCard,
  Icon,
  DogContent,
  DogsContainer,
} from "./Home";
import { HomePage } from "./Home";

import "font-awesome/css/font-awesome.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <HomePage>
      <div className="animation" data-aos="fade-up">
        <DivOpacity>
          <WelcomeParagraph>
            Bem-vindos á família Projeto Latido! <br></br>
          </WelcomeParagraph>
          <WelcomeH2>
            Aqui o bem-estar dos nossos cães são nossa prioridade.
          </WelcomeH2>
          <CallToAction>
            <CallToActionText>
              Temos uma enorme responsabilidade por cada vida gerada, por isso
              nos esforçamos para garantir que cada cão de nossa criação viva
              uma vida plena e feliz, desde os primeiros momentos conosco até a
              sua transição para uma família amorosa. Valorizamos a conexão
              entre os cães e seus donos, e nosso objetivo é facilitar a
              formação de laços profundos e duradouros.
            </CallToActionText>

            <div className="animation" data-aos="zoom-in">
              <StyledALink
                href="https://api.whatsapp.com/send?phone=5518996948407"
                target="_blank"
                rel="noreferrer"
                alt="WhatsApp  Projeto Latido"
                aria-label="WhatsApp Projeto Latido"
              >
                <CallToActionLink>
                  <WhatsAppIcon />
                  &nbsp; Entre em contato via WhatsApp &nbsp;
                  <WhatsAppIcon />
                </CallToActionLink>
              </StyledALink>
            </div>
          </CallToAction>
          <DogsContainer>
            <div className="animation" data-aos="fade-right">
              <DogCard>
                <Icon className="fa fa-gratipay" aria-hidden="true" />{" "}
                <DogContent>
                  <h3>Quero Doar</h3>
                  <p>
                    Manter o bem estar de nossos amigos depende da sua ajuda.
                  </p>
                </DogContent>
              </DogCard>
            </div>
            <div className="animation" data-aos="fade-up">
              <DogCard>
                <Icon className="fa fa-home" aria-hidden="true" />{" "}
                <DogContent>
                  <h3>Quero Adotar</h3>
                  <p>Dê um lar para nossos fiéis companheiros.</p>
                </DogContent>
              </DogCard>
            </div>

            <div className="animation" data-aos="fade-left">
              <DogCard>
                <Icon className="fa fa-paw" aria-hidden="true" />{" "}
                <DogContent>
                  <h3>Quero Ajudar</h3>
                  <CallToActionText>
                    A sua ajuda é muito importante.
                  </CallToActionText>
                </DogContent>
              </DogCard>
            </div>
          </DogsContainer>
        </DivOpacity>
      </div>
    </HomePage>
  );
};

export default Home;
