import { navLinks } from '@/utils/navLinks'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='bg-black w-[80%] rounded-xl py-2 px-4'>
      {
        navLinks.map((object, index) => (
          <Link to={object.path} key={index}>{object.icon}</Link>
        ))
      }
    </div>
  )
}