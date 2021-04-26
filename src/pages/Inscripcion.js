import React, { useState, useEffect } from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import HeroBanner from './../components/HeroBanner';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

export default function Inscripcion() {
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

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_INSCRIPTION_EMAILJS_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
    .then((result) => {
        setShowSuccessMessage(true);
    }, (error) => {
        setBlockForm(false);
        setShowErrorMessage(true);
    });
  }

  return (
    <div>
      <Header whiteStyle={true} transparent={true}></Header>
      <HeroBanner
        title={t("inscription")}
        verticalAlignment="middle"
        horizontalAlignment="center"
        hasBigTitle={true}
        withBottomMargin={true}
        imageUrl="/images/bg/background_inscription.jpg"
        backgroundYPosition="0%"
        isShortHero={true}></HeroBanner>
      <section className="section-inscription">
        <div className="section-content">
          <div className="inscription-container">
            <p>{t("inscription_form_title")}</p>
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
              <div className="branded-input-container">
                <label>{t("name")+' *'}</label>
                <input type="text" name="name" required />
              </div>
              <div className="branded-input-container">
                <label>{t("lastname")+' *'}</label>
                <input type="text" name="lastname" required />
              </div>
              <div className="branded-input-container">
                <label>{t("email")+' *'}</label>
                <input type="email" name="email" required />
              </div>
              <div className="branded-input-container">
                <label>{t("inscription_course_question")+' *'}</label>
                <select name="level" required>
                  <option selected value="intermedio">{t("intermediate_level")}</option>
                  <option value="avanzado">{t("advanced_level")}</option>
                </select>
              </div>
              <div className="branded-input-container">
                <label>{t("inscription_spanish_learning_question")+' *'}</label>
                <textarea name="message" required />
              </div>
              <div className="branded-radio-container">
                <p>{t("inscription_are_you_student_question")}</p>
                <label>
                  <input type="radio" name="is_student" value="si" required/>
                  {t("yes")}
                </label>
                <label>
                  <input type="radio" name="is_student" value="no" required/>
                  {t("no")}
                </label>
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
