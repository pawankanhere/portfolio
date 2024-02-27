import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full p-4">
      <nav className="flex justify-between w-full items-center">
        <p>pk.</p>
        <div className="flex gap-4">
          <p className="text-sm">home</p>
          <p className="text-sm">about</p>
          <p className="text-sm">work</p>
          <p className="text-sm">contact</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
