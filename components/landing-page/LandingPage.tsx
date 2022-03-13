import CustomButton from 'components/common/button/CustomButton';
import MainLayout from 'components/layouts/MainLayout';
import Description from './Description/Description';
import LandingPageStyle from './LandingPage.module.scss';
import { descriptionArray } from './variable';

type Props = {
  handleShowProject: () => void;
  photoSrc: string;
};

const LandingPage: React.FC<Props> = ({ handleShowProject, photoSrc }) => {
  return (
    <MainLayout>
      <div className={LandingPageStyle['main']}>
        <img
          src={photoSrc}
          className={LandingPageStyle['my-photo']}
          alt="my photo"
        ></img>
        <br />
        <div className={LandingPageStyle['text-animation']}>
          {descriptionArray.map((desc, index) => (
            <Description description={desc} key={index} />
          ))}
        </div>

        <br />
        <CustomButton
          buttonVariant="warning"
          buttonHandler={() => handleShowProject()}
          buttonName="Click here"
          buttonAnimation={true}
        >
          <span className={LandingPageStyle['home-button']}></span>
        </CustomButton>
      </div>
    </MainLayout>
  );
};

export default LandingPage;
