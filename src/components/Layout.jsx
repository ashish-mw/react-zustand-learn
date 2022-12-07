import { useEffect } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children, title }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "...";
    }
  }, [title]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
