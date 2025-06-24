import { useState, lazy } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlinestatus from "../utils/useOnlinestatus";
const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onlinestatus = useOnlinestatus();

  return (
    <div className="flex justify-between bg-yellow-300 shadow-lg">
      <div className="nav-logo">
        <img className="w-32" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-10 ">
          <li className="px-4">
            Online status: {onlinestatus ? "✅ Online" : "🔴 Offline"}
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
