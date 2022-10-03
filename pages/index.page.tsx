import { NextPage } from 'next';
import { useRouter } from 'next/router';
import LandingPage from 'components/landing-page/LandingPage';
import { descriptionArray, projectsArray } from './variable';

const App: NextPage = () => {
  const basePath = useRouter().basePath;
  const convertPath = (path: string) =>
    basePath?.charAt(0) === '/' ? basePath + path : path;
  const convertedProjectArray = projectsArray.map(project => {
    convertPath(project.imgSrc);
    return project;
  });
  return (
    <div>
      <LandingPage
        profileSrc={convertPath('/my-photo.png')}
        projects={convertedProjectArray}
        description={descriptionArray}
      />
    </div>
  );
};

export default App;
