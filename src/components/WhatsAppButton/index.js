import styled from "styled-components";

export const WhatsAppButton = styled.button`
  background-color: #25d366; /* Cor do WhatsApp */
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: background-color 1s ease-in-out, 1s ease-out;
  border: 2px solid transparent;

  &:hover {
    background-color: var(--light-orange);
    color: var(--blue);
    border: 2px solid var(--blue);
    box-shadow: 0px 0px 6px 6px var(--dark-orange);
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: var(--blue);
    }
  }
`;
