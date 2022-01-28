import CustomButton from "components/common/button/CustomButton";
import Description from "components/common/Description";
import LandingPageStyle from "./LandingPage.module.scss";
import { descriptionArray, textArray } from "./variable";

type Props = {
  handleShowProject: () => void;
};

const LandingPage: React.FC<Props> = ({ handleShowProject }) => {
  return (
    <div className={LandingPageStyle["main"]}>
      <img
        src={"/my-photo.png"}
        className={LandingPageStyle["my-photo"]}
        alt="my photo"
      ></img>
      {textArray.map((text, index) => (
        <div
          className={LandingPageStyle[`text-decorated-${index + 1}`]}
          key={index}
        >
          {text}
        </div>
      ))}
      <br />
      {descriptionArray.map((desc, index) => (
        <Description description={desc} key={index} />
      ))}
      <br />
      <CustomButton
        buttonVariant="warning"
        buttonHandler={() => handleShowProject()}
        buttonName="Click here"
        buttonAnimation={true}
      >
        <span className={LandingPageStyle["home-button"]}></span>
      </CustomButton>
    </div>
  );
};

export default LandingPage;
