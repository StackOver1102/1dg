import React, { useState, Fragment, useEffect } from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { CreateWallet } from '../../Redux/Actions/WalletAction';
// import DialogOverlay  from '@headlessui/react'
export default function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [click, setClick] = useState(false);
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const handleChange = (temp) => {
        props.onDelete(temp)
    }
    const createWallet = useSelector((state) => state.createWallet);
    const {wallet} = createWallet
    useEffect( ()=>{
        dispatch(CreateWallet())
    },[dispatch])
    const Modal = () => {
        return (
            <>
                <Transition show={isOpen} as={Fragment} >
                    <Dialog
                        className="fixed inset-0 z-50 flex justify-center items-start"
                        open={isOpen} onClose={() => setIsOpen(false)}>
                        <Transition.Child
                            enter="duration-200 ease-out"
                            enter-from="opacity-0"
                            enter-to="opacity-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100"
                            leave-to="opacity-0"
                            as={Fragment}>
                            <Dialog.Overlay
                                className="fixed inset-0 bg-black bg-opacity-70"
                            ></Dialog.Overlay>
                        </Transition.Child>

                        <Transition.Child
                            enter="duration-200 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                            as={Fragment}>
                            <div
                                className="overflow-hidden w-full max-w-2xl bg-white rounded-lg mx-4 max-h-[80vh] mt-[10vh] relative"
                            >
                                <form
                                    className="flex items-center"
                                    action="#">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-700"
                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        className="w-full py-4 pl-12 border-b border-gray-100 outline-none placeholder-gray-400"
                                        type="text" placeholder="Search..." />

                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <button onClick={() => setIsOpen(false)} className="flex items-center p-1.5 uppercase font-semibold tracking-wider text-gray-700 rounded-md border border-gray-200 focus:outline-none focus:border-gray-300 text-xxs" type="button">Esc</button>
                                    </div>
                                </form>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition >
            </>
        )
    }
    return (
        <header className='sticky top-0 z-40 flex-none mx-auto w-full bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800'>
            <div className='flex justify-between items-center py-3 px-3 mx-auto w-full max-w-8xl lg:px-4'>
                <div className='flex items-center'>
                    <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" className="p-2 mr-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg onClick={() => {
                            setClick(true)
                            handleChange(click)
                        }} id="toggleSidebarMobileHamburger" className={click ? "w-6 h-6 hidden" : "w-6 h-6 "} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg onClick={() => {
                            setClick(false)
                            handleChange(click)
                        }} id="toggleSidebarMobileClose" className={!click ? "hidden w-6 h-6" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex">
                            <img alt="Logo" src={logo} className="hidden lg:inline h-[30px]" />
                            <img alt="Logo" src={logo} className="lg:hidden h-[25px] w-[100px]"></img>
                        </Link>
                    </div>
                    <div className="ml-6 xl:ml-16 xl:pl-4">

                        <button className='flex items-center space-x-2 border border-gray-900/10 shadow-sm px-3 py-1.5 hover:border-gray-300 focus:outline-none focus:border-gray-300  rounded-lg  w-72' onClick={() => setIsOpen(!isOpen)}>
                            <svg width="24" height="24" fill="none" aria-hidden="true" className="flex-none -ml-1 text-gray-500">
                                <path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </circle>
                            </svg>
                            <span className='text-sm text-gray-400 text-left' >
                                Quick service search
                            </span>
                        </button>
                        {Modal()}
                    </div>
                </div>
                <div className='flex items-center'>

                    <a href="/pro/#pricing" className=" inline-flex items-center text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-3">$ {wallet?.balance}</a>
                    <svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 pl-3' preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="#f1416c" d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742c-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" /></svg>
                    <div id="tooltip-youtube" role="tooltip" className="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip opacity-0 invisible " data-popper-placement="top">
                        Subscribe to YouTube channel
                        <div className="tooltip-arrow absolute left-0 trans navbar" data-popper-arrow="" ></div>
                    </div>
                    <div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-[800px]" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header flex items-center justify-between p-4 border-b-[1px] border-solid boder-[#dadaeb]">
                            <h5 className="offcanvas-title mb-0 leading-normal font-semibold" id="offcanvasRightLabel">Updates</h5>
                            <button type="button" className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body flex-grow p-4 overflow-y-auto ">
                            <div>
                                <div className='relative p-0 m-0 flex items-start'>
                                    <div className='border-b-[1px] border-solid boder-[#dadaeb] w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                        <div className="pr-3 mb-5 text-[#50cd89]">
                                            <div className="text-[1.15rem] font-medium mb-2">[New Service] 1037 | Tiktok Likes | Max 500K | Speed: 150K/Day | $0.21</div>
                                            <div className="flex items-center mt-1 text-[1.075rem]">
                                                <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-06 00:22:15</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='relative p-0 m-0 flex items-start'>
                                    <div className='border-b-[1px] border-solid boder-[#dadaeb] w-full overflow-auto mt-[-0.45rem] mb-[1rem]'>
                                        <div className="pr-3 mb-5 text-[#50cd89]">
                                            <div className="text-[1.15rem] font-medium mb-2">[New Service] 1037 | Tiktok Likes | Max 500K | Speed: 150K/Day | $0.21</div>
                                            <div className="flex items-center mt-1 text-[1.075rem]">
                                                <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-06 00:22:15</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='relative p-0 m-0 flex items-start'>
                                    <div className='border-b-[1px] border-solid boder-[#dadaeb] w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                        <div className="pr-3 mb-5 text-[#f1416c]">
                                            <div className="text-[1.15rem] font-medium mb-2">[Disable Service] 1001 | FB Profile Followers | VIET NAM | Max 100k | Speed 3k/day</div>
                                            <div className="flex items-center mt-1 text-[1.075rem]">
                                                <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-04 13:47:09</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='relative p-0 m-0 flex items-start'>
                                    <div className='border-b-[1px] border-solid boder-[#dadaeb] w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                        <div className="pr-3 mb-5 text-[#50cd89]">
                                            <div className="text-[1.15rem] font-medium mb-2">[New Service] 1035 | Facebook Custom Comments | Bình luận Facebook Việt | Speed 50-200/Day | $3.5</div>
                                            <div className="flex items-center mt-1 text-[1.075rem]">
                                                <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-04 12:41:25</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='relative p-0 m-0 flex items-start'>
                                    <div className='border-b-[1px] border-solid boder-[#dadaeb] w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                        <div className="pr-3 mb-5 text-[#50cd89]">
                                            <div className="text-[1.15rem] font-medium mb-2">[New Service] 1034 | Facebook | 𝗣𝗼𝘀𝘁/𝗣𝗵𝗼𝘁𝗼 𝗟𝗶𝗸𝗲𝘀 | Max 10k | Speed 3k-5k/day | $0.182</div>
                                            <div className="flex items-center mt-1 text-[1.075rem]">
                                                <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-03 23:52:40</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='relative p-0 m-0 flex items-start'>
                                    <div className='border-b-[1px] border-solid boder-[#dadaeb] w-full overflow-automt-[-0.45rem] mb-[1rem]'>
                                        <div className="pr-3 mb-5 text-[#50cd89]">
                                            <div className="text-[1.15rem] font-medium mb-2">[New Service] 1033 | Youtube Likes | Speed 30k/Hours | $1.26</div>
                                            <div className="flex items-center mt-1 text-[1.075rem]">
                                                <div className="text-[#a1a5b7] mr-2 text-[.95rem]">2022-10-03 22:56:17</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
