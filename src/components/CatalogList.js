import React from "react";
import styled from "styled-components";
import HomeOne from "../images/img89.jpg";
import HomeTwo from "../images/img84.jpg";
import HomeThree from "../images/img85.jpg";
import HomeFour from "../images/img83.jpg";
import HomeFive from "../images/img82.jpg";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import { useTranslation } from "react-i18next";
import "../translations/i18n";
import IconBanner from "../images/catalog-long.png";
// import BackLine from "../images/tab-header-bar.png";
// const Section = styled.section`
//   width: 100%;
//   height: 100%;
//   ${"" /* display: block; */}
//   ${
//     "" /* flex-direction: column;
//   justify-content: center;  */
//   }
//   ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */};
// `;
// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   ${"" /* padding: 2rem 1rem; */}
//   ${
//     "" /* background: #fff;
//   padding: 3rem 2rem; */
//   }
//   ${"" /* max-height: 1200px; */}
//   ${"" /* margin: 0 auto; */}

//   @media screen and (max-width: 768px) {
//     ${
//       "" /* display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start; */
//     }
//     ${"" /* line-height: 1.4; */}
//     ${"" /* padding: 0rem 2rem; */}
//     order: ${({ reverse }) => (reverse ? "2" : "1")};
//   }
// `;
// const Heading = styled.div`
//   display: grid;

//   justify-content: center;
//   font-size: 1.5rem;
//   padding: 2.5rem 1rem;

//   h1 {
//     margin-top: 2rem;
//   }
//   ${"" /* margin-bottom: 40px; */}
//   @media screen and (max-width: 768px) {
//     text-align: start;
//   }
// `;
// const InfoRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 1200px;
//   ${"" /* justify-content: space-between; */}
//   margin: auto;
//   ${"" /* padding: 1rem 0rem; */} @media screen and (max-width: 768px) {
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//   }
//   @media screen and (max-width: 768px) {
//     width: 800px;
//     ${
//       "" /* display: grid;
//     grid-gap: 1rem;
//     justify-content: flex-start; */
//     }
//   }
// `;
// const InfoWrap = styled.div`
//   ${"" /* display: inline-block; */}
//   ${"" /* margin: 0 0 0 12rem; */}

//   ${
//     "" /* justify-content: space around;
//   margin: auto; */
//   }
//   padding: 0rem 1rem;
//   min-height: 550px;
//   height: 100%;
//   margin-bottom: 0;

//   h2 {
//     ${"" /* margin-bottom: 1rem; */}
//     font-weight: 400;
//     ${
//       "" /* display: block;
//     justify-content: space-around;
//     margin: auto; */
//     }
//   }
//   @media screen and (max-width: 768px) {
//     ${"" /* margin-bottom: 0rem; */}
//   }
// `;
// const Image = styled.img`
//   ${
//     "" /* display: flex;
//   justify-content: space-around;
//   margin: auto; */
//   }
//   width: 100%;
//   height: 100%;
//   max-width: 600px;
//   max-height: 400px;
//   object-fit: cover;

//   @media screen and (max-width: 768px) {
//     ${
//       "" /* width: 100%;
//     height: 100%;
//     object-fit: cover; */
//     }
//     displau: grid;
//     grid-template-columns: 1fr;
//     ${"" /* flex-direction: column; */}
//     justify-content: center;
//     padding: 0 0 0 0;
//   }
//   ${"" /* margin-bottom: 1rem; */}
// `;
// // const InfoLink = styled(Link)`
// // display: flex;
// // align-items: center;
// // text-decoration: none;
// // color: #000d1a;
// // width: 140px;
// // transition: 0.3s
// // &:hover {
// //   transform: translateY(-2px)
// // };`;

// const Footer = styled.div`
//   ${
//     "" /* display: grid;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 0 0 2rem 0; */
//   }

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.4;
//   padding: 0rem 2rem 5rem;

//   a {background: ${({ primary }) => (primary ? "#000d1a" : "#CD853F")};
// white-space: nowrap;
// outline: none;
// border: none;
// min-width: 100px;
// max-width: 200px;
// cursor: pointer;
// text-decoration: none;
// transition: 0.3s;
// display: flex;
// justify-content: center;
// align-items: center;
// padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
// color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
// font-size: ${({ big }) => (big ? "20px" : "14px")};

