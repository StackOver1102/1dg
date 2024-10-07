import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import logo from "../assets/images/logo.png"
import { login } from '../Redux/Actions/userAction';
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";
import { Helmet } from "react-helmet";

import ReCAPTCHA from "react-google-recaptcha";
import { CreateWallet } from '../Redux/Actions/WalletAction';

export const Login = () => {
    const location = useLocation();
    const history = useNavigate();
    const dispatch = useDispatch()
    const toastId = React.useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState("");
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    function onChange(value) {
        setKey(value);
    }
    const redirect = location.search ? location.search.split("=")[1] : "/";
    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;
    console.log("🚀 ~ Login ~ error:", error)
    useEffect(() => {
        if (userInfo) {
            history(redirect);

        }
    }, [userInfo, history, redirect]);
    const submitHandler = async (e) => {
        e.preventDefault();
        if (key === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please solve Captcha correctly!", Toastobjects);
            }
        }
        else {
            dispatch(login(email, password));
            // await dispatch(CreateWallet())

        }
    };
    // useEffect(()=>{
    //      dispatch(createWallet())
    // },[dispatch])


    return (
        <>

            <Toast />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login | 1TAP SMM Panel - Social Services</title>
                <meta name="description" content="1TAP SMM Panel - Social Services. Generating leads with social media marketing" />
            </Helmet>
            <div className='flex flex-col flex-1'>

                <div className="flex lg:h-[900px] h-[750px] flex-col flex-[0_1_auto] bg-contain bg-bottom bg-fixed	bg-no-repeat bg-[url('https://1dg.me/assets/media/bg-1.png')] ">
                    <div className='flex justify-center items-center flex-col flex-[0_1_auto] p-10 lg:pb-20'>
                        <a href="/" className="mb-12">
                            <img alt="Logo" src={logo} className="h-[150px]" />
                        </a>
                        <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            {error && <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{error}</Message>}
                            {loading && <Loading />}
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                    Sign In
                                </h1>
                                <div className='text-[#b5b5c3] font-medium text-xl text-center'>
                                    New Here?
                                    <a href="/signup" className="text-[#009ef7] font-semibold"> Create an Account</a>
                                </div>
                                <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                            onChange={(e) => setEmail(e.target.value)}

                                        />
                                    </div>

                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" autocomplete="on" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                            onChange={(e) => setPassword(e.target.value)}

                                        />
                                    </div>
                                    <ReCAPTCHA
                                        sitekey="6LcRaFIiAAAAANLbe50sGaWbNP7LOlkJGcPnuVVT"
                                        onChange={onChange}
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-[#009ef7] hover:bg-[#009ef7] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet?
                                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
