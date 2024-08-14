import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProduct } from '../../Redux/Actions/productAction';
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { useServices } from '../../service/Service';

export default function Service() {

    const { data: services, error, isLoading } = useServices();

    // if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const sub = [];
    const bilibili = []
    const suggest = [];
    const view = [];
    const country = [];
    const country10k = [];
    const adword = [];
    const topic = [];
    const likeDislike = [];
    const likeCountry = [];
    const premiere = [];
    const livestream = [];
    const livesteamSv2 = [];
    const livesteamSv3 = [];
    const livesteamVip = [];
    const Comments = [];
    const Watchtimes15 = [];
    const Watchtimes30 = [];
    const Watchtimes60 = [];
    const Watchtimes120 = [];
    const suggest15 = [];
    const suggest30 = [];
    const suggest60 = [];
    const suggest120 = [];
    const fbPartner = [];
    const fbPost = [];
    const fbVideo = [];
    const fbFollower = [];
    const fbShare = [];
    const fbLive = [];
    const fbLike = [];

    const fbGroup = [];
    const twRetweets = [];
    const twFollowers = [];
    const twViews = [];
    const insLikes = [];
    const insViews = [];
    const insFollowers = [];
    const telegram = [];
    const telegramReactions = [];
    const tkFollowers = [];
    const tkViews = [];
    const tkLike = [];
    const tkStreamSv1 = [];
    const tkStreamReal = [];
    const tkShare = [];
    const rdSub = [];
    const spFree = [];
    const spPlays = [];
    const spPackages = [];
    const spFollowers = [];
    const discord1 = [];
    const discord2 = [];
    const discord3 = [];
    const twLikes = [];
    const telegramm = [];

    // const dispatch = useDispatch();
    // const productList = useSelector((state) => state.productList)
    // const { loading, error, products } = productList;

    // // console.log(products)
    // products.map((items) => {
    //     if (items.category === "Youtube | Subscribers") {
    //         sub.push(items)
    //     }
    //     else if (items.category === "Bilibili Views") {
    //         bilibili.push(items)
    //     }
    //     else if (items.category === "Youtube | Suggest Views") { suggest.push(items) }
    //     else if (items.category === "Youtube | Views") view.push(items)
    //     else if (items.category === "Youtube | Country Targeted Real Views | 2K/Day") country.push(items)
    //     else if (items.category === "Youtube | Country Targeted Real Views | 10K/Day") country10k.push(items)
    //     else if (items.category === "Youtube | Adword Views [ Google Ads ]") adword.push(items)
    //     else if (items.category === "Youtube | Topic Views") topic.push(items)
    //     else if (items.category === "Youtube | Likes | Dislikes ") likeDislike.push(items)
    //     else if (items.category === "Youtube | Likes - Country Targeted") likeCountry.push(items)
    //     else if (items.category === "Youtube | LiveStream | Pre-Premiere") premiere.push(items)
    //     else if (items.category === "Youtube | Youtube Live Stream Package") livestream.push(items)
    //     else if (items.category === "Youtube | Youtube Live Stream Views - SV2") livesteamSv2.push(items)
    //     else if (items.category === "Youtube | Youtube Live Stream Views - SV3 [Latest Service]") livesteamSv3.push(items)
    //     else if (items.category === "Youtube | Youtube Live Stream Views - VIP") livesteamVip.push(items)
    //     else if (items.category === "Youtube | Comments") Comments.push(items)
    //     else if (items.category === "Youtube | 4000H - Watchtimes 15 minutes") Watchtimes15.push(items)
    //     else if (items.category === "Youtube | 4000H - Watchtimes 30 minutes") Watchtimes30.push(items)
    //     else if (items.category === "Youtube | 4000H - Watchtimes 60 minutes") Watchtimes60.push(items)
    //     else if (items.category === "Youtube | 4000H - Watchtimes 120 minutes") Watchtimes120.push(items)
    //     else if (items.category === "Youtube | HR Views | Suggest 15 Minutes") suggest15.push(items)
    //     else if (items.category === "Youtube | HR Views | Suggest 30 Minutes") suggest30.push(items)
    //     else if (items.category === "Youtube | HR Views | Suggest 60 Minutes") suggest60.push(items)
    //     else if (items.category === "Youtube | HR Views | Suggest 120 Minutes") suggest120.push(items)
    //     else if (items.category === "Facebook | Facebook Partner Monetization Package") fbPartner.push(items)
    //     else if (items.category === "Facebook | Post Likes | Tăng likes bài viết") fbPost.push(items)
    //     else if (items.category === "Facebook | Video Views") fbVideo.push(items)
    //     else if (items.category === "Facebook | Followers | Tăng người theo dõi") fbFollower.push(items)
    //     else if (items.category === "Facebook | Shares | Tăng lượt chia sẻ") fbShare.push(items)
    //     else if (items.category === "Facebook | Live stream | Tăng mắt Live Stream") fbLive.push(items)
    //     else if (items.category === "Facebook | Vip Likes | GÓI THÁNG ") fbLike.push(items)
    //     else if (items.category === "Facebook | Members Group | Tăng thành viên nhóm") fbGroup.push(items)
    //     else if (items.category === "Twitter | Retweets") twRetweets.push(items)
    //     else if (items.category === "Twitter | Followers") twFollowers.push(items)
    //     else if (items.category === "Twitter | Likes") twLikes.push(items)
    //     else if (items.category === "Twitter | Views") twViews.push(items)
    //     else if (items.category === "Instagram | Followers") insFollowers.push(items)
    //     else if (items.category === "Instagram | Instagram Views") insViews.push(items)
    //     else if (items.category === "Instagram | Likes") insLikes.push(items)
    //     else if (items.category === "Telegram | Telegram") telegram.push(items)
    //     else if (items.category === "Telegram | Reactions") telegramReactions.push(items)
    //     else if (items.category === "Tiktok | Followers") tkFollowers.push(items)
    //     else if (items.category === "Tiktok | Views") tkViews.push(items)
    //     else if (items.category === "Tiktok | Likes ❤️") tkLike.push(items)
    //     else if (items.category === "Tiktok | TikTok Live Stream - SV1") tkStreamSv1.push(items)
    //     else if (items.category === "Tiktok | TikTok Live Stream | Real user") tkStreamReal.push(items)
    //     else if (items.category === "Tiktok | Shares - Comment") tkShare.push(items)
    //     else if (items.category === "Reddit | Subscribes") rdSub.push(items)
    //     else if (items.category === "Spotify | Free Plays") spFree.push(items)
    //     else if (items.category === "Spotify | Premium Plays") spPlays.push(items)
    //     else if (items.category === "Spotify | Packages") spPackages.push(items)
    //     else if (items.category === "Spotify | Followers") spFollowers.push(items)
    //     else if (items.category === "Bilibili | Bilibili Views") bilibili.push(items)
    //     else if (items.category === "Discord | Offline Server Members") discord1.push(items)
    //     else if (items.category === "Discord | Online Server Members") discord2.push(items)
    //     else if (items.category === "Discord | Online 100% NFT Server Members") discord3.push(items)
    // })

    // useEffect(() => {
    //     dispatch(listProduct());


    // }, [dispatch]);
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            {
                isLoading ? (
                    <div className="mb-5">
                        <Loading />
                    </div>
                ) : error ? (
                    <Message variant="bg-red-500 text-white font-bold rounded-t px-4 py-2 ">{error}</Message>

                ) : (
                    <>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th colSpan={3} className="py-3 px-6 bg-[#e4e6ef]">
                                        <div className='flex items-center '>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                                            <div className="flex flex-col pl-2 font-bold">Youtube </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map((items, index) =>
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%]  border-[1px] border-solid border-[#dadaeb] ">
                                                <div className='flex items-center '>
                                                    <div className='flex flex-col '>
                                                        <div className="flex items-center">
                                                            <div className="break-words whitespace-pre-line ">
                                                                <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>

                                                                <span className="font-semibold pl-1">{items.value} </span>
                                                                <span className='text-sm pr-2'>
                                                                    -  {items.label}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <span className="text-[#a1a5b7] text-[0.85rem]">
                                                            Min:
                                                            <span className="text-gray-700">
                                                                0
                                                            </span>
                                                            - Max:
                                                            <span className="text-gray-700">infinite</span>
                                                        </span>
                                                        <span className='mt-0'>
                                                            <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                                                            <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                                $42đ
                                            </td>
                                            <td className="py-4 px-6  border-[1px] border-solid border-[#dadaeb]">
                                                <Link to={`/new?service=${items.value}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition' >
                                                    Order
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                }
                                
                                {/* End Discord |  Online 100% NFT Server Members */}



                            </tbody>

                        </table>
                    </>
                )
            }

        </div>
    )
}
