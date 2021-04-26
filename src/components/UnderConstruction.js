import React from 'react';
import { useTranslation } from 'react-i18next';
import { ConstructSharp } from 'react-ionicons';

export default function UnderConstruction() {
  const { t, i18n } = useTranslation();

  return (
    <section className="section-under-construction">
      <div className="section-content under-construction-content">
        <div className="under-construction-text">
          <ConstructSharp
            color={'#00000'} 
            title={"under_construction"}
            height="40px"
            width="40px"
          />
          <h1>{t("en_construccion")}</h1>
        </div>
        <img className="under-construction-picture" src="images/under_construction.jpeg"></img>
      </div>
    </section>
  )
}
