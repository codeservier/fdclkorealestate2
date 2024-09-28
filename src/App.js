import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import ForgotPassword from "./pages/forgotPassword";
import EditListing from "./pages/EditListing";

import Header from "./components/header";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./components/PrivateRoute";
import Listing from "./pages/Listing";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Search from "./pages/Search";
import { useState } from "react";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
import AdminDashboard from "./Admin/dashboard/AdminDashboard";
import { Browser } from "leaflet";
import Layout from "./components/Layout";
import AccordionItem from "./pages/Packages";
import PackagesComponent from "./components/PackagesComponent";

function App() {
  const [listings, setListings] = useState([]);

  const updateListings = (newListings) => {
    setListings(newListings);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Home
                  listing={listings}
                  setListings={setListings}
                  updateListings={updateListings}
                />
              }
            ></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/Terms-of-use" element={<Terms />}></Route>
            <Route path="/privacy-policy" element={<Privacy />}></Route>
            <Route
              path="/search"
              element={<Search listing={listings} />}
            ></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/PackagesComponent" element={<PackagesComponent />}></Route>
            

            <Route path="/About" element={<About />}></Route>
            <Route path="/Packages" element={<Packages />}></Route>
            <Route path="/Contacts" element={<Contact />}></Route>
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route
              path="/category/:categoryName/:listingId"
              element={<Listing />}
            ></Route>
          </Route>

          {/* admin  */}
          <Route>
            <Route path="/admin" element={<AdminDashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* Admin routes with AdminLayout */}
    </>
  );
}

export default App;
