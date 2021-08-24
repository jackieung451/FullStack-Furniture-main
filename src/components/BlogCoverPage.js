import React from "react";
import { IoMdArrowForward } from "react-icons/io";
// import {  } from "react-router-dom";
import styled from "styled-components/macro";
import ImageOne from "../images/img91.jpg";
import HomeTwo from "../images/img84.jpg";
import ImageTwo from "../images/img92.jpg";
import ImageThree from "../images/img93.jpg";
import ImageFour from "../images/img94.jpg";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  NavLink,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Thanksgiving from "../pages/Thanksgiving";
import FengShui from "../pages/FengShui";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Section = styled.section`
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1024px) {
    margin-top: 12rem;
    ${"" /* padding-bottom: 5rem; */}
  }
  @media screen and (min-width: 769px) and (max-width: 1023px) {
    margin-top: 5rem;
  }

  @media screen and (max-width: 540px) {
    margin-top: 6rem;
  }
  @media screen and (max-width: 320px) {
    margin-top: 0rem;
  }
  @media screen and (max-width: 768px) {
    ${"" /* padding: 6rem 1rem 0rem 1rem; */}
    margin-top: 7rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }
  ${
    "" /* @media screen and (max-width: 280px) {
    padding: 1rem 0rem 0rem 0rem;
    margin-bottom: 0rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center; */
  }
  ${"" /* min-width: 280px; */}
    ${"" /* flex-wrap: wrap; */}
    ${"" /* overflow: hidden; */}
    ${"" /* margin-left: 1rem; */}
    ${"" /* margin-right: 1rem; */}
  ${"" /* } */}

  ${
    "" /* @media screen and (max-width: 768px) {
    padding: 5rem 0rem;
    margin-bottom: 1rem;
  } */
  }
  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
`;
const Container = styled.div`
  height: 100%;
  width: 100%;

  ${"" /* padding: 2rem 1rem; */}
`;
// const Heading = styled.div`
//   font-size: 1.5rem;
//   ${"" /* padding: 2rem 1rem; */}
//   margin-top: 0px;

//   h1 {
//     display: flex;
//     justify-content: center;
//     padding: 1rem 0 0 0;
//   }

//   @media screen and (max-width: 768px) {
//     text-align: start;
//   }
// `;

const Banner = styled.div`
  height: 25vh;
  width: 100vw;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    ${"" /* padding-bottom: 5rem; */}
  }
  @media screen and (max-width: 320px) {
    margin-bottom: 0rem;
  }

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
   font-size: clamp(3rem, 8vw, 2rem);
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

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  grid-template-rows: 500px;
  justify-content: center;
  ${"" /* flex-direction: column; */}
  margin: 0 100px 0 100px;
  padding: 10rem 0rem 0rem 0rem;

  ${
    "" /* @media screen and (min-width: 769px) {
    margin-bottom: 40rem;
  } */
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-template-rows: 100px;
    grid-gap: 0rem;
    object-fit: cover;
  }
  ${"" /* padding: 1rem 0rem; */}

  ${"" /* margin: 0 200px 0 200px; */}

  ${
    "" /* @media screen and (max-width: 768px) {
    flex-direction: column;
  } */
  }
`;
const InfoWrap = styled.div`
  padding: 0 0 5rem 0;

  @media screen and (max-width: 280px) {
    /* display: flex;
    flex-direction: column;
    grid-template-rows: 100px;
    grid-gap: 0rem; */
    display: flex;
    justify-content: center;

    ${"" /* max-width: 30px; */}
    padding: 0 10rem 0 10rem;

    object-fit: cover;
  }
  ${
    "" /* display: flex;
flex-direction: row;
justify-content: space-around;
margin-bottom: 0rem;
align-items: center; */
  }
  ${"" /* grid-template-columns: 1fr; */}
  ${"" /* padding: 10rem 10rem; */}
  ${"" /* margin-bottom: 10rem; */}
  ${"" /* min-height: 550px; */}
  ${"" /* height: 100%; */}
button {
    background: #53565a;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    ${"" /* transition: 0.3s; */}
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 40px;
    color: #fff;
    font-size: 20px;
    ${"" /* border-radius: 50px; */}

    &:hover {
      transform: translateY(-2px);
    }
    @media screen and (max-width: 280px) {
      display: flex;
      flex-direction: column;
      ${"" /* padding-right: 2rem; */}
      justify-content: center;
      text-align: center;
      padding-right: 5px;
      padding-left: 3px;
      margin-left: 40px;
      padding-bottom: 1.5rem;
    }
  }

  h2 {
    margin-bottom: 0.5rem;
    font-weight: 400;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    ${
      "" /* margin: 10rem 0 0 0;
    padding: 15rem 0 10rem 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center; */
    }
    display: grid;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 320px) {
    ${"" /* padding-right: 2rem; */}
    justify-content: center;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    ${"" /* padding-right: 2rem; */}
    justify-content: center;

    object-fit: contain;
    width: 90%;
    height: 90%;
    min-width: 250px;
    min-height: 200px;
    text-align: center;
    padding-right: 3px;
    padding-left: 0.5px;
    margin-left: 20px;
    padding-bottom: 1.5rem;
    ${
      "" /* padding-left: 4rem;
padding-right: 4rem; */
    }
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  ${
    "" /* @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  } */
  }
`;
/* const BoxOne = styled.div`
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
const BoxTwo = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  } ;
`;
const BoxThree = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  } ;
`;
const BoxFour = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  } ;
`; */

