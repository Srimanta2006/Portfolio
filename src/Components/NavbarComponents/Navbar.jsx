import React, { useContext } from "react";
import { navBarContext } from "../Context/NavContext";
const Navbar = () => {
  const [navBarOpen, setNavBarOpen] = useContext(navBarContext);
  return (
    <nav className="fixed top-0 left-0 right-0 z-9990 bg-white shadow-md">
      <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-5 w-full">

        {/* Logo */}
        <div className="overflow-hidden h-14 sm:h-16 w-40 sm:w-66 flex items-center py-2 px-2 sm:px-4 gap-2">
          <div>
            <img className="max-h-full max-w-full object-contain" src="/images/fullLogo.png" alt="Logo" />
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-5">

          {/* Menu button */}
          <button
            type="button"
            aria-label={navBarOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navBarOpen}
            className="p-2 sm:p-3 border-2 border-[rgba(0,0,0,0.1)] rounded-sm cursor-pointer bg-white"
            onClick={()=>{
              setNavBarOpen(!navBarOpen);
            }}
          >
            <div className="h-6 w-6 sm:h-7 sm:w-7">
              <img
                className="h-full w-full object-contain"
                src="/images/header-three-toggle.svg"
                alt=""
              />
            </div>
          </button>

          {/* CV */}
          <a className="hidden sm:block bg-black text-white px-5 py-3 rounded-md cursor-pointer active:scale-95"
              href="/myResume.pdf"
              rel="noopener noreferrer"
              target="_blank"
          >
            <h2 className="text-[12px] font-semibold uppercase">
              download cv
            </h2>
          </a>

        </div>
      </div>

      {navBarOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white px-4 py-4 shadow-md">
          <a
            className="block w-full bg-black text-center text-white px-5 py-3 rounded-md active:scale-95"
            href="/myResume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            onClick={() => setNavBarOpen(false)}
          >
            <span className="text-xs font-semibold uppercase">Download CV</span>
          </a>
        </div>
      )}

    </nav>
  );
};

export default Navbar;