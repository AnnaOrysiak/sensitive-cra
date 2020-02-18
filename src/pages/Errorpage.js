import React from 'react';
import '../style/errorpage.css';

const Errorpage = () => {
  return (
    <div className="container">
      <h3 className="err-info">Błąd</h3>
      <h2 className="bigInt">404</h2>
      <h3 className="err-info">Strona o podanym adresie nie istnieje</h3>
      <div className="fly"></div>

      <div className="err-kittyCont">
        <div className="err-kitty">
          <div className="err-body"></div>
          <div className="err-head">
            <div className="err-ears">
              <div className="err-ear-left"></div>
              <div className="err-ear-right"></div>
            </div>
            <div className="err-face">
              <div className="err-eye-left"></div>
              <div className="err-eye-right"></div>
              <div className="err-nose"></div>
              <div className="whiskers-right"></div>
              <div className="whiskers-left"></div>
            </div>
          </div>
          <div className="err-tail"></div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
