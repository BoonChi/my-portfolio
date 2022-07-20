import MainLayout from 'components/layouts/MainLayout';
import Description from './Description/Description';
import LandingPageStyle from './LandingPage.module.scss';
import MainContent from './MainContent/MainContent';
import Scroll from './Scroll/Scroll';
import { descriptionArray } from './variable';

type Props = {
  photoSrc: string;
};

const LandingPage: React.FC<Props> = ({ photoSrc }) => {
  return (
    <MainLayout>
      <div className={LandingPageStyle['landing-page']}>
        <div className={LandingPageStyle['text-animation']}>
          <MainContent />
          <Description description={descriptionArray} />
        </div>
        <div className={LandingPageStyle['center']}>
          <img
            src={photoSrc}
            className={LandingPageStyle['my-photo']}
            alt="my photo"
          ></img>
        </div>
      </div>
      <Scroll></Scroll>
    </MainLayout>
  );
};

export default LandingPage;
