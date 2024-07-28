import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 px-12 bg-gray-600 text-white">
      <div className="w-20 logo-container">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
      </div>
      
      <div className="flex gap-4 buttons-container" translate="no">
        <Link className="button" to="/tasks/list">
            Taskslist
        </Link>
        <Link className="button" to="/tasks/create">
          Create Task
        </Link>
      </div>
    </nav>
  )
}

export default NavBar