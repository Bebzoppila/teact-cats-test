import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
type NavItemProps = {
  linkText: string;
  path: string;
};

const NavItem: FC<NavItemProps> = ({ linkText, path }) => {
  const location = useLocation();

  return (
    <li className="nav__item">
      <Link
        className={
          "nav__link " +
          (location.pathname === path ? " nav__link--active" : " ")
        }
        to={path}
      >
        {linkText}
      </Link>
    </li>
  );
};

export default NavItem;
