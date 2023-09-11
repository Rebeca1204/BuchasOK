import React from "react";
// import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import { Formik } from "formik";
import Button from "components/atoms/Button";
import { Checkbox, Input } from "formik-antd";
import ImageContato from "draws/ImageContato.svg";
import Callout, { CalloutBody, CalloutMedia } from "components/atoms/Callout";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import { Link } from "react-router-dom";
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Home = () => {
  const Image = styled.img`
    width: 100%;
    max-height: 400px;
    margin: 8px;
  `;
  const Root = styled.div`
    line-height: 2rem;

    & button {
      margin-top: 12px;
    }
  `;
  return (
    <>
      <Hero image="https://images.pexels.com/photos/6720550/pexels-photo-6720550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <Heading>
          <h1>Ligue para mim</h1>
        </Heading>
        <ul>
          Preencha o formulário abaixo e entraremos em contato o mais rápido
          possível.
        </ul>
        <Link to="/contato">
          <Button color="primary">Enviar mensagem</Button>
        </Link>
      </Hero>
      <Section>
        <Root>
          <Callout>
            <CalloutMedia>
              <Image src={ImageContato} alt="Imagem form" />
            </CalloutMedia>
            <CalloutBody>
              <Formik
                initialValues={{ firstName: "", lastName: "", email: "" }}
                //   validationSchema={}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit}>
                    <Grid md={2}>
                      <span>
                        <label htmlFor="name">Nome</label>
                        <Input
                          id="name"
                          type="text"
                          addonAfter={<UserOutlined />}
                          placeholder="Seu nome"
                          {...formik.getFieldProps("name")}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div>{formik.errors.name}</div>
                        ) : null}
                      </span>
                      <span>
                        <label htmlFor="telefone">Telefone</label>
                        <Input
                          id="telefone"
                          type="telefone"
                          addonAfter={<PhoneOutlined />}
                          placeholder="Seu telefone"
                          {...formik.getFieldProps("telefone")}
                        />
                        {formik.touched.telefone && formik.errors.telefone ? (
                          <div>{formik.errors.telefone}</div>
                        ) : null}
                      </span>
                    </Grid>

                    <label htmlFor="contact">
                      Melhor data e horário para contato
                    </label>
                    <TextArea
                      autoSize
                      id="contact"
                      placeholder="Informe qual o melhor momento para que nosso atendente possa contatá-lo"
                      {...formik.getFieldProps("contact")}
                    />
                    {formik.touched.contact && formik.errors.contact ? (
                      <div>{formik.errors.contact}</div>
                    ) : null}
                    <label htmlFor="pref">Preferências</label>
                    <br />
                    <Checkbox name="pref">
                      Desejo ser contatado pelo WhatsApp
                    </Checkbox>
                    <br />

                    <Button color="danger" type="submit">
                      Enviar
                    </Button>
                  </form>
                )}
              </Formik>
            </CalloutBody>
          </Callout>
        </Root>
      </Section>

      <Footer />
    </>
  );
};

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
