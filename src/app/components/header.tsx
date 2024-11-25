"use client"
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


function Header() {
   const [showmenulinks,Setshowmenulinks ] = useState(false)  

   const togglebutton =()=>{
      Setshowmenulinks(!showmenulinks)
   }
   
    return (
       < >
       <div className="flex justify-between h-16 items-center px-10 py-4 font-serif text-xl bg-navColor text-white fixed  w-full top-0 z-50">
           <h1 className="text-2xl pr-2" >Kabir&apos;s Portfolio</h1>
         <div className="right-section flex ">
             <ul className={`absolute flex md:flex-row flex-col w-[50%] bg-navColor right-0 pr-5 top-[-600000px] h-[100vh] pt-8 pl-6 gap-9 cursor-pointer md:static md:h-fit md:pt-0 ${showmenulinks ? "top-[59px]" : "" }  `}>
              <a href="#home"> <li  className="hover:text-blue-400" >Home</li> </a>
              <a href="#about"> <li className="hover:text-blue-400"  >About</li> </a>
              <a href="#skill"> <li className="hover:text-blue-400"  >Skills</li> </a>
              <a href="#projects"> <li className="hover:text-blue-400"  >Projects</li> </a>
              <a href="#contact"> <li className="hover:text-blue-400"  >Contact</li> </a>
             </ul>
        
           <div className="menuicons flex hiddden mr-3">
         {!showmenulinks ?
            <FaBars onClick={togglebutton} className="md:hidden text-3xl z-50 " /> 
            :
            <IoClose onClick={togglebutton} className="md:hidden text-4xl z-50" />
         }
           </div>
         </div>
       </div>
       </>
    )
}

export default Header