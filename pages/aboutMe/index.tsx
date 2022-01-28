import Description from "components/common/Description";
import Title from "components/common/title/CustomTitle";
import React from "react";
import AboutMeStyle from "./AboutMe.module.scss";
// import { aboutMeArray } from "./variable";

const AboutMe: React.FunctionComponent = () => {
  return (
    <div className={AboutMeStyle["main"]}>
      {/* {aboutMeArray.map((text, index) => (
        <div
          key={index}
          className={AboutMeStyle[`text-decorated-${index + 1}`]}
        >
          {text}
        </div>
      ))} */}
    </div>
  );
};

export default AboutMe;
