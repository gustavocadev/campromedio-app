import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="h-[97px]">
      <nav className="flex flex-col items-center justify-between h-full md:flex-row">
        <Link to="/">
          <figure className="w-full sm:w-[450px] my-2 sm:m-0">
            <img src="/img/campromedio.png" alt="Logo-Cam-Promedio" />
          </figure>
        </Link>
        <ul className="flex m-2 sm:m-0">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#ffbe76]" : "")}
              to="/"
            >
              <span className="font-semibold text-[18px] uppercase">Home</span>
            </NavLink>
          </li>
          <li className="ml-[40px]">
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#ffbe76]" : "")}
              to="/contributes"
            >
              <span className="font-semibold text-[18px] uppercase ">
                Contributes
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
