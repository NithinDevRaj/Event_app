import React from "react";

const Header = () => {
  return (
    <div>
      {" "}
      <header className="relative flex flex-row bg-slate-100 justify-between h-20 items-center px-6">
        <div className="mr-6 text-xl font-bold text-blue-700 ">EVENTZ</div>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <ul className="flex flex-row gap-6 ">
              <li className="hover:text-blue-500">
                <a href="">Home</a>
              </li>
              <li className="hover:text-blue-500">
                <a href="">Events</a>
              </li>
            </ul>
          </nav>
          <button className="bg-blue-600 text-white rounded-xl p-3 hover:bg-blue-800 hover:shadow-m">
            Get started
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;