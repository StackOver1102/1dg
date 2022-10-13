import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { updateUserProfile } from '../../Redux/Actions/userAction';
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Toast from "./../LoadingError/Toast";
import Loading from "./../LoadingError/Loading";
import axios from 'axios'

export default function Setting() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [passwordOld, setPasswordOld] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [Error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const toastId = React.useRef(null);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const userUpdate = useSelector((state) => state.userUpdate);
    const { loading } = userUpdate;
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    useEffect(() => {
        if (userInfo) {
            setId(userInfo._id)
        }
    }, [userInfo])
    const submitHandler = (e) => {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };


        if (password != confirmPassword) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Password does not match", Toastobjects)
            }
        } else {
            setIsLoading(true);
            axios.put(`https://up-view.harokuapp.com/api/users/updateProfile`, { id: id, paswordold: passwordOld, paswordNew: password }, config)
                .then(() => {
                    if (!toast.isActive(toastId.current)) {
                        toastId.current = toast.success("Profile Updated", Toastobjects);
                    }
                })
                .catch(error => {
                    if (!toast.isActive(toastId.current)) {
                        toastId.current = toast.error("Password Old Wrong", Toastobjects);
                    }
                })
                .finally(() => setIsLoading(false)); // complete loading success/fail



        }


    }
    return (
        <>
            <Toast />
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                <div className='lg:col-span-3'>
                    <h3 className="">Security</h3>
                </div>
                <form className='lg:col-span-3'>
                    <div className='lg:col-span-1 pt-2'>
                        <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                            Current password
                        </label>
                        <input type="password"  autoComplete="on" onChange={(e) => { setPasswordOld(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='lg:col-span-1 pt-2 '>
                        <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                            New password
                        </label>
                        <input type="password"  autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='lg:col-span-1 pt-2 '>
                        <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                            Confirm password
                        </label>
                        <input type="password"  autoComplete="on" onChange={(e) => { setConfirmPassword(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="lg:col-span-3 pt-3 ">
                        <button type="button" onClick={submitHandler} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#e4e6ef]  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Change password</button>

                    </div>
                </form>
                <div className="lg:col-span-3">
                    <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                        2FA Google Authentication
                    </label>
                    <div>
                        <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-[#e4e6ef] rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"> Enable</button>
                    </div>

                </div>
                <div className="lg:col-span-3">
                    <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                        API Key
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" /></svg>
                        </span>
                        <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk" />
                    </div>

                </div>

                <div className="block h-0 border-button my-2 lg:col-span-3"></div>

                <div className='border-t-0 lg:col-span-3'>
                    <h3 className="">Settings</h3>
                </div>
                <div className='mb-3 lg:col-span-3' >
                    <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                        Appearance
                    </label>
                    <Select options={options} />
                </div>
                <div className='mb-3 lg:col-span-3' >
                    <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                        Currency
                    </label>
                    <Select options={options} />
                </div>
                <div className='mb-3 lg:col-span-3' >
                    <label className=' mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block '>
                        Timezone
                    </label>
                    <Select options={options} />
                </div>

                <div className="block h-0 border-button my-2 lg:col-span-3"></div>

                <div className='border-t-0 lg:col-span-3'>
                    <h3 className="">Sign-in history</h3>
                </div>
                <div className='mb-3 lg:col-span-3' >
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            {/* <thead className=" text-gray-700  dark:text-gray-400">
                            <tr>
                                <th colSpan={5} className="py-3 px-6 ">
                                    <div className='flex items-center '>
                                        <h4 className='font-bold text-base'>Request History</h4>
                                    </div>
                                </th>
                            </tr>
                        </thead> */}
                            <tbody>
                                <tr className=' bg-gray-50 dark:bg-gray-700'>
                                    <th scope="col" className="py-3 px-6">
                                        IP
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Device
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Time
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
