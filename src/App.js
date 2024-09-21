import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import ForgotPassword from "./pages/forgotPassword";
import Pricing from "./pages/Pricing";
import Addlisting from "./pages/Addlisting";
import EditListing from "./pages/EditListing";

import Header from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./components/PrivateRoute";
import Listing from "./pages/Listing";
import Services from "./pages/Services";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Search from "./pages/Search";
import { useState } from "react";
import Footer from "./components/Footer";
import Packages from "./pages/Packages";
function App() {
  const [listings, setListings] = useState([]);

  // Define a callback function to update the 'listings' prop
  const updateListings = (newListings) => {
    setListings(newListings);
  };

  return (
    <>
      <ChakraProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home listing={listings} setListings={setListings} updateListings={updateListings} />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/Terms-of-use" element={<Terms />}></Route>
            <Route path="/privacy-policy" element={<Privacy />}></Route>
            <Route path="/search" element={<Search listing={listings} />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Packages" element={<Packages />}></Route>
            <Route path="/Contacts" element={<Contact />}></Route>
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />}></Route>
            </Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/Pricing" element={<Pricing />}></Route>
            <Route path="/category/:categoryName/:listingId" element={<Listing />}></Route>
            <Route path="/Add-Listing" element={<PrivateRoute />}>
              <Route path="/Add-Listing" element={<Addlisting />}></Route>
            </Route>
            <Route path="/edit-listing" element={<PrivateRoute />}>
              <Route path="/edit-listing/:listingId" element={<EditListing />}></Route>
            </Route>
          </Routes>
          <Footer/>
        </Router>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ChakraProvider>
    </>
  );
}

export default App;
