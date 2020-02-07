import React from 'react';
import '../style/kitty.css';

const Kitty = () => {
  return (
    <>
      <div className="kittyContainer">
        <div className="kitty">
          <div className="body"></div>
          <div className="head">
            <div className="ears">
              <div className="ear-left"></div>
              <div className="ear-right"></div>
            </div>
            <div className="face">
              <div className="eye-left"></div>
              <div className="eye-right"></div>
              <div className="nose"></div>
            </div>
          </div>
          <div className="tail"></div>
        </div>
      </div>
    </>
  );
}

export default Kitty;