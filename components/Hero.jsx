// import React from 'react'
// import image from '../public/images/image6.png'
// import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
// const Hero = () => {
//   return (
//     <section 
//     id="home"
//     className=' min-h-screen flex py-10 md:flex-row flex-col items-center '
//     >
//       <div className='flex-1 flex items-center justify-center h-full '>
//         <img src={image} alt=''  className='md:w-11/12   h-full object-cover'/>
//       </div>
//       <div className='flex-1'>
//         <div className='md:text-left text-center'>
//           <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 font-bold text-white'>
//             <span className='text-cyan-600 md:text-6xl text-5xl'>
//               Hello!
//               <br/>
//             </span>
//             My name is <span>Taiseer Al-Bahri</span>
//           </h1>
//           <h4 className='md:text-2xl text-lg md:leading-normal leading-10 mt-4 font-bold text-gray-600'>
//             React Developer
//           </h4>
//           <button className='btn-primery mt-8'>
//             Contact Me
//           </button>

//           <div className=' mt-8 text-3xl flex  items-center md:justify-start justify-center gap-5' >
            
//             <FaFacebook  className='text-gray-600 hover:text-white'/>
//            <FaWhatsapp className='text-gray-600 hover:text-white'/>
//            <FaInstagram className='text-gray-600 hover:text-white'/>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero


import React from 'react';
import image from '../public/images/personalImage.png';

const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full overflow-hidden flex items-center justify-center p-30"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
       {/* الصورة مع الخلفية المائلة */}
    <div className="flex-1 flex items-end justify-center relative">
      {/* الخلفية المائلة */}
      <div className="absolute w-[90%] h-[100%] bg-gray-200 rounded-lg rotate-0 -z-10"></div>

      {/* الصورة */}
      <img
        src={image}
        alt="Hero"
        className="w-full max-w-sm rounded-lg shadow-lg relative z-10"
      />
    </div>

        {/* النص على اليمين */}
        <div className="flex-1 flex flex-col justify-center items-start text-gray-800 font-semibold">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            مرحباً،  <span className="text-purple-950">  أنا تيسير البحري </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-900">
            أنا مطور واجهات أمامية، أحب تصميم واجهات جذابة وسلسة وتجربة مستخدم ممتازة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;



