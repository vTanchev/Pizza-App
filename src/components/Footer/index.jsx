import React from "react";

const Footer = () => {
  return (
    <footer>
      <p
        style={{
          background: "#c49ef7",
          padding: "10px",
          color: "white",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
