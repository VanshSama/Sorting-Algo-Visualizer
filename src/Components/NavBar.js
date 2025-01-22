import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
// import logo from "../Data/image.png"

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currSort, setCurrSort] = useState("bubble");

    useEffect(() => {
        let val = location.pathname.split("/").at(-1);

        if(val === "") val = "bubble"
        setCurrSort(val);
        // console.log(val);
    }, [location]);

    return (
        <div className='w-full px-4 py-2 flex flex-col items-center border-b-[1px] border-richblack-500 bg-richblack-800 '>
            <div className='w-full lg:w-10/12 flex flex-row items-center justify-between'>
                <Link to={"/"}
                className='cursor-pointer text-richblack-25 flex flex-row gap-2 text-2xl font-medium font-inter'>
                    {/* <img src={logo} alt='Visualizer' className='h-[30px] '/> */}
                    Visualizer
                </Link>

                <div>
                    <div className='hidden lg:flex flex-row gap-7 items-center'>
                        <Link to={"/"} className={`font-inter font-medium text-xl ${currSort === "bubble" ? "text-yellow-50" : "text-richblack-25"}`}>
                            Bubble Sort
                        </Link>

                        <Link to={"/selection"} className={`font-inter font-medium text-xl  ${currSort === "selection" ? "text-yellow-50" : "text-richblack-25"}`}>
                            Selection Sort
                        </Link>

                        <Link to={"/insertion"} className={`font-inter font-medium text-xl  ${currSort === "insertion" ? "text-yellow-50" : "text-richblack-25"}`}>
                            Insertion Sort
                        </Link>

                        <Link to={"/merge"} className={`font-inter font-medium text-xl  ${currSort === "merge" ? "text-yellow-50" : "text-richblack-25"}`}>
                            Merge Sort
                        </Link>

                        <Link to={"/quick"} className={`font-inter font-medium text-xl  ${currSort === "quick" ? "text-yellow-50" : "text-richblack-25"}`}>
                            Quick Sort
                        </Link>
                    </div>

                    <div className='flex lg:hidden flex-row w-full'>
                        <select onChange={(e) => navigate(`/${e.target.value}`)}
                            className='bg-richblack-700 font-inter text-richblack-200 rounded-lg px-2 py-2 border-richblack-600 border-[1px] '>
                            <option value="">Bubble Sort</option>
                            <option value="selection">Selection Sort</option>
                            <option value={"insertion"}>Insertion Sort</option>
                            <option value={"merge"}>Merge Sort</option>
                            <option value={"quick"}>Quick Sort</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
