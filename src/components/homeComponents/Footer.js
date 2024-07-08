import React from 'react'
import logo from "../../assets/images/logo.png"
function Footer() {
    return (
        <div className="mt-0">
        <div className="relative bg-[#13263c] landing-dark-color">
            <svg viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z" fill="currentColor"></path>
            </svg>
        </div>
        <div className="bg-[#13263c] pt-20">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
                <div className="mt-12 grid lg:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <div className="rounded-lg border border-[#2e4b66] p-9 mb-10 bg-[#1a3a5c]">
                            <h2 className="text-white text-2xl mb-4">Would you need more information?</h2>
                            <span className="font-normal text-xl text-gray-300">Email us at
                                <a href="mailto:tuantranptkm@gmail.com" className="text-white opacity-75 hover:text-[#009ef7]"> tuantranptkm@gmail.com</a>
                            </span>
                        </div>
                        <div className="rounded-lg border border-[#2e4b66] p-9 mb-10 bg-[#1a3a5c]">
                            <h2 className="text-white text-2xl mb-4">Do you need reseller price?</h2>
                            <span className="font-normal text-xl text-gray-300">Email us at
                                <a href="mailto:tuantranptkm@gmail.com" className="text-white opacity-75 hover:text-[#009ef7]"> tuantranptkm@gmail.com</a>
                            </span>
                        </div>
                    </div>
                    <div className="lg:ml-24">
                        <div className="flex justify-center">
                            <div className="flex flex-col mr-20">
                                <h4 className="font-semibold text-gray-400 mb-6">More</h4>
                                <a href="/faqs" className="text-white opacity-75 hover:text-[#009ef7] text-lg mb-4">FAQ</a>
                                <a href="/terms" className="text-white opacity-75 hover:text-[#009ef7] text-lg mb-4">Terms</a>
                                <a href="/services" className="text-white opacity-75 hover:text-[#009ef7] text-lg mb-4">Services</a>
                                <a href="/api" className="text-white opacity-75 hover:text-[#009ef7] text-lg mb-4">API</a>
                            </div>
                            <div className="flex flex-col">
                                <h4 className="font-semibold text-gray-400 mb-6">Contact Us</h4>
                                <a href="/faqs" className="text-white opacity-75 hover:text-[#009ef7] text-lg mb-4">TRAN ANH TUAN</a>
                                <a href="/terms" className="text-white opacity-75 hover:text-[#009ef7] text-lg mb-4">tuantranptkm@gmail.com</a>
                                <a href="/services" className="text-white opacity-75 hover:text-[#009ef7] text-lg mb-4">+1 8569308404</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#2e4b66] mt-10"></div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-12">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img alt="Logo" src="https://1dg.me/assets/media/favicon.ico" className="h-5 md:h-6" />
                    </a>
                    <span className="text-gray-600 text-base md:text-lg">© 2022 1DG SMM Panel - Social Services</span>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Footer