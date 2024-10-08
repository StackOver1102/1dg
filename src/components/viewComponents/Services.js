import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination'; // Import Pagination component
import { useServices } from '../../service/Service';
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import { Link } from 'react-router-dom';

export default function Service() {
  const { data: services, error, isLoading } = useServices();
  const [filterPrice, setFilterPrice] = useState('All'); // Price filter
  const [searchService, setSearchService] = useState(''); // Search term
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 13; // Items per page
  const [filteredServices, setFilteredServices] = useState([]); // For filtered results
  
  // UseEffect to handle search filtering
  useEffect(() => {
    if (services) {
      let filtered = services;
  
      // Search filter
      if (searchService) {
        filtered = filtered.filter((service) =>
          service.label.toLowerCase().includes(searchService.toLowerCase())
        );
      }
  
      // Price filter
      if (filterPrice !== 'All') {
        switch (filterPrice) {
          case 'low':
            filtered = filtered.filter(service => service.rate < 1);
            break;
          case 'medium':
            filtered = filtered.filter(service => service.rate >= 1 && service.rate <= 5);
            break;
          case 'high':
            filtered = filtered.filter(service => service.rate > 5);
            break;
          default:
            break;
        }
      }
  
      setFilteredServices(filtered);
      setCurrentPage(1); // Reset to first page on filter change
    }
  }, [searchService, filterPrice, services]);
  
  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = filteredServices?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredServices?.length / itemsPerPage);
  

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

          <div className="mb-4 flex justify-between items-center">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M5.5 11a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"></path>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search services..."
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
              />
            </div>
            {/* Select Filter */}
            <select
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
              className="ml-4 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-400 w-40" // Set width to 40 units
            >
              <option value="All">All Prices</option>
              <option value="low">Below $1</option>
              <option value="medium">$1 - $5</option>
              <option value="high">Above $5</option>
            </select>
          </div>

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
                          Min: <span className="text-gray-700">{items.min}</span> - Max: <span className="text-gray-700">{items.max}</span>
                        </span>
                        <span className='mt-0'>
                          <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">Instant</span>
                          <span className="bg-[#50cd89] text-[#fff] text-xs font-semibold  px-2.5 py-0.5 rounded-lg dark:bg-green-200 dark:text-green-900 text-[0.7rem] mr-1">30 days Refill</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 border-[1px] border-solid border-[#dadaeb]">
                    ${items.rate}
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
