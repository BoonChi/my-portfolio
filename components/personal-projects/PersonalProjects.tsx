import { Card } from 'react-bootstrap';
import CustomButton from 'components/common/button/CustomButton';
import personalProjectsStyle from './PersonalProjects.module.scss';
import Router from 'next/router';
interface IPersonalProjectsProps {
  url: string;
  title: string;
  link: string;
  buttonColor: string;
  desc: string;
  imgSrc: string;
}

type Props = {
  projects: Array<IPersonalProjectsProps>;
};

const PersonalProjects = ({ projects }: Props) => {
  return (
    <div
      className={personalProjectsStyle['personal-projects']}
      id="personal-projects"
    >
      {projects.map((project, index) => (
        <Card
          bg="light"
          key={index}
          className={personalProjectsStyle['card-body']}
        >
          <Card.Img variant="top" src={project.imgSrc} alt={project.imgSrc} />
          <Card.Body>
            <Card.Text>{project.desc} </Card.Text>
            <div className={personalProjectsStyle['inline-buttons']}>
              <CustomButton
                buttonVariant={'info'}
                buttonName="Try it"
                buttonHandler={() =>
                  project.url?.charAt(0) === '/'
                    ? Router.push(project.url)
                    : window.open(project.url, '_blank')
                }
              ></CustomButton>
              <CustomButton
                buttonVariant={'success'}
                buttonName="Code"
                buttonHandler={() => window.open(project.link, '_blank')}
              ></CustomButton>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PersonalProjects;
