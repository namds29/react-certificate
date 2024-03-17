import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-10">
        <Link to={"/"}>
          <button className="border p-4">Excercise 1</button>
        </Link>
        <Link to={"/ex2"}>
          <button className="border p-4">Excercise 2</button>
        </Link>
        <Link to={"/ex3"}>
          <button className="border p-4">Excercise 3</button>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Header;
