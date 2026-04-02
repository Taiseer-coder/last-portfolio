
// const NameAndLogo = () => {
 
//   return (
//    <nav className=" flex ">
//     <div className="flex items-center justify-between w-full py-4 px-8  md:px-4 max-w-8xl  bg-gray-200 m-2 ">
//         <div className=" flex items-center   ">
//            <div className=" ">
//             <img src="/images/myIcon.png" alt="logo" className="w-30"/>
//             </div> 

//             <h1 className="text-2xl font-semibold">
//                 تيسير البحري 
//             </h1>
//         </div>
//         <div>
//             <h1>
//             أبدا موقعك  
//             </h1>
//             <button className="bg-mauve-500 text-white py-2 px-4 rounded hover:bg-mauve-700">
//                 ابدأ الآن
//             </button>
//         </div>

//     </div>
//    </nav>
//   )
// }

// export default NameAndLogo


const NameAndLogo = () => {
  return (
    <nav className="w-full flex justify-center">
      <div className="flex items-center justify-between w-full max-w-8xl py-4 px-6 bg-white shadow-md rounded-xl">
        
        {/* Logo + Name */}
        <div className="flex items-center  bg-red-100">
          <img 
            src="/images/myIcon.png" 
            alt="logo" 
            className="w-20 md:w-24 lg:w-28 object-contain"
          />

          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 bg-red-900">
            تيسير البحري
          </h1>
        </div>

        {/* Links */}
        <div className="flex-1 flex justify-start pr-10 items-center">
            <ul className="hidden md:flex items-center gap-6 text-gray-600 font-medium items-center">
                <li>الرئيسيه </li>
                <li>الرئيسيه </li>
                <li>الرئيسيه </li>
            </ul>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
          <h2 className="hidden md:block text-gray-600 font-medium">
            ابدأ موقعك
          </h2>

          <button className="bg-purple-600 text-white py-2 px-5 rounded-lg font-medium hover:bg-purple-700 transition duration-300">
            ابدأ الآن
          </button>
        </div>

      </div>
    </nav>
  )
}

export default NameAndLogo