import {ArrowDropUpOutlined, SettingsPower} from '@mui/icons-material';
import React from 'react'

export default function CardUser({cardUser}) {
    return (

        <>
            {
                cardUser
                ?
                (
                    <div className='cursor-default'>
                        <span className='absolute text-white top-8 right-2 mb-8'><ArrowDropUpOutlined/></span>
                        <div class="absolute w-80 top-12 right-2 bg-[#FEFBF6] rounded-lg shadow-md p-1">
                            <div className='p-2 text-[#607274]'>
                                <img src="" alt="Profile Picture" class="rounded-full w-16 h-16 mx-auto mb-4"/>
                                <p className='text-start text-lg'>NIP = 51422061</p>
                                <p class="text-start text-lg">Username = muhghifani</p>
                            </div>
                            <div className='flex items-center justify-center bg-red-700 text-white mt-4 p-1 rounded-sm cursor-pointer'>
                                <span><SettingsPower/></span>
                                <button class="block text-center">Logout</button>
                            </div>
                        </div>
                    </div>
                )
                :
                null
            }
        </>

    )
}
