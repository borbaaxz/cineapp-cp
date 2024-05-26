import { useEffect, useState } from 'react';
import NavBar from "../NavBar/Navbar";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({ user, isLogged, button }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header
      className={`p-5 w-full bg-black dark:bg-dark-800 flex flex-col sm:flex-row justify-between items-center shadow-md transform transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
        {isLogged ? (
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              src={user.picture}
              alt="profile"
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-200 transform transition-transform duration-300 hover:scale-110"
            />
            <span className="text-gray-100 text-lg sm:text-xl">
              Olá, {user.given_name}
            </span>
            {button}
          </div>
        ) : (
          <span className="text-gray-100 text-lg sm:text-xl">Olá, Visitante</span>
        )}
        <h1 className="text-gray-100 text-2xl sm:text-4xl font-bold text-center sm:text-left">
          Bem vindo ao CineApp!
        </h1>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <NavBar />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
