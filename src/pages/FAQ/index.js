import React, { useState } from "react";
import {
  Answer,
  DivOpacity,
  FAQSectionContainer,
  Question,
  Title,
} from "./FAQ";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. Como funciona o Projeto Latido?",
      answer:
        "O Projeto Latido é uma ONG que resgata cães de rua, abandonados e maus tratos, cuida desde o resgate até a reabilitação do animal. Após o resgate é feito um tratamento veterinário para recuperar a saúde e também um adestramento para recuperar o lado comportamental do animal. Ao final desse processo encaminhamos para adoção.",
    },
    {
      question: "2. Como o projeto se mantém?",
      answer:
        "O Projeto Latido se mantém através de doações. Ainda não há apoio de poder público.",
    },
    {
      question: "3. Como faço para adotar?",
      answer: "É feita uma triagem. Onde há uma entrevista onde é coletado os dados da família e após é feito um acompanhamento e adaptação do animal. Se a família não se adaptar com o animal, o mesmo é devolvido para o projeto. Sempre visando o bem estar do animal.",
    },
    {
      question: "4. Como começa o atendimento do Projeto Latido?",
      answer: "A partir de denúncias é verificado se o Projeto tem a capacidade de atender as necessidades desse animal e a partir disso ele entra no circuito de resgate.",
    },
    {
      question: "5. Atendem gatos?",
      answer:
        "Não, ataulmente não atendemos gatos. Apenas cães.",
    },
    {
      question: "6. Como faço para ajudar?",
      answer:
        "Nossa principal fonte de recursos é através de doações via PIX. Contudo, você pode ajudar de várias formas. Ajudando financeiramente, com doações, sendo voluntário, sendo lar temporário, apadrinhando um animal, divulgando o projeto, compartilhando as publicações, participando dos eventos, etc.",
    },
    {
      question: "7. Quais doações podem ser feitas?",
      answer:
        "Tudo que servir para os animais e seu manejo. Doações de ração, medicamentos, produtos de limpeza, produtos de higiene, roupinhas, cobertores, casinhas, etc.",
    },
  ];

  return (
    <FAQSectionContainer>
      <DivOpacity>
        <Title>Dúvidas Frequentes</Title>

        {faqData.map((item, index) => (
          <div key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              {item.question}
            </Question>
            <Answer isOpen={activeIndex === index}>{item.answer}</Answer>
          </div>
        ))}
      </DivOpacity>
    </FAQSectionContainer>
  );
};

export default FAQSection;
