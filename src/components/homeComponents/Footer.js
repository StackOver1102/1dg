import React from 'react'
import logo from "../../assets/images/logo.png"
function Footer() {
    return (
        <div className='mt-0'>
            <div className='relative landing-dark-color '>
                <svg viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z" fill="currentColor"></path>
                </svg>
            </div>
            <div className='bg-[#13263c] pt-20'>
                <div className='py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-12'>
                    <div className="mt-12 grid grid-auto-fit-lg gap-8 ">
                        <div className='flex flex-col'>
                            <div className="rounded-lg landing-dark-border p-9 mb-10 ">
                                <h2 className="text-white text-2xl">Would you need more infomation?</h2>
                                <span className="font-normal text-xl  text-gray-700">Email us to
                                    <a href="#" className="text-white opacity-50 text-hover-primary"> admin@1dg.me</a></span>
                            </div>
                            <div className="rounded-lg landing-dark-border p-9 mb-10 ">
                                <h2 className="text-white text-2xl">Do you need reseller price?</h2>
                                <span className="font-normal text-xl  text-gray-700">Email us to
                                    <a href="#" className="text-white opacity-50 text-hover-primary"> admin@1dg.me</a></span>
                            </div>
                        </div>
                        <div className='ml-48 lg:ml-72'>
                            <div className='flex justify-center'>
                                <div className="flex font-medium flex-col mr-20">
                                    <h4 className="font-semibold text-gray-400 mb-6">More</h4>

                                    <a href="/faqs" className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">FAQ</a>

                                    <a href="/terms" className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">Terms</a>

                                    <a href="/services" className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">Services</a>

                                    <a href="/api" className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">API</a>

                                </div>
                                {/* <div className="flex font-medium flex-col lg:ml-20">
                                    <h4 className="font-semibold text-gray-400 mb-6">Contact Us</h4>
                                
                                    <a href="https://www.facebook.com/ntu11022002/" className="mb-6">
                                        <img src="https://1dg.me/assets/client//media/svg/brand-logos/facebook-4.svg" className="h-[20px] mr-2" alt=""/>
                                            <span className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">https://www.facebook.com/ntu11022002/</span>
                                    </a>
                                 
                                    <a href="#" className="mb-6">
                                        <img src="/assets/client//media/svg/brand-logos/telegram.svg" className="h-20px me-2" alt=""/>
                                            <span className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">@lethang1dg</span>
                                    </a>
                                    
                                    <a href="#" className="mb-6">
                                        <img src="/assets/client//media/svg/brand-logos/phone.svg" className="h-20px me-2" alt=""/>
                                            <span className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">099.73.66666</span>
                                    </a>
                                </div> */}
                                <div className="flex font-medium flex-col mr-20">
                                    <h4 className="font-semibold text-gray-400 mb-6">Contact Us</h4>

                                    <a href="/faqs" className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">
                                        https://www.facebook.com/ntu11022002/

                                    </a>

                                    <a href="/terms" className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">@lethang1dg</a>

                                    <a href="/services" className="text-white opacity-50 hover:text-[#009ef7] text-[1.15rem] mb-6">099.73.66666</a>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='landing-dark-separator'></div>
                <div className='py-8 px-4 mx-auto max-w-screen-xl  lg:py-10 lg:px-12'>
                    <div className='flex items-center order-2 nd:order-1'>
                        <a href="/">
                            <img alt="Logo" src="https://1dg.me/assets/media/favicon.ico" className="h-[15px] md:h-[20px]" />
                        </a>
                        <span className="mx-5 text-[1.075rem] font-medium text-gray-600 pt-1" href="https://1dg.me">© 2022 1DG SMM Panel - Social Services</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer