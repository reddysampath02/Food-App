import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  useEffect(() => {}, [setBtnNameReact]);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between px-5 shadow-lg">
      <div className="logo-container">
        <img className=" pl-6 w-28" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex ">
          <li className="p-3 text-lg  hover:text-orange-500 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 text-lg hover:text-orange-500 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="p-3 text-lg hover:text-orange-500 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3 text-lg hover:text-orange-500 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3 text-lg hover:text-orange-500 font-bold">
            <Link to={"/cart"}> Cart ({cartItems.length} Items)</Link>
          </li>
          <button
            className="p-3 text-lg hover:text-orange-500 font-bold"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
