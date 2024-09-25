import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProjectPage = () => {
  const navigate = useNavigate()

  const { projectId } = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const getOneProject = async () => {
    try {
      const response = await fetch(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`
      )
      if (response.ok) {
        const data = await response.json()
        setTitle(data.title)
        setDescription(data.description)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getOneProject()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    const updatedProject = {
      title,
      description,
    }

    try {
      const response = await fetch(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(updatedProject),
        }
      )

      if (response.ok) {
        const data = await response.json()
        navigate(`/projects/${data.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Update Project</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title: <input value={title} onChange={event => setTitle(event.target.value)} required />
        </label>
        <label>
          Description:{' '}
          <input
            value={description}
            onChange={event => setDescription(event.target.value)}
            required
          />
        </label>
        <button type='submit'>Update project</button>
      </form>
    </>
  )
}

export default UpdateProjectPage
