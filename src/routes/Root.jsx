import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

export default function Root() {
  return (
    <>
      <nav>
        <ul className="NavBar">
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/listings" className="nav-links">
              Listings
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/list-apartment" className="nav-links">
              List Apartment
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
