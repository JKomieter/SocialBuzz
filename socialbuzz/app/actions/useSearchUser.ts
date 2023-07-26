import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

export const useSearchUser = (query: string) => {   
    const { data, error, isLoading, mutate } = useSWR(`/api/search/user?username=${query}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate
    };
}