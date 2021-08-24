import React from "react";
import styled from "styled-components/macro";
import HomeThree from "../images/img94.jpg";
import HomeTwo from "../images/img6.jpg";
import HomeOne from "../images/img5.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 12rem 1rem 0rem 1rem;
  text-align: center;
  ${"" /* vertical-align: center; */}

  @media screen and (min-width: 1024px) {
    padding: 20rem 1rem 0rem 1rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 12rem 1rem 0rem 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 12rem 1rem 0rem 1rem;
  }
  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
`;
const Banner = styled.div`
  max-height: 1rem;
  width: 100vw;

  img {
    position: absolute;
    height: 45vh;
    width: 100vw;
    object-fit: cover;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc{100% - 100px};
  color: #fff;
;

h1{
   font-size: clamp(5rem, 8vw, 2rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  ${"" /* margin-bottom: 0.8rem; */}
  ${
    "" /* dislay: flex;
  align-items: center; */
  }
}`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  ${"" /* padding: 2rem 1rem; */}
`;
const Heading = styled.div`
  font-size: 1.5rem;
  ${"" /* padding: 2rem 1rem; */}
  margin-bottom: 40px;

  h1 {
    display: flex;
    justify-content: center;
    padding: 5rem 0 0 0;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    justify-center: center;
    padding-left: 1rem;
  }
`;
const Image = styled.img`
  ${
    "" /* display: flex;
  justify-content: center; */
  }
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  ${"" /* padding: 1rem 0rem; */}
  justify-content: space-around;
  margin: 0 200px 0 200px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;
  min-height: 550px;
  height: 100%;
  margin-bottom: 2rem;

  h3,
  ul,
  p {
    color: #fff;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: 350;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    min-width: 500px;
  }
  @media screen and (max-width: 500px) {
    min-width: 300px;
    padding-right: 2rem;
  }
  @media screen and (max-width: 320px) {
    min-width: 280px;
    padding-right: 5.5rem;
    padding-left: 0rem;
  }
  @media screen and (max-width: 280px) {
    min-width: 280px;
    padding-right: 7.5rem;
    padding-left: 0rem;
  }
`;

const IndustrialDesign = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "#121212",
      }}
    >
      <Banner>
        <img src={HomeTwo} />
        <HeroContent>
          <h1>Blog</h1>
        </HeroContent>
      </Banner>
      <Section>
        <Container>
          <Heading>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <strong>{t("industrial")}</strong>
            </h1>
          </Heading>
          <InfoRow>
            <InfoWrap
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              {/* <Image src={HomeOne} alt="home" /> */}

              <Image src={HomeThree} alt="home" />

              <p>{t("industrial1")}</p>
              <br />
              <Image src={HomeTwo} alt="home" />
              <br />
              <p>{t("industrial2")}</p>
              <br />
              <h3>1. {t("industrial3")}</h3>
              <br />
              <p>{t("industrial4")}</p>
              <br />
              <ul>
                <li>{t("industrial5")}</li>
                <li>{t("industrial6")}</li>
                <li>{t("industrial7")}</li>
                <li>{t("industrial8")}</li>
                <li>{t("industrial9")}</li>
              </ul>
              <br />
              <Image src={HomeOne} alt="home" />
              <br />
              <h3>2. {t("industrial10")}</h3>
              <br />
              <p>{t("industrial11")}</p>
              <p>{t("industrial2")}</p>

              {/* <h3>
              2619 N Broadway <br /> Los Angeles, California 90031
            </h3>
            <br />
            <br />
            <br />
            <br />
            <h3>
              (323) 247-9094 <br /> sales@lanayaritfurniture.com
            </h3> */}
              {/* <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink> */}
              {/* <Image src={HomeThree} alt="home" />
            <h2>Comedores</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow /> */}
              {/* </InfoLink> */}
            </InfoWrap>
            {/* <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          > */}
            {/* <Image
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.034848151507!2d-118.22374474556887!3d34.07569910088133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe4935319e285!2sLa%20Nayarit%20Furniture!5e0!3m2!1sen!2sus!4v1625958138842!5m2!1sen!2sus"
              width="600"
              height="450"
              // style="border:0;"
              // allowfullscreen=""
              // loading="lazy"
            /> */}
            {/* alt="home"
              css={`
                // margin-top: 120px;
                @media screen and (max-width: 768px) {
                  margin-top: 0px;
                }
              `}
            /> */}
            {/* <h2>Recamaras</h2>
            <InfoLink to="/homes">
              <p>Ver Mas</p>
              <Arrow />
            </InfoLink> */}
            {/* </InfoWrap> */}
          </InfoRow>
        </Container>
      </Section>
    </div>
  );
};

export default IndustrialDesign;
