import React, { useState, useEffect } from "react";
import {
  GridContainer,
  GridDescription,
  GridImage,
  GridItem,
  GridSection,
  GridTitle,
  PageContainer,
  Subtitle2,
  Text,
  TextContainer,
  Title,
} from "./Adote";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ModalSubTitle,
  ModalTitle,
  ProductImage,
} from "../../components/Modal/Modal";
import { WhatsAppButton } from "../../components/WhatsAppButton";

import AdoteData from "../../db/Adote.json";

import { getImagePath } from "./imagePathUtil";

import AOS from "aos";
import "aos/dist/aos.css";

const Adote = () => {
  const [selectedDog, setSelectedDog] = useState(null);

  const openModal = (dog) => {
    setSelectedDog(dog);
  };

  const closeModal = () => {
    setSelectedDog(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <PageContainer>
      <GridSection>
        <div className="animation" data-aos="zoom-in">
          <Title>À ESPERA DE UM LAR</Title>
          <Subtitle2>
            Adotar um animal é um ato de amor. Todos os nossos protegidos são
            castrados, vacinados, vermifugados e saudáveis.
          </Subtitle2>
          <Text>
            Escolha o seu e prepare-se para conhecer uma relação de amor
            incondicional e companheirismo que durará muitos anos.
          </Text>
        </div>

        <div className="animation" data-aos="fade-up">
          <GridContainer>
            {AdoteData.map((dog) => (
              <GridItem key={dog.nome} onClick={() => openModal(dog)}>
                <GridImage src={getImagePath(dog.img_url)} alt={dog.nome} />
                <GridDescription>
                  <GridTitle>{dog.nome}</GridTitle>
                  <Text>{dog.tamanho2}</Text>
                </GridDescription>
              </GridItem>
            ))}
          </GridContainer>
        </div>
        <TextContainer>
          <Text>Dê um lar para nossos amiguinhos e faça uma vida feliz</Text>
        </TextContainer>

        {selectedDog && (
          <ModalOverlay onClick={handleOutsideClick}>
            <ModalContent>
              <CloseButton onClick={closeModal}>Fechar</CloseButton>
              <ModalTitle>{selectedDog.nome}</ModalTitle>
              <ProductImage
                src={getImagePath(selectedDog.img_url)}
                alt={selectedDog.nome}
                aria-label={selectedDog.nome}
              />
              <ModalSubTitle>{selectedDog.descricao}</ModalSubTitle>

              <WhatsAppButton>
                <a
                  href={`https://api.whatsapp.com/send?phone=5551992002595&text=Ol%C3%A1%Projeto%20Latido,%20estou%20interessado(a)%20no%20${encodeURIComponent(
                    selectedDog.nome
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Projeto Latidos Whatsapp"
                >
                  Contato via WhatsApp
                </a>
              </WhatsAppButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </GridSection>

      {""}
      {""}
    </PageContainer>
  );
};

export default Adote;
