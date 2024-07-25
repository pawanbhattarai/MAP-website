"use client"; // Marking the file as a client-side component
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import Logo from "../../public/images/MapTechLogo.png";
import ThemeToggles from "./ThemeToggles";
import { useTheme } from "../ThemeProvider."; // Fixed typo here

const navLinks = [
  { title: "Services", path: "#services" },
  { title: "About us", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Career", path: "#career" },
  { title: "Contact", path: "#contact" },
];

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #154b9a;
  color: ${(props) => props.theme.navText};
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
  &.scrolled {
    background-color: rgba(21, 75, 154, 0.6); /* Adjust opacity to achieve transparency */
    backdrop-filter: blur(10px); /* Optional: adds blur effect */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.navText};
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  &.active {
    color: #0a0119; /* Active color */
    font-weight: 700;
    // text-decoration: underline;
  }
  &:hover {
    color: #e35007; /* Change to a complementary hover color */
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  const { theme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      navLinks.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveLink(link.path);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event, path) => {
    event.preventDefault();
    setActiveLink(path);
    setNavbarOpen(false);

    // Smooth scroll to the section
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Nav className={scrolled ? "scrolled" : ""}>
      <div className="flex container flex-wrap items-center justify-between mx-auto mb-10px">
        <NavLink href="/" onClick={(e) => handleNavLinkClick(e, "/")}>
          <Image src={Logo} alt="Logo Icon" height={40} />
        </NavLink>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex md:w-auto md:items-center" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white ml-1 font-bold">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  className={activeLink === link.path ? "active" : ""}
                  onClick={(e) => handleNavLinkClick(e, link.path)}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* <div className="flex flex-col text-white px-5 py-2">
            <ThemeToggles /> 
          </div> */}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} onLinkClick={handleNavLinkClick} /> : null}
    </Nav>
  );
};

export default Navbar;
