import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import HeroBanner from './../components/HeroBanner';
import InfoBlock from './../components/InfoBlock';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

function Home () {
    const { t, i18n } = useTranslation();

    let infoCursoContentBlock = (
        <div>
            <ul className="info-block-list">
                <li>{t("info_del_curso_item_1")}</li>
                <li>{t("info_del_curso_item_2")}</li>
                <li>{t("info_del_curso_item_3")}</li>
                <li>{t("info_del_curso_item_4")}</li>
                <li>{t("info_del_curso_item_5")}</li>
                <li>{t("info_del_curso_item_6")}</li>
            </ul>
            <Link to="/clases" className="regular-button -secondary-style">
              {t("mas_informacion")}
            </Link>
        </div>
    );

    let sobreMiContentBlock = (
        <p>{t("sobre_mi_texto")}</p>
    );

    return (
        <div>
            <Header whiteStyle={false} transparent={true}></Header>
            <HeroBanner
                title={t("home_hero_title")}
                subtitle={t("home_hero_subtitle")}
                buttonText={t("mas_informacion")}
                buttonUrl="/clases"
                verticalAlignment="bottom"
                horizontalAlignment="left"
                hasBigTitle={false}
                withBottomMargin={false}
                imageUrl="/images/bg/background_home.jpg"
                backgroundYPosition="90%"></HeroBanner>
            <section className="section-home-motto-and-intro">
                <div className="section-content section-content-motto-and-intro">
                    <div className="motto-container">
                        {t("home_motto")}
                    </div>
                    <div className="intro-container">
                        {t("home_intro")}
                    </div>
                </div>
            </section>
            <InfoBlock
                title={t("info_del_curso")}
                htmlContent={infoCursoContentBlock}
                pictureUrl="/images/info_clases.jpeg"></InfoBlock>
            <InfoBlock
                title={t("sobre_mi")}
                htmlContent={sobreMiContentBlock}
                pictureUrl="/images/sobre_mi.jpg"
                reversed={true}></InfoBlock>
            <HeroBanner
                title={t("nademos")}
                hasBigTitle={true}
                withBottomMargin={true}
                imageUrl="/images/bg/beach.jpg"
                isShortHero={true}
                notTitleHero={true}
                backgroundYPosition="90%"></HeroBanner>
            <Footer></Footer>
        </div>
    );
}

export default Home;