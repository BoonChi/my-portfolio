import { Card } from 'react-bootstrap';
import CustomButton from 'components/common/button/CustomButton';
import personalProjectsStyle from './PersonalProjects.module.scss';
import Router from 'next/router';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IPersonalProjectsProps {
  url: string;
  title: string;
  link: string;
  buttonColor: string;
  desc: string;
}

type Props = {
  projects: Array<IPersonalProjectsProps>;
};

const PersonalProjects: React.FC<Props> = ({ projects }) => {
  return (
    <div id="personal-projects">
      {projects.map((project, index) => (
        <Card
          bg="light"
          key={index}
          className={personalProjectsStyle['card-body']}
        >
          <Card.Header>
            {project.title.toUpperCase()}{' '}
            <FontAwesomeIcon
              icon={faCode}
              onClick={() => Router.push(project.link)}
              style={{ float: 'right' }}
            ></FontAwesomeIcon>
          </Card.Header>
          <Card.Body>
            <Card.Title>{project.desc} </Card.Title>
            <CustomButton
              buttonVariant={project.buttonColor}
              buttonName="Lets try"
              buttonHandler={() => Router.push(project.url)}
            ></CustomButton>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PersonalProjects;
