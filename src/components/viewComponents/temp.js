Start Suggest Views
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | Suggest Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {suggest.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Suggest Views */}

                                {/* Start Views */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {view.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}

                                {/* End Views */}

                                {/* Start Country Targeted Real Views | 2K/Day */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | Country Targeted Real Views | 2K/Day</div>
                                        </div>
                                    </td>
                                </tr>
                                {country.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Country Targeted Real Views | 2K/Day */}

                                {/* Start Country Targeted Real Views | 10K/Day */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | Country Targeted Real Views | 10K/Day</div>
                                        </div>
                                    </td>
                                </tr>
                                {country10k.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Country Targeted Real Views | 10K/Day */}

                                {/* Start Adword Views [ Google Ads ] */}
                                {/* <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                        <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                            <div className='flex items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                <div className="flex flex-col pl-2 font-bold">Youtube | Adword Views [ Google Ads ]</div>
                            </div>
                        </td>
                    </tr>
                    {adword.map((items) => <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                            <div className='flex items-center '>
                                <div className='flex flex-col '>
                                    <div className="flex items-center">
                                        <div className="break-words whitespace-pre-line ">
                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                            <span className="font-semibold ml-1">{items.service} </span>
                                            <span className='text-sm'>
                                                -  {items.name}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                        Min:
                                        <span className="text-gray-700">
                                            {items.min}
                                        </span>
                                        - Max:
                                        <span className="text-gray-700">{items.max}</span>
                                    </span>
                                    <span className='mt-0'>
                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                            ${items.rate}
                        </td>
                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                Order
                            </Link>
                        </td>
                    </tr>)} */}
                                {/* End Adword Views [ Google Ads ] */}

                                {/* Start Topic Views */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | Topic Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {topic.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Topic Views */}

                                {/* Start Likes | Dislikes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | Likes | Dislikes</div>
                                        </div>
                                    </td>
                                </tr>
                                {likeDislike.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Likes | Dislikes */}

                                {/* Start Likes - Country Targeted */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | Likes - Country Targeted</div>
                                        </div>
                                    </td>
                                </tr>
                                {likeCountry.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Likes - Country Targeted */}

                                {/* Start LiveStream | Pre-Premiere */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | LiveStream | Pre-Premiere</div>
                                        </div>
                                    </td>
                                </tr>
                                {premiere.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End LiveStream | Pre-Premiere */}

                                {/* Start Youtube Live Stream Package */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |Youtube Live Stream Package</div>
                                        </div>
                                    </td>
                                </tr>
                                {livestream.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Youtube Live Stream Package */}

                                {/* Start Youtube Live Stream Views - SV2 */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |Youtube Live Stream Views - SV2</div>
                                        </div>
                                    </td>
                                </tr>
                                {livesteamSv2.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Youtube Live Stream Views - SV2 */}

                                {/* Start Youtube Live Stream Views - SV3 [Latest Service] */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |Youtube Live Stream Views - SV3 [Latest Service]</div>
                                        </div>
                                    </td>
                                </tr>
                                {livesteamSv3.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Youtube Live Stream Views - SV3 [Latest Service] */}

                                {/* Start Youtube Live Stream Views - VIP */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |Youtube Live Stream Views - VIP</div>
                                        </div>
                                    </td>
                                </tr>
                                {livesteamVip.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Youtube Live Stream Views - VIP */}

                                {/* Start Comments */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |Comments</div>
                                        </div>
                                    </td>
                                </tr>
                                {Comments.map((items, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                            <div className='flex items-center '>
                                                <div className='flex flex-col '>
                                                    <div className="flex items-center">
                                                        <div className="break-words whitespace-pre-line ">
                                                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                            <span className="font-semibold ml-1">{items.service} </span>
                                                            <span className='text-sm'>
                                                                -  {items.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <span className="text-[#a1a5b7] text-[0.85rem]">
                                                        Min:
                                                        <span className="text-gray-700">
                                                            {items.min}
                                                        </span>
                                                        - Max:
                                                        <span className="text-gray-700">{items.max}</span>
                                                    </span>
                                                    <span className='mt-0'>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                        <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            ${items.rate}
                                        </td>
                                        <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                            <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                                Order
                                            </Link>
                                        </td>
                                    </tr>)}
                                {/* End Comments */}

                                {/* Start 4000H - Watchtimes 15 minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |4000H - Watchtimes 15 minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {Watchtimes15.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Recommend</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End 4000H - Watchtimes 15 minutes */}

                                {/* Start 4000H - Watchtimes 30 minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |4000H - Watchtimes 30 minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {Watchtimes30.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End 4000H - Watchtimes 30 minutes */}

                                {/* Start 4000H - Watchtimes 60 minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |4000H - Watchtimes 60 minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {Watchtimes60.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End 4000H - Watchtimes 60 minutes */}

                                {/* Start 4000H - Watchtimes 120 minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube |4000H - Watchtimes 120 minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {Watchtimes120.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End 4000H - Watchtimes 120 minutes */}

                                {/* Start  HR Views | Suggest 15 Minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | HR Views | Suggest 15 Minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {suggest15.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End  HR Views | Suggest 15 Minutes */}

                                {/* Start  HR Views |  Suggest 30 Minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | HR Views |  Suggest 30 Minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {suggest30.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End  HR Views |  Suggest 30 Minutes */}


                                {/* Start  HR Views | Suggest 60 Minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | HR Views | Suggest 60 Minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {suggest60.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End  HR Views | Suggest 60 Minutes */}

                                {/* Start  HR Views | Suggest 120 Minutes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube | HR Views | Suggest 120 Minutes</div>
                                        </div>
                                    </td>
                                </tr>
                                {suggest120.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End  HR Views | Suggest 120 Minutes */}


                                {/* Start Facebook | Facebook Partner Monetization Package */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook | Facebook Partner Monetization Package</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbPartner.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Facebook Partner Monetization Package */}

                                {/* Start Facebook | Post Likes | Tăng likes bài viết */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook | Post Likes | Tăng likes bài viết</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbPost.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Post Likes | Tăng likes bài viết */}

                                {/* Start Facebook | Video Views */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook |Video Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbVideo.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Video Views */}

                                {/* Start Facebook | Followers | Tăng người theo dõi */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook |Followers | Tăng người theo dõi</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbFollower.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Followers | Tăng người theo dõi */}

                                {/* Start Facebook | Shares | Tăng lượt chia sẻ */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook |Shares | Tăng lượt chia sẻ</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbShare.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Shares | Tăng lượt chia sẻ */}

                                {/* Start Facebook | Live stream | Tăng mắt Live Stream */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook |Live stream | Tăng mắt Live Stream</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbLive.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Live stream | Tăng mắt Live Stream */}


                                {/* Start Facebook | Vip Likes | GÓI THÁNG */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook |Vip Likes | GÓI THÁNG</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbLike.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Vip Likes | GÓI THÁNG */}

                                {/* Start Facebook | Members Group | Tăng thành viên nhóm */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Facebook |Members Group | Tăng thành viên nhóm</div>
                                        </div>
                                    </td>
                                </tr>
                                {fbGroup.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>

                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Facebook | Members Group | Tăng thành viên nhóm */}

                                {/* Start Twitter | Retweetsm */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Twitter | Retweets</div>
                                        </div>
                                    </td>
                                </tr>
                                {twRetweets.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Twitter | Retweets */}

                                {/* Start Twitter | Followers */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Twitter | Followers</div>
                                        </div>
                                    </td>
                                </tr>
                                {twFollowers.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Twitter | Followers */}

                                {/* Start Twitter | Likes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Twitter | Likes</div>
                                        </div>
                                    </td>
                                </tr>
                                {twLikes.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Twitter | Likes */}


                                {/* Start Twitter | Views */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Twitter | Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {twViews.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#0c86ef" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Twitter | Views */}

                                {/* Start Instagram | Followers */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="#0c86ef" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Instagram | Followers</div>
                                        </div>
                                    </td>
                                </tr>
                                {insFollowers.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="#0c86ef" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Instagram | Followers */}

                                {/* Start Instagram | Instagram Views */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="#0c86ef" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Instagram | Instagram Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {insViews.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="#0c86ef" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Instagram | Instagram Views */}


                                {/* Start Instagram | Likes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="#0c86ef" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Instagram | Likes</div>
                                        </div>
                                    </td>
                                </tr>
                                {insLikes.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="#0c86ef" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Instagram | Likes */}

                                {/* Start Telegram | Telegram */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#229ed9" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Telegram | Telegram</div>
                                        </div>
                                    </td>
                                </tr>
                                {telegram.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#229ed9" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Telegram | Telegram */}

                                {/* Start Telegram | Reactions */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#229ed9" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Telegram | Reactions</div>
                                        </div>
                                    </td>
                                </tr>
                                {telegramReactions.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#229ed9" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7l-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1l114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4l-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Telegram | Reactions */}

                                {/* Start Tiktok | Followers */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Tiktok | Followers</div>
                                        </div>
                                    </td>
                                </tr>
                                {tkFollowers.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Tiktok | Followers */}

                                {/* Start Tiktok | Views */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Tiktok | Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {tkViews.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Tiktok | Views */}

                                {/* Start Tiktok | Likes ❤️ */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Tiktok | Likes ❤️</div>
                                        </div>
                                    </td>
                                </tr>
                                {tkLike.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Tiktok | Likes ❤️ */}

                                {/* Start Tiktok |  TikTok Live Stream - SV1 */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Tiktok |  TikTok Live Stream - SV1</div>
                                        </div>
                                    </td>
                                </tr>
                                {tkStreamSv1.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Tiktok |  TikTok Live Stream - SV1 */}

                                {/* Start Tiktok |  TikTok Live Stream | Real user */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Tiktok |  TikTok Live Stream | Real user</div>
                                        </div>
                                    </td>
                                </tr>
                                {tkStreamReal.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Tiktok |  TikTok Live Stream | Real user */}

                                {/* Start Tiktok |  Shares - Comment */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Tiktok |  Shares - Comment</div>
                                        </div>
                                    </td>
                                </tr>
                                {tkShare.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Tiktok |  Shares - Comment */}

                                {/* Start Reddit | Subscribes */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="orangered" d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6c0-13.8 11.1-24.9 24.9-24.9c13.6 0 24.6 11.1 24.6 24.9c0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10c-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3l55.4 12.5c0 13.6 11.1 24.6 24.6 24.6c13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8c-6.1-6.4-14.7-10.2-24.1-10.2c-34.9 0-46.3 46.9-14.4 62.8c-1.1 5-1.7 10.2-1.7 15.5c0 52.6 59.2 95.2 132 95.2c73.1 0 132.3-42.6 132.3-95.2c0-5.3-.6-10.8-1.9-15.8c31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0c-2.2-2.2-6.1-2.2-8.3 0c-2.5 2.5-2.5 6.4 0 8.6c22.8 22.8 87.3 22.8 110.2 0c2.5-2.2 2.5-6.1 0-8.6c-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9c0 13.6 11.1 24.6 24.6 24.6c13.8 0 24.9-11.1 24.9-24.6c0-13.8-11-24.9-24.9-24.9z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Reddit | Subscribes</div>
                                        </div>
                                    </td>
                                </tr>
                                {rdSub.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="orangered" d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6c0-13.8 11.1-24.9 24.9-24.9c13.6 0 24.6 11.1 24.6 24.9c0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10c-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3l55.4 12.5c0 13.6 11.1 24.6 24.6 24.6c13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8c-6.1-6.4-14.7-10.2-24.1-10.2c-34.9 0-46.3 46.9-14.4 62.8c-1.1 5-1.7 10.2-1.7 15.5c0 52.6 59.2 95.2 132 95.2c73.1 0 132.3-42.6 132.3-95.2c0-5.3-.6-10.8-1.9-15.8c31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0c-2.2-2.2-6.1-2.2-8.3 0c-2.5 2.5-2.5 6.4 0 8.6c22.8 22.8 87.3 22.8 110.2 0c2.5-2.2 2.5-6.1 0-8.6c-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9c0 13.6 11.1 24.6 24.6 24.6c13.8 0 24.9-11.1 24.9-24.6c0-13.8-11-24.9-24.9-24.9z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Reddit | Subscribes */}

                                {/* Start Spotify | Free Plays */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Spotify | Free Plays</div>
                                        </div>
                                    </td>
                                </tr>
                                {spFree.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Spotify | Free Plays */}

                                {/* Start Spotify | Premium Plays */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Spotify | Premium Plays</div>
                                        </div>
                                    </td>
                                </tr>
                                {spPlays.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Spotify | Premium Plays */}

                                {/* Start Spotify | Packages */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Spotify | Packages</div>
                                        </div>
                                    </td>
                                </tr>
                                {spPackages.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Spotify | Packages */}

                                {/* Start Spotify | Followers */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Spotify | Followers</div>
                                        </div>
                                    </td>
                                </tr>
                                {spFollowers.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="0.97em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512"><path fill="#1ed760" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248s248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6c-62.4-37.6-135-39.2-206.7-24.5c-3.9 1-9 2.6-11.9 2.6c-9.7 0-15.8-7.7-15.8-15.8c0-10.3 6.1-15.2 13.6-16.8c81.9-18.1 165.6-16.5 237 26.2c6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2c-62.5-37-155.7-51.9-238.6-29.4c-4.8 1.3-7.4 2.6-11.9 2.6c-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6c64.9 0 127.6 16.1 177 45.5c8.1 4.8 11.3 11 11.3 19.7c-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9c-71.2-42.5-198.5-52.7-280.9-29.7c-3.6 1-8.1 2.6-12.9 2.6c-13.2 0-23.3-10.3-23.3-23.6c0-13.6 8.4-21.3 17.4-23.9c35.2-10.3 74.6-15.2 117.5-15.2c73 0 149.5 15.2 205.4 47.8c7.8 4.5 12.9 10.7 12.9 22.6c0 13.6-11 23.3-23.2 23.3z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Spotify | Followers */}

                                {/* Start Bilibili | Bilibili Views */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#00a1d6" d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Bilibili | Bilibili Views</div>
                                        </div>
                                    </td>
                                </tr>
                                {bilibili.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#00a1d6" d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Bilibili | Bilibili Views */}

                                {/* Start Discord | Offline Server Members */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#5865f2" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Discord | Offline Server Members</div>
                                        </div>
                                    </td>
                                </tr>
                                {discord1.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#5865f2" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Discord | Offline Server Members */}

                                {/* Start Discord | Online Server Members */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#5865f2" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Discord | Online Server Members</div>
                                        </div>
                                    </td>
                                </tr>
                                {discord2.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#5865f2" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}
                                {/* End Discord | Online Server Members */}

                                {/* Start Discord |  Online 100% NFT Server Members */}
                                <tr className="bg-[#e4e6ef] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                                    <td colSpan={3} className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#5865f2" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Discord |  Online 100% NFT Server Members</div>
                                        </div>
                                    </td>
                                </tr>
                                {discord3.map((items, index) => <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                        <div className='flex items-center '>
                                            <div className='flex flex-col '>
                                                <div className="flex items-center">
                                                    <div className="break-words whitespace-pre-line ">
                                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path fill="#5865f2" d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z" /></svg>
                                                        <span className="font-semibold ml-1">{items.service} </span>
                                                        <span className='text-sm'>
                                                            -  {items.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className="text-[#a1a5b7] text-[0.85rem]">
                                                    Min:
                                                    <span className="text-gray-700">
                                                        {items.min}
                                                    </span>
                                                    - Max:
                                                    <span className="text-gray-700">{items.max}</span>
                                                </span>
                                                <span className='mt-0'>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                    <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        ${items.rate}
                                    </td>
                                    <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                        <Link to={`/new?service=${items.service}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                                            Order
                                        </Link>
                                    </td>
                                </tr>)}