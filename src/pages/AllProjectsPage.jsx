import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProjectsPage = () => {
  const [projects, setProjects] = useState([])

  const getAllProjects = async () => {
    try {
      const response = await fetch(
        'https://project-management-api-4641927fee65.herokuapp.com/projects'
      )
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProjects()
  }, [])

  return (
    <>
      <h1>All Projects</h1>
      <ul>
        {projects.map(currentProject => (
          <li key={currentProject.id}>
            <Link to={`/projects/${currentProject.id}`}>{currentProject.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllProjectsPage
