import { IoIosArrowForward } from "react-icons/io";
import React, { useState } from 'react'
import logo from '../../assets/logo-meat.png'

export default function Navbar() {

    const [isLogin, setIsLogin] = useState(false)
    const [isActive, setIsActive] = useState(true)

    const arrow = (result) => {
        setIsActive(result)
    }


    return (
    
        <header className='flex justify-between items-center w-full fixed bg-primaryColor py-4 px-12 mb-12 z-10'>
            <div className='flex'>
                <h1 className='font-sixtyFour text-secondaryColor text-3xl cursor-default'>Steak</h1>
                <img src={logo} alt="Logo" className='w-8 h-8'/>
            </div>
            <nav>
                <ul className='flex gap-8 text-secondaryColor text-lg font-semibold'>
                    <li><a href="">Home</a></li>
                    {
                        isLogin
                        ?
                        (<li><a href="">Login</a></li>)
                        :
                        (<li><a href="">Back</a></li>)
                    }
                </ul>
            </nav>
        </header>


        // <header className="w-full bg-primaryColor">
        //     {
        //         isActive
        //         ?
        //         (
        //             <>
        //             {/* <Sidebar setIsActive ={setIsActive}/> */}
        //                 <div className="flex gap-2">
        //                     <div onClick={() => arrow(false)} className="flex items-center justify-center w-1/2 h-14 bg-[#005654]">
        //                         <IoIosArrowForward/>
        //                     </div>
        //                     <div onClick={() => arrow(false)} className="flex items-center justify-center w-14 h-14 bg-red-700">
        //                         <IoIosArrowForward/>
        //                     </div>
        //                 </div>
        //             </>
                
        //         )
        //         :
        //         (
        //             <div onClick={() => arrow(true)} className="flex items-center justify-center w-3/4 h-14 bg-[#005654]">
        //                 <IoIosArrowForward/>
        //             </div>
        //         )
        //     }
        // </header>
    )
}
