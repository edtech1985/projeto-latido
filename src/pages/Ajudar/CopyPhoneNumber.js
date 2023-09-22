import React, { useState } from "react";
import styled from "styled-components";

function CopyPhoneNumber() {
  const phoneNumber = "18996948407"; // Número de telefone que deseja copiar
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    // Cria um elemento de input temporário para copiar o texto
    const tempInput = document.createElement("input");
    tempInput.value = phoneNumber;

    // Adiciona o elemento temporário à página
    document.body.appendChild(tempInput);

    // Seleciona o texto dentro do elemento de input
    tempInput.select();

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);

    // Define o estado para indicar que o número foi copiado
    setCopied(true);
  };

  const StyledPix = styled.button`
    background-color: var(--blue);
    border: 3px solid transparent;
    border-radius: 10px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin-top: 1rem;
    cursor: pointer;
    transition: background-color 1s ease-in-out, 1s ease-out;
    
    &:hover {
      color: var(--yellow);
      background-color: var(--brown);
      border: 3px solid var(--yellow);
      box-shadow: 0px 0px 12px 12px var(--yellow);
    }
  `;

  return (
    <div>
      <StyledPix onClick={copyToClipboard}>
        {copied ? "Número Copiado!" : "Copiar Número de Telefone chave PIX"}
      </StyledPix>
    </div>
  );
}

export default CopyPhoneNumber;
