import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import ScFooter from "./ScFooter";

function Footer() {
  return (
    <ScFooter>
      <footer className="footer">
          <Nav>
            <NavItem>
              <NavLink href="https://www.instagram.com/aspehli1/">
              Aspehli1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/works">
                Works
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/resume">
                Resume
              </NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <a
              href="https://www.linkedin.com/in/ahmet-selim-pehlivan-ba147916a/"
              target="_blank"
            >
              ASP
            </a>
          </div>
      </footer>
    </ScFooter>
  );
}

export default Footer;
