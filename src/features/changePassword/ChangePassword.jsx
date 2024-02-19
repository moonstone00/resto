import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

export default function ChangePassword() {
  return (
    <section className='flex w-full'>
        <Sidebar/>
        <div className='flex justify-center w-full'>
          <div className='flex flex-col w-full p-3 lg:w-3/4'>

            <div className='border-t-2 border-l-2 border-r-2 rounded-t-lg p-3 bg-[#fafafa]'>
              <h1>Ganti Password</h1>
            </div>

            <form className='flex flex-col border-2 rounded-b-lg p-3'>

              <div className='flex flex-col gap-6 lg:w-4/5 xl:w-8/12'>
                <div className='flex flex-col gap-1 justify-end lg:flex-row lg:items-center xl:gap-5'>
                  <label htmlFor="" className='text-xs font-semibold'>Password Lama</label>
                  <input type="password" className='border-2 rounded-md h-8 p-1 focus:outline-[#86c7ff] lg:w-96' />
                </div>
                <div className='flex flex-col gap-1 justify-end lg:flex-row lg:items-center xl:gap-5'>
                  <label htmlFor="" className='text-xs font-semibold'>Password Baru</label>
                  <input type="password" className='border-2 rounded-md h-8 p-1 focus:outline-[#86c7ff] lg:w-96' />
                </div>
                <div className='flex flex-col gap-1 justify-end lg:flex-row lg:items-center xl:gap-5'>
                  <label htmlFor="" className='text-xs font-semibold'>Konfirmasi Password Baru</label>
                  <input type="password" className='border-2 rounded-md h-8 p-1 focus:outline-[#86c7ff] lg:w-96' />
                </div>

                <div className='lg:relative lg:left-44'>
                  <button className='bg-slate-300 p-2 rounded-md text-sm'>Submit</button>
                </div>

              </div>
            </form>
          </div>
        </div>
    </section>
  )
}
