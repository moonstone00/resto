import {KeyboardArrowDownOutlined, ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@mui/icons-material';
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Card from '../../components/cardDashboard/Card';
import CardUser from '../../components/cardUser/CardUser';
import { Tooltip } from '@mui/material';
import TableResto from '../table_resto/TableResto';

export default function Dashboard() {

    const [isSidebar, setIsSidebar] = useState(false)
    const [cardUser, setCardUser] = useState(false)

    const handleSidebar = (result) => {
        setIsSidebar(result)
    }

    const handleCardUser = (result) => {
        setCardUser(result)
    }

    return (
        <>
            <div className='flex flex-col-reverse bg-[#e1e5e8]'> {/* Tambahkan div wrapper */}

                <div className='flex flex-col tablet:flex-col gap-2 sm:flex-row'>
                    <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                    <main className='w-full flex flex-col p-3 sm:p-8'>
                        <div className='w-full flex items-start justify-center mb-12'>
                            <Card/>
                        </div>
                        <div>
                            <TableResto/>
                        </div>
                    </main>
                </div>

                <header className='flex justify-between h-14'>
                    {
                        isSidebar 
                        ?
                        (
                            <div className='w-[358px] bg-primaryColor duration-150 ease-in'>
                                <div className='flex items-center justify-end h-full px-12 mb-12 text-white'>
                                    <span className='cursor-pointer' onClick={() => handleSidebar(false)}><ArrowBackIosOutlined /></span>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className='flex justify-center w-14 px-1 bg-[#005654] duration-150 ease-in'>
                                <div className='flex items-center justify-end h-full text-white'>
                                    <span className='cursor-pointer' onClick={() => handleSidebar(true)}><ArrowForwardIosOutlined/></span>
                                </div>
                            </div>
                        )
                    }

                    <div className='relative flex justify-end w-full bg-[#343942]'>
                        <div onMouseEnter={() => handleCardUser(true)} onMouseLeave={() => handleCardUser(false)}  className='flex items-center justify-center w-28 h-full bg-[#2f333b] text-[#5f6878] cursor-pointer'>
                            <p>51422061</p>
                            <span><KeyboardArrowDownOutlined/></span>
                            <span >
                                <CardUser cardUser={cardUser} />
                            </span>
                        </div>
                    </div>
                </header>
            </div> 
        </>
    )
}
