
const NameAndLogo = () => {
 
  return (
   <nav className="pt-4 flex  ">
    <div className="flex items-center justify-between w-full py-4 px-8  md:px-4 max-w-8xl ">
        <div className=" flex items-center gap-2">
            <img src="/images/myIcon.png" alt="logo" className="w-12"/>
            <h1 className="text-2xl font-semibold">
                تيسير البحري 
            </h1>
        </div>
        <div>
            <h1>
            أبدا موقعك  
            </h1>
        </div>

    </div>
   </nav>
  )
}

export default NameAndLogo