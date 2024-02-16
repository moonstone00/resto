import logo from '../../assets/logo-meat.png'
import React from 'react'

export default function TableReservation() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-12 bg-[#f4f6f9]' >
        <div className='flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md'>
          <img className='w-16 h-16' src={logo} alt="Image Logo" />
        </div>
        <form action="" className='w-[330px] border border-t-2 border-t-primaryColor bg-white shadow-md rounded-lg' >
            <div className='py-5 px-6 text-primaryColor text-lg'>
              <p className='font-medium'>Table Reservation</p>
            </div>

            <hr />

            <div className='flex flex-col p-6 gap-6'>
              <div className='flex flex-col'>
                <label htmlFor="" className='text-xs font-normal mb-2'>Name</label>
                <input type="text" className='p-2 border border-slate-100 bg-[#fdfdff] rounded-md outline-primaryColor' required/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="" className='text-xs font-normal mb-2'>Amount</label>
                <input type="text" className='p-2 border border-slate-100 bg-[#fdfdff] rounded-md outline-primaryColor' required/>
              </div>
            </div>

            <div className='flex justify-center px-6 py-4'>
              <button type='submit' className='w-full bg-primaryColor p-2 rounded-md text-white hover:bg-[#0c7674] hover:duration-150 hover:ease-in duration-100 ease-in'>Add</button>
            </div>
        </form>
    </div>
  )
}
