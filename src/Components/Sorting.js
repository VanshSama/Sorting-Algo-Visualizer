import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router';
import NavBar from './NavBar';

const Sorting = () => {
    const navigate = useNavigate();

    return (
        <div className='w-full h-full bg-richblack-900 flex flex-col'>
            <NavBar />

            <div className='w-full h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default Sorting
