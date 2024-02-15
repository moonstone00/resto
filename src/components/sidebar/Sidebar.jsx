import {GridViewOutlined, PersonOutlineOutlined, DateRangeOutlined, ShoppingBagOutlined, TableRestaurantOutlined, KeyboardArrowDownOutlined} from '@mui/icons-material';
import React, { useState } from 'react'

export default function Sidebar({isSidebar}) {

    return (
        <>
            {
                isSidebar
                ?
                (
                    <div className='flex'>

                        <div className='w-full min-h-screen bg-primaryColor py-4 sm:w-72 duration-150 ease-in'>

                            {/* <div className="flex justify-end px-12 mb-12 text-white">
                                <span className='cursor-pointer' onClick={() => handleSidebar(false)}><ArrowBackIosOutlined /></span>
                            </div> */}
                            <div className='w-full'>
                                <ul className="flex flex-col gap-8 text-white">
                                    <li className="px-12 py-4 flex items-center gap-2 bg-[#005654] duration-150 ease-in">
                                        <GridViewOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Dashboard</a>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <PersonOutlineOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Profile</a>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <DateRangeOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Tanggal</a>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <ShoppingBagOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Order</a>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <TableRestaurantOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Meja</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
                : 
                (
                    <div className='hidden sm:flex'>


                        <div className='w-12 min-h-screen bg-[#005654] px-2 py-4 duration-150 ease-in'>

                            <div>
                                <ul className="flex flex-col gap-8 text-white">
                                    <li className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <GridViewOutlined className='cursor-pointer'/>
                                    </li>
                                    <li className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <PersonOutlineOutlined className='cursor-pointer'/>
                                    </li>
                                    <li className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <DateRangeOutlined className='cursor-pointer'/>
                                    </li>
                                    <li className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <ShoppingBagOutlined className='cursor-pointer'/>
                                    </li>
                                    <li className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <TableRestaurantOutlined className='cursor-pointer'/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                )
            }
        
        </>
    )
}
