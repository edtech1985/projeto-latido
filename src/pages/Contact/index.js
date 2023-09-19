import React, { useEffect } from "react";
import {
  Container,
  Titulo,
  IconesContato,
  ItemContato,
  DivOpacity,
  Text,
} from "./Contact";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <Container>
      <div className="animation" data-aos="fade-up">
        <DivOpacity>
          <Titulo>Contatos</Titulo>
          <Text>
            Entre em contato e tire todas suas dúvidas. Uma decisão bem
            informada resulta em uma experiência maravilhosa e duradoura com o
            seu novo melhor amigo.
          </Text>
          <IconesContato>
            <div className="animation" data-aos="fade-right">
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
            </div>

            <div className="animation" data-aos="fade-left">
              <ItemContato>
                <a
                  href="https://www.facebook.com/projetolatidopp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Projeto Latido Facebook"
                >
                  <FaFacebook size={40} color="blue" />
                  <span>Facebook</span>
                </a>
              </ItemContato>
            </div>
            <div className="animation" data-aos="fade-up">
              <ItemContato>
                <a
                  href="https://api.whatsapp.com/send?phone=5518996948407"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Projeto latido Whatsapp 1"
                >
                  <FaWhatsapp size={40} color="#25D366" />
                  <span>Whatsapp</span>
                </a>
              </ItemContato>
            </div>
          </IconesContato>
        </DivOpacity>
      </div>
    </Container>
  );
}
