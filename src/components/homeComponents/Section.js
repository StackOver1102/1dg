import React from 'react'

function Section() {
    return (
        <section className="bg-white dark:bg-gray-900" id="test">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                <h1 className="mb-4 text-[2.5rem] font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-[2.5rem] dark:text-white">How it Works</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Save thousands to millions of bucks by using my services
                    <br />
                    for different amazing and great useful admin.</p>

                <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12">
                    {/* <h2 className="text-2xl font-semibold md:text-3xl">Second Example</h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm">Libero suscipit repellat eaque ea. Reiciendis dicta veniam.</p> */}

                    {/* <!-- Grid 2 begins --> */}
                    <div className="mt-12 grid grid-auto-fit-lg gap-8 ">

                        <div className="grid2-item ">
                            <img src="https://1dg.me/assets/client//media/illustrations/sketchy-1/2.png" className="max-h-[280px] mb-9" alt="" />
                            <div className='flex justify-center items-center mb-5 '>
                                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">1</span>
                                <div className="fs-5 text-xl font-bold text-black">Sign Up</div>
                            </div>
                            <div className='font-bold text-[#a1a5b7] text-xl '>
                                First you need have account for login then you can see dashboard. Your info is safe, we not share it to others.
                            </div>
                        </div>

                        <div className="grid2-item ">
                            <img src="https://1dg.me/assets/client//media/illustrations/sketchy-1/8.png" className="max-h-[280px] mb-9" alt="" />
                            <div className='flex justify-center items-center mb-5 '>
                                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">2</span>
                                <div className="fs-5 text-xl font-bold text-black">Add funds</div>
                            </div>
                            <div className='font-bold text-[#a1a5b7] text-xl '>
                            You need deposit fund to your account in deposit iseasy and secure. We have many payment methods for you.
                            </div>
                        </div>

                        <div className="grid2-item ">
                            <img src="https://1dg.me/assets/client//media/illustrations/sketchy-1/12.png" className="max-h-[280px] mb-9" alt="" />
                            <div className='flex justify-center items-center mb-5 '>
                                <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-200 dark:text-green-900">3</span>
                                <div className="fs-5 text-xl font-bold text-black">Create order</div>
                            </div>
                            <div className='font-bold text-[#a1a5b7] text-xl '>
                            You have balance in your account, so now you can place orders with services you want. That's easy
                            </div>
                        </div>



                    </div>
                    {/* <!-- Grid 2 ends --> */}
                </div>
            </div>
        </section>
    )
}

export default Section