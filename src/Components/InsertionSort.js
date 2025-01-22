import React, { useEffect, useState } from 'react'
import TheoryWriter from './TheoryWriter';

const InsertionSort = () => {
    const [arr, setArr] = useState([]);
    const [currEle, setCurrEle] = useState();
    const [currSituation, setCurrSituation] = useState("theory");
    const [arraySize, setArraySize] = useState(5);
    const [speed, setSpeed] = useState(300);
    const [sortedArray, setSortedArray] = useState([]);

    const getRandomArray = () => {
        const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100));
        setArr(newArray);
    }

    useEffect(() => {
        getRandomArray();
    }, []);

    const getBarClass = (index) => {
        if(currEle === index) return "bg-yellow-50"
        if(sortedArray.includes(index)) return "bg-brown-400"
        return 'bg-richblue-100'
    }

    const insertionSort = async () => {
        let temp = [...arr]
        const n = arr.length;

        const sorted = [0];
        setSortedArray(sorted);
        for(let i=1;i<n;i++){
            let val = temp[i];
            let j = i - 1;

            while(j >= 0 && temp[j] > val){
                setCurrEle(j);
                temp[j + 1] = temp[j];
                j--;
                await new Promise((resolve) => setTimeout(resolve, speed));
            }
            temp[j + 1] = val;

            sorted.push(i);
            setSortedArray(sorted);
            setCurrEle(-1);
            setArr(temp);
            await new Promise((resolve) => setTimeout(resolve, speed));
        }

        while(sorted.length > 0){
            sorted.pop();
        }
        setSortedArray([]);
        setCurrEle(-1);
    }

    return (
        <div className='text-richblack-5 w-full min-h-screen h-full flex flex-col gap-5'>
            <div className='w-full flex flex-col items-center bg-richblack-800 '>
                <div className='flex flex-col gap-4 w-full lg:w-10/12 p-4 lg:px-6 lg:py-6'>
                    <p className='font-inter text-3xl text-richblack-5 font-semibold'>
                        Insertion Sort
                    </p>

                    <div className='cursor-pointer p-[4px] rounded-full flex flex-row gap-[10px] bg-richblack-700 text-richblack-200 items-center w-max'>
                        <div onClick={() => setCurrSituation("theory")} className={`cursor-pointer rounded-full px-[18px] text-lg font-inter font-medium ${currSituation === "theory" ? "text-yellow-50 py-[6px] gap-[10px] bg-richblack-600 rounded-full" : "text-richblack-25"}`}>
                            Theory
                        </div>

                        <div onClick={() => setCurrSituation("visualisation")} className={`cursor-pointer rounded-full px-[18px] text-lg font-inter font-medium ${currSituation === "visualisation" ? "text-yellow-50 py-[6px] gap-[10px] bg-richblack-600 rounded-full" : "text-richblack-25"}`}>
                            Visualisation
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col items-center'>
                <div className='w-full  lg:w-10/12 flex flex-col p-4 lg:px-6 lg:py-6'>
                    {
                        currSituation === "theory" ? (
                            <div>
                                <TheoryWriter sortType="insertion"/>
                            </div>
                        ) : (
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col lg:flex-row w-full gap-4 lg:gap-10 justify-between'>
                                    <div className='flex flex-col w-full gap-[6px]'>
                                        <label htmlFor='size' className='font-inter flex items-center gap-[2px] text-richblack-25'>
                                            Size<sup className='text-[#EF476F]'>*</sup>
                                        </label>

                                        <select id='size' name='size' onChange={(e) => {
                                            setArraySize(e.target.value);
                                            // console.log(e.target.value);
                                            // getRandomArray();
                                        }}
                                        className='bg-richblack-700 font-inter text-richblack-200 rounded-lg px-2 py-2 border-richblack-600 border-[1px] '>
                                            <option value="">Select Size</option>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>

                                    <div className='flex flex-col w-full gap-[6px]'>
                                        <label htmlFor='speed' className='font-inter flex items-center gap-[2px] text-richblack-25'>
                                            Time<sup className='text-[#EF476F]'>*</sup> (in millisec.)
                                        </label>

                                        <select id='speed' name='speed' onChange={(e) => {
                                            setSpeed(e.target.value);
                                            // console.log(e.target.value);
                                            // getRandomArray();
                                        }}
                                        className='bg-richblack-700 font-inter text-richblack-200 rounded-lg px-2 py-2 border-richblack-600 border-[1px] '>
                                            <option value="">Select Speed</option>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="300">300</option>
                                            <option value="500">500</option>
                                            <option value="1000">1000</option>
                                            <option value="1500">1500</option>
                                            <option value="2000">2000</option>
                                            <option value="5000">5000</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <div className='w-4 h-4 bg-yellow-50'></div>
                                        <p> - Current element</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-2'>
                                        <div className='w-4 h-4 bg-brown-400'></div>
                                        <p> - Sorted Array</p>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col w-full'>
                                    {
                                        arraySize > 0 ? (
                                            <div className='flex flex-col items-center gap-10 w-full'>
                                                <div className='flex flex-row items-end gap-1'>
                                                    {
                                                        arr.map((ele, index) => (
                                                            <div key={index} style={{height: `${ele*5}px`}} className={`${getBarClass(index)} md:w-4 w-2 lg:w-6`}>
                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                                <div className='flex flex-row gap-5'>
                                                    <button onClick={() => getRandomArray()} 
                                                    className='bg-yellow-50 font-semibold text-richblack-900 font-inter px-6 py-2 rounded-lg hover:scale-95 transition-all duration-200'>
                                                        Generate new array
                                                    </button>

                                                    <button onClick={() => insertionSort()} 
                                                    className='bg-yellow-50 font-semibold text-richblack-900 font-inter px-6 py-2 rounded-lg hover:scale-95 transition-all duration-200'>
                                                        Sort
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='text-richblack-5 text-center font-inter font-medium text-3xl'>
                                                Size is required
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default InsertionSort
