import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWarpper,
  SideBarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWarpper>
        <SideBarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="contact" onClick={toggle}>
            Contact
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWarpper>
    </SidebarContainer>
  );
};

export default Sidebar;
