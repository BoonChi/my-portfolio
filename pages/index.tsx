import React, { useState } from 'react'
import { NextPage } from 'next'
import { Container } from 'react-bootstrap'
import PersonalProjects from 'components/personal-projects/PersonalProjects'
import LandingPage from 'components/landing-page/LandingPage'

const projectsArray = [
  {
    url: '/todo',
    title: 'Todo App',
    description: 'Make your todo lists now ✔️',
    buttonColor: 'info',
  },
  {
    url: '/pomodoro',
    title: 'Pomodoro App',
    description: 'Why not use our Pomodoro tracker ⏰',
    buttonColor: 'danger',
  },
]

const App: NextPage = () => {
  const [showProject, setShowProject] = useState(false)
  const handleShowProject = () => setShowProject(true)
  return (
    <Container fluid='sm' className='main-container'>
      {showProject ? (
        <PersonalProjects projects={projectsArray} />
      ) : (
        <LandingPage handleShowProject={handleShowProject} />
      )}
    </Container>
  )
}

export default App
