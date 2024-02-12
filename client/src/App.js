import React from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Navbar from "./component/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Footer from "./component/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./component/layouts/AdminLayout";
import AdminUser from "./component/layouts/AdminUser";
import AdminContact from "./component/layouts/AdminContact";
import AdminServices from "./component/layouts/AdminServices";
import UpdateUser from "./pages/UpdateUser";
import UpdateService from "./pages/UpdateService";
import CreateService from "./pages/CreateService";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="user" element={<AdminUser />} />
          <Route path="contact" element={<AdminContact />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="userUpdate/:id" element={<UpdateUser/>} />
          <Route path="updateService/:id" element={<UpdateService />} />
          <Route path="createService" element={<CreateService />}/>

        </Route>
      </Routes>
      <Footer />


    </>
  );
}

export default App;
