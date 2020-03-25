import React from 'react';
import { FiMenu } from 'react-icons/fi';
import './AppHeader.scss';

const Menu = () => (
  <>
    <button className="btn btn-link" type="button">
      <FiMenu />
    </button>
    <nav className="navbar hidden">
      <ul className="navbar-nav">
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  </>
);

const AppHeader = ({ title = 'cxLoyalty' }) => {
  return (
    <header className="header">
      <div className="container flex items-center pl-0">
        <Menu />
        <div className="header__title">{title}</div>
      </div>
    </header>
  );
};

AppHeader.propTypes = {};

export default AppHeader;
