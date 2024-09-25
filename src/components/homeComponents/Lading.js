import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

function Lading() {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    return (
        <section className="bg-[url('https://1dg.me/assets/client//media/svg/illustrations/landing.svg')] bg-[#13263c] dark:bg-gray-900 pt-10" id="hero" >
            <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-4xl lg:leading-[3rem] dark:text-white">Cheapest SMM Panel Over 10 Years!
                    <br />
                    with
                    <span id="temp">
                        <span className="pl-2">
                            1DG SMM Panel - Social Services
                        </span>
                    </span>

                </h1>
                <div className="flex flex-col mb-8 lg:mt-16 lg:mb-24  space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                    <Link to="/signup" className={userInfo ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hidden" : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"}>Sign up now!</Link>

                </div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <div className="flex flex-wrap justify-center items-center mt-8 text-red-400 sm:justify-between">
                        <div className="flex " data-bs-toggle="tooltip" data-bs-original-title="" title="">
                            <img src="https://1dg.me/assets/client//media/svg/brand-logos/youtube.svg" className="max-h-10 " alt="" />
                        </div>
                        <div className="flex " data-bs-toggle="tooltip" data-bs-original-title="" title="">
                            <img src="	https://1dg.me/assets/client//media/svg/brand-logos/google-icon.svg" className="max-h-10 " alt="" />
                        </div>
                        <div className="flex " data-bs-toggle="tooltip" data-bs-original-title="" title="">
                            <img src="https://1dg.me/assets/client//media/svg/brand-logos/facebook-1.svg" className="max-h-10 " alt="" />
                        </div>
                        <div className="flex " data-bs-toggle="tooltip" data-bs-original-title="" title="">
                            <img src="https://1dg.me/assets/client//media/svg/brand-logos/instagram-2-1.svg" className="max-h-10 " alt="" />
                        </div>
                        <div className="flex " data-bs-toggle="tooltip" data-bs-original-title="" title="">
                            <img src="	https://1dg.me/assets/client//media/svg/brand-logos/twitter.svg" className="max-h-10 " alt="" />
                        </div>
                        <div className="flex " data-bs-toggle="tooltip" data-bs-original-title="" title="">
                            <img src="	https://1dg.me/assets/client//media/svg/brand-logos/telegram-2.svg" className="max-h-10 " alt="" />
                        </div>
                        <div className="flex " data-bs-toggle="tooltip" data-bs-original-title="" title="">
                            <img src="https://1dg.me/assets/client//media/svg/brand-logos/pinterest.svg" className="max-h-10 " alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lading