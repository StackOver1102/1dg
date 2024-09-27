import React, { useState } from 'react'
import Select from 'react-select'
export default function Affiliate() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const [startDate, setStartDate] = useState(new Date());
    const [checkBox, setcheckBox] = useState(false);

    return (
        <>
            <div className='relative px-4 py-4 bg-[#ffeeb3] text-[#665000] border-[#ffeeb3] mb-4 items-center flex '>
                🤑 Wanna get money? Use our Affiliate Programs to get more! Refer your friends and lets make money! 👍

            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                <div className='mb-3 lg:col-span-3'>

                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Referral link
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Commission rate
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Minimum withdraw
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Minimum convert

                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        https://1tap.me/ref/nguyendinhtu1
                                    </th>
                                    <td className="py-4 px-6">
                                        2%
                                    </td>
                                    <td className="py-4 px-6">
                                        $ 50
                                    </td>
                                    <td className="py-4 px-6">
                                        $ 5

                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>


                </div>
                <div className='mb-3 lg:col-span-2' >
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Total Earnings
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Unpaid
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Paid
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        $ 0
                                    </th>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td>

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='mb-2 lg:col-span-1' >
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Total Earnings
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Unpaid
                                    </th>



                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {/* <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        $ 0
                                    </th>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td> */}

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mb-2 lg:col-span-2' >
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className=" text-gray-700  dark:text-gray-400">
                                <tr>
                                    <th colSpan={5} className="py-3 px-6 ">
                                        <div className='flex items-center '>
                                            <h4 className='font-bold text-base'>Request History</h4>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=' bg-gray-50 dark:bg-gray-700'>
                                    <th scope="col" className="py-3 px-6">
                                        Created
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Type
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Amount
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Details
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Status
                                    </th>



                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {/* <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        $ 0
                                    </th>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td>
                                    <td className="py-4 px-6">
                                        $ 0
                                    </td> */}

                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
              
            </div>
        </>
    )
}
