import React from "react";

const Footer = () => {
  return (
    <footer className="  bg-gray-600 text-gray-100 py-4 mt-auto shadow-inner">
      <div className="container mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} ALX Project Setup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
