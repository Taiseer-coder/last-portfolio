import React from 'react';
import image from '../public/images/personalImage.jpg';
import { FaCode, FaBriefcase, FaStar } from 'react-icons/fa';

const Hero = () => {
  return (  
    <section 
      id="home"
      className="h-[calc(100vh-80px)] flex flex-col justify-center px-6 overflow-hidden"
    >

      {/* الصورة + النص */}
      <div className="flex flex-col md:flex-row items-center">

        {/* الصورة */}
        <div className="flex-1 flex justify-center">
          <div className="p-[6px] rounded-full bg-gray-200  shadow-md">
            <div className="bg-white p-4 rounded-full">
              <img
                src={image}
                alt="Hero"
                className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* النص */}
        <div className="flex-1 text-center md:text-right space-y-3 max-w-xl">

          <p className="text-lg text-gray-500">
            مرحباً 
          </p>

          <h1 className="text-xl md:text-2xl font-semibold text-gray-700">
             انا مطورة واجهات أمامية
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            أصمم واجهات عصرية وسهلة الاستخدام، أركز على تجربة المستخدم 
            وتفاصيل التصميم التي تصنع الفرق ✨
          </p>

        </div>
      </div>

      {/* الإحصائيات (تصميم جديد 🔥) */}
      <div className="mt-6 w-full max-w-2xl mx-auto">

        <div className="grid grid-cols-3 gap-4 ">

          {/* عنصر */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
            <FaCode className=" text-lg mb-2  text-gray-700" />
            <p className="text-xl font-bold text-gray-900">15+</p>
            <p className="text-xs text-gray-500">مشروع</p>
          </div>

          {/* عنصر */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
            <FaBriefcase className="text-gray-700 text-lg mb-2" />
            <p className="text-xl font-bold text-gray-900">2+</p>
            <p className="text-xs text-gray-500">سنوات</p>
          </div>

          {/* عنصر */}
          <div className="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition">
            <FaStar className="text-gray-700 text-lg mb-2" />
            <p className="text-xl font-bold text-gray-900">10+</p>
            <p className="text-xs text-gray-500">تقنيات</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;