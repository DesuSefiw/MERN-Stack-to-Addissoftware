import React, { useState } from "react";
import { NavLink, NavbarContainer, Nav, StyledButton } from "../../../assets/style/NavbarStyle";
import LogoItem from "./LogoItem";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { Link } from 'react-router-dom';
const NavHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <LogoItem />
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </StyledButton>
      <Nav>
      <NavLink   to="/songs"> Find  Songs

        
        
         
        </NavLink>
      </Nav>
      <MobileMenu isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default NavHome;
