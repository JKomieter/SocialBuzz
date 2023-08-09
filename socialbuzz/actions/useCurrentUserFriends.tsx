import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

// fetch currents user friends to text them
const useCurrentUserFriends = () => {
    const { data, error, mutate, isLoading } = useSWR('/api/friends', fetcher);

    return {
        data,
        isLoading,
        error,
        mutate
    }
}

export default useCurrentUserFriends;