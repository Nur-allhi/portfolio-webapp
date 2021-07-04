import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
// import { animateScroll as scroll } from "react-scroll/modules/mixins/animate-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarStyle";

const Navbar = ({ toggle }) => {
  const Scroll = require("react-scroll");
  const scroll = Scroll.animateScroll;

  const [scrollNav, SetScrollNav] = useState(false);

  const handleNavbarBg = () => {
    if (window.scrollY >= 60) {
      SetScrollNav(true);
    } else {
      SetScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarBg);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo onClick={() => scroll.scrollToTop()}>Nur</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth="true" duration="1000">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="skills" smooth="true" duration="1000">
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects" smooth="true" duration="1000">
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="contact" smooth="true" duration="1000">
              Contact
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
