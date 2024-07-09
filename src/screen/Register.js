import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/images/logo.png"
import { register } from '../Redux/Actions/userAction';
import { Helmet } from "react-helmet";

export const Register = () => {
    window.scrollTo(0, 0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [key, setKey] = useState("");
    const location = useLocation();
    const history = useNavigate();
    const dispatch = useDispatch()
    const toastId = React.useRef(null);

    const redirect = location.search ? location.search.split("=")[1] : "/";
    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;
    function onChange(value) {
        setKey(value);
    }
    useEffect(() => {
        if (userInfo) {
            history(redirect);
        }
    }, [userInfo, history, redirect]);
    const Toastobjects = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (key === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please solve Captcha correctly!", Toastobjects);
            }
        }
        else {
            dispatch(register(name, email, password));
        }
    };

    return (

        <div className='flex flex-col flex-1'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Register | 1DG SMM Panel - Social Services</title>
                <meta name="description" content="1DG SMM Panel - Social Services. Generating leads with social media marketing" />
            </Helmet>
            <div className="flex flex-col flex-[0_1_auto] bg-contain bg-bottom bg-fixed	bg-no-repeat bg-[url('https://1dg.me/assets/media/bg-1.png')] ">
                <div className='flex justify-center items-center flex-col flex-[0_1_auto] p-10 lg:pb-20'>
                    <a href="/" className="mb-12">
                        <img alt="Logo" src={logo} className="h-[40px]" />
                    </a>
                    <div className="w-full lg:h-[800px] h-[750px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Create and account
                            </h1>
                            <div className='text-[#b5b5c3] font-medium text-xl text-center'>
                                Already have an account?
                                <a href="/signin" className="text-[#009ef7] font-semibold">Sign in here</a>
                            </div>
                            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                                <div>
                                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nguyen Van A" required=""
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                        onChange={(e) => setEmail(e.target.value)}

                                    />
                                </div>

                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        onChange={(e) => setPassword(e.target.value)}

                                    />
                                </div>
                                <div>
                                    <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                        onChange={(e) => setConfirmPassword(e.target.value)}

                                    />
                                </div>
                                <ReCAPTCHA
                                    sitekey="6LcAZwsqAAAAAHdvLRQ3YxShGZwWc05gE28uBDsT"
                                    onChange={onChange}
                                />
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-[#009ef7] hover:bg-[#009ef7] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
