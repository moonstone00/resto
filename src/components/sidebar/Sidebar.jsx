import {GridViewOutlined, PersonOutlineOutlined, DateRangeOutlined, ShoppingBagOutlined, TableRestaurantOutlined, Key, PowerSettingsNew} from '@mui/icons-material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Sidebar({isSidebar}) {

    const navigate = useNavigate()

    const handleDashboard = () => {
        navigate('/dashboard')
    }

    const handleChangePW = () => {
        navigate('/ganti-password')
    }

    const handleListTable = () => {
        navigate('/daftar-pesanan-meja')
    }

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
                                    <li onClick={handleDashboard} className="px-12 py-4 flex items-center gap-2 bg-[#005654] duration-150 ease-in">
                                        <GridViewOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Dashboard</a>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <PersonOutlineOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Biodata/Foto</a>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <DateRangeOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Tanggal</a>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <ShoppingBagOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Produk</a>
                                    </li>
                                    <li onClick={handleListTable} className="px-12 py-4 flex items-center gap-2">
                                        <TableRestaurantOutlined className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Meja</a>
                                    </li>
                                    <li onClick={handleChangePW} className="px-12 py-4 flex items-center gap-2">
                                        <Key className='cursor-pointer'/>
                                        <div className='flex gap-1'>
                                            <a className='duration-300 ease-in' href="">Ganti</a>
                                            <a className='duration-300 ease-in' href="">Password</a>
                                        </div>
                                    </li>
                                    <li className="px-12 py-4 flex items-center gap-2">
                                        <PowerSettingsNew className='cursor-pointer'/>
                                        <a className='duration-150 ease-in' href="">Logout</a>
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
                                    <li onClick={handleDashboard} className="py-4 flex items-center gap-2 duration-150 ease-in">
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
                                    <li onClick={handleListTable} className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <TableRestaurantOutlined className='cursor-pointer'/>
                                    </li>
                                    <li onClick={handleChangePW} className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <Key className='cursor-pointer'/>
                                    </li>
                                    <li className="py-4 flex items-center gap-2 duration-150 ease-in">
                                        <PowerSettingsNew className='cursor-pointer'/>
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
