import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import ScFooter from "./ScFooter";

function Footer() {
  return (
    <ScFooter>
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="https://www.instagram.com/aspehli1/">
              Aspehli1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                Blog
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
        </Container>
      </footer>
    </ScFooter>
  );
}

export default Footer;
