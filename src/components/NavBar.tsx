import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menuData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
    {
      name: "Videos",
      link: "/",
    },
    {
      name: "Subscription",
      link: "/",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center gap-5 p-5 bg-slate-200">
      <div>
        <p>LOGO</p>
      </div>

      {/* Desktop Menu */}

      <div className="flex gap-5 max-[600px]:hidden">
        {menuData.map(({ name, link }, index) => (
          <div key={index}>
            <NavLink
              className="hover:text-blue-500 transition-all duration-150"
              to={link}
            >
              {name}
            </NavLink>
          </div>
        ))}
      </div>

      {/* Hamburger menu icon */}

      <RxHamburgerMenu
        className="min-[600px]:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="grid absolute top-16 w-full justify-center left-0 py-5 text-center gap-5 min-[600px]:hidden">
          {menuData.map(({ name, link }, index) => (
            <div key={index}>
              <NavLink
                className="hover:text-blue-500 transition-all duration-150"
                to={link}
              >
                {name}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
