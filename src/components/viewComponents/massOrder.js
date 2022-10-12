import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToCart } from '../../Redux/Actions/cartActions';
import { createOrder, createOrderAPIMe, listMyOrders } from '../../Redux/Actions/ordersAction';

export default function MassOrder() {
    const dispatch = useDispatch();
    const [order, SetOrder] = useState('');
    const arr = order.split('|');
    const location = useLocation();
    const redirect = location.search ? Number(location.search.split("=")[1]) : "";
    const onSubmit = async () => {
        await dispatch(createOrder(Number(arr[0]), arr[1], Number(arr[2])))
        await dispatch(addToCart(Number(arr[0]), Number(arr[2]), arr[1]))
        const order = (JSON.parse(localStorage.getItem('ordersInfo')))
        const items = (JSON.parse(localStorage.getItem('cartItems')))
        await dispatch(createOrderAPIMe({
            orderItems: {
                service: Number(arr[0]),
                link: arr[1],
                qty: Number(arr[2]),
                order: order.order !== undefined ? order.order : 0,
                // name: redirect === "" ? (items[0].name.split(`${socialMedida}|${category} |`)[1]) : Service[0]
            },
            totalPrice: 0,
        }))
        await dispatch(listMyOrders())
    }
    return (
        <div className='grid grid-cols-2  gap-2 '>
            <div className='mb-3 col-span-2'>
                <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block after:content-["*"] after:relative after:font-[inherit after:text-[#f1416c] after:pl-[0.25rem] after:font-bold	 '>
                    One order per line in format
                </label>
                <textarea onChange={(e) => { SetOrder(e.target.value) }} id="message" rows="15" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="service_id | link | quantity
service_id | link | quantity | suggest video list
service_id | link | quantity | keyword search
service_id | link | quantity | suggest video list | keyword search (Mix views)"></textarea>

            </div>
            <div className='mb-3 col-span-1'>
                <button type="button" onClick={onSubmit} class="w-full text-white bg-[#3699ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#3699ff] focus:outline-none dark:focus:ring-blue-800">
                    <svg className="inline-block pr-2" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z" /><path fill="white" d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z" /></svg>
                    Submit
                </button>

            </div>
            <div className='mb-3 col-span-1'>
                <button type="button" class="w-full text-white bg-[#0bb783] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#0bb783] focus:outline-none dark:focus:ring-blue-800">
                    <svg className="inline-block pr-2" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z" /></svg>
                    Add funds
                </button>

            </div>
        </div>
    )
}
