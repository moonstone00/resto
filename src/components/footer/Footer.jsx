import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full h-full text-white'>
        <div className='flex flex-col gap-6 items-center justify-between bg-primaryColor min-h-[180px] p-8 sm:flex-row'>
            <p className='text-[11px] text-[#7dbcb8] sm:w-9/12' style={{fontFamily: 'Myriad Pro Regular'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, non. Quos obcaecati laboriosam natus, amet repellendus excepturi expedita esse quaerat exercitationem ipsa! Molestiae quaerat est sit doloremque magni dolorum enim, repellat quasi quia distinctio quisquam, cum facilis asperiores repudiandae expedita deserunt ullam modi fuga incidunt. Eius aperiam suscipit, aliquid non ducimus recusandae odio, atque quod.</p>
            <div className="flex gap-12 sm:gap-4">
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
                    <Link><FaInstagram /></Link>
                </div>
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
                    <Link ><FaFacebookF/></Link>
                </div>
                <div className="flex items-center justify-center w-8 h-8 border border-white rounded-full">
                    <Link><FaTwitter /></Link>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center bg-[#005654] h-[34px]'>
            <p className="text-[11px]">© 1999-2012</p>
        </div>
    </footer>
  )
}
