import React from "react";
// import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import { Formik } from "formik";
import Button from "components/atoms/Button";
import { Input } from "formik-antd";
import ImageForm from "draws/ImageForm.svg";
import Callout, { CalloutBody, CalloutMedia } from "components/atoms/Callout";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import {
  FormOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { TextArea } = Input;

const Home = () => {
  const Image = styled.img`
    width: 100%;
    max-height: 400px;
  `;
  const Root = styled.div`
    line-height: 1.6rem;

    & button {
      margin-top: 16px;
    }
  `;
  return (
    <>
      <Hero image="https://images.pexels.com/photos/6720550/pexels-photo-6720550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <Heading>
          <h1>Fale conosco</h1>
        </Heading>
        <ul>
          Gostariamos de ouví-lo, então envie nos uma mensagem preenchendo o
          formulário abaixo e retornaremos o mais rápido possível.
        </ul>
        <Link to="/meLigue">
          <Button color="primary">Quero que entrem em contato comigo</Button>
        </Link>
      </Hero>
      <Section>
        <Root>
          <Callout>
            <CalloutMedia>
              <Image src={ImageForm} alt="Imagem form" />
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
                        <label htmlFor="email">Email</label>
                        <Input
                          id="email"
                          type="email"
                          addonAfter={<MailOutlined />}
                          placeholder="Seu email"
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div>{formik.errors.email}</div>
                        ) : null}
                      </span>
                    </Grid>
                    <Grid md={2}>
                      <span>
                        <label htmlFor="telefone">Telefone</label>
                        <Input
                          id="telefone"
                          addonAfter={<PhoneOutlined />}
                          type="telefone"
                          placeholder="Seu telefone"
                          {...formik.getFieldProps("telefone")}
                        />
                        {formik.touched.telefone && formik.errors.telefone ? (
                          <div>{formik.errors.telefone}</div>
                        ) : null}
                      </span>
                      <span></span>
                    </Grid>

                    <label htmlFor="assunto">Assunto</label>
                    <Input
                      id="assunto"
                      addonAfter={<FormOutlined />}
                      placeholder="Informe qual o assunto de interesse"
                      type="text"
                      {...formik.getFieldProps("assunto")}
                    />
                    {formik.touched.assunto && formik.errors.assunto ? (
                      <div>{formik.errors.assunto}</div>
                    ) : null}

                    <label htmlFor="msg">Mensagem</label>
                    <TextArea
                      id="msg"
                      autoSize
                      placeholder="Descreva-nos com detalhes o motivo do seu contato"
                      {...formik.getFieldProps("msg")}
                    />
                    {formik.touched.msg && formik.errors.msg ? (
                      <div>{formik.errors.msg}</div>
                    ) : null}
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
