const Navbar = () => {
   const menuLinks = [
    {name : 'الرئيسيه ' ,link : '#home'},
    {name : 'نبذة عني ' ,link : '#about'},
    {name : 'مهاراتي ' ,link : '#skills'},
    {name : 'مشاريعي' ,link :'#projects'},
    {name : 'تواصل معي' ,link : '#contact'},
  ];
  return (
   
    <nav className="fixed   w-full left-0 top-0  z-[999]  bg-white ">
      <div className="flex items-center justify-between p-4 ">
        
        {/* Logo */}
        <div className=" ">
          <img 
            src="/images/myIcon.png" 
            alt="logo" 
            className=" md:w-24 lg:w-28 object-contain"
          />

         
        </div>

        {/* Links */}
        <div className="text-gray-900 md:block hidden font-medium px-7 py-2">
            <ul className=" flex py-2 text-lg gap-3  items-center">
                
                {menuLinks?.map((menu,i) => (
                        <li key={i} className='px-2' >
                          <a href={menu?.link}> {menu?.name}</a>
                        </li>
                      )) 
                    }
            </ul>
        </div>


        {/* Right Side */}
        <div className="flex items-center gap-4">
          <h2 className="hidden md:block text-gray-600 font-medium">
           
          </h2>
          
          <button className="bg-gray-700 text-gary-900 py-2 px-5 rounded-lg font-medium hover:bg-purple-900 transition duration-300">
             ابدأ موقعك
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar