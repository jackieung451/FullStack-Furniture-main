import React from "react";
import styled from "styled-components";
// import { Button } from "./Button";
import ImageOne from "../images/img97.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

// const Section = styled.section`
//   background: #000d1a;
//   padding: 12rem 0rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Container = styled.div`
//   background: #fff;
//   padding: 3rem 2rem;
//   position: relative;
// `;

// const Wrap = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;
// const ColumnLeft = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0px -15px;
//   justify-content: flex-start;
//   padding: 1rem;
// `;

// const Content = styled.div`
//   flex: 0 0 50%;

//   @media screen and (max-width: 768px) {
//     flex: 0 0 100%;
//     max-width: 100%;
//     margin-top: 250px;
//   }

//   h1 {
//     margin-bottom: 2rem;
//     font-size: 2 rem;
//   }

//   p {
//     margin-bottom: 1rem;
//     line-height: 1.5;
//   }
// `;
// const ColumnRight = styled.div`
//   position: absolute;
//   top: -80px;
//   right: 0;
//   max-width: 850px;
//   height: 140%;
//   width: 45%;
//   padding-left: 1rem;

//   @media screen and (max-width: 768px) {
//     height: 320px;
//     top: -65px;
//     width: 80%;
//     margin: 0 auto;
//     left: 0;
//   }
// `;
// const Image = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;

// const Features = () => {
//   return (
//     <Section>
//       <Container>
//         <Wrap>
//           <ColumnLeft>
//             <Content
//               data-aos="fade-right"
//               data-aos-duration="1200"
//               data-aos-delay="300"
//               data-aos-once="true"
//               data-aos-anchor-placement="center bottom"
//             >
//               <h1>Stunning Interior</h1>
//               <p>Loerefasfasfasfdsafas</p>
//               <p>Lorwerewrfwewewfwa</p>
//               <Button to="/homes">Learn More</Button>
//             </Content>
//           </ColumnLeft>
//           <ColumnRight>
//             <Image
//               src={ImageOne}
//               data-aos="fade-left"
//               data-aos-duration="1200"
//               data-aos-once="true"
//               data-aos-anchor-placement="center bottom"
//             />
//           </ColumnRight>
//         </Wrap>
//       </Container>
//     </Section>
//   );
// };

// export default Features;

// import React from "react";
// import { IoMdArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
// // import styled from "styled-components/macro";
// import HomeOne from "../images/img7.jpg";
// import HomeTwo from "../images/img2.jpg";
// import HomeThree from "../images/img4.jpg";

// const Section = styled.section`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
// `;
// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   ${
//     "" /* display: grid;
//   grid-template-column: 1fr 1fr; */
//   }

//   ${"" /* padding: 2rem 1rem; */}
// `;
// const ColumnLeft = styled.div`
//   font-size: 1.5rem;
//   ${"" /* padding: 2rem 1rem; */}
//   ${"" /* margin-bottom: 40px; */}

//   h3 {
//     display: flex;
//     justify-content: flex-start;
//     padding: 6rem 0 1rem 0;
//   }

//   @media screen and (max-width: 768px) {
//     padding: 0rem;
//     text-align: flex-start;
//     justify-content: center;
//   }
// `;
// const InfoRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   ${"" /* padding: 1rem 0rem; */}
//   justify-content: space-around;
//   margin: 0 200px 0 200px;

//   @media screen and (max-width: 768px) {
//     flex-direction: column;
//     ${"" /* justify-content: flex-start; */}
//   }
// `;
// const ColumnRight = styled.div`
//   ${
//     "" /* display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center; */
//   }
//   padding: 0rem 1rem;
//   ${"" /* min-height: 550px; */}
//   height: 100%;

//   ${
//     "" /* h2 {
//     margin-top: 30rem;
//     margin-bottom: 1rem;
//     font-weight: 400;
//     max-width: 30rem;
//   }
//   @media screen and (max-width: 768px) {
//     margin-bottom: 1rem;
//   } */
//   }
//   iframe {
//     margin-bottom: 1rem;
//     @media screen and (max-width: 768px) {
//       ${"" /* flex: 0 0 100%; */}
//       max-width: 30rem;
//       margin-top: 60px;
//       display: grid;
//       grid-template-column: 1fr;
//     }
//   }
// `;

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

