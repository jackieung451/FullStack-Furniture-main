import React from "react";
import styled from "styled-components";
// import { Button } from "./Button";
import ImageTwo from "../images/img8.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0rem;

  @media screen and (max-width: 768px) {
    padding: 0rem 0rem;
  }
`;

const Container = styled.div`
  ${"" /* padding: 3 rem calc((100vw - 1300px) / 2); */}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column; 
  flex: 0 0 50%
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 0rem 2rem 2rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

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

  h1 {
     margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    color: #fff;
    
  }
  p {
    margin-bottom: 0.5rem;
    color: #fff;
  }
 

  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
    
    ${
      "" /* display: flex;
    flex: 0 0 50%;} */
    }
`;

const Button = styled.div`
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
`;

const ColumnRight = styled.div`
  padding: 0rem 2rem 0rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "1" : "2")};
    margin-top: 0rem;

    ${
      "" /* display: flex;
    flex: 0 0 50%; */
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      margin-top: 0rem;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      padding-top: 3rem;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  delay,
}) => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        backgroundColor: "#212121",
      }}
    >
      <Section>
        <Container>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay={delay}
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("serviceheading")}</h1>
            <p>{t("serviceparagraph")}</p>
            <p>{paragraphTwo}</p>
            <a
              href="http://kiosk.coasteramer.com/kiosk/dealers/store.aspx?cno=103115"
              rel="noopener noreferrer"
              target="_blank"
            >
              {t("catalogbutton")}
            </a>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img
              src={ImageTwo}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay={delay}
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </Container>
      </Section>
    </div>
  );
};

export default InfoSection;