const Image = styled.img`
  width: 100%;
  height: 100%;

  max-width: 600px;
  max-height: 400px;

  object-fit: contain;
  margin-bottom: 0.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
    min-width: 300px;
    min-height: 200px;

    margin-top: 0rem;
    margin-bottom: 0rem;
    object-fit: contain;
  }
`;
/* const InfoLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
color: #000d1a;
width: 140px;
transition: 0.3s

&:hover {
  transform: translateY(-2px)
};`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 10px;
`; */

const BlogCoverPage = () => {
  let history = useHistory();
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
          <h1>{t("blog")}</h1>
        </HeroContent>
      </Banner>
      <Section>
        <Container>
          {/* <Heading>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              Todo lo que necesita para el hogar
            </h1>
          </Heading> */}
          <InfoRow>
            <InfoWrap
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image src={ImageOne} alt="home" />
              <h2>{t("thanksgiving")}</h2>
              {/* <NavLink to="../Thanksgiving">See More</NavLink>
              <Arrow /> */}
              <button
                onClick={() => {
                  history.push("/thanksgiving");
                }}
              >
                {/* <Route path="/Thanksgiving" component={Thanksgiving} />
              <Redirect exact from="/BlogCoverPage" to="/Thanksgiving" /> */}
                {/* <button onClick={() => history.pushState("/Thanksgiving")}> */}
                {t("view")}
                {/* <p>{t("view")}</p>
              <Arrow /> */}
              </button>
              {/* <Image src={HomeThree} alt="home" />
            <h2>Comedores</h2>
            <InfoLink to="/homes">
              <p>{t("view")}</p>
              <Arrow /> */}
              {/* </InfoLink> */}

              {/* </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          > */}
            </InfoWrap>
            <InfoWrap
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image src={ImageTwo} alt="home" />
              <h2>{t("fengshui")}</h2>
              <button
                onClick={() => {
                  history.push("/fengshui");
                }}
              >
                {t("view")}
              </button>
              {/* <Link to="../FengShui">{t("view")}</Link> */}
              {/* <InfoLink to="/FengShui">
              <p>{t("view")}</p>
              <Arrow />
            </InfoLink> */}
            </InfoWrap>
            <InfoWrap
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image src={ImageThree} alt="home" />
              <h2>{t("interior")}</h2>
              <button
                onClick={() => {
                  history.push("/interior");
                }}
              >
                {t("view")}
              </button>
              {/* <InfoLink to="/homes">
              <p>{t("view")}</p>
              <Arrow />
            </InfoLink> */}

              {/* </InfoWrap>
          <InfoWrap
            data-aos="zoom-out-down"
            data-aos-duration="1200"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          > */}
            </InfoWrap>
            <InfoWrap
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image src={ImageFour} alt="home" />
              <h2>{t("industrial")}</h2>
              <button
                onClick={() => {
                  history.push("/industrial");
                }}
              >
                {t("view")}
              </button>
              {/* <InfoLink to="/homes">
              <p>See More</p>
              <Arrow />
            </InfoLink> */}
            </InfoWrap>
          </InfoRow>
        </Container>
      </Section>
    </div>

    /* <Redirect from="/BlogCoverPage/" to="/Thanksgiving" /> */
    /* <Switch>
        {/* <Redirect path={`${path}/Thanksgiving`}>
          <Thanksgiving />
        </Redirect> */
    /* <Route path={`${path}/Thanksgiving`} component={Thanksgiving} /> */
    /* <Thanksgiving />
         <Redirect>
         
        {/* <Route path="/FengShui" component={FengShui} /> */
    /* <Route path="/FengShui" component={FengShui} /> */
    /* <FengShui />
        </Redirect> */
    /* </Switch> */
  );
};

export default BlogCoverPage;