// &:hover {
//   transform: translateY(-2px);
// }}

//   @media screen and (max-width: 768px) {
//     margin-bottom: 2rem;
// `;

// const CatalogList = () => {
//   return (
//     <Section>
//       <Container>
//         <Heading>
//           <h1>View Our Newest Job Openings</h1>
//         </Heading>
//         <InfoRow>
//           <InfoWrap>
//             <Image src={BusinessOne} alt="home" />
//             <h2>Accounting Careers</h2>
//           </InfoWrap>
//           <InfoWrap>
//             <Image
//               src={BusinessTwo}
//               alt="home"
//               css={`
//                 @media screen and (max-width: 768px) {
//                   margin-top: 0px;
//                 }
//               `}
//             />
//             <h2>Finance Careers</h2>
//           </InfoWrap>
//         </InfoRow>
//         <Footer>
//           <a
//             href="https://www2.pcrecruiter.net/pcrbin/regmenu.aspx?uid=hanna%20mitchell%20and%20associates.hannamitchellandassociates"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Learn More
//           </a>
//         </Footer>
//       </Container>
//     </Section>
//   );
// };
// export default CatalogList

//   return (
//     <div className="card">
//       <img src={props.img} className="card__img" alt="Furniture" />

//       <div className="card__body">
//         <h2 className="card__title">{props.title}</h2>
//         <p className="card__description">{props.description}</p>
//         <button className="card__btn">Catalog</button>
//       </div>
//     </div>
//   );
// };

// const Section = styled.section`
//   width: 100%;
//   height: 100%;
//   ${"" /* padding: 10rem calc((100vw - 1300px) / 2); */}
// `;
// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   margin-bottom: 0rem;

//   ${"" /* padding: 2rem 1rem; */}
// `;
// const Heading = styled.div`
//   font-size: 1.5rem;
//   ${"" /* padding: 2rem 1rem; */}
//   ${"" /* margin-bottom: 40px; */}

//   h1 {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 5rem 0 0rem 0;
//   }

//   @media screen and (max-width: 768px) {
//     text-align: center;
//   }
// `;
// const InfoRow = styled.div`
//   ${
//     "" /* displau: flex;
//   width: 90%;
//   margin: 0 auto;
//   flex-wrap: wrap;
//   justify-content: center;
// `; */
//   }
//   display: flex;
//   ${
//     "" /* display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 500px;
//   justify-content: center;
//   margin: 0 100px 0 100px; */
//   }

//   @media screen and (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     object-fit: contain;
//   }
// `;
// /* @media screen and (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     object-fit: contain;
//   }
// `; */

// /* display: flex;
//   flex-direction: row; */

// /* padding: 1rem 0rem; */

// /* margin: auto; */

// /* flex-direction: column;
//     object-fit: cover; */

// /* grid-template-columns: 1fr;
//     max-height: 900px; */

// const InfoWrap = styled.div`
//   ${
//     "" /* display: block;
//   flex-basis: 100%;
//   padding: 10px; */
//   }
//   ${"" /* box-sizing: border-box; */}

//   ${
//     "" /* @media only screen and (min-width: 640px) {
//     Images {
//       flex-basis: 50%;
//     }
//   }
//   @media only screen and (min-width: 960px) {
//     Images {
//       flex-basis: 33.333%;
//     }
//   }
//   @media only screen and (min-width: 1280px) {
//     Images {
//       flex-basis: 25%;
//     }
//   } */
//   }

//   padding: 0rem 1rem;

//   height: 100%;

//   h2 {
//     margin-bottom: 0rem;
//     padding: 0 0 0 0;
//   }
//   @media screen and (max-width: 768px) {
//     display: grid;
//     grid-template-columns: 1fr;
//   }
// `;

// /* font-weight: 400;
//     margin-top: 0 0 0 0;
//     padding: 0 0 0 0;
//   } */

// /* margin-bottom: 1rem; */
// /* display: flex;
//     flex-direction: column; */

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   margin-bottom: 0 0 0 0;
//   padding: 1rem 0 0 0;
//   /* max-width: 600px;
//   max-height: 400px; */

