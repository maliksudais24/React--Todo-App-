import React from 'react';

const Navbar = () => {
  return (
   <div>
  <nav className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-36 bg-slate-900 text-white py-3 px-5">
    {/* Logo */}
    <div className="logo w-12">
      <img
        src="Leonardo_Phoenix_09_Design_a_compact_modern_logo_for_Itask_Tod_2.jpg"
        alt="Logo"
        className="w-full object-contain"
      />
    </div>

    {/* Navigation Links */}
    <ul className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 font-medium text-center">
      <li className="list-none cursor-pointer hover:font-bold transition-all duration-200">
        i-Tasks
      </li>
      <li className="list-none cursor-pointer hover:font-bold transition-all duration-200">
        Manage your todos at one place
      </li>
    </ul>
  </nav>
</div>

  );
}

export default Navbar;
