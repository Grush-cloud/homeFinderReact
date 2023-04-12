import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

export default function Root() {
  return (
    <>
      <nav>
        <ul className="NavBar">
          <li>
            <Link to="/homeFinderReact" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/homeFinderReact/about-us" className="nav-links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/homeFinderReact/listings" className="nav-links">
              Listings
            </Link>
          </li>
          <li>
            <Link to="/homeFinderReact/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/homeFinderReact/list-apartment" className="nav-links">
              List Apartment
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
