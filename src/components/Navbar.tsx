import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import "./Navbar.css";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // Track if the hamburger menu is open
  const [isMouseInsideMenu, setIsMouseInsideMenu] = useState(false); // Track if mouse is inside the hamburger menu
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref for hamburger menu
  const hamburgerRef = useRef<HTMLButtonElement | null>(null); // Ref for hamburger button
  const [dropdownStates, setDropdownStates] = useState<boolean[]>([]);

  useEffect(() => {
    setDropdownStates(Pages.map(() => false));
  }, [Pages]);

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

  const isMouseInsideMenuBox = (mouseX: number, mouseY: number) => {
    if (!menuRef.current) return false;
    const rect = menuRef.current.getBoundingClientRect();
    return (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    );
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const isNearDropdown = isMouseNearDropdown(e.clientX, e.clientY);
      const isInsideMenu = isMouseInsideMenuBox(e.clientX, e.clientY);
      setIsMouseInsideMenu(isInsideMenu); // Set the state for mouse inside hamburger menu

      // Handle navbar visibility for desktop and mobile view
      const shouldShowNavbar =
        e.clientY <= 50 || isNearDropdown || openDropdownIndex !== null || isHamburgerOpen;

      if (!isHamburgerOpen) {
        setShowNavbar(shouldShowNavbar);

        if (!isNearDropdown && openDropdownIndex !== null) {
          setDropdownStates((states) =>
            states.map((_, index) => (index === openDropdownIndex ? false : states[index]))
          );
          setOpenDropdownIndex(null);
        }
      } else {
        setShowNavbar(true); // Ensure the navbar is shown when hamburger is open
      }

      // Handle closing of hamburger menu and dropdowns if mouse moves outside
      if (!isInsideMenu && isHamburgerOpen) {
        if (hamburgerRef.current) {
          // Simulate a click on the hamburger icon to toggle it closed
          hamburgerRef.current.click();
        }
        setDropdownStates((states) => states.map(() => false)); // Close all dropdowns
        setOpenDropdownIndex(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [openDropdownIndex, isHamburgerOpen]);

  const handleDropdownToggle = (isOpen: boolean, index: number) => {
    setDropdownStates((states) => states.map((state, i) => (i === index ? isOpen : state)));
    if (isOpen) {
      setOpenDropdownIndex(index);
    } else if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
    }
  };

  const handleHamburgerToggle = (isOpen: boolean) => {
    setIsHamburgerOpen(isOpen);
    setShowNavbar(isOpen); // Ensure navbar remains visible when hamburger is open
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
            ref={(el: HTMLDivElement | null) => (dropdownRefs.current[pageIndex] = el)}
            show={dropdownStates[pageIndex]}
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
      {/* Placeholder image that slides left when the navbar is visible */}
      <div className={`navbar-placeholder ${showNavbar ? "slide-left" : "slide-center"}`}>
        <img src="https://static.igem.wiki/teams/5079/rose-logo.png" alt="Menu" />
      </div>

      {/* Full Navbar that transitions smoothly */}
      <BootstrapNavbar
        expand="lg"
        className={`bg-body-tertiary full-navbar ${showNavbar ? "visible" : "hidden"}`}
        fixed="top"
        ref={menuRef} // Ref for the hamburger menu
      >
        <Container>
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => handleHamburgerToggle(!isHamburgerOpen)} // Track hamburger menu state
            ref={hamburgerRef} // Ref for the hamburger button
          />
          <BootstrapNavbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav className="left-aligned">{pages}</Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
}
