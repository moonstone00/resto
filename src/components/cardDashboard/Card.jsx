import {ShoppingBagOutlined, Person2Outlined} from '@mui/icons-material';
import React from 'react'

export default function Card() {
  return (
    <>
        <div className='flex flex-col gap-4 items-center justify-center mt-4 sm:flex-row sm:w-full sm:flex-wrap xl:justify-around xl:gap-2'>
            <div className='flex w-64 h-20 rounded-sm shadow-sm bg-white cursor-pointer'>
                <div className='w-full flex items-center'>
                    <div className='flex items-center justify-center w-3/4 h-full px-2 bg-red-300 text-white rounded-sm'><ShoppingBagOutlined sx={{ fontSize: 40 }} /></div>
                    <div className='flex flex-col w-full justify-center pl-2 text-black'>
                        <p className='text-xl'>4</p>
                        <p className='text-sm'>Total Order</p>
                    </div>
                </div>
            </div>

            <div className='flex w-64 h-20 rounded-sm shadow-sm bg-white cursor-pointer'>
                <div className='w-full flex items-center'>
                    <div className='flex items-center justify-center w-3/4 h-full px-2 bg-red-300 text-white rounded-sm'><Person2Outlined sx={{ fontSize: 40 }} /></div>
                    <div className='flex flex-col w-full justify-center pl-2 text-black'>
                        <p className='text-xl'>1</p>
                        <p className='text-sm'>Manajer</p>
                    </div>
                </div>
            </div>

            <div className='flex w-64 h-20 rounded-sm shadow-sm bg-white cursor-pointer'>
                <div className='w-full flex items-center'>
                    <div className='flex items-center justify-center w-3/4 h-full px-2 bg-red-300 text-white rounded-sm'><Person2Outlined sx={{ fontSize: 40 }} /></div>
                    <div className='flex flex-col w-full justify-center pl-2 text-black'>
                        <p className='text-xl'>1</p>
                        <p className='text-sm'>Kasir</p>
                    </div>
                </div>
            </div>

            <div className='flex w-64 h-20 rounded-sm shadow-sm bg-white cursor-pointer'>
                <div className='w-full flex items-center'>
                    <div className='flex items-center justify-center w-3/4 h-full px-2 bg-red-300 text-white rounded-sm'><ShoppingBagOutlined sx={{ fontSize: 40 }} /></div>
                    <div className='flex flex-col w-full justify-center pl-2 text-black'>
                        <p className='text-xl'>21</p>
                        <p className='text-sm'>Total Produk</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
