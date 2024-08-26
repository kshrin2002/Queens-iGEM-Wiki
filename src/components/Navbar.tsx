import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
            <NavDropdown.Item
              key={`subpage-${pageIndex}-${subpageIndex}`}
              as={Link}
              to={subpage.path}
            >
              {subpage.name}
            </NavDropdown.Item>
          );
        }
        return null;
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id="basic-nav-dropdown"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      return (
        <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
          {item.name}
        </Nav.Link>
      );
    }
    return null;
  });

  return (
    <BootstrapNavbar
      expand={false}
      className={`transparent-navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top"
      id="navbar"
    >
      <Container fluid className="d-flex justify-content-end">
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav>{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
