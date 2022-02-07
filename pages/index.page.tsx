import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import PersonalProjects from 'components/personal-projects/PersonalProjects';
import LandingPage from 'components/landing-page/LandingPage';

const projectsArray = [
  {
    url: '/todo',
    title: 'To do',
    description: 'Make your todo lists now 📝',
    buttonColor: 'info',
  },
  {
    url: '/pomodoro',
    title: 'Pomodoro',
    description: 'Lets use our Pomodoro tracker ⏰',
    buttonColor: 'danger',
  },
];

const App: NextPage = () => {
  const [showProject, setShowProject] = useState(false);
  const handleShowProject = () => setShowProject(true);

  const basePath = useRouter().basePath;
  const src = '/my-photo.png';
  const finalSrc = basePath?.charAt(0) === '/' ? basePath + src : src;
  return (
    <Container fluid="sm">
      {showProject ? (
        <PersonalProjects projects={projectsArray} />
      ) : (
        <LandingPage
          handleShowProject={handleShowProject}
          photoSrc={finalSrc}
        />
      )}
    </Container>
  );
};

export default App;
