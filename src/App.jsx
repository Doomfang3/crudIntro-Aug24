import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllProjectsPage from './pages/AllProjectsPage'
import OneProjectPage from './pages/OneProjectPage'
import NewProjectPage from './pages/NewProjectPage'
import UpdateProjectPage from './pages/UpdateProjectPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/projects' element={<AllProjectsPage />} />
        <Route path='/projects/:projectId' element={<OneProjectPage />} />
        <Route path='/projects/new' element={<NewProjectPage />} />
        <Route path='/projects/:projectId/update' element={<UpdateProjectPage />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </>
  )
}

export default App
