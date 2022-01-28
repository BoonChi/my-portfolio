import Link from "next/link";
import { Card } from "react-bootstrap";
import CustomButton from "components/common/button/CustomButton";
import personalProjectsStyle from "./PersonalProjects.module.scss";

interface IPersonalProjectsProps {
  url: string;
  title: string;
  description: string;
  buttonColor: string;
}

type Props = {
  projects: Array<IPersonalProjectsProps>;
};

const PersonalProjects: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => (
        <Card
          bg="light"
          key={index}
          className={personalProjectsStyle["card-body"]}
        >
          <Card.Header>Featured {index + 1}</Card.Header>
          <Card.Body>
            <Card.Title className={personalProjectsStyle.shaking}>
              {project.title}
            </Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Link href={project.url} passHref>
              <a>
                <CustomButton
                  buttonVariant={project.buttonColor}
                  buttonName="Lets try"
                ></CustomButton>
              </a>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PersonalProjects;
