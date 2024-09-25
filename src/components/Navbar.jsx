import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>All projects</Link>
        </li>
        <li>
          <Link to='/projects/new'>New project</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
