import React from 'react';
import '../style/logo.css';

const Logo = ({ size = '' }) => {
  return (
    <>
      <div className={`logoContainer ${size}`}>
        <div className="circle">
          <div className="feather"></div>
          <div className="scape"></div>
        </div>
      </div>
    </>
  );
};

export default Logo;