//    object-fit: contain;
//   ${"" /* margin-bottom: 1rem; */}

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     height: 100%;
//     max-width: 600px;
//     max-height: 400px;
//     }
//     ${"" /* max-height: 800px; */}
//     ${"" /* background-size: cover; */}
//     object-fit: cover;
//   }
// `;
// const InfoLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #000d1a;
//   width: 140px;
//   transition: 0.3s;
//   }

//   &:hover {
//     transform: translateY(-2px);
//   }

//   @media only screen and (max-width: 768px) {
//     margin-bottom: 3rem;
//   } ;
// `;
// const Arrow = styled(IoMdArrowForward)`
//   margin-left: 10px;
//   margin-bottom: 1rem;

//   ${"" /* margin-bottom: 1rem; */}
// `;

// const CatalogList = () => {
//   return (
//     <Section>
//       <Container>
//         <Heading>
//           <h1
//             data-aos="fade-right"
//             data-aos-duration="1000"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             Todo lo que necesita para el hogar
//           </h1>
//         </Heading>
//         <InfoRow>
//           <InfoWrap
//             data-aos="zoom-out-up"
//             data-aos-duration="1200"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             <Image
//               src={HomeOne}
//               alt="home"
//               css={`
//                 // margin-top: 120px;
//                 @media screen and (max-width: 768px) {
//                   margin-top: 0px;
//                   // display: flex;
//                   // flex-direction: column;
//                   // justify-content: center;
//                   // align-items: flex-start;
//                   // order: 1;
//                 }
//               `}
//             />
//             <h2>Salas</h2>
//             <InfoLink to="/homes" alt="home">
//               <p>Ver Mas</p>
//               <Arrow />
//             </InfoLink>
//           </InfoWrap>
//           <InfoWrap
//             data-aos="zoom-out-down"
//             data-aos-duration="1200"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             <Image
//               src={HomeTwo}
//               alt="home"
//               css={`
//                 // margin-top: 120px;
//                 @media screen and (max-width: 768px) {
//                   margin-top: 0px;
//                   // display: flex;
//                   // flex-direction: column;
//                   // justify-content: center;
//                   // align-items: flex-start;
//                   // order: 1;
//                 }
//               `}
//             />
//             <h2>Comedores</h2>
//             <InfoLink to="/homes">
//               <p>Ver Mas</p>
//               <Arrow />
//             </InfoLink>
//           </InfoWrap>
//           <InfoWrap
//             data-aos="zoom-out-down"
//             data-aos-duration="1200"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             <Image
//               src={HomeThree}
//               alt="home"
//               css={`
//                 // margin-top: 120px;
//                 @media screen and (max-width: 768px) {
//                   margin-top: 0px;
//                   // display: flex;
//                   // flex-direction: column;
//                   // justify-content: center;
//                   // align-items: flex-start;
//                   // order: 1;
//                 }
//               `}
//             />
//             <h2>Recamaras</h2>
//             <InfoLink to="/homes" alt="home">
//               <p>Ver Mas</p>
//               <Arrow />
//             </InfoLink>
//           </InfoWrap>
//           <InfoWrap
//             data-aos="zoom-out-down"
//             data-aos-duration="1200"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             <Image
//               src={HomeFour}
//               alt="home"
//               css={`
//                 // margin-top: 120px;
//                 @media screen and (max-width: 768px) {
//                   margin-top: 0px;
//                   // display: flex;
//                   // flex-direction: column;
//                   // justify-content: center;
//                   // align-items: flex-start;
//                   // order: 1;
//                 }
//               `}
//             />
//             <h2>Futon/Sofa-Cama</h2>
//             <InfoLink to="/homes" alt="home">
//               <p>Ver Mas</p>
//               <Arrow />
//             </InfoLink>
//           </InfoWrap>
//           <InfoWrap
//             data-aos="zoom-out-down"
//             data-aos-duration="1200"
//             data-aos-once="true"
//             data-aos-anchor-placement="center bottom"
//           >
//             <Image
//               src={HomeFive}
//               alt="home"
//               css={`
//                 // margin-top: 120px;
//                 @media screen and (max-width: 768px) {
//                   margin-top: 0px;
//                   // display: flex;
//                   // flex-direction: column;
//                   // justify-content: center;
//                   // align-items: flex-start;
//                   // order: 1;
//                 }
//               `}
//             />
//             <h2>Bunk Beds/Literas</h2>
//             <InfoLink to="/homes" alt="home">
//               <p>Ver Mas</p>
//               <Arrow />
//             </InfoLink>
//           </InfoWrap>
//         </InfoRow>

