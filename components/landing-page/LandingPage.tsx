import CustomButton from 'components/common/button/CustomButton';
import Description from 'components/common/Description';
import LandingPageStyle from './LandingPage.module.scss';
import { descriptionArray, textArray } from './variable';

type Props = {
  handleShowProject: () => void;
  photoSrc: string;
};

const LandingPage: React.FC<Props> = ({ handleShowProject, photoSrc }) => {
  return (
    <div className={LandingPageStyle['main']}>
      <img
        src={photoSrc}
        className={LandingPageStyle['my-photo']}
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
      <div className={LandingPageStyle['buttons']}>
        <CustomButton
          buttonVariant="warning"
          buttonHandler={() => handleShowProject()}
          buttonName="Click here"
          buttonAnimation={true}
        >
          <span className={LandingPageStyle['home-button']}></span>
        </CustomButton>
        <CustomButton
          buttonVariant="success"
          buttonHandler={() =>
            window.location.assign('https://chi-chat-box-demo.herokuapp.com/')
          }
          buttonName="Chat Box Demo"
          buttonAnimation={true}
        >
          <span className={LandingPageStyle['home-button']}></span>
        </CustomButton>
      </div>
    </div>
  );
};

export default LandingPage;
