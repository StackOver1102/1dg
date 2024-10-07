import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listStatus } from '../../Redux/Actions/statusActions'
import axios from 'axios'
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { report } from '../../Redux/Actions/reportActions'

export default function () {
    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const [data, setData] = useState([]); // no data yet
    const [isLoading, setIsLoading] = useState(false);
    const [Error, setError] = useState('')
    const [order, setOrders] = useState(0)
    const [request, setRequest] = useState('Cancel')
    const [message, setMessage] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const handlerSendReport = () => {
        const temp = document.getElementById('order').value

        dispatch(report({
            reportOrder: {
                order: Number(temp),
                message,
                Request: request
            }
        }))
    }

    useEffect(() => {
        setIsLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        axios.get("https://api.1tap.top/api/orders/getByUser", config)
            .then(data => {
                setData(data.data); // update state with response
                // console.log(data.data)
                const arr = data.data.map((items) => (items.orderItems[0].order))
                dispatch(listStatus(arr.toString()))
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setIsLoading(false)); // complete loading success/fail
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPages = Math.ceil(data.length / recordsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>
            <div className='grid grid-cols-4 gap-2'>
                <div className='mb-2 col-span-1'>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="All" defaultValue>All</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="In progress">Completed</option>
                        <option value="Partial">Partial</option>
                        <option value="Canceled">Canceled</option>

                    </select>
                </div>
                <div className='mb-2 col-span-1'>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue >Search type</option>
                        <option value="Order ID">Order ID</option>
                        <option value="Link">Link</option>
                        <option value="Service">Service</option>

                    </select>

                </div>
                <div className='mb-2 input-group relative  col-span-2'>

                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-full">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                <input type="search" className="form-control relative flex-auto lex bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Search' />

                                <button className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='overflow-x-auto relative shadow-md sm:rounded-lg col-span-4'>
                    {Error && <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{Error}</Message>}
                    {isLoading && <Loading />}
                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                        <tbody>
                            {
                                data.map((item, indew) => item.orderItems[0].order !== 0 ? (<tr key={indew} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[12%] border-[1px] border-solid border-[#dadaeb] ">
                                        {/* <p className="m-0 font-semibold">{item.orderItems[0].order}</p> */}
                                        <p className="m-0 font-semibold text-[#7239ea]">{(item.orderStatus)} </p>
                                        <p className="m-0 text-[.75rem] text-gray-600"> {new Date(item.createdAt).toLocaleString("vi-VN", {
                                            timeZone: 'Asia/Bangkok', // UTC +7
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: false // 24-hour format
                                        })}</p>
                                        <p className="m-0 text-[.75rem] text-gray-600"> {new Date(item.updatedAt).toLocaleString("vi-VN", {
                                            timeZone: 'Asia/Bangkok', // UTC +7
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: false // 24-hour format
                                        })}</p>
                                    </td>
                                    <td className=" px-1  border-[1px] border-solid border-[#dadaeb] lg:w-[70%] w-[60%]  ">
                                        <div>
                                            <p className='m-0 text-gray-600 text-lg'>
                                                <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="red" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                                <span className="text-gray-800 font-medium"> {item.orderItems[0].service} </span>
                                                {item.orderItems[0].name}
                                            </p>
                                            <p className='mb-0 text-lg'>
                                                <span className="bg-[#50cd89] text-[#fff] text-xl font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                <span className="bg-[#50cd89] text-[#fff] text-xl font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                            </p>
                                            <p className="m-0 wrap text-lg">{item.orderItems[0].link}</p>
                                        </div>
                                        <div className='float-right' >

                                            <Link to={`/new?service=${item.orderItems[0].service}`} className='text-[#009ef7] mr-2 font-medium '>Reorder</Link>
                                            <a className='text-[#f1416c]  font-medium mr-1' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Report</a>
                                            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                                                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                                                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                                            <h5 className="text-xl font-semibold leading-normal text-[#181c32]" id="exampleModalScrollableLabel">
                                                                Report Order
                                                            </h5>
                                                            <button type="button"
                                                                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                                                data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body relative px-4 pb-2 pt-4">
                                                            <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Order ID</label>
                                                            <input type="text" id="order" value={item.orderItems[0].order} onChange={(e) => { setOrders(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                                                        </div>
                                                        <div className="modal-body relative px-4 py-2">
                                                            <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Request</label>
                                                            <select id="countries" onChange={(e) => { setRequest(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option value="Cancel" defaultValue>Cancel</option>
                                                                <option value="Refill">Refill</option>
                                                                <option value="Speed up">Speed up</option>
                                                                <option value="DE">Other</option>
                                                            </select>
                                                        </div>
                                                        <div className="modal-body relative px-4 py-2">
                                                            <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Request</label>
                                                            <textarea id="message" rows="4" onChange={(e) => { setMessage(e.target.value) }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

                                                        </div>
                                                        <div
                                                            className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4  border-gray-200 rounded-b-md">

                                                            <button type="button"
                                                                onClick={handlerSendReport}
                                                                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                                                Send
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className=" px-1  border-[1px] border-solid border-[#dadaeb] w-[12%]">
                                        <p className="m-0 font-medium  ">
                                            <span className="text-gray-600">Charge:</span>
                                            <a >
                                                <span className="text-[#009ef7]">${item.charge}</span>
                                            </a>
                                        </p>
                                        <p className="m-0 font-medium">
                                            <span className="text-gray-600">Quantity:</span>
                                            {item.orderItems[0].quantity}
                                        </p>
                                        <p className="m-0 font-medium">
                                            <span className="text-gray-600">Start count:</span>
                                            {item.start_count}

                                        </p>
                                        <p className="m-0 font-medium">
                                            <span className="text-gray-600">Remains:</span>
                                            {item.remains}
                                        </p>
                                    </td>
                                </tr>) : null
                                )
                            }
                        </tbody>
                    </table>

                </div>
                <div className="pagination mt-4">
                    <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 bg-gray-300 text-black rounded mr-2"
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`px-3 py-1 ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} rounded mr-2`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 bg-gray-300 text-black rounded"
                    >
                        Next
                    </button>
                </div>

            </div >


        </>
    )
}
