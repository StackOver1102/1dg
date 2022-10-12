import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { messagelistDetailMessage } from '../../Redux/Actions/reportActions';
import moment from 'moment';
export default function ViewTiket() {
    const dispatch = useDispatch();
    const location = useLocation();
    const messageListDetail = useSelector((state) => state.messageListDetail)
    const redirect = location.search ? Number(location.search.split("=")[1]) : "";

    const { messager } = messageListDetail
    console.log(messageListDetail)
    useEffect(() => {
        dispatch((messagelistDetailMessage(redirect)))
    }, [dispatch])

    return (
        <div className='flex  justify-center '>
            <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
                <div className="flex w-full items-center justify-between border-b pb-3">
                    <div className="flex items-center space-x-3">
                        <div className="text-lg font-bold text-slate-700">Order</div>
                    </div>
                    {/*  */}
                </div>
                {/* RIGHT */}
                <div className="flex justify-end mb-5">
                    <div className='flex flex-col items-end'>
                        <div className='flex items-center mb-2'>
                            <div className='mr-[0.75rem]'>
                                <span class="text-[#a1a5b7] text-[.95rem] mb-1">{moment(messager?.createAt).format('LLL')}</span>
                                <a href="#" class="text-lg font-semibold text-gray-900 hover:text-[#009ef7] ml-1">You</a>
                            </div>
                        </div>
                        <div class="p-3 rounded bg-[#f1faff] text-[#181c32] font-medium lg:max-w-[400px] text-end">
                            Order ID: {messager?.reportOrder[0].order}
                            <span> </span>
                            Request: {messager?.reportOrder[0].Request}

                        </div>
                    </div>
                </div>

                <div className="flex justify-start mb-5">
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center mb-2'>
                            <div className='mr-[0.75rem]'>
                                <a href="#" class="text-lg font-semibold text-gray-900 hover:text-[#009ef7] mr-1">Admin </a>
                                <span class="text-[#a1a5b7] text-[.95rem] mb-1">{moment(messager?.createAt).format('LLL')}</span>
                            </div>
                        </div>
                        <div class="p-3 rounded bg-[#f8f5ff] text-[#181c32] font-medium lg:max-w-[400px] text-start">
                            {messager?.reportOrder[0].repmessage}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
