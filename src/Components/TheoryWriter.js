import React, { useEffect, useState } from 'react'
import { bubbleData } from '../Data/SortingTheory'
import { insertionData } from '../Data/SortingTheory'
import { selectionData } from '../Data/SortingTheory'
import { mergeData } from '../Data/SortingTheory'
import { quickData } from '../Data/SortingTheory'

const TheoryWriter = ({sortType}) => {
    const [currData, setCurrData] = useState(null);

    useEffect(() => {
        if(sortType === "bubble") setCurrData(bubbleData);
        if(sortType === "selection") setCurrData(selectionData);
        if(sortType === "insertion") setCurrData(insertionData);
        if(sortType === "merge") setCurrData(mergeData);
        if(sortType === "quick") setCurrData(quickData);
        // console.log("Curr Data :- ", currData);
    }, [])

    return (
        <div className='text-richblack-5 flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
                <div className='text-lg font-inter font-semibold text-richblack-5'>
                    Description :-
                </div>
                <div className='text-sm font-inter font-medium text-richblack-100'>
                {currData?.description}
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='text-lg font-inter font-semibold text-richblack-5'>
                    Steps followed for sorting :-
                </div>

                <ul className='list-disc text-richblack-100 flex flex-col gap-1 px-4'>
                    {
                        currData?.steps?.map((ele, index) => (
                            <li key={index} className='text-sm font-inter font-medium text-richblack-100'>
                                {ele}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='text-lg font-inter font-semibold text-richblack-5'>
                    Code :- 
                </div>

                <div className='flex flex-row items-center justify-between gap-3 '>
                    {
                        currData?.code?.map((ele, index) => (
                            <div key={index} className='flex flex-col gap-2 border-[1px] border-richblack-700 bg-richblack-800 rounded-lg '>
                                <div className='text-xl px-2 py-1 bg-richblack-600 rounded-t-lg font-semibold border-b-[1px] border-richblack-600'>
                                    {ele?.tag}
                                </div>

                                <div className='px-4 py-2 flex flex-col gap-1'>
                                {
                                    ele?.value?.map((row, idx) => (
                                        <pre key={idx} className='text-base font-inter w-full font-medium text-yellow-50'>
                                            {row}
                                        </pre>
                                    ))
                                }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex flex-row gap-4 items-center'>
                    <p className='text-lg font-inter font-semibold text-richblack-5'>
                        Time Complexity :- 
                    </p>

                    <p className='text-lg font-inter font-medium text-yellow-50'>
                        {currData?.timeComplexity}
                    </p>
                </div>

                <div className='flex flex-row gap-4 items-center'>
                    <p className='text-lg font-inter font-semibold text-richblack-5'>
                        Space Complexity :- 
                    </p>

                    <p className='text-lg font-inter font-medium text-yellow-50'>
                        {currData?.spaceComplexity}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TheoryWriter
