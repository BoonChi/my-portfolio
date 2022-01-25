import Link from 'next/link'
import { Card, Row, Col, Button } from 'react-bootstrap'

interface IPersonalProjectsProps {
  url: string
  title: string
  description: string
  buttonColor: string
}

type Props = {
  projects: Array<IPersonalProjectsProps>
}

const PersonalProjects: React.FC<Props> = ({ projects }) => {
  return (
    <div>
      <Row xs={1} md={projects.length} className='g-4'>
        {projects.map((project, index) => (
          <Col key={index}>
            <Card bg='light' border='dark'>
              <Card.Header>Featured {index + 1}</Card.Header>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Link href={project.url} passHref>
                  <Button variant={project.buttonColor}>Lets try</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PersonalProjects
