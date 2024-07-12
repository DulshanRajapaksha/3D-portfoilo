import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-28 h-10 rounded-lg bg-white items-center justify-center flex font-extrabold shadow-md">
        <p className="blue-gradient_text">Dulshan_R</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600 font-bold underline" : "text-black  hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-200 from-10% to-yellow-200 to-90% " }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600 font-bold underline" : "text-black hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-200 from-10% to-yellow-200 to-90% "}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
