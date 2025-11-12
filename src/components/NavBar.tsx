import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className={`navbar-item ${path === '/' ? 'is-active' : ''}`}
            data-cy="HomeLink"
          >
            Home
          </Link>

          <Link
            to="/tabs"
            className={`navbar-item ${path.startsWith('/tabs') ? 'is-active' : ''}`}
            data-cy="TabsLink"
          >
            Tabs
          </Link>
        </div>
      </div>
    </nav>
  );
};
