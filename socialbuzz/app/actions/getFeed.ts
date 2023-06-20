import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';


const getFeed = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error, isLoading, mutate } = useSWR('/api/feed', fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
}


export default getFeed;