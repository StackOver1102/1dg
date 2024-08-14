import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from "react-router-dom"
import { SidebarData } from '../Slidebar/Slidebar';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Actions/userAction';
const usePathName = () => {
    const location = useLocation();
    return location.pathname;
};
export default function Section(props) {
    const location = usePathName();
    // SidebarData.map((item) => {
    //     location === item.path ? (item.current = true) : (item.current = false);
    // });

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };
    const { check } = props
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false
            },
            "google_translate_element"
        );
    };
    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    return (
        <div className='w-full px-4 mx-auto max-w-8xl  aside-enabled'>
            <div className='lg:flex'>
                <aside className={check ? 'fixed inset-0 z-20 flex-none h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block hidden' : 'fixed inset-0 z-20 flex-none h-full w-72 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block'}>
                    <h4 id="sidebar-label" className="sr-only">Browse docs</h4>
                    <div className='overflow-y-auto z-20 h-full  bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-3rem)] lg:block lg:sticky top:24 lg:top-28 dark:bg-gray-900 lg:mr-0'>
                        <nav className='pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 font-normal text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)'>
                            <ul className='mb-0 list-unstyled'>
                                <li className='mt-8'>
                                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-[#a1a5b7] uppercase lg:text-xs dark:text-white">MAIN</h5>
                                    <ul className='py-1 list-unstyled fw-normal small'>
                                        <li>
                                            <Link to="/new" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                </svg>
                                                <span className='font-semibold '>  New Order</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/mass" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3.094L7.094 12H2v6h1.25l2.781 9.281l.219.719h19.5l.219-.719L28.75 18H30v-6h-5.094zm0 2.844L22.063 12H9.938zM4 14h24v2h-.75l-.219.719L24.25 26H7.75l-2.781-9.281L4.75 16H4zm7 3v7h2v-7zm4 0v7h2v-7zm4 0v7h2v-7z" /></svg>
                                                <span className='font-semibold '>  Mass Order</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/orders" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M4 6v20h24V6zm2 2h5v4H6zm7 0h13v4H13zm-7 6h5v4H6zm7 0h13v4H13zm-7 6h5v4H6zm7 0h13v4H13z" />
                                                </svg>
                                                <span className='font-semibold '>  Order</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/addfunds" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3zm0 2h22c.566 0 1 .434 1 1v2H5v2h23v10c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1z" /></svg>
                                                <span className='font-semibold '>  Add funds</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/services" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M10 6c1.544 1.76 2.276 4.15 2.217 6.61c3.968 1.67 9.924 6.12 11.181 12.39H28C26.051 14.31 14.918 6.77 10 6zm-2 7c4.67 4.913.81 11.582-4 12h18.97C21.5 18.289 11.95 13.533 8 13z" /></svg>
                                                <span className='font-semibold '>  Services</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className='mt-8'>
                                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-[#a1a5b7] uppercase lg:text-xs dark:text-white">OTHER</h5>

                                    <ul className='py-1 list-unstyled fw-normal small'>
                                        <li>
                                            <Link to="/cashflow" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M17 4v1.19a3.076 3.076 0 0 0-1.674 1.464a2.925 2.925 0 0 0-.264 1.946a3.061 3.061 0 0 0 1.268 1.883c.48.325 1.055.517 1.67.517c.142 0 .276.027.396.076a.961.961 0 0 1 .528.528c.049.12.076.254.076.396a.976.976 0 0 1-.604.924c-.12.049-.254.076-.396.076c-.142 0-.276-.027-.396-.076a.961.961 0 0 1-.528-.528A1.044 1.044 0 0 1 17 12h-2a2.944 2.944 0 0 0 .857 2.076a3.062 3.062 0 0 0 1.143.735V16h2v-1.19c1.16-.42 2-1.52 2-2.81c0-1.435-1.041-2.655-2.4-2.938A2.94 2.94 0 0 0 18 9c-.142 0-.276-.027-.396-.076a.96.96 0 0 1-.528-.528A1.044 1.044 0 0 1 17 8c0-.143.027-.276.076-.396a.961.961 0 0 1 .211-.317A.996.996 0 0 1 18 7c.57 0 1 .43 1 1h2a2.944 2.944 0 0 0-.148-.924A3.046 3.046 0 0 0 19 5.19V4h-2zm-6.484 14a6.428 6.428 0 0 0-1.817.266l-.02.007l-5.671 2.176l1.984 5.57l4.93-1.89l7.137 3.93l12.324-5.106l-.766-1.844l-11.437 4.735l-7.102-3.91l-3.89 1.488l-.641-1.805l3.797-1.457c.009-.004.476-.16 1.172-.16c.703 0 1.522.156 2.222.79l.014.007l.004.004c1.03.895 1.808 1.52 2.89 1.86c1.082.34 2.31.378 4.36.37l-.01-2c-2.012.008-3.063-.063-3.75-.281c-.688-.211-1.176-.59-2.168-1.45l-.012-.007c-1.157-1.039-2.531-1.297-3.55-1.293z" /></svg>
                                                <span className='font-semibold '> Cash flow</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/affiliate" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16.5 3C10.159 3 5 8.159 5 14.5c0 4.649 2.779 8.654 6.758 10.465a30.38 30.38 0 0 1-.238-2.39C8.813 20.897 7 17.91 7 14.5C7 9.262 11.262 5 16.5 5S26 9.262 26 14.5c0 3.411-1.813 6.398-4.52 8.074a30.427 30.427 0 0 1-.238 2.39C25.222 23.155 28 19.15 28 14.5C28 8.159 22.841 3 16.5 3zm0 4C12.364 7 9 10.364 9 14.5a7.487 7.487 0 0 0 2.795 5.832a4.098 4.098 0 0 1 1.143-1.65A5.488 5.488 0 0 1 11 14.5c0-3.032 2.468-5.5 5.5-5.5s5.5 2.468 5.5 5.5a5.488 5.488 0 0 1-1.938 4.182a4.075 4.075 0 0 1 1.143 1.65A7.487 7.487 0 0 0 24 14.5c0-4.136-3.364-7.5-7.5-7.5zm0 4c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 2c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5zm0 6c-3.159 0-3.5 2.076-3.5 2.969c0 1.644.537 4.95.83 6.205c.13.55.648 1.826 2.67 1.826s2.54-1.276 2.67-1.826c.293-1.253.83-4.561.83-6.205c0-.893-.341-2.969-3.5-2.969zm0 2c1.5 0 1.5.56 1.5.969c0 1.335-.47 4.43-.777 5.748c-.025.105-.067.283-.723.283c-.656 0-.698-.177-.723-.281c-.306-1.314-.777-4.414-.777-5.75c0-.41 0-.969 1.5-.969z" /></svg>                                                <span className='font-semibold '> Affiliate</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/childpanel" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3c-2.75 0-5 2.25-5 5c0 1.57.766 2.957 1.906 3.875C11.176 12.93 10 14.832 10 17v3.406l.281.313L12 22.437V29h2v-5h4v5h2v-6.563l1.719-1.718l.281-.313V17c0-2.168-1.176-4.07-2.906-5.125C20.234 10.957 21 9.57 21 8c0-2.75-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.332-3 3-3zm0 8c2.219 0 4 1.781 4 4v2.563l-.438.437h-7.125L12 19.562V17c0-2.219 1.781-4 4-4z" /></svg>
                                                <span className='font-semibold '>  Child Panel</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/tickets" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M8.656 3c-.523 0-1.039.188-1.469.531l-.062.031l-.031.032l-3.125 3.219l.031.03a3.134 3.134 0 0 0-.844 3.376c.004.008-.004.023 0 .031c.848 2.426 3.016 7.11 7.25 11.344c4.25 4.25 8.996 6.332 11.344 7.25h.031a3.59 3.59 0 0 0 3.469-.688L28.406 25c.828-.828.828-2.266 0-3.094l-4.062-4.062l-.032-.063c-.828-.828-2.296-.828-3.125 0l-2 2a16.176 16.176 0 0 1-4.093-2.812c-1.637-1.563-2.473-3.36-2.781-4.063l2-2c.84-.84.855-2.238-.032-3.062l.031-.032l-.093-.093l-4-4.125l-.031-.031l-.063-.032A2.356 2.356 0 0 0 8.656 3zm0 2a.35.35 0 0 1 .219.094l4 4.093l.094.094c-.008-.008.058.098-.063.219l-2.5 2.5l-.469.438l.22.624s1.148 3.075 3.562 5.376l.219.187C16.261 20.746 19 21.906 19 21.906l.625.282l2.969-2.97c.172-.171.14-.171.312 0L27 23.314c.172.171.172.109 0 .28l-3.063 3.063c-.46.395-.949.477-1.53.282c-2.266-.891-6.669-2.825-10.595-6.75c-3.957-3.958-6.023-8.446-6.78-10.625c-.153-.407-.044-1.008.312-1.313l.062-.063l3.032-3.093A.35.35 0 0 1 8.655 5z" /></svg>
                                                <span className='font-semibold '> Support</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/api" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className="w-6 h-6 inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4zm0 2h15v16H9a2.95 2.95 0 0 0-1 .188V7c0-.566.434-1 1-1zm2 3v2h11V9zM9 24h15v2H9c-.566 0-1-.434-1-1c0-.566.434-1 1-1z" /></svg>
                                                <span className='font-semibold '>  API</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/settings" data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className='w-6 h-6 inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="m13.188 3l-.157.813l-.594 2.968a9.939 9.939 0 0 0-2.593 1.532l-2.906-1l-.782-.25l-.406.718l-2 3.438l-.406.719l.594.53l2.25 1.97C6.104 14.948 6 15.46 6 16s.105 1.05.188 1.563l-2.25 1.968l-.594.532l.406.718l2 3.438l.406.718l.782-.25l2.906-1a9.939 9.939 0 0 0 2.594 1.532l.593 2.968l.156.813h5.626l.156-.813l.593-2.968a9.939 9.939 0 0 0 2.594-1.532l2.907 1l.78.25l.407-.718l2-3.438l.406-.718l-.593-.532l-2.25-1.968C25.895 17.05 26 16.538 26 16c0-.54-.105-1.05-.188-1.563l2.25-1.968l.594-.531l-.406-.72l-2-3.437l-.406-.718l-.782.25l-2.906 1a9.939 9.939 0 0 0-2.593-1.532l-.594-2.968L18.812 3zm1.624 2h2.376l.5 2.594l.125.593l.562.188a8.017 8.017 0 0 1 3.031 1.75l.438.406l.562-.187l2.532-.875l1.187 2.031l-2 1.781l-.469.375l.157.594c.128.57.187 1.152.187 1.75c0 .598-.059 1.18-.188 1.75l-.125.594l.438.375l2 1.781l-1.188 2.031l-2.53-.875l-.563-.187l-.438.406a8.017 8.017 0 0 1-3.031 1.75l-.563.188l-.125.593l-.5 2.594h-2.375l-.5-2.594l-.124-.593l-.563-.188a8.017 8.017 0 0 1-3.031-1.75l-.438-.406l-.562.187l-2.531.875L5.875 20.5l2-1.781l.469-.375l-.156-.594A7.901 7.901 0 0 1 8 16c0-.598.059-1.18.188-1.75l.156-.594l-.469-.375l-2-1.781l1.188-2.031l2.53.875l.563.187l.438-.406a8.017 8.017 0 0 1 3.031-1.75l.563-.188l.124-.593zM16 11c-2.75 0-5 2.25-5 5s2.25 5 5 5s5-2.25 5-5s-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3s-3-1.332-3-3s1.332-3 3-3z" /></svg>
                                                <span className='font-semibold '>  Settings</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={logoutHandler} data-sidebar-item="" className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white ">
                                                <svg className='w-6 h-6 inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12c4.05 0 7.64-2.012 9.813-5.094l-1.625-1.156A9.985 9.985 0 0 1 16 26c-5.535 0-10-4.465-10-10S10.465 6 16 6a9.99 9.99 0 0 1 8.188 4.25l1.625-1.156A11.987 11.987 0 0 0 16 4zm7.344 7.281l-1.438 1.438L24.188 15H12v2h12.188l-2.282 2.281l1.438 1.438l4-4L28.03 16l-.687-.719z" /></svg>
                                                <span className='font-semibold '>  Sign out</span>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className='mt-8'>
                                    <h5 className="mb-2 text-sm font-semibold tracking-wide text-[#a1a5b7] uppercase lg:text-xs dark:text-white">LANGUAGE</h5>
                                    <ul>
                                        <div id="google_translate_element"></div>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60 hidden" id="sidebarBackdrop"></div>
                <main className='flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible lg:mt-10 mt-5 lg:ml-4'>
                    <div className='content flex-[1_0_auto]'>
                        {
                            SidebarData.map((item) => location === item.path ? item.file : null)
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}
