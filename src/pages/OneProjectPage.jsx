import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const OneProjectPage = () => {
  const navigate = useNavigate()

  const { projectId } = useParams()

  const [project, setProject] = useState({})

  const getOneProject = async () => {
    try {
      const response = await fetch(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`
      )
      if (response.ok) {
        const data = await response.json()
        setProject(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOneProject()
  }, [])

  const handleDelete = async () => {
    const response = await fetch(
      `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`,
      { method: 'DELETE' }
    )
    if (response.ok) {
      navigate('/projects')
    }
  }

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Link to={`/projects/${projectId}/update`}>Update</Link>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </>
  )
}

export default OneProjectPage
