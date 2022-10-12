import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/300-1.jpg"
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import axios from "axios";
import { AddFundsList, createAddFunds, listMyAdsFunds } from '../../Redux/Actions/AddFunds';
import { updateMoney } from '../../Redux/Actions/userAction';
import { updateWallet } from '../../Redux/Actions/WalletAction';
const chartOptions = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
        height: 350,
        // type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};



export default function Addfunds() {
    const dispatch = useDispatch();
    const [counterOn, setCounterOn] = useState(false);
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const [id, setId] = useState('')
    const getAddFundsList = useSelector((state) => state.getAddFundsList)
    const { addFunds } = getAddFundsList
    const [chooseSelect, SetChooseSelect] = useState('MoMo')


    const randomText = (text, length = 3) => {
        var string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which dont look even slightly believable If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary making this the first true generator on the Internet It uses a dictionary of over 200 Latin words combined with a handful of model sentence structures to generate Lorem Ipsum which looks reasonable The generated Lorem Ipsum is therefore always free from repetition injected humour or non character words etc estimate paint upset allocate create distribute want supplement match disturb thrust earn clutch compose occur manipulate wave enhance plunge listen stretch permit opt whisper imagine play promote render condemn light peer enforce murder combine wait impress resemble land protect need walk approve characterise record remark dismiss ride show criticize like own compile dress process transport dissolve brainstorm accuse drain bloom complete campaign reverse matter dominate forget induce stress inform ban prevent collect explain have tuck destroy encourage put hurry stick whisper attract stretch reply enforce enquire quote rub appoint spin concentrate time express review fund disturb inspect tie conceal suppress mount touch find learn close wish apply going pop incur leave shrug elect deem vary name slip swear prove give laugh move bring break rule boast smile shift bind react cite cook shout stare march aim lend dip cast ring order help sound value bend form train hunt own wrap'.toLowerCase();
        string = string.split(' ');
        var output = [], random_position = Math.floor(Math.random() * length);
        for (var i = 0; i < length; i++) {
            output.push(string[Math.floor(Math.random() * string.length)]);
        }
        output[random_position] = text;
        return output.join(' ');
    }
    const content = randomText(`az${userInfo._id}pq`)
    const QR = `https://momosv3.apimienphi.com/api/QRCode?phone=0985822626&amount=0&note=${content}`
    const handleSubbmit = () => {
        const access_token = "MvDqOYEh6uK7KSKnsY1ilEFUWNfFHXC16I0odgyKn25wuC6X9i"
        const phone = "0985822626"
        const amount = 0
        // axios.post('https://momosv3.apimienphi.com/api/checkTranContent', JSON.stringify({ access_token, phone, content }))
        //     // .then(res => res.json())
        //     .then(res => {
        //         if (res.data.error !== 1) {
        //             dispatch(createAddFunds({
        //                 data: {
        //                     tranId: res.data.data.tranId,
        //                     amount: res.data.data.amount,
        //                     comment: res.data.data.comment,
        //                     // decs: res.data.data.decs,
        //                     create_time: res.data.data.create_time,
        //                     run_time: res.data.data.run_time,
        //                     user: res.data.data.user,
        //                     partnerId: res.data.data.partnerId,
        //                     partnerName: res.data.data.partnerName,
        //                 }
        //             }))
        //             dispatch(updateMoney(
        //                 {
        //                     amount: ((amount) / 23000).toFixed(2)
        //                 }
        //             ))
        //             // ))
        //         }

        //     })
        dispatch(updateWallet(
            {
                amount: ((6000) / 23000).toFixed(2)
            }
        ))

    }
    useEffect(() => {
        if (userInfo) {
            setId(userInfo._id)
        }

        dispatch(listMyAdsFunds())

    }, [dispatch])
    return (
        <>
            <div className='flex sm:flex-nowrap flex-wrap'>
                <div className='mr-7 mb-4'>
                    <div className="inline-block flex-shrink-0 relative rounded-lg">
                        <img src={logo} alt="image" className='lg:w-[160px] lg:h-[160px] w-[100px] h-[100px]' />
                        <div className="absolute translate-middle bottom-0 left-[100%] mb-6 bg-[#50cd89] rounded-[50%] border-solid border-4 border-white h-5 w-5"></div>
                    </div>
                </div>
                <div className='flex-grow '>
                    <div className='flex justify-between items-start flex-wrap mb-2'>
                        <div className='flex flex-col'>
                            <div className='flex items-center mb-2'>
                                <span class="text-gray-900 text-2xl font-semibold mr-1">lucasleet9</span>
                                <div class="grid gap-2">
                                    <button type="button" class="py-0" data-modal-toggle="defaultModal">
                                        <span class="bg-[#50cd89] text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">NEWBIE</span>
                                    </button>
                                </div>
                                <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
                                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Terms of Service
                                                </h3>
                                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span class="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <div class="p-6 space-y-6">
                                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                                </p>
                                                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                                </p>
                                            </div>
                                            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                                <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-wrap font-medium text-[1.075rem] mr-4 pr-2'>
                                <a href="#" class="flex items-center text-gray-800 hover:text-[#009ef7] mb-2">
                                    <span class="svg-icon svg-icon-4 mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor"></path>
                                            <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor"></path>
                                        </svg>
                                    </span>

                                    lucasleet9@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-between items-center'>
                        <div className='flex flex-row flex-grow pr-8'>
                            <div className='flex flex-wrap'>
                                <div className='border border-gray-300 border-dashed rounded min-w-[125px] py-3 px-4 mr-6 mb-3'>
                                    <div className='flex items-center'>
                                        <span class="leading-4 text-[#50cd89] mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <div class="text-xl font-semibold text-[#50cd89] " >${<CountUp start={0} end={130} className="text-[#50cd89] min-w-[70px] " formattingFn={num => num.toLocaleString()} />}</div>
                                    </div>
                                    <div class="font-medium text-base text-gray-700">Deposit</div>
                                </div>
                                <div className='border border-gray-300 border-dashed rounded min-w-[125px] py-3 px-4 mr-6 mb-3'>
                                    <div className='flex items-center'>
                                        <span class="leading-4 text-[#ffc700] mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="currentColor"></rect>
                                                <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <div class="text-xl font-semibold text-[#ffc700] " >${<CountUp start={0} end={0} className="text-[#ffc700] min-w-[70px] " formattingFn={num => num.toLocaleString()} />}</div>
                                    </div>
                                    <div class="font-medium text-base text-gray-700">Bonus</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-col gap-4 " >
                <div className='grid-row-1'>
                    <div className='rounded-xl border p-5 shadow-md w-full bg-[rgba(245,248,250,.5)] '>
                        <div className='py-8 px-9  '>
                            <div className='mb-5'>
                                <label className="required mb-2 text-base font-medium text-[#3f4254] inline-block">Choose method</label>
                                <select id="countries" onChange={(e) => SetChooseSelect(e.target.value)} class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="MoMo" defaultValue>AUTO - MOMO (5% Bonus on $1000+)</option>
                                    <option value="USDT">USDT - TRC20 (5% Bonus on $1000+)</option>

                                </select>
                            </div>
                            <div className={chooseSelect === "MoMo" ? 'mb-5 text-sm' : 'mb-5 text-sm hidden'}>
                                <ul className='list-disc ml-8'>
                                    <li >
                                        Lưu ý ghi chính xác nội dung chuyển tiền bên dưới.
                                    </li>
                                    <li >
                                        Không bật chế độ dịch tiếng việt khi copy nội dung chuyển
                                    </li>
                                    <li className='mb-3'>
                                        Tỉ giá 1$ = 23,000VND
                                    </li>
                                </ul>
                                <p><em style={{ color: 'rgb(230, 0, 0)' }} className="text-sm ">Hệ thống tự động cập nhật trong vài giây. Nếu quá 5 phút không được cập nhật, vui lòng liên hệ ADMIN.</em></p>
                            </div>
                            <div className={chooseSelect === "MoMo" ? 'text-center lg:pl-[40%]' : 'text-center lg:pl-[40%] hidden'}>
                                <img src={QR} class="w-[250px] mb-5 " />

                            </div>
                            <div className={chooseSelect === "USDT" ? 'mb-5 text-sm' : 'mb-5 text-sm hidden'}>
                                <p>Địa chỉ <strong>USDT-TRC20</strong>: <strong>TRUY48qTEWE6sLzK2yxJCqqQZ1AeahWiQ2</strong></p>
                                <p>Binance Pay ID : 11713152</p>
                                <p>Sau khi chuyển tiền vui lòng liên hệ với tôi để được cập nhật tiền.</p>
                            </div>
                            <button type="button" onClick={handleSubbmit} class={chooseSelect === "MoMo" ? "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" : "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden"}>Xác nhận thành công</button>



                        </div>
                    </div>
                </div>
                <div className='grid-row-1'>
                    <div className='rounded-xl border shadow-none w-full bg-[rgba(245,248,250,.5)] '>
                        <div className="flex w-full items-center justify-between border-b pb-3">
                            <div className="flex items-center space-x-3">
                                <div className="text-lg font-bold text-slate-700 pl-5">History</div>
                            </div>
                        </div>
                        <div className='p-0'>
                            {/* <div className='mb-5 mx-9 mt-5'>
                                <label className="mb-2 text-[1.05rem] font-medium text-[#3f4254] inline-block">Filter</label>
                            </div> */}
                        </div>
                        <div className='overflow-x-auto mb-5'>
                            <div class="overflow-x-auto relative">
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">
                                                Method
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Amount
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Details
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Created
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            addFunds?.map((items) => <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {items.method}
                                                </th>
                                                <td class="py-4 px-6 font text-[#009ef7]">
                                                    {items.data.amount}
                                                </td>
                                                <td class="py-4 px-6">

                                                    CT tu {items.data.partnerId} {items.data.partnerName} toi {items.data.user} MoMo
                                                </td>
                                                <td class="py-4 px-6">
                                                    {items.data.create_time}
                                                </td>
                                            </tr>)
                                        }


                                    </tbody>
                                </table>

                            </div>
                        </div>
                        {

                            addFunds?.length !== 0 ? < Chart options={chartOptions.options} series={chartOptions.series} type='line' height={340} /> : ""
                        }

                    </div>
                </div>
            </div>

        </>
    )
}