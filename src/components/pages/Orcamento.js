import React, { useRef } from "react";
// import PropTypes from "prop-types";
import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import { Formik } from "formik";
import { message } from "antd";
import emailjs from "@emailjs/browser";
import Button from "components/atoms/Button";
import { Input } from "formik-antd";
import ImageForm from "draws/ImageAgree.svg";
import Callout, { CalloutBody, CalloutMedia } from "components/atoms/Callout";
import styled from "styled-components";
import Grid from "components/atoms/Grid";
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import ImageOrcamento from "assets/ImageOrcamento.jpg";

const { TextArea } = Input;

const Orcamento = () => {
  const form = useRef();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Mensagem enviada com sucesso",
    });
  };

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
      <Hero image={ImageOrcamento}>
        <Heading>
          <h1>Orçamento</h1>
        </Heading>
      </Hero>
      <Section>
        <Root>
          <Callout>
            <CalloutMedia>
              <Image src={ImageForm} alt="Imagem form" />
            </CalloutMedia>
            <CalloutBody>
              {contextHolder}
              <Formik
                initialValues={{}}
                //   validationSchema={}
                onSubmit={(values, { resetForm }) => {
                  emailjs
                    .sendForm(
                      "service_gmail",
                      "contact_form",
                      form.current,
                      "iRjlpA0zW8mvYrr9V"
                    )
                    .then(
                      (result) => {
                        success();
                        console.log(result.text);
                      },
                      (error) => {
                        console.log(error.text);
                      }
                    );
                  resetForm();
                }}
              >
                {(formik) => (
                  <form ref={form} onSubmit={formik.handleSubmit}>
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

                    <label htmlFor="msg">Mensagem</label>
                    <TextArea
                      id="msg"
                      autoSize
                      placeholder="Descreva-nos com detalhes para quais produtos deseja orçamento"
                      {...formik.getFieldProps("msg")}
                    />
                    {formik.touched.msg && formik.errors.msg ? (
                      <div>{formik.errors.msg}</div>
                    ) : null}
                    <Button htmlType="submit" color="danger" type="submit">
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
export default Orcamento;
