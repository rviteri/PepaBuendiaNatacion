import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';


export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <section className="section-footer">
      <div className="section-content footer-container">
        <div className="footer-primary-container">
          <div className="footer-logo">
            <Link to="/cursos" className="footer-logo-link">
                {t("hablemos_espanol")}
            </Link>
          </div>
        </div>
        <div className="footer-secondary-container">
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/cursos" className="footer-link">
                  {t("cursos")}
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/inscripcion" className="footer-link">
                  {t("inscripcion")}
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/contactame" className="footer-link">
                  {t("contactame")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
