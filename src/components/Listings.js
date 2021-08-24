import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import HomeOne from "../images/img34.jpg";
import HomeTwo from "../images/img33.jpg";
import HomeThree from "../images/img32.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Section = styled.section`
  width: 100%;
  height: 100%;
  ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
`;
const Container = styled.div`
  height: 100%;
  width: 100%;

  ${"" /* padding: 2rem 1rem; */}
`;
const Heading = styled.div`
  font-size: 1.5rem;
  ${"" /* padding: 2rem 1rem; */}
  ${"" /* margin-bottom: 40px; */}

  h1 {
    display: grid;
    grid-template-rows: 10px;
    justify-content: center;
    padding: 3rem 0 0rem 0;
    margin-bottom: 5rem;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: 8rem;
  }
  @media screen and (max-width: 540px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 411px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 500px;
  ${
    "" /* display: flex;
  flex-direction: row; */
  }
  ${"" /* padding: 1rem 0rem; */}
  justify-content: center;
  margin: 0 100px 0 100px;

  @media screen and (max-width: 768px) {
    ${
      "" /* flex-direction: column;
    object-fit: cover; */
    }
    display: flex;
    justify-content: center;
    flex-direction: column;
    object-fit: contain;
    ${
      "" /* grid-template-columns: 1fr;
    max-height: 900px; */
    }
  }
  @media screen and (max-width: 414px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    object-fit: cover;
    margin: 0 1rem;
  }
`;
const InfoWrap = styled.div`
  padding: 0rem 1rem;

  height: 70%;

  a {
    background: #53565a;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")}

  &:hover {
    transform: translateY(-2px);
  }
  text-align: center;
  max-width: 700px;
  display: flex;
  justify-content: center;
  }

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
    ${"" /* font-weight: 900; */}
    ${"" /* border-radius: 50px; */}

    &:hover {
      transform: translateY(-2px);
    }
  }

  h2 {
    margin-bottom: 0rem;
    margin-top: 0rem;
    padding: 0 0 0 0;
    color: #fff;
  }
  ${
    "" /* font-weight: 400;
    margin-top: 0 0 0 0;
    padding: 0 0 0 0;
  } */
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    height: 50%;
  }
  ${
    "" /* @media screen and (max-width: 414px) {
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 600px;
    margin-left: 0rem;
    margin-right: 0rem;
    padding-left: 0px;
    padding-right: 0px;
    height: 100%;
  } */
  }
  ${"" /* margin-bottom: 1rem; */}
  ${
    "" /* display: flex;
    flex-direction: column; */
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  margin-top: 0;
  padding: 0 0 0 0;
  ${
    "" /* max-width: 600px;
  max-height: 400px; */
  }
  object-fit: contain;
  ${"" /* margin-bottom: 1rem; */}

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    ${"" /* max-height: 800px; */}
    ${"" /* background-size: cover; */}
    object-fit: cover;
  }

  ${
    "" /* @media screen and (max-width: 411px) {
    width: 100%;
    height: 100%;
    max-width: 800px;
    max-height: 600px;
    margin-left: 0rem;
    margin-right: 0rem;
    padding-left: 0px;
    padding-right: 0px
    object-fit: cover;;
  } */
  }
`;
const InfoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000d1a;
  width: 140px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 3rem;
  } ;
`;
const Arrow = styled(IoMdArrowForward)`
  margin-left: 10px;

  ${"" /* margin-bottom: 1rem; */}
`;

const Listings = () => {
  let history = useHistory();
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Section>
        <Container>
          <Heading>
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <strong>{t("listingheading")}</strong>
            </h1>
          </Heading>
          <InfoRow>
            <InfoWrap
              data-aos="zoom-out-up"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src={HomeOne}
                alt="home"
                css={`
                  // margin-top: 120px;
                  @media screen and (max-width: 768px) {
                    margin-top: 0px;
                    // display: flex;
                    // flex-direction: column;
                    // justify-content: center;
                    // align-items: flex-start;
                    // order: 1;
                  }
                `}
              />
              <h2>{t("listing1")}</h2>
              <a
                href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
                rel="noopener noreferrer"
                target="_blank"
                alt="home"
              >
                {/* <button
                  onClick={() => {
                    history.push("/home");
                  }}
                > */}
                {t("view")}
                {/* </button> */}
                {/* <Arrow /> */}
              </a>
            </InfoWrap>
            <InfoWrap
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src={HomeTwo}
                alt="home"
                css={`
                  // margin-top: 120px;
                  @media screen and (max-width: 768px) {
                    margin-top: 0px;
                    // display: flex;
                    // flex-direction: column;
                    // justify-content: center;
                    // align-items: flex-start;
                    // order: 1;
                  }
                `}
              />
              <h2>{t("listing2")}</h2>
              <a
                href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* <button
                  onClick={() => {
                    history.push("/home");
                  }}
                > */}
                {t("view")}
                {/* </button> */}
                {/* <Arrow /> */}
              </a>
            </InfoWrap>
            <InfoWrap
              data-aos="zoom-out-down"
              data-aos-duration="1200"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            >
              <Image
                src={HomeThree}
                alt="home"
                css={`
                  // margin-top: 120px;
                  @media screen and (max-width: 768px) {
                    margin-top: 0px;
                    // display: flex;
                    // flex-direction: column;
                    // justify-content: center;
                    // align-items: flex-start;
                    // order: 1;
                  }
                `}
              />
              <h2>{t("listing3")}</h2>
              <a
                href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
                rel="noopener noreferrer"
                target="_blank"
                alt="home"
              >
                {/* <button
                  onClick={() => {
                    history.push("/home");
                  }}
                > */}
                {t("view")}
                {/* </button> */}
                {/* <Arrow /> */}
              </a>
            </InfoWrap>
          </InfoRow>
        </Container>
      </Section>
    </div>
  );
};

export default Listings;
