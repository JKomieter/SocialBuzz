import useSWR from 'swr';   
import { fetcher } from '../utils/fetcher';

// fetch all stories
const useStories = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading, mutate } = useSWR('/api/stories', fetcher);
    return {
        data,
        isLoading,
        error,
        mutate
    }
};

export default useStories;

