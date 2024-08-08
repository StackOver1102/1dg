import React, { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../Redux/Actions/productAction';
import { addToCart } from '../../Redux/Actions/cartActions';
import { createOrder, createOrderAPIMe, listMyOrders } from '../../Redux/Actions/ordersAction';
import { useLocation } from 'react-router-dom';
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Toast from "./../LoadingError/Toast";
import { toast } from "react-toastify";
import { updateWallet } from '../../Redux/Actions/WalletAction';

export default function View() {
    const location = useLocation();
    const redirect = location.search ? Number(location.search.split("=")[1]) : "";
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;
    console.log("🚀 ~ View ~ products:", products)

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const createWallet = useSelector((state) => state.createWallet);
    const { wallet } = createWallet;

    const [service, setService] = useState(redirect);
    const [link, setLink] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("");
    const [socialMedia, setSocialMedia] = useState("");
    const [id, setId] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [checkBox, setCheckBox] = useState(false);
    const toastId = React.useRef(null);

    useEffect(() => {
        if (userInfo) {
            setId(userInfo._id);
        }
        dispatch(listProduct());
    }, [dispatch, userInfo]);

    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    const extractUniqueValues = (items, separator) => {
        const uniqueSet = new Set(items.map(item => item.split(separator)[0]));
        return [...uniqueSet];
    };

    const getCategoryFromProduct = (socialMediaName) => {
        return products
            .filter(item => item.name.split("|")[0] === socialMediaName)
            .map(item => item.category.split(`${socialMediaName}|`)[1]);
    };

    const getServiceFromProduct = (socialMediaName, categoryName) => {
        return products
            .filter(item => item.category.split(`${socialMediaName}|`)[1] === categoryName)
            .map(item => item.name.split(`${socialMediaName}|${categoryName} |`)[1]);
    };

    const findProductDetails = (redirectValue) => {
        const foundProduct = products.find(item => item.service === redirectValue);
        if (foundProduct) {
            const [socialMediaName, categoryName, serviceName] = foundProduct.name.split('|');
            return { socialMediaName, categoryName, serviceName };
        }
        return {};
    };

    const { socialMediaName: initialSocialMedia, categoryName: initialCategory } = findProductDetails(redirect);

    useEffect(() => {
        if (redirect === "" && products.length > 0) {
            setService(products.find(item => item.name.split('|')[1] === service)?.service);
        }
    }, [redirect, products, service]);

    const onSubmit = async () => {
        await dispatch(addToCart(service, Number(quantity), link));
        const items = JSON.parse(localStorage.getItem('cartItems'));
        const itemRate = items[0].rate;
        const totalPrice = Number(quantity) * itemRate / 1000;

        if (wallet.balance > totalPrice) {
            await dispatch(createOrder(service, link, Number(quantity)));
            const order = JSON.parse(localStorage.getItem('ordersInfo'));

            await dispatch(createOrderAPIMe({
                orderItems: {
                    service,
                    link,
                    qty: Number(quantity),
                    order: order.order || 0,
                    name: redirect === "" ? items[0].name.split(`${socialMedia}|${category} |`)[1] : Service[0]
                },
                totalPrice
            }));

            if (order.order !== undefined) {
                await dispatch(updateWallet({ amount: -totalPrice.toFixed(2) }));

                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.success("Order thành công", Toastobjects);
                }
            } else {
                if (!toast.isActive(toastId.current)) {
                    toastId.current = toast.error(order.error, Toastobjects);
                }
            }
        } else {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Không đủ tiền", Toastobjects);
            }
        }

        await dispatch(listMyOrders());
    };

    const Social = extractUniqueValues(products.map(item => item.name.split("|")[0]), '|');
    const Category = socialMedia ? getCategoryFromProduct(socialMedia) : [];
    const Service = category ? getServiceFromProduct(socialMedia, category) : [];

    return (
        <>
            <Toast />
            <div className='alert alert-dismissible bg-[#eff2f5] mb-5 items-center flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="text-red-600 text-2xl bi bi-megaphone-fill" viewBox="0 0 16 16">
                    <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z" />
                </svg>
                <div className='flex flex-col pl-4'>
                    <p>Các bạn muốn mở website riêng dành cho đại lý liên hệ với mình qua FB <a href="https://www.facebook.com/motdanga" rel="noopener noreferrer" target="_blank" className='text-[#009ef7] hover:text-[#006dab] contact'>Nguyễn Mạnh Hùng</a></p>
                    <p>
                        <span className='color'>
                            You can get an SMM Panel like us (It is just a panel, and not services):
                            <a href="http://localhost:3000/signup" rel="noopener noreferrer" target="_blank" className='text-[#009ef7] hover:text-[#006dab] contact'>1DG Panel</a>
                        </span>
                    </p>
                </div>
            </div>

            {loading && <Loading />}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-2'>
                <div className='mb-3'>
                    <label className='mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block'>
                        Social media
                    </label>
                    <select onChange={(e) => setSocialMedia(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Social.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>

                <div className='mb-3 lg:col-span-2'>
                    <label className='mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block'>
                        Category
                    </label>
                    <select onChange={(e) => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Category.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>

                <div className='mb-2 lg:col-span-3'>
                    <label className='mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block'>
                        Service
                    </label>
                    <select onChange={(e) => setService(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {Service.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>

                <div className='mb-2 lg:col-span-3'>
                    <label className='mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block'>
                        Link
                    </label>
                    <input onChange={(e) => setLink(e.target.value)} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div className='mb-2 lg:col-span-3'>
                    <label className='mb-[0.5rem] text-[1.05rem] font-medium color-[#3f4254] inline-block'>
                        Quantity
                    </label>
                    <input onChange={(e) => setQuantity(e.target.value)} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From 10 to 10000" />
                    <span className="text-[#009ef7] text-[.95rem] font-medium">Min: 10 - Max: 10000</span>
                </div>

                <div className='mb-2 lg:col-span-3'>
                    <label htmlFor="checked-toggle" className="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" id="checked-toggle" className="sr-only peer" onChange={(e) => setCheckBox(e.target.checked)} />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Schedule. Your timezone: +07:00</span>
                    </label>
                </div>

                {checkBox && (
                    <div className='mb-2 lg:col-span-3'>
                        <div className="relative">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full" />
                        </div>
                    </div>
                )}

                <div className='mb-2 lg:col-span-3'>
                    <button onClick={onSubmit} type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        + Submit
                    </button>
                </div>
            </div>
        </>
    );
}
