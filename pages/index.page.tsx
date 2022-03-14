import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import PersonalProjects from 'components/personal-projects/PersonalProjects';
import LandingPage from 'components/landing-page/LandingPage';

const projectsArray = [
  {
    url: '/todo',
    title: 'To do',
    link: 'https://github.com/BoonChi/my-portfolio',
    buttonColor: 'info',
    desc: 'NextJs with Redux Store',
  },
  {
    url: '/pomodoro',
    title: 'Pomodoro',
    link: 'https://github.com/BoonChi/my-portfolio',
    buttonColor: 'success',
    desc: 'React,UseState,UseEffect',
  },
  {
    url: 'https://chi-chat-box-demo.herokuapp.com/',
    title: '[In progress] Chat Box',
    link: 'https://github.com/BoonChi/chatBox-NestJs-Postgres-ReactJs-Typescript',
    buttonColor: 'danger',
    desc: 'Nestjs Websocket Postgres,NextJs with typescript',
  },
];

const App: NextPage = () => {
  const [showProject, setShowProject] = useState(false);
  const handleShowProject = () => setShowProject(true);

  const basePath = useRouter().basePath;
  const src = '/my-photo.png';
  const finalSrc = basePath?.charAt(0) === '/' ? basePath + src : src;
  return (
    <div>
      {showProject ? (
        <PersonalProjects projects={projectsArray} />
      ) : (
        <LandingPage
          handleShowProject={handleShowProject}
          photoSrc={finalSrc}
        />
      )}
    </div>
  );
};

export default App;
