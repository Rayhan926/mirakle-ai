import SiteLogo from "@components/SiteLogo";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white px-5 py-2.5 flex justify-between">
      <SiteLogo />

      {/* Profile Dropdown --Start-- */}
      <div className="flex items-center gap-1 cursor-pointer">
        <div className="w-8 h-8 rounded-full bg-[#4E47DC] flex items-center justify-center font-montserrat font-bold text-xs text-white">
          M
        </div>

        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 8L10.2631 0.5H0.73686L5.5 8Z" fill="#D9D9D9" />
        </svg>
      </div>
      {/* Profile Dropdown --End-- */}
    </header>
  );
};

export default Header;
