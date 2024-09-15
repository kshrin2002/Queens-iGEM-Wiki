import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true); // Track whether to show the navbar
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null); // Track the index of the currently open dropdown
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dropdownStates, setDropdownStates] = useState<boolean[]>([]);

  useEffect(() => {
    // Initialize dropdownStates based on the number of dropdowns
    setDropdownStates(Pages.map(() => false));
  }, [Pages]);

  // Function to check if mouse is near the currently open dropdown
  const isMouseNearDropdown = (mouseX: number, mouseY: number) => {
    if (openDropdownIndex === null || dropdownRefs.current[openDropdownIndex] === null) {
      return false;
    }

    const ref = dropdownRefs.current[openDropdownIndex];
  
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(mouseX - (rect.left + rect.width / 2), 2) +
        Math.pow(mouseY - (rect.top + rect.height / 2), 2)
      );
  
      return distance < 200;
    }
    
    return false;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const isNearDropdown = isMouseNearDropdown(e.clientX, e.clientY);
      const shouldShowNavbar = e.clientY <= 50 || isNearDropdown || openDropdownIndex !== null;
      setShowNavbar(shouldShowNavbar);

      if (!isNearDropdown && openDropdownIndex !== null) {
        // Close the currently open dropdown when mouse is far away
        setDropdownStates(states => states.map((_, index) => index === openDropdownIndex ? false : states[index]));
        setOpenDropdownIndex(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [openDropdownIndex]);

  const handleDropdownToggle = (isOpen: boolean, index: number) => {
    setDropdownStates(states => states.map((state, i) => i === index ? isOpen : state));
    if (isOpen) {
      setOpenDropdownIndex(index);
    } else if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    }
  };

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
      });
      return (
        <div className="items" key={`dropdown-${pageIndex}`}>
          <NavDropdown
            title={item.name}
            id={`nav-dropdown-${pageIndex}`}
            onToggle={(isOpen) => handleDropdownToggle(isOpen, pageIndex)}
            ref={(el: HTMLDivElement | null) => (dropdownRefs.current[pageIndex] = el)} // Store ref for each dropdown
            show={dropdownStates[pageIndex]} // Controlled component to handle dropdown visibility
          >
            {folderItems}
          </NavDropdown>
        </div>
      );
    } else if ("path" in item && item.path) {
      return (
        <div className="items" key={`page-${pageIndex}`}>
          <Nav.Link key={`page-${pageIndex}`} as={Link} to={item.path}>
            {item.name}
          </Nav.Link>
        </div>
      );
    }
  });

  return (
    <>
      {/* Placeholder image only visible when the navbar is hidden */}
      <div className={`navbar-placeholder ${showNavbar ? "hidden" : "visible"}`}>
        <img src="https://static.igem.wiki/teams/5079/rose-logo.png" alt="Menu" />
      </div>

      {/* Full Navbar that transitions smoothly */}
      <BootstrapNavbar
        expand="lg"
        className={`bg-body-tertiary full-navbar ${showNavbar ? "visible" : "hidden"}`}
        fixed="top"
      >
        <Container>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="left-aligned">{pages}</Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
}
