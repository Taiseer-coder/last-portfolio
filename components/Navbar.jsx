import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    {name : 'الرئيسيه ' ,link : '#home'},
    {name : 'نبذة عني ' ,link : '#about'},
    {name : 'مهاراتي ' ,link : '#skills'},
    {name : 'مشاريعي' ,link :'#projects'},
    {name : 'تواصل معي' ,link : '#contact'},
  ];

  return (
    <nav className="fixed w-full left-0 top-0 z-[999] bg-white">
      
      <div className="flex items-center justify-between p-4">

        {/* Logo */}
        <div>
          <img 
            src="/images/myIcon.png" 
            alt="logo" 
            className="md:w-24 lg:w-28 w-20 object-contain"
          />
        </div>

        {/* Links - Desktop */}
        <div className="text-gray-900 md:block hidden font-medium px-7 py-2">
          <ul className="flex py-2 text-lg gap-3 items-center">
            {menuLinks.map((menu,i) => (
              <li key={i} className='px-2'>
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* زر الموبايل */}
        <div className="md:hidden text-gray-800">
          <button onClick={() => setOpen(!open)}>
          <BiMenu/>
          </button>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-gray-700 text-white py-2 px-5 rounded-lg font-medium hover:bg-gray-900 transition duration-300">
            ابدأ موقعك
          </button>
        </div>

      </div>

      {/* Menu - Mobile */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-800 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i}>
                <a 
                  href={menu.link}
                  onClick={() => setOpen(false)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
            
            {/* زر داخل الموبايل */}
            <button className="bg-gray-700 text-white py-2 rounded-lg mt-3">
              ابدأ موقعك
            </button>

          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;