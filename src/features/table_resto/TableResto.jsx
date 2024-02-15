import { useNavigate } from 'react-router-dom';
import React from 'react'

export default function TableResto() {

  const navigate = useNavigate()

  const handleTable = () => {
    navigate("/table-reservation")
  }

  return (
    <div className='w-full min-h-screen'>
      <p className='text-2xl text-secondaryColor font-semibold mb-3'>TABLES</p>
      <div className='flex flex-wrap justify-center gap-6 w-full text-white lg:justify-center'>

        <div onClick={() => handleTable()} className='lg:w-36 lg:bg-white lg:flex cursor-pointer'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
        <div className='lg:w-36 lg:bg-white lg:flex'>
          <div className='flex flex-col items-center justify-center w-16 h-16 bg-[#1ac1ab] p-4'>
            <p className='text-xs text-center'>Available</p>
            <p className='text-xs text-center lg:hidden'>Meja 1</p>
          </div>
          <div className='w-full flex flex-col justify-center  lg:p-2'>
            <p className='text-xl font-semibold hidden text-black lg:block'>1</p>
            <p className='text-xs hidden text-slate-500 lg:block'>Meja 1</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
