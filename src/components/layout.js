import React, { useState } from "react";
import Header from "./navbar";
import Sidebar from "./sidebar";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;
