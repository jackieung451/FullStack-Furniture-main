import React, { useState } from "react";
// import { IoMdArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
import styled from "styled-components/macro";
// import HomeOne from "../images/img7.jpg";
// import HomeTwo from "../images/img2.jpg";
// import HomeThree from "../images/img4.jpg";
import HistoryOne from "../images/img51.png";
import HomeTwo from "../images/img84.jpg";
import HistoryTwo from "../images/img52.jpeg";
import HistoryThree from "../images/img54.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import IconBanner from "../images/history-long.png";
// import "../styles.css";
import i18n from "../translations/i18n";

const Section = styled.section`
  width: 100%;
  height: 100%;
  ${"" /* padding-top: 20rem; */}

  @media screen and (min-width: 1401px) {
    padding-top: 14rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    padding-top: 10rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 8rem;
  }

  ${
    "" /* @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 5rem;
  } */
  }
  @media screen and (max-width: 540px) {
    padding-top: 1.5rem;
  }

  @media screen and (max-width: 360px) {
    padding-top: 0rem;
  }

  ${
    "" /* @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 0rem;
  } */
  }

  ${
    "" /* @media screen and (max-width: 768px) {
    padding-top: 10rem;
  } */
  }

  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
`;

const Banner = styled.div`
  ${
    "" /* height: 25vh;
  width: 100vw;
  margin-bottom: 0rem; */
  }
  ${"" /* max-height: 7rem; */}
  min-width: 20rem;
  ${"" /* margin-top: 0rem; */}
  padding-top: 2rem;
  margin-bottom: 0rem;

  ${
    "" /* @media screen and (max-width: 768px) {
    padding-bottom: 0rem;
  } */
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 0rem;
  }

  @media screen and (max-width: 360px) {
    margin-bottom: 0rem;
    padding-bottom: 0rem;
  }

  img {
    position: absolute;
    height: 34.5vh;
    width: 100vw;
    object-fit: cover;

    @media screen and (min-width: 1024px) {
      height: 32.5vh;
    }

    @media screen and (max-width: 768px) {
      height: 28.5vh;
    }

    @media screen and (min-width: 361px) (max-width: 540px) {
      height: 20.5vh;
    }
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


img{
  ${"" /* margin-top: 6.75rem; */}
  ${"" /* max-height: 7rem; */}
  z-index: 100000;
  height: 55vh;
    width: 100vw;
    object-fit: contain;
    padding-top: 3rem;

    @media screen and (min-width: 1024px) {
      padding-top: 5rem;
      ${"" /* padding-bottom: 4.5rem; */}
    }
    @media screen and (max-width: 768px) {
      padding-top: 0rem;
  }

}

h1{
   font-size: clamp(3rem, 8vw, 2rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  @media screen and (max-width: 375px) {
      ${
        "" /* padding-left: 4rem;
      padding-right: 4rem; */
      }
    }
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

// const Heading = styled.div`
//   font-size: 1.5rem;
//   ${"" /* padding: 2rem 1rem; */}
//   margin-bottom: 40px;

//   h1 {
//     display: flex;
//     justify-content: center;
//     padding: 1rem 0 0 0;
//   }

//   @media screen and (max-width: 768px) {
//     text-align: start;
//   }
// `;
const InfoRow = styled.div`
  ${
    "" /* display: flex;
  flex-direction: row; */
  }
  ${"" /* padding: 1rem 0rem; */}
  justify-content: center;
  margin: 0 200px 0 200px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem 0rem 1rem;
  min-width: 260px;
  ${"" /* min-height: 550px; */}
  height: 100%;

  h2 {
    padding: 6rem 0 0 0;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: 400;
    color: #fff;
  }
  p {
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    ${"" /* padding-right: 5rem; */}
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  @media screen and (max-width: 375px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-right: 2rem;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-right: 7rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  text-content: center;
  padding: 0 0 2rem 0;
  flex-wrap: wrap;
  ${
    "" /* @media screen and (max-width: 280px) {
    padding: 0 0 0rem 0;
  } */
  }
`;

const ImageWrap = styled.div`
  ${"" /* overflow: hidden; */}
  ${"" /* box-shadow: 0px 2px 8px 0px var(--clr-gray-light); */}
  ${"" /* background-color: white; */}
  ${
    "" /* text-align: center;
  border-radius: 1rem;
  position: relative;
  width: 260px;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem; */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: contain;
  ${
    "" /* margin-bottom: 0.5rem;
  margin-top: 5rem; */
  }
  @media screen and (max-width: 375px) {
    padding-right: 2rem;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-right: 7rem;
  }
`;

/* @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    ${"" /* flex-direction: column; */
/* justify-content: center; */

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   max-width: 600px;
//   max-height: 400px;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;
// const InfoLink = styled(Link)`
// display: flex;
// align-items: center;
// text-decoration: none;
// color: #000d1a;
// width: 140px;
// transition: 0.3s

// &:hover {
//   transform: translateY(-2px)
// };`;
// const Arrow = styled(IoMdArrowForward)`
//   margin-left: 10px;
// `;

const HistoryBackground = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Banner>
        <img src={HomeTwo} />
        <HeroContent>
          <h1>{t("history")}</h1>
          <img src={IconBanner} />
        </HeroContent>
      </Banner>
      <Section>
        <Container>
          {/* <Heading> */}
          {/* <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            Todo lo que necesita para el hogar
          </h1> */}
          {/* </Heading> */}
          <InfoRow>
            <InfoWrap
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              {/* <Image src={HomeOne} alt="home" /> */}
              <h2>
                <strong>{t("historyheading")}</strong>
              </h2>
              <p>{t("history1")}</p>
              <br />

              <p>{t("history2")}</p>
              <br />

              <p>{t("history3")}</p>
            </InfoWrap>
            <ImageContainer>
              <ImageWrap>
                <Image src={HistoryOne} alt="history" />
              </ImageWrap>
              <ImageWrap>
                <Image src={HistoryTwo} alt="history" />
              </ImageWrap>
              <ImageWrap>
                <Image src={HistoryThree} alt="history" />
              </ImageWrap>
            </ImageContainer>
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

export default HistoryBackground;
