import React, { useState } from 'react';
import Pagination from '../Pagination/Pagination'; // Import Pagination component
import { useServices } from '../../service/Service';
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Link } from 'react-router-dom';

export default function Service() {
  const { data: services, error, isLoading } = useServices();
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 13; // Số item mỗi trang
  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading</div>;

  // Tính toán số trang và chia dữ liệu
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(services.length / itemsPerPage);


  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      {isLoading ? (
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
              {currentServices.map((items, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="py-1 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-[80%] w-[90%] border-[1px] border-solid border-[#dadaeb]">
                    <div className='flex items-center'>
                      <div className='flex flex-col'>
                        <div className="flex items-center">
                          <div className="break-words whitespace-pre-line ">
                            <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="16px" height="18px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 576 512"><path fill="#ff0003" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z" /></svg>
                            <span className="font-semibold pl-1">{items.value} </span>
                            <span className='text-sm pr-2'> - {items.label} </span>
                          </div>
                        </div>
                        <span className="text-[#a1a5b7] text-[0.85rem]">
                          Min: <span className="text-gray-700">0</span> - Max: <span className="text-gray-700">infinite</span>
                        </span>
                        <span className='mt-0'>
                          <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                          <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-[1px] border-solid border-[#dadaeb]">
                    $42đ
                  </td>
                  <td className="py-4 px-6 border-[1px] border-solid border-[#dadaeb]">
                    <Link to={`/new?service=${items.value}`} className='text-[#009ef7] hover:text-[#006dab] hover:transition'>
                      Order
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </div>
  );
}
