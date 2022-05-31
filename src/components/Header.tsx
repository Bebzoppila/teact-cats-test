import { FC } from "react";
import NavItem from "./NavItem";

type LinkInfo = {
  path: string;
  linkText: string;
};

type HeaderProps = {
  links: LinkInfo[];
};

const Header: FC<HeaderProps> = ({ links }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav__list">
            {links.map((link) => (
              <NavItem
                key={link.path}
                linkText={link.linkText}
                path={link.path}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
