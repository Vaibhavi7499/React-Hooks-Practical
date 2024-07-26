import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page">
                  <Link to="/emplist">Employee List</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/studentlist">Student List</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/customerlist">Customer List</Link>
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
