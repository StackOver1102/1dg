import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchServices = async () => {
    const { data } = await axios.get('https://api.1tap.top/api/service');
    return data.data; // Assuming the response structure as per your earlier setup
};

export const useServices = () => {
    return useQuery({
        queryKey: ['services'], // Now passed as an object
        queryFn: fetchServices,
    });
};
