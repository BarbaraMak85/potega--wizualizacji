import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ButtonRed/ButtonRed";
import Titles from "../../components/Titles/Titles";
import Navbar from "../../components/Navbar/Navbar";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";
import style from "./ContactPage.module.scss";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Formik, Form, ErrorMessage } from "formik";

const formValidationSchema = Yup.object().shape({
  nameAndSurname: Yup.string().required("Proszę o podanie imienia i nazwiska."),
  email: Yup.string()
    .email("Podany adres e-mail nie jest poprawny.")
    .required("Proszę o podanie adresu e-mail."),
  subject: Yup.string().required("Proszę o podanie tematu."),
  message: Yup.string().required("Proszę o wpisanie treści wiadomości. "),
  acceptTerms: Yup.boolean().oneOf(
    [true],
    "Musisz wyrazić zgodę na przetwarzanie danych."
  ),
});

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Logo />
      <div className={style.title}>
        <Titles>Skontaktuj się ze mną</Titles>
      </div>

      <Formik
        initialValues={{
          nameAndSurname: "",
          email: "",
          subject: "",
          message: "",
          acceptTerms: false,
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              values,
              process.env.REACT_APP_USER_ID
            )
            .then(
              function (response) {
                alert("Wiadomość została wysłana");
              },
              function (error) {
                alert(
                  "Przepraszamy... coś poszło nie tak, proszę spróbować jeszcze raz"
                );
              }
            );

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form className={style.form}>
            <div>
              <div className={style.formName}>
                <label className={style.contactLabel} for="name_input">
                  Imię i Nazwisko
                </label>
                <input
                  className={style.formInput}
                  type="text"
                  placeholder="imię i nazwisko"
                  name="nameAndSurname"
                  value={values.nameAndSurname}
                  onChange={handleChange}
                />
                <div className={style.error__message}>
                  <ErrorMessage name="nameAndSurname" />
                </div>
              </div>

              <div className={style.formEmail}>
                <label className={style.contactLabel}>E-mail</label>

                <input
                  className={style.formInput}
                  type="text"
                  name="email"
                  placeholder="e-mail"
                  value={values.email}
                  onChange={handleChange}
                />
                <div className={style.error__message}>
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className={style.formTopic}>
                  <label className={style.contactLabel}>Temat</label>
                  <input
                    className={style.formInput}
                    type="text"
                    placeholder="temat"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                  />
                  <div className={style.error__message}>
                    <ErrorMessage name="subject" />
                  </div>
                </div>

                <div className={style.formText}>
                  <label className={style.contactLabel}>Treść wiadomości</label>
                  <textarea
                    className={style.formContent}
                    type="text"
                    placeholder="wiadomość"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                  <div className={style.error__message}>
                    <ErrorMessage name="message" />
                  </div>
                </div>
                <div>
                  <div className={style.formRodo}>
                    <input
                      className={style.formCheckBox}
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={handleChange}
                    />

                    <p className={style.formLink}>
                      Wyrażam zgodę na przetwarzanie danych osobowych przez
                      Potęgę Wizualizacji w celu przesłania oferty handlowej i
                      przesyłanie informacji drogą elektroniczną
                    </p>
                  </div>
                  <div className={style.error__message}>
                    <ErrorMessage name="acceptTerms" />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.formButton}>
              <Button>Wyślij</Button>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
};

export default ContactPage;