// const Features = () => {
//   return (
//     <Section>
//       <Container>
//         <ColumnLeft>
//           <h3>
//             <strong>Nuestra Tienda</strong>
//           </h3>
//           <p>
//             2619 N Broadway <br /> Los Angeles, California 90031
//           </p>
//           <p>
//             <strong>(323) 247-9094</strong> <br /> sales@lanayaritfurniture.com
//           </p>
//           {/* <h1
//             data-aos="fade-right"
//             data-aos-duration="1000"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             Todo lo que necesita para el hogar
//           </h1> */}
//         </ColumnLeft>
//         <InfoRow>
//           {/* <InfoWrap
//             data-aos="zoom-out-up"
//             data-aos-duration="1200"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             {/* <Image src={HomeOne} alt="home" /> */}
//           {/* <h2>
//               <strong>Nuestra Tienda</strong>
//             </h2>
//             <h3>
//               2619 N Broadway <br /> Los Angeles, California 90031
//             </h3>
//             <br />
//             <br />
//             <br />
//             <br />
//             <h3>
//               (323) 247-9094 <br /> sales@lanayaritfurniture.com
//             </h3> */}
//           {/* <InfoLink to="/homes">
//               <p>Ver Mas</p>
//               <Arrow />
//             </InfoLink> */}
//           {/* <Image src={HomeThree} alt="home" />
//             <h2>Comedores</h2>
//             <InfoLink to="/homes">
//               <p>Ver Mas</p>
//               <Arrow /> */}
//           {/* </InfoLink> */}
//           {/* </InfoWrap> */}
//           <ColumnRight
//             data-aos="zoom-out-down"
//             data-aos-duration="1200"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.317769356978!2d-118.2149471!3d34.0738862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe4935319e285!2sLa%20Nayarit%20Furniture!5e0!3m2!1sen!2sus!4v1626564967160!5m2!1sen!2sus"
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               allowfullscreen=""
//               loading="lazy"
//             ></iframe>
//             {/* alt="home"
//               css={`
//                 // margin-top: 120px;
//                 @media screen and (max-width: 768px) {
//                   margin-top: 0px;
//                 }
//               `}
//             /> */}
//             {/* <h2>Recamaras</h2>
//             <InfoLink to="/homes">
//               <p>Ver Mas</p>
//               <Arrow />
//             </InfoLink> */}
//           </ColumnRight>
//         </InfoRow>
//       </Container>
//     </Section>
//   );
// };

// const Section = styled.section`
//   background: #000d1a;
//   padding: 3.5rem 0rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

// const Container = styled.div`
//   background: #fff;
//   padding: 3rem 2rem;
//   position: relative;
// `;

// const Wrap = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
// `;
// const ColumnLeft = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 0px -15px;
//   justify-content: flex-start;
//   padding: 1rem;
// `;

// const Content = styled.div`
//   flex: 0 0 50%;
//   line-height: 1.8;

//   @media screen and (max-width: 768px) {
//     flex: 0 0 100%;
//     max-width: 100%;
//     margin-top: 250px;
//   }

//   h1 {
//     ${"" /* margin-bottom: 2rem; */}
//     font-size: 2 rem;
//     display: flex;
//     justify-content: flex-start;
//   }

//   p {
//     margin-bottom: 1rem;
//     line-height: 1.5;
//   }
//   h2 {
//     display: flex;
//     justify-content: center;
//   }
// `;
// const ColumnRight = styled.div`
//   position: absolute;
//   top: 0px;
//   right: 0;
//   max-width: 850px;
//   height: 100%;
//   width: 45%;
//   padding-left: 1rem;

//   @media screen and (max-width: 768px) {
//     height: 320px;
//     top: -65px;
//     width: 80%;
//     margin: 0 auto;
//     left: 0;
//   }
// `;
// // const Image = styled.img`
// //   height: 100%;
// //   width: 100%;
// //   object-fit: cover;
// //   @media screen and (max-width: 768px) {
// //     ${"" /* flex: 0 0 100%; */}
// //     max-width: 100%;
// //     margin-top: 60px;
// //   }
// // `;

// const Features = ({ reverse }) => {
//   return (
//     <Section>
//       <Container>
//         <Wrap>
//           <ColumnLeft>
//             <Content>
//               <h1>Nuestra Tienda</h1>
//               <p>2619 N Broadway</p>
//               <p>Los Angeles, California 90031</p>
//               <p>
//                 <strong>(323) 247-9094</strong>
//               </p>
//               <p>sales@lanayaritfurniture.com</p>
//             </Content>
//           </ColumnLeft>
//           <ColumnRight>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.317769356978!2d-118.2149471!3d34.0738862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe4935319e285!2sLa%20Nayarit%20Furniture!5e0!3m2!1sen!2sus!4v1626564967160!5m2!1sen!2sus"
//               width="600"
//               height="450"
//               style={{ border: 0 }}
//               allowfullscreen=""
//               loading="lazy"
//             ></iframe>
//           </ColumnRight>
//         </Wrap>
//       </Container>
//     </Section>
//   );
// };

// const Section = styled.section`
//   width: 100%;
//   height: 100%;
//   padding: 3.5rem 0rem;
// `;

// const Container = styled.div`
//   padding: 3 rem calc((100vw - 1300px) / 2);
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 800px;

//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ColumnLeft = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.4;

//   padding: 0rem 4rem;
//   order: ${({ reverse }) => (reverse ? "2" : "1")};

//   @media screen and (max-width: 768px) {
//     margin: 0 0 0 0;
//     padding: 0rem 0rem 0rem 0rem;
//   }

//   h1 {
//     margin-bottom: 1rem;
//     font-size: clamp(1.5rem, 6vw, 2rem);
//   }
//   p {
//     ${"" /* margin-bottom: 2rem; */}
//   }

//   }
// `;
// const ColumnRight = styled.div`
//   ${"" /* margin-top: 6rem; */}
//   padding: 1rem 0rem 0rem 0rem;
//   order: ${({ reverse }) => (reverse ? "1" : "2")};
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     order: ${({ reverse }) => (reverse ? "2" : "1")};
//   }
//   iframe {
//     @media screen and (max-width: 768px) {
//       width: 30rem;
//     }

/* img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      margin-top: 75px;
    } */

const Section = styled.section`
  background: #000d1a;
  padding: 3.5rem 0rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${"" /* margin-bottom: 1rem; */}
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    iframe {
      min-width: 200px;
      max-width: 1020px;
    }
  }
`;

const Content = styled.div`
  flex: 0 0 50%;
  line-height: 1.8;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }

  h1 {
    ${"" /* margin-bottom: 2rem; */}
    font-size: 2 rem;
    display: flex;
    justify-content: flex-start;
    color: #fff;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    color: #fff;
  }
  h2 {
    display: flex;
    justify-content: center;
    color: #fff;
  }
`;
const ColumnRight = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  max-width: 850px;
  height: 100%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    ${"" /* flex: 0 0 100%; */}
    max-width: 100%;

    margin-top: 60px;
    padding-bottom: 40px;
  }
`;

const Features = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container
        style={{
          backgroundColor: "#212121",
        }}
      >
        <Wrap>
          <ColumnLeft>
            <Content>
              <h1>{t("contact")}</h1>
              <p>2619 N Broadway</p>
              <p>Los Angeles, California 90031</p>
              <p>
                <strong>(323) 247-9094</strong>
              </p>
              <p>sales@lanayaritfurniture.com</p>
            </Content>

            <br />
            <br />
            <br />
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13219.317769356978!2d-118.2149471!3d34.0738862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe4935319e285!2sLa%20Nayarit%20Furniture!5e0!3m2!1sen!2sus!4v1626564967160!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </ColumnLeft>

          <ColumnRight>
            <Image src={ImageOne} alt="home" />
          </ColumnRight>
        </Wrap>
      </Container>
    </Section>
  );
};

export default Features;
