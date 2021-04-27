import React from 'react'
import Header from './../components/Header';
import Footer from './../components/Footer';
import HeroBanner from './../components/HeroBanner';
import InfoBlock from './../components/InfoBlock';
import { useTranslation } from 'react-i18next';

export default function Nosotros() {
  const { t, i18n } = useTranslation();

  let pepaContentBlock = (
    <div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
    </div>
  );

  let paolaContentBlock = (
    <div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
    </div>
  );

  let magdalenaContentBlock = (
    <div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi</p>
    </div>
  );


  return (
    <div>
      <Header whiteStyle={false} transparent={true}></Header>
      <HeroBanner
          title={t("nosotros")}
          verticalAlignment="middle"
          horizontalAlignment="center"
          hasBigTitle={true}
          withBottomMargin={false}
          imageUrl="/images/bg/background_nosotros.jpg"
          backgroundYPosition="90%"></HeroBanner>
      <InfoBlock
          title={"Pepa Buendía"}
          htmlContent={pepaContentBlock}
          pictureUrl="/images/sobre_mi.jpg"></InfoBlock>
      <InfoBlock
          title={"Paola"}
          htmlContent={paolaContentBlock}
          pictureUrl="/images/empty-fe.jpeg"
          reversed={true}></InfoBlock>
      <InfoBlock
          title={"Magdalena"}
          htmlContent={magdalenaContentBlock}
          pictureUrl="/images/empty-fe.jpeg"
          reversed={false}></InfoBlock>
      <Footer></Footer>
    </div>
  )
}
