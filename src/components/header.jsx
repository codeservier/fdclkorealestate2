import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import logo from '../assets/svg/logo.svg';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [viewState, setViewState] = useState("Sign in");
  const auth = getAuth();

  function getPath(route) {
    return location.pathname === route;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setViewState(user ? "Profile" : "Login");
    });
    return () => unsubscribe();
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
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-mywhite shadow-sm sticky top-0 z-40 px-1">
      <header className="flex justify-between items-center px-2 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-12 cursor-pointer flex-shrink-0 mt-2 mb-2"
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          />
          <span
            className="ml-2 text-3xl font-bold text-primary cursor-pointer"
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          >
            FDCLKO
          </span>
        </div>

        {isMobile ? (
          <button
            className="p-2 rounded-md text-primary hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        ) : (
          <ul className="flex space-x-10 my-5">
            {["/", "/About", "/Services", "/Packages", "/Contacts"].map((route, index) => (
              <li
                key={index}
                className={`cursor-pointer py-3 hover:text-primary/45 text-sm font-semibold ${getPath(route) ? "border-b border-primary text-primary" : "border-b-transparent text-primary"}`}
                onClick={() => {
                  closeMenu();
                  navigate(route);
                }}
              >
                {route === "/" ? "Home" : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
              </li>
            ))}
          </ul>
        )}
      </header>

      {isMobile && isMenuOpen && (
        <ul className="bg-white border-b border-white py-3 px-6 space-y-2">
          {["/", "/About", "/Services", "/Packages", "/Contacts"].map((route, index) => (
            <li
              key={index}
              className={`cursor-pointer text-sm font-semibold ${getPath(route) ? "text-primary underline font-bold" : "text-primary"}`}
              onClick={() => {
                closeMenu();
                navigate(route);
              }}
            >
              {route === "/" ? "Home" : route.slice(1).charAt(0).toUpperCase() + route.slice(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
