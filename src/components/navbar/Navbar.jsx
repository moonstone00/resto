import React, { useState } from 'react'
import logo from '../../assets/logo-meat.png'

export default function Navbar() {

    const [isLogin, setIsLogin] = useState(false)

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
    )
}
