import React from "react";
import styled from "styled-components";
import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import {
  FaPhone,
  FaBuilding,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>BUCHAS OK</h6>
          </Heading>
          <p>
            Somos especialistas na fabricação de peças para suspensão de
            veículos de pequeno, médio e grande porte. Com mais de 70 anos de
            experiência, a confiabilidade é o valor que mais prezamos.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
            <p>
              <IconContainer>
                <FaPhone />
              </IconContainer>
              (19) 3241-4484
            </p>

            <p>
              <IconContainer>
                <FaEnvelope />
              </IconContainer>
              contato@buchasok.com.br
            </p>

            <p>
              <IconContainer>
                <FaBuilding />
              </IconContainer>
              Eu in eu cupidatat enim laborum sunt voluptate labore consequat
              eiusmod sunt.
            </p>
          </Heading>
        </div>

        <div>
          <Heading>
            <h6>Redes sociais</h6>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.facebook.com/buchasok/"
              >
                <IconContainer>
                  <FaFacebook />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.instagram.com/buchasok/"
              >
                <IconContainer>
                  <FaInstagram />
                </IconContainer>
                Instagram
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="">
                <IconContainer>
                  <FaLinkedin />
                </IconContainer>
                Linkedin
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
