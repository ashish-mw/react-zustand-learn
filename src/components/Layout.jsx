import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useStore } from "../store";

const Layout = ({ children, title }) => {
  const user = useStore((state) => state.user);
  const clearUser = useStore((state) => state.clearUser);

  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "...";
    }
  }, [title]);

  const handleClick = () => {
    clearUser();
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            {user ? (
              <button onClick={handleClick}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>

      <hr />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
