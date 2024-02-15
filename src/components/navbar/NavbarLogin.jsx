import {KeyboardArrowDownOutlined, ArrowBackIosOutlined} from '@mui/icons-material';
import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar';

export default function NavbarLogin() {

    const [isSidebar, setIsSidebar] = useState(false)

    const handleSidebar = (result) => {
        setIsSidebar(result)
    }

    return (
        <div className='flex flex-col-reverse'>

            <div className='flex gap-2'>
                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <main className='flex items-center justify-center'>
                    <p>Main</p>
                </main>
            </div>

            <header className='flex justify-between h-14'>
                {
                    isSidebar 
                    ?
                    (
                        <div className='w-[358px] bg-primaryColor '>
                            <div className='flex items-center justify-end h-full px-12 mb-12 text-white'>
                                <span className='cursor-pointer' onClick={() => handleSidebar(false)}><ArrowBackIosOutlined /></span>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='w-14 bg-red-700'>
                            <div className='flex items-center justify-end h-full'>
                                <p onClick={() => handleSidebar(true)}>hai</p>
                            </div>
                        </div>
                    )
                }

                <div className='flex justify-end w-full bg-[#343942]'>
                    <div className='flex items-center justify-center w-28 h-full bg-[#2f333b] text-[#5f6878] cursor-pointer'>
                        <p>51422061</p>
                        <KeyboardArrowDownOutlined/>
                    </div>
                </div>
            </header>
        </div> 
    )
}
