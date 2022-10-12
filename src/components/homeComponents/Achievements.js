import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
function Achievements() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className="bg-[#13263c] dark:bg-gray-900" id ="achievements">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                    <h1 className="mb-4 text-[calc(1.375rem + 1.5vw)] font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-[2.5rem] dark:text-white">We Make Things Better</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Save thousands to millions of bucks by using my services
                        <br />
                        for different amazing and great useful admin.</p>

                    <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                        {/* <h2 className="text-2xl font-semibold md:text-3xl">Second Example</h2>
                <p className="mx-auto mt-3 max-w-xl text-sm">Libero suscipit repellat eaque ea. Reiciendis dicta veniam.</p> */}

                        {/* <!-- Grid 2 begins --> */}
                        <div className="mt-12 grid grid-auto-fit-lg gap-8 ">

                            <div className="grid2-item bg-[url('https://1dg.me/assets/client//media/svg/misc/octagon.svg')] ml-[50px] flex flex-col justify-center items-center lg:h-[250px] lg:w-[250px] h-[200px] w-[200px] bg-contain bg-center bg-no-repeat">
                                <span className="svg-icon svg-icon-2tx svg-icon-white mb-3 " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='h-9 w-9'>
                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="white"></rect>
                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="white"></rect>
                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="white"></rect>
                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="white"></rect>
                                    </svg>
                                </span>
                                <div className='mb-0 text-white font-semibold md:text-4xl lg:text-4xl  text-[ calc(1.325rem + .9vw)] '>
                                    {counterOn && <CountUp start={0} end={23469975} className="text-white min-w-[70px] " formattingFn={num => num.toLocaleString()} />}+

                                </div>
                                <div className='flex justify-center items-center mt-4'>
                                    <span className="text-gray-600 font-medium text-[1rem] leading-[0]">Orders</span>
                                </div>

                            </div>

                            <div className="grid2-item bg-[url('https://1dg.me/assets/client//media/svg/misc/octagon.svg')] ml-[50px] flex flex-col justify-center items-center lg:h-[250px] lg:w-[250px] h-[200px] w-[200px] bg-contain bg-center bg-no-repeat">
                                <span className="svg-icon svg-icon-2tx svg-icon-white mb-3 " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='h-9 w-9'>
                                        <path d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z" fill="white"></path>
                                        <path opacity="0.3" d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z" fill="white"></path>
                                        <path opacity="0.3" d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z" fill="white"></path>
                                    </svg>
                                </span>
                                <div className='mb-0 text-white font-semibold md:text-4xl lg:text-4xl  text-[ calc(1.325rem + .9vw)] '>
                                    <div className="min-w-[70px]">$ 0.0001</div>
                                </div>
                                <div className='flex justify-center items-center mt-4'>
                                    <span className="text-gray-600 font-medium text-[1rem] leading-[0]">Price Starting From</span>
                                </div>

                            </div>

                            <div className="grid2-item bg-[url('https://1dg.me/assets/client//media/svg/misc/octagon.svg')] ml-[50px] flex flex-col justify-center items-center lg:h-[250px] lg:w-[250px] h-[200px] w-[200px] bg-contain bg-center bg-no-repeat">
                                <span className="svg-icon svg-icon-2tx svg-icon-white mb-3 " >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='w-9 h-9'>
                                        <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="white"></path>
                                        <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="white"></path>
                                        <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="white"></path>
                                    </svg>
                                </span>
                                <div className='mb-0 text-white font-semibold md:text-4xl lg:text-4xl  text-[ calc(1.325rem + .9vw)] '>
                                    <div className="min-w-[70px]">0.1 sec</div>
                                </div>
                                <div className='flex justify-center items-center mt-4'>
                                    <span className="text-gray-600 font-medium text-[1rem] leading-[0]">An Order Is Made Every</span>
                                </div>

                            </div>



                        </div>
                        {/* <!-- Grid 2 ends --> */}
                    </div>
                    <div className='pt-20 mt-20 container' id="Pricing">
                        <h1 className="mb-4  text-[ calc(1.375rem + 1.5vw)] font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-[2.5rem] dark:text-white">Cheapest SMM Panel For Resellers</h1>
                        <div className='text-center'>
                            {/* <!-- Grid 2 begins --> */}
                            <div className="mt-12 grid grid-auto-fit-lg gap-8 ">

                                <div className="grid2-item w-full flex flex-col justify-center items-center rounded-[0.625rem] bg-white py-14 px-10 h-[85%]">
                                    <div className='mb-7 text-center'>
                                        <h1 className="text-black mb-5 font-bold text-[1.75rem]">Facebook</h1>
                                        <div className="text-gray-400 font-bold mb-5">Like, share, comments, ...</div>
                                        <div className="text-center">
                                            <span className="mb-2 text-[#009ef7]">from $</span>
                                            <span className="text-5xl font-bold text-[#009ef7]"> 0.01</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="grid2-item w-full flex flex-col justify-center items-center rounded-[0.625rem] bg-[#009ef7] py-14 px-10 h-[85%]">
                                    <div className='mb-7 text-center'>
                                        <h1 className="text-white mb-5 font-bold text-[1.75rem]">Youtube</h1>
                                        <div className="text-white opacity-75 font-bold mb-5 ">Views, subscribes, likes, ...</div>
                                        <div className="text-center">
                                            <span className="mb-2 text-white">from $</span>
                                            <span className="text-5xl font-bold text-white"> 0.25</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid2-item w-full flex flex-col justify-center items-center rounded-[0.625rem] bg-white py-14 px-10 h-[85%]">
                                    <div className='mb-7 text-center'>
                                        <h1 className="text-black mb-5 font-bold text-[1.75rem]">Twitter</h1>
                                        <div className="text-gray-400 font-bold mb-5">Follow, share, ...</div>
                                        <div className="text-center">
                                            <span className="mb-2 text-[#009ef7]">from $</span>
                                            <span className="text-5xl font-bold text-[#009ef7]"> 0.18</span>
                                        </div>
                                    </div>

                                </div>



                            </div>
                            {/* <!-- Grid 2 ends --> */}
                        </div>
                    </div>
                    <div>
                        <button type="button" className="text-white bg-[#009ef7] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-7 py-5 text-center mr-2 mb-2 mt-5">Service List</button>

                    </div>


                </div>
            </section>
        </ScrollTrigger>
    )
}

export default Achievements