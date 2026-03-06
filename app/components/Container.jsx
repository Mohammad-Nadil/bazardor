import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`max-w-7xl mx-auto px-3 2xl:px-0 relative ${className}`}>
      {children}
    </div>
  );
};

export default Container;
