import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';


const useGetPost = (postId: string) => {
    const { data, error, isLoading, mutate } = useSWR(`/api/post/${postId}`, fetcher);

    return {
        data,
        isLoading,
        error,
        mutate
    };
}

export default useGetPost;