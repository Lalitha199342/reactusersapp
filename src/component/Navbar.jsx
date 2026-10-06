import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="brand">
          User Directory
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/users">
            Users
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;