import React from 'react';
import Logo from '../components/Logo';
import '../style/header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo size="medium" />
        <h1 className="header__title">Sensitive</h1>
      </div>
    </>
  );
};

export default Header;
