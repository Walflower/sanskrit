import "./Header.scss";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <NavLink to="/">
        <Logo />
      </NavLink>
    </header>
  );
}
export default Header;
