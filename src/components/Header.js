import React, { useRef, useState } from "react"
import logo from '../assets/images/logo.png'
import { Button } from "flowbite-react";
import { Link } from 'react-scroll'
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
    const [open, setOpen] = useState(false);

    const [color, setColor] = useState(false);
    const dispatch = useDispatch();


    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const changColor = () => {
        if (window.scrollY >= 71) {
            setColor(true)
        }
        else setColor(false);
    }
    window.addEventListener("scroll", changColor);
    // const logoutHandler = () => {
    //     dispatch(logout());
    // };
    return (
        <nav className={color ? "bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" : "bg-[#13263c] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-[#13263c] dark:border-gray-600"}>
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-[#009ef7] hover:bg-[#009ef7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {
                            userInfo ? <a href="/new">Order Now!</a> : <a href="/signin">Sign in</a>
                        }
                    </button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" >
                        <svg onClick={() => {
                            setOpen(true)
                        }} id="toggleSidebarMobileHamburger" className={open ? "w-6 h-6 hidden" : "w-6 h-6 "} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg onClick={() => {
                            setOpen(false)
                        }} id="toggleSidebarMobileClose" className={!open ? "hidden w-6 h-6" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>


                </div>
                <div className={open ? "justify-between items-center w-full md:flex md:w-auto md:order-1" : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"} id="navbar-sticky">
                    <ul className={color ? "flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" : "flex flex-col p-4 mt-4 bg-[#13263c] rounded-lg border border-[#13263c] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#13263c] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"}>

                        <li >
                            <Link to="#" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 pr-4 pl-3 text-[#a1a5b7] bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" >Home</Link>
                        </li>
                        <li >
                            <Link to="test" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 pr-4 pl-3 text-[#a1a5b7] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">How it Works</Link>
                        </li >
                        <li>
                            <Link to="achievements" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 pr-4 pl-3 text-[#a1a5b7] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Achievements</Link>
                        </li>
                        <li >
                            <Link to="Pricing" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 pr-4 pl-3 text-[#a1a5b7] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                        </li>
                        <li >
                            <a href="/services" className="block py-2 pr-4 pl-3 text-[#a1a5b7] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                        </li>
                        <li >
                            <a href="/signup" className={userInfo ? " py-2 pr-4 pl-3 text-[#a1a5b7] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 hidden" : "block py-2 pr-4 pl-3 text-[#a1a5b7] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "}>Sign up</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header