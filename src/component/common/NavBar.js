import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-evenly mx-auto">
        <Link className="text-xl font-bold text-white" to={"/"}>
          SBR Demo
        </Link>
        
        <div className="lg:flex lg:items-center lg:justify-end" id="navbarNav">
          <ul className="lg:flex lg:space-x-4">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/"}
              >
                View All Students
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/add-students"}>
                Add New Students
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
