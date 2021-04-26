import React, { useState, useEffect } from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export default function Contactame() {
  const { t, i18n } = useTranslation();
  const [blockForm, setBlockForm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  function sendEmail(e) {
    e.preventDefault();

    setBlockForm(true);

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_CONTACT_US_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
    .then((result) => {
        setShowSuccessMessage(true);
    }, (error) => {
        setBlockForm(false);
        setShowErrorMessage(true);
    });
  }

  return (
    <div>
      <Header whiteStyle={false} transparent={false}></Header>
      <section className="section-contact-us">
        <div className="section-content contact-us-container">
          <div className="contact-us__text">
            <h1>{t("contact_us_title")}</h1>
            <p>{t("contact_us_text")}</p>
          </div>
          <div className="contact-us__form">
            { showSuccessMessage &&
              <div className="contact-us__form-sent">
                {t("contact_form_sent")}
              </div>
            }
            { showErrorMessage &&
              <div className="contact-us__form-sent -error">
                {t("contact_form_sent_error")}
              </div>
            }
            <form className={`branded-form${blockForm ? " -blocked" : ""}`} onSubmit={sendEmail}>
              <div className="branded-form__multiple-input-row">
                <div className="branded-input-container">
                  <label>{t("name")+' *'}</label>
                  <input type="text" name="name" required />
                </div>
                <div className="branded-input-container">
                  <label>{t("lastname")+' *'}</label>
                  <input type="text" name="lastname" required />
                </div>
              </div>
              <div className="branded-form__single-row">
                <div className="branded-input-container">
                  <label>{t("email")+' *'}</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="branded-form__single-row">
                <div className="branded-input-container">
                  <label>{t("message")+' *'}</label>
                  <textarea name="message" required />
                </div>
              </div>
              <div className="branded-form__submit">
                <input type="submit" className="regular-button -secondary-style" value={t("send")} />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
