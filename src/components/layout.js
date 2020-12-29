import React, { useState } from "react";
import Header from "./navbar";
import Sidebar from "./sidebar";
import Footer from "./footer";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
      {/* TODO FIX footer's width */}
      <Footer />
    </div>
  );
};

export default layout;
