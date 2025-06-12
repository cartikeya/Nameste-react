import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="nav-bar">
    <div className="nav-logo">
      <img className="logo" src={LOGO_URL} alt="Logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

export default Header;
