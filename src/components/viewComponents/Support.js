import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listMyMessage, report } from '../../Redux/Actions/reportActions'
import Modal from './Modal'
import moment from "moment"
import { useNavigate } from 'react-router-dom'
export default function Support() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const [request, setRequest] = useState('Order')
    const [message, setMessage] = useState('')
    const [choose, SetChoose] = useState('Order')
    const messageList = useSelector((state) => state.messageList)
    const { messager } = messageList
    const history = useNavigate();
 
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
        dispatch(listMyMessage())
    }, [dispatch])
    return (
        <>
            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th colSpan={3} class="py-3 px-6 bg-[#e4e6ef]">
                                Direct message
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white   ">
                                <div className='flex items-center '>
                                    <div className='flex items-center flex-grow '>
                                        <div className='rounded-[50%] inline-block flex-shrink-0 relative mr-3 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#009ef7" d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999c0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891c1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" /></svg>
                                        </div>
                                        <div className='m-0'>
                                            <span className='font-medium text-gray-600 block text-[0.85rem]'>
                                                Facebook
                                            </span>
                                            <span className='font-semibold text-gray-800 block text-[1.075rem]'>
                                                https://www.facebook.com/1tap.me
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 px-6  ">
                                <div className='flex items-center '>
                                    <div className='flex items-center flex-grow '>
                                        <div className='rounded-[50%] inline-block flex-shrink-0 relative mr-3 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="#009ef7" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01c-.378.15-.577.298-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294c.26.006.549-.1.868-.32c2.179-1.471 3.304-2.214 3.374-2.23c.05-.012.12-.026.166.016c.047.041.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817c-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088c.327.216.589.393.85.571c.284.194.568.387.936.629c.093.06.183.125.27.187c.331.236.63.448.997.414c.214-.02.435-.22.547-.82c.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315a.337.337 0 0 0-.114-.217a.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" /></svg>                                    </div>
                                        <div className='m-0'>
                                            <span className='font-medium text-gray-600 block text-[0.85rem]'>
                                                Telegram
                                            </span>
                                            <span className='font-semibold text-gray-800 block text-[1.075rem]'>
                                                @lethang1tap
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 px-6  ">
                                <div className='flex items-center '>
                                    <div className='flex items-center flex-grow '>
                                        <div className='rounded-[50%] inline-block flex-shrink-0 relative mr-3 '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="#f1416c" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608a17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>                                    </div>
                                        <div className='m-0'>
                                            <span className='font-medium text-gray-600 block text-[0.85rem]'>
                                                Phone
                                            </span>
                                            <span className='font-semibold text-gray-800 block text-[1.075rem]'>
                                                099.73.66666
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                            <td class="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white   ">
                                <div className='flex items-center '>
                                    <div className='flex items-center  '>
                                        <div className='grid grid-cols-2bor  '>
                                            <p className=''>Support payment : <strong>  https://www.facebook.com/motdanga</strong></p>
                                            {/* <ul ><li><strong>https://www.facebook.com/motdanga</strong></li></ul> */}
                                        </div>

                                    </div>
                                </div>
                            </td>


                        </tr>

                    </tbody>
                </table>

            </div>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModalCenter" onClick={() => { setShowModal(true) }} class="mt-4 text-white bg-[#f1416c] hover:bg-[##d9214e] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                <svg className="inline-block pr-2" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" /><path fill="white" d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z" /></svg>
                Create a ticket
            </button>
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
                        <div className="modal-body relative px-4 py-2">
                            <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Subject</label>
                            <select id="Subject" onChange={(e) => { SetChoose(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="Order" defaultValue>Order</option>
                                <option value="Payment">Payment</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={choose === "Order" ? "modal-body relative px-4 py-2 " : "modal-body relative px-4 py-2 hidden"}>
                            <label className="required mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254]">Order ID</label>
                            <input type="text" id="order" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                        </div>
                        <div className={choose === "Order" ? "modal-body relative px-4 py-2 " : "modal-body relative px-4 py-2 hidden "}>
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
            <div class="overflow-x-auto relative pt-5">

                <table class="border-separate message w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <tbody>
                        {
                            messager?.map((items) =>
                                <tr class="bg-[rgba(245,248,250,.5)]  dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-[#F5F8FA] dark:hover:bg-gray-600" onClick={()=>history(`/viewtiket?id=${items._id}`)}>
                                    <td className='pl-5 py-2'>
                                        <p class="m-0 text-[1.075rem] text-black font-medium">{items._id} - Order - {items.reportOrder[0].order}</p>
                                        <p class="m-0 text-gray-700">{moment(items.createAt).format('LLL')}</p>
                                    </td>
                                    <td className='text-end text-[1.075rem] pr-5 py-2 '>
                                        <span class="text-black">{items.reportOrder[0].status}</span>
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>


        </>

    )
}
