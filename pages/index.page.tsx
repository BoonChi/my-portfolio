import { NextPage } from 'next';
import { useRouter } from 'next/router';
import LandingPage from 'components/landing-page/LandingPage';

const App: NextPage = () => {
  const basePath = useRouter().basePath;
  const src = '/my-photo.png';
  const finalSrc = basePath?.charAt(0) === '/' ? basePath + src : src;
  return (
    <div>
      <LandingPage photoSrc={finalSrc} />
    </div>
  );
};

export default App;
