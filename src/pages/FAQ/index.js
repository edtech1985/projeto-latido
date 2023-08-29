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
    // {
    //   question: "1. Os aparelhos têm garantia?",
    //   answer:
    //     "1 Ano de garantia Apple para os novos e 3 meses de garantia pela loja os semi-novos",
    // },
    // {
    //   question: "2. Quais as formas de pagamento?",
    //   answer:
    //     "Aceitamos pagamento no cartão em até 12x, via PIX e transferência bancária.",
    // },
    // {
    //   question: "3. Qual o endereço da loja?",
    //   answer: "Zona Norte de Porto Alegre, mas enviamos para todo Brasil.",
    // },
    // {
    //   question: "4. Qual o horário de atendimento?",
    //   answer: "Segunda a sábado: 10:00 - 20:00",
    // },
    // {
    //   question: "5. Trabalham somente com venda de aparelhos?",
    //   answer:
    //     "Trabalhamos com a venda de aparelhos novos e seminovos. Relógios e fones de ouvido.",
    // },
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
