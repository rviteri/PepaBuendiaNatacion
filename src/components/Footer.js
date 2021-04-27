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
            <Link to="/clases" className="footer-logo-link">
                {t("pepa_buendia_natacion")}
            </Link>
          </div>
        </div>
        <div className="footer-secondary-container">
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/clases" className="footer-link">
                  {t("clases")}
              </Link>
            </li>
            {/* <li className="footer-list-item">
              <Link to="/inscripcion" className="footer-link">
                  {t("inscripcion")}
              </Link>
            </li> */}
            <li className="footer-list-item">
              <Link to="/nosotros" className="footer-link">
                  {t("nosotros")}
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/contactanos" className="footer-link">
                  {t("contactanos")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
