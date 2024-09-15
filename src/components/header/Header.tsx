import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../theme-provider';
import { ModeToggle } from '../mode-toggle';

const Header = () => {
  const { setTheme } = useTheme();
  return (
    <header className="h-[97px]">
      <nav className="flex flex-col items-center justify-between h-full md:flex-row">
        <Link to="/">
          <figure className="w-full sm:w-[450px] my-2 sm:m-0">
            <img src="/img/campromedio.png" alt="Logo-Cam-Promedio" />
          </figure>
        </Link>
        <ul className="flex m-2 sm:m-0 gap-6 justify-center items-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-orange-500 dark:text-[#ffbe76]' : ''
              }
              to="/"
            >
              <span className="font-semibold text-[18px] uppercase">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-orange-500 dark:text-[#ffbe76]' : ''
              }
              to="/contributes"
            >
              <span className="font-semibold text-[18px] uppercase ">
                Contributes
              </span>
            </NavLink>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
