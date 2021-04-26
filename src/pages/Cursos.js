import React, { useState, useEffect } from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import HeroBanner from './../components/HeroBanner';
import PriceColumn from './../components/PriceColumn';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown'

export default function Cursos() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header whiteStyle={true} transparent={true}></Header>
      <HeroBanner
        title={t("cursos_hero_title")}
        verticalAlignment="bottom"
        horizontalAlignment="left"
        hasBigTitle={true}
        withBottomMargin={false}
        imageUrl="/images/bg/background_cursos.jpg"
        backgroundYPosition="20%"></HeroBanner>
      <section className="section-course-descriptions">
        <div className="section-content course-descriptions-container">
          <div className="course-description-block">
            <h2 className="course-description-block__title">
              {t("intermediate_course_title")}
            </h2>
            <ul className="course-description-block__list">
              <li className="course-description-block__list-item">
                {t("intermediate_course_item_1")}
              </li>
              <li className="course-description-block__list-item">
                {t("intermediate_course_item_2")}
              </li>
              <li className="course-description-block__list-item">
                <strong>{t("intermediate_course_item_3")}</strong>
              </li>
              <li className="course-description-block__list-item">
                {t("intermediate_course_item_4")}
              </li>
              <li className="course-description-block__list-item">
                {t("intermediate_course_item_5")}
              </li>
              <li className="course-description-block__list-item">
                {t("intermediate_course_item_6")}
              </li>
              <li className="course-description-block__list-item">
                {t("intermediate_course_item_7")}
              </li>
              <li className="course-description-block__list-item">
                <strong>{t("intermediate_course_item_8")}</strong>
              </li>
            </ul>
          </div>
          <div className="course-description-block">
            <h2 className="course-description-block__title">
              {t("advanced_course_title")}
            </h2>
            <ul className="course-description-block__list">
              <li className="course-description-block__list-item">
                {t("advanced_course_item_1")}
              </li>
              <li className="course-description-block__list-item">
                {t("advanced_course_item_2")}
              </li>
              <li className="course-description-block__list-item">
                <strong>{t("advanced_course_item_3")}</strong>
              </li>
              <li className="course-description-block__list-item">
                {t("advanced_course_item_4")}
              </li>
              <li className="course-description-block__list-item">
                {t("advanced_course_item_5")}
              </li>
              <li className="course-description-block__list-item">
                {t("advanced_course_item_6")}
              </li>
              <li className="course-description-block__list-item">
                {t("advanced_course_item_7")}
              </li>
              <li className="course-description-block__list-item">
                <strong>{t("advanced_course_item_8")}</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-prices">
        <div className="section-content prices-container">
          <h1 className="prices__title">{t("prices")}</h1>
          <div className="prices__price-grid">
            <div className="prices__price-grid-item">
              <PriceColumn
                price={t("student_price")}
                priceTierTitle={t("students")}
                priceTier="student"
                markdownText={t("student_price_description")}></PriceColumn>
            </div>
            <div className="prices__price-grid-item">
              <PriceColumn
                price={t("general_public_price")}
                priceTierTitle={t("general_public")}
                priceTier="general"
                markdownText={t("general_public_price_description")}></PriceColumn>
            </div>
          </div>
        </div>
      </section>
      <section class="section-course-info">
        <div class="section-content 5">
          <h2 class="course-info__title">
            {t("course_info_title")}
          </h2>
          <div class="course-info__text">
            <ReactMarkdown>
              {t("course_info_text")}
            </ReactMarkdown>
          </div>
          <h2 class="course-info__title">
            {t("course_objective_title")}
          </h2>
          <div class="course-info__text">
            <ReactMarkdown>
              {t("course_objective_text")}
            </ReactMarkdown>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
