import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="z-50 fixed left-0 right-0 top-0 h-16 shadow-md border-b-2">
      <nav className="flex items-center container mx-auto h-full justify-between p-2">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
        Rick and Morty
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/" className="text-gray-200 hover:text-gray-100 hover:bg-orange-400">Home</Link></li>
            <li><Link to="/characters" className="text-gray-200 hover:text-gray-100">Characters</Link></li>
            <li><Link to="/episodes" className="text-gray-200 hover:text-gray-100">Episodes</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar