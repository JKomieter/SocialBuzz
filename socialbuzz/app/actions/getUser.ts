import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

// fetch a specific user
const getUser = (userId: string) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading, mutate } = useSWR(`/api/user/${userId}`, fetcher);
    
    return {
        data,
        error,
        isLoading,
        mutate
    }
}

export default getUser;