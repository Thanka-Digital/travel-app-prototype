import { navLinks } from '@/utils/navLinks'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='fixed bottom-6 left-1/2 -translate-x-1/2 bg-black w-[90%] rounded-3xl p-4 flex justify-between'>
      {
        navLinks.map((object, index) => (
          <NavLink to={object.path} key={index} className={({ isActive }) =>
            isActive ? "text-white" : "text-gray-700"}>{object.icon}</NavLink>
        ))
      }
    </nav>
  )
}