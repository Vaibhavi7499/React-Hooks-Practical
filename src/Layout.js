import React,{useState} from "react";
import { Link } from "react-router-dom";

const Layout = () => {

  let [isAuthenticated,setAuthenticated] = useState(true);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/emplist">
                  Employee List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentlist">
                  Student List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customerlist">
                  Customer List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/countera">
                  Counter A
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counterb">
                  Counter B
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/contactmanager">Contact Manager</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/useReducer">useReducer</Link>
              </li>
              <li className="nav-item">
                  {isAuthenticated && <Link className="nav-link" to="/todotask">Todo Task</Link>}
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/counterComp">Counter Comp</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/counterCompA">Counter Comp A</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
