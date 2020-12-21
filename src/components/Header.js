import { Link } from 'react-router-dom';

const Header = () => {

  return (
    
    <header className="flex justify-between py-4 xl:px-32 md:px-12 px-6 head-10 shadow">
      <p className="lg:w-2/4 sm:w-1/4 text-black font-semibold uppercase">Walter Daniel Huaynapata </p>
      <div className="lg:w-2/4 sm:w-3/4 flex flex-row justify-end">
        <Link to="/" className="font-medium border-b-2 hover:border-red-600">About me</Link>
        <Link to="/skills" className="font-medium pl-12 hover:border-red-600">My Skills</Link>
        <Link to="/work" className="font-medium pl-12 hover:border-red-600">My work</Link>
        {/* <Link to="/contact" className="font-medium pl-12 hover:border-red-600">Contact</Link> */}
      </div>
    </header>    
  )
}

export default Header;