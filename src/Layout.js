import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <Link to="/emplist">Employee List</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/studentlist">Student List</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/customerlist">Customer List</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/countera">Counter A</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/counterb">Counter B</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/useReducer">useReducer</Link>
                </a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
