import MainLayout from 'components/layouts/MainLayout';
import PersonalProjects from 'components/personal-projects/PersonalProjects';
import LandingPageStyle from './LandingPage.module.scss';
import MainContent from './MainContent/MainContent';
import Scroll from './Scroll/Scroll';

type IProps = {
  profileSrc: string;
  projects: any[];
  description: string[];
};
const LandingPage = ({ profileSrc, description, projects }: IProps) => {
  return (
    <MainLayout withoutFooter={true}>
      <div className={LandingPageStyle['landing-page']}>
        <div className={LandingPageStyle['center']}>
          <img
            src={profileSrc}
            className={LandingPageStyle['my-photo']}
            alt="my photo"
          ></img>
        </div>
        <div className={LandingPageStyle['text-animation']}>
          <MainContent />
          {/* <Description description={description} /> */}
        </div>
      </div>
      <Scroll></Scroll>
      <PersonalProjects projects={projects} />
    </MainLayout>
  );
};

export default LandingPage;
