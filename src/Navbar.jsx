
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Employee Dashboard
        </Link>

        <div className="navbar-nav ms-auto flex-row gap-3">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>

          <Link className="nav-link text-white" to="/employee-form">
            Employee Form
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
