import React from "react";
import { Logo } from "../../../assets/style/NavbarStyle";
import comp from "../../../assets/addis.jpg";

const LogoItem: React.FC = () => {
  return (
    <Logo>
      <img
        src={comp} // Use the imported image here
        alt="Logo"
        style={{ width: "100px", height: "70px", marginRight: "50px" ,marginLeft:"30px"}}
      />
          Songs 
    </Logo>
  );
};

export default LogoItem;
