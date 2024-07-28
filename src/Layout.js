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
                  <Link className="nav-link" to="/contactmanager">C M</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/useReducer">useReducer</Link>
              </li>
              <li className="nav-item">
                  {isAuthenticated && <Link className="nav-link" to="/todotask">Todo Task</Link>}
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/counterComp">CC </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/counterCompA">CC A</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dtitlea">DT A</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dtitleb">DT B</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