//       </Container>
//     </Section>
//   );
// };

// export default CatalogList;

const Section = styled.section`
  width: 100%;
  height: 100%;
${"" /* padding-top: 15rem; */}

  

    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
  }


  @media screen and (min-width: 1401px) {
  padding-top: 12rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1400px) {
    padding-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: 8rem;
  }

  @media screen and (max-width: 411px) {
    padding-top: 1.5rem;
    }

  @media screen and (max-width: 360px) {
    margin-top: 3.5rem;
  }
`;

const Banner = styled.div`
  ${"" /* max-height: 7rem; */}
  min-width: 20rem;
  padding-top: 2rem;
  margin-bottom: 5rem;

 

  ${
    "" /* @media screen and (max-width: 768px) {
    padding-bottom: 0rem;
  } */
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 7rem;
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
`;

const Image = styled.div`
  z-index: 9999;
  height: 55vh;
  width: 100vw;
  object-fit: contain;
  padding-top: 8rem;
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
    z-index: 10000;
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
;


h1{
   font-size: clamp(3rem, 8vw, 2rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  ${"" /* margin-bottom: 0.8rem; */}
  ${
    "" /* dislay: flex;
  align-items: center; */
  }
}`;

const Container = styled.div`
  ${"" /* padding: 3 rem calc((100vw - 1300px) / 2); */}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
${"" /* display: flex; */}
text-align: center;
max-width: 700px;


  ${
    "" /* display: flex;
  flex-direction: column; 
  flex: 0 0 50%
  justify-content: center;
  align-items: center;
  max-width: 50%;
  line-height: 1.4; */
  }
  height: 100%;
  padding: 0rem 2rem 2rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

 

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


  @media screen and (max-width: 768px) {
    margin-bottom: 0rem;
    padding-left: 2rem;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    @media screen and (max-width: 320px) {
    padding-right: 2rem;
  }
    ${
      "" /* display: flex;
    flex: 0 0 50%;} */
    }

`;

const Button = styled(Link)`
background: ${({ primary }) => (primary ? "#53565a" : "#CD853F")};
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
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "20px" : "14px")};
  border-radius: ${({ round }) => (round ? "50px" : "0px")}

  &:hover {
    transform: translateY(-2px);
  }
  text-align: center;
  max-width: 700px;
  display: flex;
  justify-content: center;

  
`;
const RowOne = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;
const RowTwo = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const RowThree = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const RowFour = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const RowFive = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-templates-column: 1fr;
  }
`;

const ColumnRight = styled.div`
  padding: 0rem 2rem 2rem 2rem;
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
    max-width: 600px;
    max-height: 400px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
      margin-top: 0rem;
      margin-left: 0rem;
      margin-right: 0rem;
      object-fit: cover;
    }
  }
`;

const CatalogList = ({ reverse }) => {
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
          <h1>{t("catalogbutton")}</h1>
          <img src={IconBanner} />
        </HeroContent>
        {/* <Image src={BackLine} /> */}
      </Banner>
      <br />
      <Section
        style={{
          backgroundColor: "#212121",
        }}
      >
        <RowOne>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog1title")}</h1>
            <p>{t("catalog1")}</p>
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
              src={HomeOne}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowOne>
        <RowTwo>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog2title")}</h1>
            <p>{t("catalog2")}</p>
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
              src={HomeTwo}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowTwo>
        <RowThree>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog3title")}</h1>
            <p>{t("catalog3")}</p>
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
              src={HomeThree}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowThree>
        <RowFour>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog4title")}</h1>
            <p>{t("catalog4")}</p>
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
              src={HomeFour}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowFour>
        <RowFive>
          <ColumnLeft
            reverse={reverse}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-anchor-placement="center bottom"
          >
            <h1>{t("catalog5title")}</h1>
            <p>{t("catalog5")}</p>
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
              src={HomeFive}
              alt="home"
              data-aos="zoom-out"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-anchor-placement="center bottom"
            />
          </ColumnRight>
        </RowFive>
      </Section>
    </div>
  );
};

export default CatalogList;
