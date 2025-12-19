import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

// import Sidebar from "../layout/Sidebar";
import { NAV_ITEMS } from "../../constants/navigation";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full">
        <div className="px-4 sm:px-6 lg:px-8 fixed top-8 left-6 md:left-20 right-6 md:right-20 rounded-xl md:rounded-2xl z-50 bg-white/80 backdrop-blur shadow-xl">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Menu + Logo */}
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Link
                to="/"
                className="text-2xl font-bold text-gray-900 hover:text-primary transition"
              >
                <span className="text-primary">Trippy</span>.
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `text-base font-medium transition
                    ${
                      isActive
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
