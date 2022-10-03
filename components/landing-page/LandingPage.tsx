import MainLayout from 'components/layouts/MainLayout';
import PersonalProjects from 'components/personal-projects/PersonalProjects';
import { useRouter } from 'next/router';
import Description from './Description/Description';
import LandingPageStyle from './LandingPage.module.scss';
import MainContent from './MainContent/MainContent';
import Scroll from './Scroll/Scroll';
import { descriptionArray, projectsArray } from './variable';

const LandingPage = () => {
  const basePath = useRouter().basePath;
  const convertPath = (path: string) =>
    basePath?.charAt(0) === '/' ? basePath + path : path;
  const convertedProjectArray = projectsArray.map(project => {
    convertPath(project.imgSrc);
    return project;
  });
  return (
    <MainLayout withoutFooter={true}>
      <div className={LandingPageStyle['landing-page']}>
        <div className={LandingPageStyle['center']}>
          <img
            src={convertPath('/my-photo.png')}
            className={LandingPageStyle['my-photo']}
            alt="my photo"
          ></img>
        </div>
        <div className={LandingPageStyle['text-animation']}>
          <MainContent />
          <Description description={descriptionArray} />
        </div>
      </div>
      <Scroll></Scroll>
      <PersonalProjects projects={convertedProjectArray} />
    </MainLayout>
  );
};

export default LandingPage;
