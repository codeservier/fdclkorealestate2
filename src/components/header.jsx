import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from '../assets/svg/logo.svg'

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [viewstate, setViewState] = useState("Sign in");
  const auth = getAuth();

  function getPath(route) {
    return location.pathname === route;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setViewState("Profile");
      } else {
        setViewState("Login");
      }
    });
  }, [auth]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-mywhite shadow-sm shadow-primary/10  sticky top-0 z-40 px-1">
      <header className="flex justify-between items-center px-2 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-12 cursor-pointer flex-shrink-0"
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          />
          <span
            className={`ml-2  text-3xl font-bold text-primary cursor-pointer `}
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          >
            FDCLKO
          </span>
        </div>

        {isMobile ? (
          <div className="flex items-center">
            <button className="p-2 rounded-md text-primary hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700" onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        ) : (
          <ul className="flex space-x-10 my-5">
            <li
              className={`cursor-pointer py-3  hover:text-primary/45 text-sm font-semibold ${getPath("/") ? "border-b border-primary text-primary" : "border-b-transparent text-primary"}`}
              onClick={() => {
                closeMenu();
                navigate("/");
              }}
            >
              Home
            </li>
            {/* <li
              className={`cursor-pointer py-3 hover:text-primary/45  text-sm font-semibold ${getPath("/Search") ? "border-b border-primary text-primary" : "border-b-transparent text-primary"}`}
              onClick={() => {
                closeMenu();
                navigate("/Search");
              }}
            >
              Search
            </li> */}
            {/* <li
              className={`cursor-pointer py-3 hover:text-primary/45  text-sm font-semibold ${getPath("/AllListings") ? "border-b border-primary text-primary" : "border-b-transparent text-primary"}`}
              onClick={() => {
                closeMenu();
                navigate("/AllListings");
              }}
            >
              Listings
            </li> */}
            {/* <li
              className={`cursor-pointer py-3 hover:text-primary/45  text-sm font-semibold ${getPath("/offers") ? "border-b border-primary text-primary" : "border-b-transparent text-primary"}`}
              onClick={() => {
                closeMenu();
                navigate("/offers");
              }}
            >
              Offers
            </li> */}
            {/* <li
              className={`cursor-pointer hover:text-primary/45  py-3 text-sm font-semibold ${
                (getPath("/Login") || getPath("/profile")) && viewstate !== "Sign in" ? "border-b border-primary text-primary" : "border-b-transparent text-primary"
              }`}
              onClick={() => {
                closeMenu();
                navigate("/profile");
              }}
            >
              {viewstate}
            </li> */}
            <li
              className={`cursor-pointer py-3 hover:text-primary/45  text-sm font-semibold ${getPath("/Contacts") ? "border-b border-primary text-primary" : "border-b-transparent text-primary"}`}
              onClick={() => {
                closeMenu();
                navigate("/Contacts");
              }}
            >
              Contacts
            </li>
          </ul>
        )}
      </header>

      {isMobile && isMenuOpen && (
        <ul className="bg-cyan-700 border-b border-cyan-200 py-3 px-6 space-y-2">
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/") ? "text-primary underline font-bold" : "text-primary "}`}
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/AllListings") ? "text-primary underline font-bold" : "text-primary "}`}
            onClick={() => {
              closeMenu();
              navigate("/AllListings");
            }}
          >
            Listings
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/offers") ? "text-primary underline font-bold" : "text-primary"}`}
            onClick={() => {
              closeMenu();
              navigate("/offers");
            }}
          >
            Offers
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${
              (getPath("/Login") || getPath("/profile")) && viewstate !== "Sign in" ? "font-bold text-primary underline " : "text-primary"
            }`}
            onClick={() => {
              closeMenu();
              navigate("/profile");
            }}
          >
            {viewstate}
          </li>
          <li
            className={`cursor-pointer text-sm font-semibold ${getPath("/Contacts") ? "text-primary underline font-bold" : "text-primary"}`}
            onClick={() => {
              closeMenu();
              navigate("/Contacts");
            }}
          >
            Contacts
          </li>
        </ul>
      )}
    </div>
  );
}
