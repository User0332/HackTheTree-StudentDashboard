import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../SubComponents/Logo";
import Profile from "../SubComponents/Profile";
// import Button from './Button'

const Section = styled.section`
  width: 100vw;
  background-color: lightblue;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: 5rem;
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: black;
  cursor: pointer;
  font-weight: 600;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: black;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
    return (
        <Section>
        <Nav>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Schedule</MenuItem>
          <MenuItem>
          Courses
          </MenuItem>
          <MenuItem>Notes</MenuItem>
          <MenuItem>Chat</MenuItem>
          <MenuItem>
          <Profile/>
          </MenuItem>
        </Menu>
      </Nav>
    </Section>
  );
};
// <Button text="Connect Wallet" link="//www.google.com/"/>

export default Navbar;
