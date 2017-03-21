import React from 'react';
import logo from '../../../public/logo_horizontal_v2.png';

const styles = {
    backgroundColor: "white",
    height: "70px",
    padding: "10px",
    color: "black",
    fontStyle: "italic",
    fontFamily: "arial",
    borderBottom: "thin solid",
  }

const LogoPresentation = () => {
  return (
    <div className="logo" style={styles}>
      <img src={logo} className="App-logo" alt="logo"  style={{height: styles.height}} />
    </div>
  )
}

export default LogoPresentation;
