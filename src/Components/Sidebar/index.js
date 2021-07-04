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
          <SidebarLink
            to="about"
            smooth="true"
            duration="1000"
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="skills"
            smooth="true"
            duration="1000"
            onClick={toggle}
          >
            Skills
          </SidebarLink>
          <SidebarLink
            to="projects"
            smooth="true"
            duration="1000"
            onClick={toggle}
          >
            Projects
          </SidebarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute
            to="contact"
            smooth="true"
            duration="1000"
            onClick={toggle}
          >
            Contact
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWarpper>
    </SidebarContainer>
  );
};

export default Sidebar;
