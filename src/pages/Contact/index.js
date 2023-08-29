import React from "react";
import {
  Container,
  Titulo,
  IconesContato,
  ItemContato,
  DivOpacity,
  Text,
} from "./Contact";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <DivOpacity>
        <Titulo>Contatos</Titulo>
        <Text>
          Entre em contato e tire todas suas dúvidas. Uma decisão bem informada
          resulta em uma experiência maravilhosa e duradoura com o seu novo
          melhor amigo.
        </Text>
        <IconesContato>
          <ItemContato>
            <a
              href="https://www.instagram.com/projeto_latido/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projeto latido Instagram"
            >
              <FaInstagram size={40} color="#E1306C" />
              <span>Instagram</span>
            </a>
          </ItemContato>
          <ItemContato>
            <a
              href="https://api.whatsapp.com/send?phone=555192002595"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Projeto latido Whatsapp 1"
            >
              <FaWhatsapp size={40} color="#25D366" />
              <span>Whatsapp</span>
            </a>
          </ItemContato>
        </IconesContato>
      </DivOpacity>
    </Container>
  );
}
