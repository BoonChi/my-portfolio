import MainLayout from 'components/layouts/MainLayout';
import React from 'react';
import AboutMeStyle from './AboutMe.module.scss';

const AboutMe: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <div className={AboutMeStyle['main']}>
        <div className={AboutMeStyle['main-text']}>
          <p>
            Currently I am based in <strong>Poland</strong> and I
            <strong> DO NOT </strong>require a visa sponsorship
          </p>
        </div>
        <div className={AboutMeStyle['lists']}>
          <ul>
            <strong>Frontend stack:</strong>
            <li>SASS</li>
            <li>React NextJs Framework</li>
            <li>Automation Unit test Jest</li>
            <li>Automation integration test Playwright</li>
          </ul>

          <ul>
            <strong>Backend stack:</strong>
            <li>Node.js(express)</li>
            <li>NoSql and Sql database</li>
            <li>Automation Unit test Jest</li>
          </ul>

          <ul>
            <strong>DevOps:</strong>
            <li>CI/CD(github)</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutMe;
