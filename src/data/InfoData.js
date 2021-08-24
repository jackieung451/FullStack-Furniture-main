import ImageOne from "../images/img7.jpg";
import ImageTwo from "../images/img8.jpg";
import { useTranslation } from "react-i18next";
import "../translations/i18n";

export const InfoData = () => {
  const { t } = useTranslation();
  return {
    heading: "Everything you need for the home",
    // paragraphOne: "lorem",
    // paragraphTwo: "loremmmdsfadfds",
    buttonLabel: "See More",
    image: ImageOne,
    reverse: false,
    delay: 100,
  };
};

// export const InfoDataTwo = () => {

//   return({
//   heading: {t("serviceheading")},
//   paragraphOne:
//     {t("serviceparagraph")},
//   buttonLabel: {t("catalogbutton")},
//   image: ImageTwo,
//   reverse: true,
//   delay: 100,})
// };
