import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-white p-4 shadow-md">
      <ul className="flex justify-between">
        <li className="p-4">
          <NavLink
            exact
            to="/"
            className="text-black hover:border-b-2 hover:border-black transition duration-300"
            activeClassName="border-b-2 border-black"
          >
            Home
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/filmes"
            className="text-black hover:border-b-2 hover:border-black transition duration-300"
            activeClassName="border-b-2 border-black"
          >
            Filmes
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/sobre"
            className="text-black hover:border-b-2 hover:border-black transition duration-300"
            activeClassName="border-b-2 border-black"
          >
            Sobre
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/contato"
            className="text-black hover:border-b-2 hover:border-black transition duration-300"
            activeClassName="border-b-2 border-black"
          >
            Contato
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/series"  
            className="text-black hover:border-b-2 hover:border-black transition duration-300"
            activeClassName="border-b-2 border-black"
          >
             series
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink
            to="/filmesvir"  
            className="text-black hover:border-b-2 hover:border-black transition duration-300"
            activeClassName="border-b-2 border-black"
          >
             filmes que estão por vir 
          </NavLink>
      
        </li>
      </ul>
    </nav>
  );
}
